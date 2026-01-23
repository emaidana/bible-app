/**
 * Storage Manager - Handles LocalStorage for the Bible App
 */

const StorageManager = {
    KEYS: {
        VIEWED_VERSES: 'bibleApp_viewedVerses',
        CURRENT_VERSE: 'bibleApp_currentVerse',
        LANGUAGE: 'bibleApp_language',
        THEME: 'selah_theme',
        STREAK_COUNT: 'selah_streak',
        STREAK_LAST_DATE: 'selah_streak_date',
        DEPTH_LEVEL: 'selah_depth',
        TOTAL_DAYS: 'selah_total_days',
        COMMITMENTS: 'selah_commitments',
        BOOKMARKS: 'selah_bookmarks'
    },

    MAX_HISTORY: 30, // Keep track of last 30 verses to avoid repetition

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
     * Clear all app storage (for testing/reset)
     */
    clearAll() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
    }
};
