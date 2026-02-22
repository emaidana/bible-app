/**
 * Storage Manager - Handles LocalStorage for the Bible App
 */

const StorageManager = {
    CACHE_VERSION: '20260222',

    KEYS: {
        VIEWED_VERSES: 'bibleApp_viewedVerses',
        CURRENT_VERSE: 'bibleApp_currentVerse',
        LANGUAGE: 'bibleApp_language',
        THEME: 'berean_theme',
        STREAK_COUNT: 'berean_streak',
        STREAK_LAST_DATE: 'berean_streak_date',
        DEPTH_LEVEL: 'berean_depth',
        TOTAL_DAYS: 'berean_total_days',
        COMMITMENTS: 'berean_commitments',
        BOOKMARKS: 'berean_bookmarks',
        BIBLE_VERSION: 'berean_bible_version',
        SEARCH_HISTORY: 'berean_search_history',
        VERSE_PROGRESS: 'berean_verse_progress',
        COMPLETED_VERSES: 'berean_completed_verses',
        USER_PROFILE: 'berean_user_profile',
        BUSINESS_PROGRESS: 'berean_business_progress',
        COMPLETED_PROTOCOLS: 'berean_completed_protocols',
        VERSE_CACHE: 'berean_verse_cache',
        VERSE_INDEX_CACHE: 'berean_verse_index'
    },

    MAX_HISTORY: 400, // Keep track of last 400 verses to avoid repetition

    /**
     * Get the current language preference
     * @returns {string} 'en' or 'es'
     */
    getLanguage() {
        return localStorage.getItem(this.KEYS.LANGUAGE) || 'en';
    },

    /**
     * Set the language preference
     * @param {string} lang - 'en' or 'es'
     */
    setLanguage(lang) {
        localStorage.setItem(this.KEYS.LANGUAGE, lang);
    },

    /**
     * Get today's date as a string (YYYY-MM-DD)
     * @returns {string}
     */
    getTodayString() {
        const today = new Date();
        return today.toISOString().split('T')[0];
    },

    /**
     * Get today's stored verse if it exists
     * @returns {object|null} { verseId, date } or null
     */
    getCurrentVerse() {
        const stored = localStorage.getItem(this.KEYS.CURRENT_VERSE);
        if (!stored) return null;

        try {
            const data = JSON.parse(stored);
            // Check if it's still today
            if (data.date === this.getTodayString()) {
                return data;
            }
            return null;
        } catch (e) {
            return null;
        }
    },

    /**
     * Store today's verse
     * @param {string} verseId - The verse ID
     */
    setCurrentVerse(verseId) {
        const data = {
            verseId: verseId,
            date: this.getTodayString()
        };
        localStorage.setItem(this.KEYS.CURRENT_VERSE, JSON.stringify(data));
    },

    /**
     * Get list of recently viewed verse IDs
     * @returns {string[]} Array of verse IDs
     */
    getViewedVerses() {
        const stored = localStorage.getItem(this.KEYS.VIEWED_VERSES);
        if (!stored) return [];

        try {
            return JSON.parse(stored);
        } catch (e) {
            return [];
        }
    },

    /**
     * Add a verse to the viewed history
     * @param {string} verseId - The verse ID to add
     */
    addViewedVerse(verseId) {
        let viewed = this.getViewedVerses();

        // Remove if already exists (to move to front)
        viewed = viewed.filter(id => id !== verseId);

        // Add to front
        viewed.unshift(verseId);

        // Keep only the most recent entries
        if (viewed.length > this.MAX_HISTORY) {
            viewed = viewed.slice(0, this.MAX_HISTORY);
        }

        localStorage.setItem(this.KEYS.VIEWED_VERSES, JSON.stringify(viewed));
    },

    /**
     * Check if all verses have been viewed
     * @param {number} totalVerses - Total number of available verses
     * @returns {boolean}
     */
    allVersesViewed(totalVerses) {
        const viewed = this.getViewedVerses();
        return viewed.length >= totalVerses;
    },

    /**
     * Reset the viewed history (used when all verses have been shown)
     */
    resetViewedHistory() {
        localStorage.removeItem(this.KEYS.VIEWED_VERSES);
    },

    /**
     * Get theme preference
     * @returns {string} 'light', 'dark', or 'auto'
     */
    getTheme() {
        return localStorage.getItem(this.KEYS.THEME) || 'light';
    },

    /**
     * Set theme preference
     * @param {string} theme - 'light', 'dark', or 'auto'
     */
    setTheme(theme) {
        localStorage.setItem(this.KEYS.THEME, theme);
    },

    /**
     * Get streak count
     * @returns {number}
     */
    getStreakCount() {
        return parseInt(localStorage.getItem(this.KEYS.STREAK_COUNT)) || 0;
    },

    /**
     * Set streak count
     * @param {number} count
     */
    setStreakCount(count) {
        localStorage.setItem(this.KEYS.STREAK_COUNT, count.toString());
    },

    /**
     * Get last streak date
     * @returns {string|null}
     */
    getStreakLastDate() {
        return localStorage.getItem(this.KEYS.STREAK_LAST_DATE);
    },

    /**
     * Set last streak date
     * @param {string} date - YYYY-MM-DD format
     */
    setStreakLastDate(date) {
        localStorage.setItem(this.KEYS.STREAK_LAST_DATE, date);
    },

    /**
     * Get total days engaged
     * @returns {number}
     */
    getTotalDays() {
        return parseInt(localStorage.getItem(this.KEYS.TOTAL_DAYS)) || 0;
    },

    /**
     * Increment total days
     */
    incrementTotalDays() {
        const total = this.getTotalDays() + 1;
        localStorage.setItem(this.KEYS.TOTAL_DAYS, total.toString());
    },

    /**
     * Get commitments array
     * @returns {Array}
     */
    getCommitments() {
        const stored = localStorage.getItem(this.KEYS.COMMITMENTS);
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch (e) {
            return [];
        }
    },

    /**
     * Add a commitment
     * @param {object} commitment - { verseId, date, nudgeText }
     */
    addCommitment(commitment) {
        const commitments = this.getCommitments();
        commitments.unshift(commitment);
        // Keep last 100 commitments
        if (commitments.length > 100) {
            commitments.pop();
        }
        localStorage.setItem(this.KEYS.COMMITMENTS, JSON.stringify(commitments));
    },

    /**
     * Get bookmarks array
     * @returns {Array}
     */
    getBookmarks() {
        const stored = localStorage.getItem(this.KEYS.BOOKMARKS);
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch (e) {
            return [];
        }
    },

    /**
     * Check if a verse is bookmarked
     * @param {string} verseId
     * @returns {boolean}
     */
    isBookmarked(verseId) {
        return this.getBookmarks().some(b => b.verseId === verseId);
    },

    /**
     * Toggle bookmark for a verse
     * @param {string} verseId
     * @returns {boolean} - true if now bookmarked, false if removed
     */
    toggleBookmark(verseId) {
        let bookmarks = this.getBookmarks();
        const exists = bookmarks.findIndex(b => b.verseId === verseId);

        if (exists >= 0) {
            bookmarks.splice(exists, 1);
            localStorage.setItem(this.KEYS.BOOKMARKS, JSON.stringify(bookmarks));
            return false;
        } else {
            bookmarks.unshift({ verseId, addedAt: Date.now() });
            localStorage.setItem(this.KEYS.BOOKMARKS, JSON.stringify(bookmarks));
            return true;
        }
    },

    /**
     * Get yesterday's date string
     * @returns {string} YYYY-MM-DD
     */
    getYesterdayString() {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        return yesterday.toISOString().split('T')[0];
    },

    /**
     * Get Bible version preference (KJV or ESV)
     * @returns {string} 'KJV' or 'ESV'
     */
    getBibleVersion() {
        return localStorage.getItem(this.KEYS.BIBLE_VERSION) || 'KJV';
    },

    /**
     * Set Bible version preference
     * @param {string} version - 'KJV' or 'ESV'
     */
    setBibleVersion(version) {
        localStorage.setItem(this.KEYS.BIBLE_VERSION, version);
    },

    /**
     * Get search history
     * @returns {Array} Array of recent searches
     */
    getSearchHistory() {
        const stored = localStorage.getItem(this.KEYS.SEARCH_HISTORY);
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch (e) {
            return [];
        }
    },

    /**
     * Add to search history
     * @param {string} query - Search query
     */
    addSearchHistory(query) {
        if (!query || query.length < 2) return;

        let history = this.getSearchHistory();
        // Remove if exists
        history = history.filter(h => h.toLowerCase() !== query.toLowerCase());
        // Add to front
        history.unshift(query);
        // Keep last 10
        if (history.length > 10) {
            history = history.slice(0, 10);
        }
        localStorage.setItem(this.KEYS.SEARCH_HISTORY, JSON.stringify(history));
    },

    /**
     * Clear all app storage (for testing/reset)
     */
    clearAll() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    },

    /**
     * Get progress (completed sections) for a specific verse
     * @param {string} verseId - The verse ID
     * @returns {Array} Array of completed section names
     */
    getVerseProgress(verseId) {
        const stored = localStorage.getItem(this.KEYS.VERSE_PROGRESS);
        if (!stored) return [];
        try {
            const progress = JSON.parse(stored);
            return progress[verseId] || [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Save progress (completed sections) for a specific verse
     * @param {string} verseId - The verse ID
     * @param {Array} sections - Array of completed section names
     */
    saveVerseProgress(verseId, sections) {
        let progress = {};
        const stored = localStorage.getItem(this.KEYS.VERSE_PROGRESS);
        if (stored) {
            try {
                progress = JSON.parse(stored);
            } catch (e) {
                progress = {};
            }
        }
        progress[verseId] = sections;
        localStorage.setItem(this.KEYS.VERSE_PROGRESS, JSON.stringify(progress));
    },

    /**
     * Record when a verse is fully completed (all sections done)
     * @param {string} verseId - The verse ID
     */
    recordVerseCompletion(verseId) {
        let completed = this.getCompletedVerses();
        if (!completed.some(v => v.verseId === verseId)) {
            completed.unshift({
                verseId,
                completedAt: Date.now(),
                date: this.getTodayString()
            });
            localStorage.setItem(this.KEYS.COMPLETED_VERSES, JSON.stringify(completed));

            // Update streak
            this.updateStreak();
        }
    },

    /**
     * Get all completed verses
     * @returns {Array} Array of { verseId, completedAt, date }
     */
    getCompletedVerses() {
        const stored = localStorage.getItem(this.KEYS.COMPLETED_VERSES);
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch (e) {
            return [];
        }
    },

    /**
     * Check if a verse has been fully completed
     * @param {string} verseId - The verse ID
     * @returns {boolean}
     */
    isVerseCompleted(verseId) {
        return this.getCompletedVerses().some(v => v.verseId === verseId);
    },

    /**
     * Update streak based on completed verses
     */
    updateStreak() {
        const today = this.getTodayString();
        const yesterday = this.getYesterdayString();
        const lastDate = this.getStreakLastDate();

        if (lastDate === today) {
            // Already updated today
            return;
        }

        if (lastDate === yesterday) {
            // Continuing streak
            this.setStreakCount(this.getStreakCount() + 1);
        } else if (lastDate !== today) {
            // Streak broken, start fresh
            this.setStreakCount(1);
        }

        this.setStreakLastDate(today);
        this.incrementTotalDays();
    },

    /**
     * Get user profile data
     * @returns {object|null} User profile or null
     */
    getUserProfile() {
        const stored = localStorage.getItem(this.KEYS.USER_PROFILE);
        if (!stored) return null;
        try {
            return JSON.parse(stored);
        } catch (e) {
            return null;
        }
    },

    /**
     * Save user profile data
     * @param {object} profile - { email, phone, language, version, deliveryMethod }
     */
    saveUserProfile(profile) {
        localStorage.setItem(this.KEYS.USER_PROFILE, JSON.stringify(profile));
    },

    /**
     * Get weekly stats
     * @returns {object} { completedThisWeek, streak, totalCompleted }
     */
    getWeeklyStats() {
        const completed = this.getCompletedVerses();
        const now = new Date();
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay()); // Start of week (Sunday)
        weekStart.setHours(0, 0, 0, 0);

        const completedThisWeek = completed.filter(v => {
            return new Date(v.completedAt) >= weekStart;
        }).length;

        return {
            completedThisWeek,
            streak: this.getStreakCount(),
            totalCompleted: completed.length
        };
    },

    // =====================================================
    // KINGDOM BUSINESS PROGRESS TRACKING
    // =====================================================

    /**
     * Get progress (completed sections) for a business protocol
     * @param {string} protocolId - The protocol ID
     * @returns {Array} Array of completed section names
     */
    getBusinessProgress(protocolId) {
        const stored = localStorage.getItem(this.KEYS.BUSINESS_PROGRESS);
        if (!stored) return [];
        try {
            const progress = JSON.parse(stored);
            return progress[protocolId] || [];
        } catch (e) {
            return [];
        }
    },

    /**
     * Save progress (completed sections) for a business protocol
     * @param {string} protocolId - The protocol ID
     * @param {Array} sections - Array of completed section names
     */
    saveBusinessProgress(protocolId, sections) {
        let progress = {};
        const stored = localStorage.getItem(this.KEYS.BUSINESS_PROGRESS);
        if (stored) {
            try {
                progress = JSON.parse(stored);
            } catch (e) {
                progress = {};
            }
        }
        progress[protocolId] = sections;
        localStorage.setItem(this.KEYS.BUSINESS_PROGRESS, JSON.stringify(progress));
    },

    /**
     * Record when a business protocol is fully completed
     * @param {string} protocolId - The protocol ID
     */
    recordProtocolCompletion(protocolId) {
        let completed = this.getCompletedProtocols();
        if (!completed.some(p => p.protocolId === protocolId)) {
            completed.unshift({
                protocolId,
                completedAt: Date.now(),
                date: this.getTodayString()
            });
            localStorage.setItem(this.KEYS.COMPLETED_PROTOCOLS, JSON.stringify(completed));
        }
    },

    /**
     * Get all completed business protocols
     * @returns {Array} Array of { protocolId, completedAt, date }
     */
    getCompletedProtocols() {
        const stored = localStorage.getItem(this.KEYS.COMPLETED_PROTOCOLS);
        if (!stored) return [];
        try {
            return JSON.parse(stored);
        } catch (e) {
            return [];
        }
    },

    /**
     * Check if a business protocol has been fully completed
     * @param {string} protocolId - The protocol ID
     * @returns {boolean}
     */
    isProtocolCompleted(protocolId) {
        return this.getCompletedProtocols().some(p => p.protocolId === protocolId);
    },

    // =====================================================
    // VERSE DATA CACHING (for on-demand loading)
    // =====================================================

    /**
     * Cache a verse's full data in localStorage
     * @param {string} verseId - The verse ID
     * @param {object} data - The full verse data object
     */
    cacheVerse(verseId, data) {
        try {
            const cache = this._getVerseCache();
            cache[verseId] = { data, cachedAt: Date.now() };
            localStorage.setItem(this.KEYS.VERSE_CACHE, JSON.stringify(cache));
        } catch (e) {
            // localStorage might be full — evict oldest entries
            this._evictOldestCachedVerses(5);
            try {
                const cache = this._getVerseCache();
                cache[verseId] = { data, cachedAt: Date.now() };
                localStorage.setItem(this.KEYS.VERSE_CACHE, JSON.stringify(cache));
            } catch (e2) {
                // Silent fail — verse will be fetched again next time
            }
        }
    },

    /**
     * Get a cached verse's data from localStorage
     * @param {string} verseId - The verse ID
     * @returns {object|null} The verse data or null if not cached
     */
    getCachedVerse(verseId) {
        this._checkCacheVersion();
        const cache = this._getVerseCache();
        const entry = cache[verseId];
        return entry ? entry.data : null;
    },

    /**
     * Check if cache version matches. If not, clear verse cache.
     */
    _checkCacheVersion() {
        const storedVersion = localStorage.getItem('berean_cache_version');
        if (storedVersion !== this.CACHE_VERSION) {
            localStorage.removeItem(this.KEYS.VERSE_CACHE);
            localStorage.removeItem(this.KEYS.VERSE_INDEX_CACHE);
            localStorage.setItem('berean_cache_version', this.CACHE_VERSION);
        }
    },

    /**
     * Get the full verse cache object
     * @returns {object}
     */
    _getVerseCache() {
        const stored = localStorage.getItem(this.KEYS.VERSE_CACHE);
        if (!stored) return {};
        try {
            return JSON.parse(stored);
        } catch (e) {
            return {};
        }
    },

    /**
     * Evict oldest cached verses to free space
     * @param {number} count - Number of entries to evict
     */
    _evictOldestCachedVerses(count) {
        const cache = this._getVerseCache();
        const entries = Object.entries(cache).sort((a, b) => a[1].cachedAt - b[1].cachedAt);
        for (let i = 0; i < Math.min(count, entries.length); i++) {
            delete cache[entries[i][0]];
        }
        try {
            localStorage.setItem(this.KEYS.VERSE_CACHE, JSON.stringify(cache));
        } catch (e) {
            localStorage.removeItem(this.KEYS.VERSE_CACHE);
        }
    },

    /**
     * Cache the verse index
     * @param {Array} index - The verse index array
     */
    cacheVerseIndex(index) {
        try {
            localStorage.setItem(this.KEYS.VERSE_INDEX_CACHE, JSON.stringify(index));
        } catch (e) {
            // Silent fail
        }
    },

    /**
     * Get cached verse index
     * @returns {Array|null}
     */
    getCachedVerseIndex() {
        const stored = localStorage.getItem(this.KEYS.VERSE_INDEX_CACHE);
        if (!stored) return null;
        try {
            return JSON.parse(stored);
        } catch (e) {
            return null;
        }
    }
};
