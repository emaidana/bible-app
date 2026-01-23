/**
 * SQLite Database Service
 */
const Database = require('better-sqlite3');
const config = require('../config');

let db;

/**
 * Initialize the database and create tables
 */
function initDB() {
    db = new Database(config.database.path);

    // Enable foreign keys
    db.pragma('foreign_keys = ON');

    // Create subscribers table
    db.exec(`
        CREATE TABLE IF NOT EXISTS subscribers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            phone TEXT UNIQUE NOT NULL,
            preferred_time TEXT DEFAULT '07:00',
            timezone TEXT DEFAULT 'America/New_York',
            language TEXT DEFAULT 'en',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            active INTEGER DEFAULT 1
        )
    `);

    // Create messages_sent table
    db.exec(`
        CREATE TABLE IF NOT EXISTS messages_sent (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subscriber_id INTEGER NOT NULL,
            verse_id TEXT NOT NULL,
            sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            status TEXT DEFAULT 'sent',
            FOREIGN KEY (subscriber_id) REFERENCES subscribers(id)
        )
    `);

    // Create index for efficient time-based queries
    db.exec(`
        CREATE INDEX IF NOT EXISTS idx_subscribers_time
        ON subscribers(preferred_time, active)
    `);

    console.log('Database initialized successfully');
    return db;
}

/**
 * Get the database instance
 */
function getDB() {
    if (!db) {
        throw new Error('Database not initialized. Call initDB() first.');
    }
    return db;
}

/**
 * Add a new subscriber
 * @param {object} subscriber - Subscriber data
 * @returns {object} The created subscriber
 */
function addSubscriber({ phone, preferredTime, timezone, language }) {
    const stmt = getDB().prepare(`
        INSERT INTO subscribers (phone, preferred_time, timezone, language)
        VALUES (?, ?, ?, ?)
    `);

    try {
        const result = stmt.run(phone, preferredTime || '07:00', timezone || 'America/New_York', language || 'en');
        return { id: result.lastInsertRowid, phone, preferredTime, timezone, language };
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            // Phone already exists, update instead
            return updateSubscriber(phone, { preferredTime, timezone, language, active: 1 });
        }
        throw error;
    }
}

/**
 * Get a subscriber by phone number
 * @param {string} phone - Phone number
 * @returns {object|null} Subscriber or null
 */
function getSubscriber(phone) {
    const stmt = getDB().prepare('SELECT * FROM subscribers WHERE phone = ?');
    return stmt.get(phone);
}

/**
 * Update subscriber settings
 * @param {string} phone - Phone number
 * @param {object} updates - Fields to update
 * @returns {object} Updated subscriber
 */
function updateSubscriber(phone, updates) {
    const fields = [];
    const values = [];

    if (updates.preferredTime !== undefined) {
        fields.push('preferred_time = ?');
        values.push(updates.preferredTime);
    }
    if (updates.timezone !== undefined) {
        fields.push('timezone = ?');
        values.push(updates.timezone);
    }
    if (updates.language !== undefined) {
        fields.push('language = ?');
        values.push(updates.language);
    }
    if (updates.active !== undefined) {
        fields.push('active = ?');
        values.push(updates.active ? 1 : 0);
    }

    if (fields.length === 0) return getSubscriber(phone);

    values.push(phone);
    const stmt = getDB().prepare(`UPDATE subscribers SET ${fields.join(', ')} WHERE phone = ?`);
    stmt.run(...values);

    return getSubscriber(phone);
}

/**
 * Unsubscribe a user (soft delete)
 * @param {string} phone - Phone number
 * @returns {boolean} Success status
 */
function unsubscribe(phone) {
    const stmt = getDB().prepare('UPDATE subscribers SET active = 0 WHERE phone = ?');
    const result = stmt.run(phone);
    return result.changes > 0;
}

/**
 * Resubscribe a user
 * @param {string} phone - Phone number
 * @returns {boolean} Success status
 */
function resubscribe(phone) {
    const stmt = getDB().prepare('UPDATE subscribers SET active = 1 WHERE phone = ?');
    const result = stmt.run(phone);
    return result.changes > 0;
}

/**
 * Get all active subscribers for a specific time
 * @param {string} time - Time in HH:MM format
 * @returns {array} List of subscribers
 */
function getSubscribersForTime(time) {
    const stmt = getDB().prepare(`
        SELECT * FROM subscribers
        WHERE preferred_time = ? AND active = 1
    `);
    return stmt.all(time);
}

/**
 * Get all active subscribers
 * @returns {array} List of active subscribers
 */
function getAllActiveSubscribers() {
    const stmt = getDB().prepare('SELECT * FROM subscribers WHERE active = 1');
    return stmt.all();
}

/**
 * Record a sent message
 * @param {number} subscriberId - Subscriber ID
 * @param {string} verseId - Verse ID that was sent
 * @param {string} status - Message status
 */
function recordMessage(subscriberId, verseId, status = 'sent') {
    const stmt = getDB().prepare(`
        INSERT INTO messages_sent (subscriber_id, verse_id, status)
        VALUES (?, ?, ?)
    `);
    stmt.run(subscriberId, verseId, status);
}

/**
 * Get verses sent to a subscriber
 * @param {number} subscriberId - Subscriber ID
 * @param {number} limit - Max results
 * @returns {array} List of sent verse IDs
 */
function getSentVerses(subscriberId, limit = 30) {
    const stmt = getDB().prepare(`
        SELECT DISTINCT verse_id FROM messages_sent
        WHERE subscriber_id = ?
        ORDER BY sent_at DESC
        LIMIT ?
    `);
    return stmt.all(subscriberId, limit).map(row => row.verse_id);
}

/**
 * Check if verse was sent to subscriber recently
 * @param {number} subscriberId - Subscriber ID
 * @param {string} verseId - Verse ID
 * @param {number} days - Days to look back
 * @returns {boolean}
 */
function wasVerseSentRecently(subscriberId, verseId, days = 30) {
    const stmt = getDB().prepare(`
        SELECT 1 FROM messages_sent
        WHERE subscriber_id = ? AND verse_id = ?
        AND sent_at > datetime('now', '-' || ? || ' days')
    `);
    return !!stmt.get(subscriberId, verseId, days);
}

module.exports = {
    initDB,
    getDB,
    addSubscriber,
    getSubscriber,
    updateSubscriber,
    unsubscribe,
    resubscribe,
    getSubscribersForTime,
    getAllActiveSubscribers,
    recordMessage,
    getSentVerses,
    wasVerseSentRecently
};
