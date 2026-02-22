/**
 * VerseLoader — On-demand verse loading system
 * Replaces the static BibleVerses array with fetch-based loading.
 * Loads a lightweight index on startup, then fetches individual verse
 * JSON files on demand with localStorage caching for offline support.
 */

const VerseLoader = {
    index: null,
    cache: new Map(),
    _indexPromise: null,
    CONTENT_VERSION: '20260222',

    /**
     * Load the verse index (lightweight list of all verses with metadata).
     * Caches in memory and localStorage. Only fetches once per session.
     * @returns {Promise<Array>} The verse index array
     */
    async loadIndex() {
        if (this.index) return this.index;
        if (this._indexPromise) return this._indexPromise;

        this._indexPromise = (async () => {
            try {
                const resp = await fetch(`data/verse-index.json?v=${this.CONTENT_VERSION}`);
                if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                this.index = await resp.json();
                StorageManager.cacheVerseIndex(this.index);
            } catch (e) {
                // Offline fallback: try localStorage
                const cached = StorageManager.getCachedVerseIndex();
                if (cached) {
                    this.index = cached;
                } else {
                    throw new Error('Cannot load verse index and no cached version available');
                }
            }
            return this.index;
        })();

        return this._indexPromise;
    },

    /**
     * Get the verse entry for today using deterministic date-based selection.
     * Same verse for all users on the same calendar day.
     * @returns {Promise<object>} The verse index entry for today
     */
    async getVerseEntryForToday() {
        const index = await this.loadIndex();
        const now = new Date();
        const start = new Date(now.getFullYear(), 0, 0);
        const diff = now - start;
        const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24)); // 1-366
        const verseIndex = (dayOfYear - 1) % index.length;
        return index[verseIndex];
    },

    /**
     * Load a full verse by its ID. Checks memory cache, then localStorage,
     * then fetches from server.
     * @param {string} id - The verse ID (e.g. "psalm-46-1")
     * @returns {Promise<object>} The full verse data object
     */
    async loadVerse(id) {
        // Memory cache
        if (this.cache.has(id)) return this.cache.get(id);

        // localStorage cache
        const cached = StorageManager.getCachedVerse(id);
        if (cached) {
            this.cache.set(id, cached);
            return cached;
        }

        // Fetch from server
        try {
            const resp = await fetch(`data/verses/${id}.json?v=${this.CONTENT_VERSION}`);
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const verse = await resp.json();
            this.cache.set(id, verse);
            StorageManager.cacheVerse(id, verse);
            return verse;
        } catch (e) {
            throw new Error(`Cannot load verse "${id}": ${e.message}`);
        }
    },

    /**
     * Load today's verse (full data). Convenience method combining
     * getVerseEntryForToday() + loadVerse().
     * @returns {Promise<object>} The full verse data object for today
     */
    async loadTodaysVerse() {
        const entry = await this.getVerseEntryForToday();
        return this.loadVerse(entry.id);
    },

    /**
     * Get the total number of available verses.
     * @returns {Promise<number>}
     */
    async getVerseCount() {
        const index = await this.loadIndex();
        return index.length;
    },

    /**
     * Search the index for verses matching a query (book, chapter, etc.)
     * @param {object} query - { book, chapter, verse } (all optional)
     * @returns {Promise<Array>} Matching index entries
     */
    async searchIndex(query) {
        const index = await this.loadIndex();
        return index.filter(entry => {
            if (query.book && entry.book.en.toLowerCase() !== query.book.toLowerCase() &&
                entry.book.es.toLowerCase() !== query.book.toLowerCase()) return false;
            if (query.chapter && entry.chapter !== query.chapter) return false;
            if (query.verse && entry.verse !== query.verse) return false;
            return true;
        });
    }
};

// Backward compatibility: BibleVerses as a proxy that works with existing code
// that uses BibleVerses.find() or BibleVerses.filter()
const BibleVerses = new Proxy([], {
    get(target, prop) {
        if (prop === 'find' || prop === 'filter' || prop === 'length') {
            // These are used synchronously in old code paths — return empty/null
            // The async VerseLoader should be used instead
            if (prop === 'length') return 0;
            if (prop === 'find') return () => null;
            if (prop === 'filter') return () => [];
        }
        return target[prop];
    }
});
