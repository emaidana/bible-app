/**
 * Bible API Service
 * Interfaces with the Bolls.life API for verse lookup and search
 */

const BibleService = {
    // API Base URL
    baseUrl: 'https://bolls.life',

    // Available translations
    translations: {
        en: {
            KJV: 'KJV',
            ESV: 'ESV'
        },
        es: {
            RVR1960: 'RV1960'
        }
    },

    // Cache for fetched verses
    cache: new Map(),

    // Cache expiry time (1 hour)
    cacheExpiry: 60 * 60 * 1000,

    /**
     * Get the translation code for the API
     * @param {string} language - Language code (en/es)
     * @param {string} version - Version preference (KJV/ESV for English)
     * @returns {string} API translation code
     */
    getTranslationCode(language, version = 'KJV') {
        if (language === 'es') {
            return 'RV1960';
        }
        return version === 'ESV' ? 'ESV' : 'KJV';
    },

    /**
     * Generate cache key
     * @param {string} translation - Translation code
     * @param {number} book - Book number
     * @param {number} chapter - Chapter number
     * @param {number} verse - Verse number (optional)
     * @returns {string} Cache key
     */
    getCacheKey(translation, book, chapter, verse = null) {
        return verse
            ? `${translation}-${book}-${chapter}-${verse}`
            : `${translation}-${book}-${chapter}`;
    },

    /**
     * Check if cached item is valid
     * @param {object} cached - Cached item
     * @returns {boolean} Is valid
     */
    isCacheValid(cached) {
        if (!cached) return false;
        return Date.now() - cached.timestamp < this.cacheExpiry;
    },

    /**
     * Fetch a single verse
     * @param {number} book - Book number (1-66)
     * @param {number} chapter - Chapter number
     * @param {number} verse - Verse number
     * @param {string} language - Language code
     * @param {string} version - Version preference
     * @returns {Promise<object>} Verse data
     */
    async getVerse(book, chapter, verse, language = 'en', version = 'KJV') {
        const translation = this.getTranslationCode(language, version);
        const cacheKey = this.getCacheKey(translation, book, chapter, verse);

        // Check cache
        const cached = this.cache.get(cacheKey);
        if (this.isCacheValid(cached)) {
            return cached.data;
        }

        try {
            const url = `${this.baseUrl}/get-verse/${translation}/${book}/${chapter}/${verse}/`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Verse not found: ${book} ${chapter}:${verse}`);
            }

            const data = await response.json();

            // Cache the result
            this.cache.set(cacheKey, {
                data,
                timestamp: Date.now()
            });

            return data;
        } catch (error) {
            console.error('Error fetching verse:', error);
            throw error;
        }
    },

    /**
     * Fetch an entire chapter
     * @param {number} book - Book number (1-66)
     * @param {number} chapter - Chapter number
     * @param {string} language - Language code
     * @param {string} version - Version preference
     * @returns {Promise<array>} Array of verses
     */
    async getChapter(book, chapter, language = 'en', version = 'KJV') {
        const translation = this.getTranslationCode(language, version);
        const cacheKey = this.getCacheKey(translation, book, chapter);

        // Check cache
        const cached = this.cache.get(cacheKey);
        if (this.isCacheValid(cached)) {
            return cached.data;
        }

        try {
            const url = `${this.baseUrl}/get-text/${translation}/${book}/${chapter}/`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Chapter not found: ${book} ${chapter}`);
            }

            const data = await response.json();

            // Cache the result
            this.cache.set(cacheKey, {
                data,
                timestamp: Date.now()
            });

            return data;
        } catch (error) {
            console.error('Error fetching chapter:', error);
            throw error;
        }
    },

    /**
     * Search for verses by keyword
     * @param {string} query - Search query
     * @param {string} language - Language code
     * @param {string} version - Version preference
     * @param {object} options - Search options
     * @returns {Promise<array>} Search results
     */
    async search(query, language = 'en', version = 'KJV', options = {}) {
        if (!query || query.length < 2) {
            return [];
        }

        const translation = this.getTranslationCode(language, version);
        const params = new URLSearchParams({
            search: query,
            ...options
        });

        try {
            const url = `${this.baseUrl}/v2/find/${translation}?${params}`;
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Search failed');
            }

            const data = await response.json();
            return data.results || data || [];
        } catch (error) {
            console.error('Error searching:', error);
            return [];
        }
    },

    /**
     * Parse a verse reference string
     * @param {string} reference - Reference like "John 3:16" or "Gen 1:1-3"
     * @param {string} language - Language code
     * @returns {object|null} Parsed reference { book, bookNum, chapter, verse, verseEnd }
     */
    parseReference(reference, language = 'en') {
        if (!reference) return null;

        const input = reference.trim();

        // Pattern: Book Chapter:Verse or Book Chapter:Verse-VerseEnd
        // Handles: "John 3:16", "1 John 3:16", "Genesis 1:1-5", "Psalm 23"
        const pattern = /^([1-3]?\s?[a-zA-ZáéíóúñÁÉÍÓÚÑ]+)\s+(\d+)(?::(\d+))?(?:-(\d+))?$/i;
        const match = input.match(pattern);

        if (!match) return null;

        const bookName = match[1].trim();
        const chapter = parseInt(match[2]);
        const verse = match[3] ? parseInt(match[3]) : 1;
        const verseEnd = match[4] ? parseInt(match[4]) : null;

        // Find the book
        const book = BibleBooks.findBook(bookName, language);
        if (!book) return null;

        return {
            book: book.name,
            bookNum: book.num,
            chapter,
            verse,
            verseEnd
        };
    },

    /**
     * Fetch verse by reference string
     * @param {string} reference - Reference like "John 3:16"
     * @param {string} language - Language code
     * @param {string} version - Version preference
     * @returns {Promise<object>} Verse data with reference info
     */
    async getVerseByReference(reference, language = 'en', version = 'KJV') {
        const parsed = this.parseReference(reference, language);
        if (!parsed) {
            throw new Error('Invalid verse reference');
        }

        // If verse range, fetch chapter and extract range
        if (parsed.verseEnd) {
            const chapter = await this.getChapter(parsed.bookNum, parsed.chapter, language, version);
            const verses = chapter.filter(v =>
                v.verse >= parsed.verse && v.verse <= parsed.verseEnd
            );
            return {
                reference: parsed,
                verses,
                text: verses.map(v => v.text).join(' ')
            };
        }

        // Single verse
        const verse = await this.getVerse(parsed.bookNum, parsed.chapter, parsed.verse, language, version);
        return {
            reference: parsed,
            verses: [verse],
            text: verse.text
        };
    },

    /**
     * Get autocomplete suggestions
     * @param {string} query - User input
     * @param {string} language - Language code
     * @param {string} version - Version preference
     * @returns {Promise<array>} Suggestions
     */
    async getAutocompleteSuggestions(query, language = 'en', version = 'KJV') {
        if (!query || query.length < 1) return [];

        const suggestions = [];
        const normalized = query.toLowerCase().trim();

        // Check if it looks like a reference (has numbers)
        const hasNumbers = /\d/.test(query);

        if (!hasNumbers) {
            // Book name suggestions
            const bookSuggestions = BibleBooks.getSuggestions(query, language, 5);
            for (const book of bookSuggestions) {
                suggestions.push({
                    type: 'book',
                    text: book.name,
                    display: book.name,
                    bookNum: book.num
                });
            }

            // If query is long enough, also search keywords
            if (query.length >= 3) {
                try {
                    const searchResults = await this.search(query, language, version, { limit: 5 });
                    for (const result of searchResults.slice(0, 3)) {
                        const bookName = this.getBookName(result.book, language);
                        suggestions.push({
                            type: 'verse',
                            text: `${bookName} ${result.chapter}:${result.verse}`,
                            display: `${bookName} ${result.chapter}:${result.verse}`,
                            preview: this.truncateText(result.text, 50),
                            data: result
                        });
                    }
                } catch (e) {
                    // Ignore search errors for autocomplete
                }
            }
        } else {
            // Parse as reference
            const parsed = this.parseReference(query, language);
            if (parsed) {
                // Suggest the exact reference
                suggestions.push({
                    type: 'reference',
                    text: `${parsed.book} ${parsed.chapter}:${parsed.verse}`,
                    display: `${parsed.book} ${parsed.chapter}:${parsed.verse}`,
                    reference: parsed
                });

                // Suggest chapter if only chapter entered
                if (!query.includes(':')) {
                    suggestions.push({
                        type: 'chapter',
                        text: `${parsed.book} ${parsed.chapter}`,
                        display: `${parsed.book} ${parsed.chapter} (full chapter)`,
                        reference: { ...parsed, verse: null }
                    });
                }
            }
        }

        return suggestions;
    },

    /**
     * Get book name by number
     * @param {number} bookNum - Book number
     * @param {string} language - Language code
     * @returns {string} Book name
     */
    getBookName(bookNum, language = 'en') {
        const books = BibleBooks[language] || BibleBooks.en;
        const book = books.find(b => b.num === bookNum);
        return book ? book.name : `Book ${bookNum}`;
    },

    /**
     * Truncate text for preview
     * @param {string} text - Text to truncate
     * @param {number} maxLength - Max length
     * @returns {string} Truncated text
     */
    truncateText(text, maxLength = 50) {
        if (!text || text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    },

    /**
     * Format verse for display
     * @param {object} verse - Verse object from API
     * @param {string} language - Language code
     * @returns {object} Formatted verse
     */
    formatVerse(verse, language = 'en') {
        const bookName = this.getBookName(verse.book, language);
        return {
            id: `${verse.book}-${verse.chapter}-${verse.verse}`,
            book: bookName,
            bookNum: verse.book,
            chapter: verse.chapter,
            verse: verse.verse,
            text: verse.text,
            reference: `${bookName} ${verse.chapter}:${verse.verse}`
        };
    },

    /**
     * Clear the cache
     */
    clearCache() {
        this.cache.clear();
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BibleService;
}
