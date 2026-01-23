/**
 * Verse Lookup and Formatting Service
 */
const path = require('path');

// Load verses from the frontend data file
let BibleVerses = null;

/**
 * Load verses data from the frontend
 */
function loadVerses() {
    if (BibleVerses) return BibleVerses;

    // Read the verses.js file and extract the data
    const versesPath = path.join(__dirname, '../../js/verses.js');
    const fs = require('fs');
    const content = fs.readFileSync(versesPath, 'utf-8');

    // Extract the array from the JS file
    // The file exports: const BibleVerses = [...]
    const match = content.match(/const BibleVerses\s*=\s*(\[[\s\S]*\]);/);
    if (match) {
        // Use eval carefully since we control the source file
        BibleVerses = eval(match[1]);
    } else {
        console.error('Could not parse verses.js');
        BibleVerses = [];
    }

    console.log(`Loaded ${BibleVerses.length} verses`);
    return BibleVerses;
}

/**
 * Get all verses
 * @returns {array} All verses
 */
function getAllVerses() {
    return loadVerses();
}

/**
 * Get verse by ID
 * @param {string} id - Verse ID (e.g., "john-3-16")
 * @returns {object|null} Verse or null
 */
function getVerseById(id) {
    const verses = loadVerses();
    return verses.find(v => v.id === id) || null;
}

/**
 * Parse verse reference from text
 * @param {string} text - User input text
 * @returns {object|null} Parsed reference { book, chapter, verse } or null
 */
function parseVerseReference(text) {
    if (!text) return null;

    const input = text.trim();

    // Patterns to match verse references
    // Handles: "John 3:16", "1 John 3:16", "john 3:16", "Juan 3:16", "Psalm 23", etc.
    const patterns = [
        // Book chapter:verse format
        /^([1-3]?\s?[a-zA-ZáéíóúñÁÉÍÓÚÑ]+)\s+(\d+):(\d+)$/i,
        // Book chapter format (for single-chapter or when verse is omitted)
        /^([1-3]?\s?[a-zA-ZáéíóúñÁÉÍÓÚÑ]+)\s+(\d+)$/i
    ];

    for (const pattern of patterns) {
        const match = input.match(pattern);
        if (match) {
            return {
                book: match[1].trim(),
                chapter: parseInt(match[2]),
                verse: match[3] ? parseInt(match[3]) : 1
            };
        }
    }

    return null;
}

/**
 * Normalize book name for comparison
 * @param {string} name - Book name
 * @returns {string} Normalized name
 */
function normalizeBookName(name) {
    return name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/\s+/g, ' ')
        .trim();
}

/**
 * Find verse by reference
 * @param {string} text - User input (e.g., "John 3:16")
 * @returns {object|null} Verse object or null
 */
function findVerseByReference(text) {
    const ref = parseVerseReference(text);
    if (!ref) return null;

    const verses = loadVerses();
    const normalizedInput = normalizeBookName(ref.book);

    // Search through verses
    return verses.find(v => {
        const bookEn = normalizeBookName(v.book.en);
        const bookEs = normalizeBookName(v.book.es);

        // Match book name (in either language)
        const bookMatch = bookEn.includes(normalizedInput) ||
                          bookEs.includes(normalizedInput) ||
                          normalizedInput.includes(bookEn) ||
                          normalizedInput.includes(bookEs);

        // Match chapter and verse
        return bookMatch &&
               v.chapter === ref.chapter &&
               v.verse === ref.verse;
    }) || null;
}

/**
 * Get a random verse that hasn't been sent recently
 * @param {array} excludeIds - Verse IDs to exclude
 * @returns {object} Random verse
 */
function getRandomVerse(excludeIds = []) {
    const verses = loadVerses();
    const excludeSet = new Set(excludeIds);

    // Filter out excluded verses
    let available = verses.filter(v => !excludeSet.has(v.id));

    // If all verses excluded, use all verses
    if (available.length === 0) {
        available = verses;
    }

    // Random selection
    const index = Math.floor(Math.random() * available.length);
    return available[index];
}

/**
 * Get daily verse based on date
 * Uses a deterministic algorithm so all users get the same verse on the same day
 * @param {Date} date - Date to get verse for
 * @returns {object} Daily verse
 */
function getDailyVerse(date = new Date()) {
    const verses = loadVerses();

    // Create a deterministic seed from the date
    const dateString = date.toISOString().split('T')[0]; // YYYY-MM-DD
    let seed = 0;
    for (let i = 0; i < dateString.length; i++) {
        seed = ((seed << 5) - seed) + dateString.charCodeAt(i);
        seed = seed & seed; // Convert to 32-bit integer
    }

    // Use seed to select verse
    const index = Math.abs(seed) % verses.length;
    return verses[index];
}

/**
 * Search verses by keyword
 * @param {string} query - Search query
 * @param {string} language - Language to search (en/es)
 * @returns {array} Matching verses
 */
function searchVerses(query, language = 'en') {
    if (!query || query.length < 2) return [];

    const verses = loadVerses();
    const normalizedQuery = query.toLowerCase();

    return verses.filter(v => {
        const text = v.text[language].toLowerCase();
        const book = v.book[language].toLowerCase();
        const reference = `${book} ${v.chapter}:${v.verse}`;

        return text.includes(normalizedQuery) ||
               reference.includes(normalizedQuery);
    });
}

/**
 * Format verse for WhatsApp display
 * @param {object} verse - Verse object
 * @param {string} language - Language code
 * @returns {string} Formatted verse text
 */
function formatVerseForWhatsApp(verse, language = 'en') {
    const reference = `${verse.book[language]} ${verse.chapter}:${verse.verse}`;
    const text = verse.text[language];

    return `*${reference}*\n"${text}"`;
}

/**
 * Get available analysis sections for a verse
 * @param {object} verse - Verse object
 * @returns {array} Available section names
 */
function getAvailableSections(verse) {
    const sections = [
        'historical',
        'economic',
        'social',
        'political',
        'author',
        'neuroscience',
        'behavioral',
        'nudge'
    ];

    return sections.filter(s => verse.analysis && verse.analysis[s]);
}

module.exports = {
    loadVerses,
    getAllVerses,
    getVerseById,
    parseVerseReference,
    findVerseByReference,
    getRandomVerse,
    getDailyVerse,
    searchVerses,
    formatVerseForWhatsApp,
    getAvailableSections
};
