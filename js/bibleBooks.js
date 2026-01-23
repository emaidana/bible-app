/**
 * Bible Books Metadata
 * Used for autocomplete and verse reference parsing
 */

const BibleBooks = {
    // English book names with their API book numbers
    en: [
        { num: 1, name: 'Genesis', abbrev: ['gen', 'ge', 'gn'] },
        { num: 2, name: 'Exodus', abbrev: ['exod', 'exo', 'ex'] },
        { num: 3, name: 'Leviticus', abbrev: ['lev', 'le', 'lv'] },
        { num: 4, name: 'Numbers', abbrev: ['num', 'nu', 'nm', 'nb'] },
        { num: 5, name: 'Deuteronomy', abbrev: ['deut', 'de', 'dt'] },
        { num: 6, name: 'Joshua', abbrev: ['josh', 'jos', 'jsh'] },
        { num: 7, name: 'Judges', abbrev: ['judg', 'jdg', 'jg', 'jdgs'] },
        { num: 8, name: 'Ruth', abbrev: ['rth', 'ru'] },
        { num: 9, name: '1 Samuel', abbrev: ['1 sam', '1sam', '1 sa', '1sa', 'i sam', 'i sa'] },
        { num: 10, name: '2 Samuel', abbrev: ['2 sam', '2sam', '2 sa', '2sa', 'ii sam', 'ii sa'] },
        { num: 11, name: '1 Kings', abbrev: ['1 kgs', '1kgs', '1 ki', '1ki', 'i kgs', 'i ki'] },
        { num: 12, name: '2 Kings', abbrev: ['2 kgs', '2kgs', '2 ki', '2ki', 'ii kgs', 'ii ki'] },
        { num: 13, name: '1 Chronicles', abbrev: ['1 chr', '1chr', '1 ch', '1ch', 'i chr', 'i ch'] },
        { num: 14, name: '2 Chronicles', abbrev: ['2 chr', '2chr', '2 ch', '2ch', 'ii chr', 'ii ch'] },
        { num: 15, name: 'Ezra', abbrev: ['ezr', 'ez'] },
        { num: 16, name: 'Nehemiah', abbrev: ['neh', 'ne'] },
        { num: 17, name: 'Esther', abbrev: ['esth', 'est', 'es'] },
        { num: 18, name: 'Job', abbrev: ['jb'] },
        { num: 19, name: 'Psalms', abbrev: ['ps', 'psalm', 'psa', 'psm', 'pss'] },
        { num: 20, name: 'Proverbs', abbrev: ['prov', 'pro', 'prv', 'pr'] },
        { num: 21, name: 'Ecclesiastes', abbrev: ['eccl', 'ecc', 'ec', 'qoh'] },
        { num: 22, name: 'Song of Solomon', abbrev: ['song', 'sos', 'so', 'canticles', 'cant'] },
        { num: 23, name: 'Isaiah', abbrev: ['isa', 'is'] },
        { num: 24, name: 'Jeremiah', abbrev: ['jer', 'je', 'jr'] },
        { num: 25, name: 'Lamentations', abbrev: ['lam', 'la'] },
        { num: 26, name: 'Ezekiel', abbrev: ['ezek', 'eze', 'ezk'] },
        { num: 27, name: 'Daniel', abbrev: ['dan', 'da', 'dn'] },
        { num: 28, name: 'Hosea', abbrev: ['hos', 'ho'] },
        { num: 29, name: 'Joel', abbrev: ['joe', 'jl'] },
        { num: 30, name: 'Amos', abbrev: ['amo', 'am'] },
        { num: 31, name: 'Obadiah', abbrev: ['obad', 'ob'] },
        { num: 32, name: 'Jonah', abbrev: ['jon', 'jnh'] },
        { num: 33, name: 'Micah', abbrev: ['mic', 'mc'] },
        { num: 34, name: 'Nahum', abbrev: ['nah', 'na'] },
        { num: 35, name: 'Habakkuk', abbrev: ['hab', 'hb'] },
        { num: 36, name: 'Zephaniah', abbrev: ['zeph', 'zep', 'zp'] },
        { num: 37, name: 'Haggai', abbrev: ['hag', 'hg'] },
        { num: 38, name: 'Zechariah', abbrev: ['zech', 'zec', 'zc'] },
        { num: 39, name: 'Malachi', abbrev: ['mal', 'ml'] },
        { num: 40, name: 'Matthew', abbrev: ['matt', 'mat', 'mt'] },
        { num: 41, name: 'Mark', abbrev: ['mrk', 'mar', 'mk', 'mr'] },
        { num: 42, name: 'Luke', abbrev: ['luk', 'lk'] },
        { num: 43, name: 'John', abbrev: ['joh', 'jhn', 'jn'] },
        { num: 44, name: 'Acts', abbrev: ['act', 'ac'] },
        { num: 45, name: 'Romans', abbrev: ['rom', 'ro', 'rm'] },
        { num: 46, name: '1 Corinthians', abbrev: ['1 cor', '1cor', '1 co', '1co', 'i cor', 'i co'] },
        { num: 47, name: '2 Corinthians', abbrev: ['2 cor', '2cor', '2 co', '2co', 'ii cor', 'ii co'] },
        { num: 48, name: 'Galatians', abbrev: ['gal', 'ga'] },
        { num: 49, name: 'Ephesians', abbrev: ['eph', 'ep'] },
        { num: 50, name: 'Philippians', abbrev: ['phil', 'php', 'pp'] },
        { num: 51, name: 'Colossians', abbrev: ['col', 'co'] },
        { num: 52, name: '1 Thessalonians', abbrev: ['1 thess', '1thess', '1 th', '1th', 'i thess', 'i th'] },
        { num: 53, name: '2 Thessalonians', abbrev: ['2 thess', '2thess', '2 th', '2th', 'ii thess', 'ii th'] },
        { num: 54, name: '1 Timothy', abbrev: ['1 tim', '1tim', '1 ti', '1ti', 'i tim', 'i ti'] },
        { num: 55, name: '2 Timothy', abbrev: ['2 tim', '2tim', '2 ti', '2ti', 'ii tim', 'ii ti'] },
        { num: 56, name: 'Titus', abbrev: ['tit', 'ti'] },
        { num: 57, name: 'Philemon', abbrev: ['philem', 'phm', 'pm'] },
        { num: 58, name: 'Hebrews', abbrev: ['heb', 'he'] },
        { num: 59, name: 'James', abbrev: ['jas', 'jm'] },
        { num: 60, name: '1 Peter', abbrev: ['1 pet', '1pet', '1 pe', '1pe', 'i pet', 'i pe'] },
        { num: 61, name: '2 Peter', abbrev: ['2 pet', '2pet', '2 pe', '2pe', 'ii pet', 'ii pe'] },
        { num: 62, name: '1 John', abbrev: ['1 john', '1john', '1 jn', '1jn', 'i john', 'i jn'] },
        { num: 63, name: '2 John', abbrev: ['2 john', '2john', '2 jn', '2jn', 'ii john', 'ii jn'] },
        { num: 64, name: '3 John', abbrev: ['3 john', '3john', '3 jn', '3jn', 'iii john', 'iii jn'] },
        { num: 65, name: 'Jude', abbrev: ['jud', 'jd'] },
        { num: 66, name: 'Revelation', abbrev: ['rev', 're', 'apocalypse'] }
    ],

    // Spanish book names
    es: [
        { num: 1, name: 'Génesis', abbrev: ['gen', 'gé', 'gn'] },
        { num: 2, name: 'Éxodo', abbrev: ['exo', 'éx', 'ex'] },
        { num: 3, name: 'Levítico', abbrev: ['lev', 'lv'] },
        { num: 4, name: 'Números', abbrev: ['num', 'nm', 'nú'] },
        { num: 5, name: 'Deuteronomio', abbrev: ['deut', 'dt'] },
        { num: 6, name: 'Josué', abbrev: ['jos', 'js'] },
        { num: 7, name: 'Jueces', abbrev: ['jue', 'jc'] },
        { num: 8, name: 'Rut', abbrev: ['rt'] },
        { num: 9, name: '1 Samuel', abbrev: ['1 sam', '1sam', '1 sa', '1sa'] },
        { num: 10, name: '2 Samuel', abbrev: ['2 sam', '2sam', '2 sa', '2sa'] },
        { num: 11, name: '1 Reyes', abbrev: ['1 rey', '1rey', '1 re', '1re'] },
        { num: 12, name: '2 Reyes', abbrev: ['2 rey', '2rey', '2 re', '2re'] },
        { num: 13, name: '1 Crónicas', abbrev: ['1 cro', '1cro', '1 cr', '1cr'] },
        { num: 14, name: '2 Crónicas', abbrev: ['2 cro', '2cro', '2 cr', '2cr'] },
        { num: 15, name: 'Esdras', abbrev: ['esd', 'esr'] },
        { num: 16, name: 'Nehemías', abbrev: ['neh', 'ne'] },
        { num: 17, name: 'Ester', abbrev: ['est', 'et'] },
        { num: 18, name: 'Job', abbrev: ['jb'] },
        { num: 19, name: 'Salmos', abbrev: ['sal', 'slm', 'sl'] },
        { num: 20, name: 'Proverbios', abbrev: ['prov', 'pro', 'pr'] },
        { num: 21, name: 'Eclesiastés', abbrev: ['ecl', 'ec'] },
        { num: 22, name: 'Cantares', abbrev: ['cant', 'cnt', 'cantar'] },
        { num: 23, name: 'Isaías', abbrev: ['isa', 'is'] },
        { num: 24, name: 'Jeremías', abbrev: ['jer', 'jr'] },
        { num: 25, name: 'Lamentaciones', abbrev: ['lam', 'lm'] },
        { num: 26, name: 'Ezequiel', abbrev: ['eze', 'ez'] },
        { num: 27, name: 'Daniel', abbrev: ['dan', 'dn'] },
        { num: 28, name: 'Oseas', abbrev: ['ose', 'os'] },
        { num: 29, name: 'Joel', abbrev: ['jl'] },
        { num: 30, name: 'Amós', abbrev: ['amo', 'am'] },
        { num: 31, name: 'Abdías', abbrev: ['abd', 'ab'] },
        { num: 32, name: 'Jonás', abbrev: ['jon', 'jn'] },
        { num: 33, name: 'Miqueas', abbrev: ['miq', 'mi'] },
        { num: 34, name: 'Nahúm', abbrev: ['nah', 'na'] },
        { num: 35, name: 'Habacuc', abbrev: ['hab', 'hb'] },
        { num: 36, name: 'Sofonías', abbrev: ['sof', 'so'] },
        { num: 37, name: 'Hageo', abbrev: ['hag', 'hg'] },
        { num: 38, name: 'Zacarías', abbrev: ['zac', 'zc'] },
        { num: 39, name: 'Malaquías', abbrev: ['mal', 'ml'] },
        { num: 40, name: 'Mateo', abbrev: ['mat', 'mt'] },
        { num: 41, name: 'Marcos', abbrev: ['mar', 'mr', 'mc'] },
        { num: 42, name: 'Lucas', abbrev: ['luc', 'lc'] },
        { num: 43, name: 'Juan', abbrev: ['jua', 'jn'] },
        { num: 44, name: 'Hechos', abbrev: ['hec', 'hch'] },
        { num: 45, name: 'Romanos', abbrev: ['rom', 'ro'] },
        { num: 46, name: '1 Corintios', abbrev: ['1 cor', '1cor', '1 co', '1co'] },
        { num: 47, name: '2 Corintios', abbrev: ['2 cor', '2cor', '2 co', '2co'] },
        { num: 48, name: 'Gálatas', abbrev: ['gal', 'gá'] },
        { num: 49, name: 'Efesios', abbrev: ['efe', 'ef'] },
        { num: 50, name: 'Filipenses', abbrev: ['fil', 'flp'] },
        { num: 51, name: 'Colosenses', abbrev: ['col', 'co'] },
        { num: 52, name: '1 Tesalonicenses', abbrev: ['1 tes', '1tes', '1 ts', '1ts'] },
        { num: 53, name: '2 Tesalonicenses', abbrev: ['2 tes', '2tes', '2 ts', '2ts'] },
        { num: 54, name: '1 Timoteo', abbrev: ['1 tim', '1tim', '1 ti', '1ti'] },
        { num: 55, name: '2 Timoteo', abbrev: ['2 tim', '2tim', '2 ti', '2ti'] },
        { num: 56, name: 'Tito', abbrev: ['tit', 'ti'] },
        { num: 57, name: 'Filemón', abbrev: ['flm', 'file'] },
        { num: 58, name: 'Hebreos', abbrev: ['heb', 'he'] },
        { num: 59, name: 'Santiago', abbrev: ['stg', 'sant'] },
        { num: 60, name: '1 Pedro', abbrev: ['1 ped', '1ped', '1 pe', '1pe'] },
        { num: 61, name: '2 Pedro', abbrev: ['2 ped', '2ped', '2 pe', '2pe'] },
        { num: 62, name: '1 Juan', abbrev: ['1 jua', '1jua', '1 jn', '1jn'] },
        { num: 63, name: '2 Juan', abbrev: ['2 jua', '2jua', '2 jn', '2jn'] },
        { num: 64, name: '3 Juan', abbrev: ['3 jua', '3jua', '3 jn', '3jn'] },
        { num: 65, name: 'Judas', abbrev: ['jud', 'jds'] },
        { num: 66, name: 'Apocalipsis', abbrev: ['apo', 'ap', 'apoc'] }
    ],

    /**
     * Find book by name or abbreviation
     * @param {string} query - Book name or abbreviation
     * @param {string} language - Language code (en/es)
     * @returns {object|null} Book object or null
     */
    findBook(query, language = 'en') {
        const books = this[language] || this.en;
        const normalized = query.toLowerCase().trim();

        // Try exact name match first
        let book = books.find(b => b.name.toLowerCase() === normalized);
        if (book) return book;

        // Try abbreviation match
        book = books.find(b => b.abbrev.includes(normalized));
        if (book) return book;

        // Try partial name match
        book = books.find(b => b.name.toLowerCase().startsWith(normalized));
        if (book) return book;

        // Try cross-language (for bilingual users)
        const otherLang = language === 'en' ? 'es' : 'en';
        const otherBooks = this[otherLang];
        book = otherBooks.find(b =>
            b.name.toLowerCase() === normalized ||
            b.abbrev.includes(normalized)
        );

        return book || null;
    },

    /**
     * Get book suggestions based on partial input
     * @param {string} query - Partial book name
     * @param {string} language - Language code
     * @param {number} limit - Max suggestions
     * @returns {array} Matching books
     */
    getSuggestions(query, language = 'en', limit = 5) {
        if (!query || query.length < 1) return [];

        const books = this[language] || this.en;
        const normalized = query.toLowerCase().trim();

        const matches = books.filter(b => {
            const nameMatch = b.name.toLowerCase().includes(normalized);
            const abbrevMatch = b.abbrev.some(a => a.includes(normalized));
            return nameMatch || abbrevMatch;
        });

        // Sort by relevance (starts with > contains)
        matches.sort((a, b) => {
            const aStarts = a.name.toLowerCase().startsWith(normalized) ? 0 : 1;
            const bStarts = b.name.toLowerCase().startsWith(normalized) ? 0 : 1;
            return aStarts - bStarts;
        });

        return matches.slice(0, limit);
    },

    /**
     * Get all book names for a language
     * @param {string} language - Language code
     * @returns {array} Book names
     */
    getAllBookNames(language = 'en') {
        const books = this[language] || this.en;
        return books.map(b => b.name);
    }
};

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BibleBooks;
}
