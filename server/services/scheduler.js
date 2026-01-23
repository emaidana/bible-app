/**
 * Daily Message Scheduler
 */
const cron = require('node-cron');
const config = require('../config');
const db = require('./db');
const twilio = require('./twilio');
const verseService = require('./verseService');

let schedulerJob = null;

/**
 * Initialize the scheduler
 */
function initScheduler() {
    if (schedulerJob) {
        schedulerJob.stop();
    }

    // Run every minute to check for subscribers
    schedulerJob = cron.schedule(config.scheduler.checkInterval, () => {
        checkAndSendMessages();
    });

    console.log('Scheduler initialized - checking every minute');
    return schedulerJob;
}

/**
 * Stop the scheduler
 */
function stopScheduler() {
    if (schedulerJob) {
        schedulerJob.stop();
        schedulerJob = null;
        console.log('Scheduler stopped');
    }
}

/**
 * Get current time in HH:MM format
 * @param {string} timezone - Timezone string
 * @returns {string} Time in HH:MM format
 */
function getCurrentTime(timezone = 'America/New_York') {
    try {
        const now = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
            timeZone: timezone
        };
        return now.toLocaleTimeString('en-US', options);
    } catch (error) {
        // Fallback if timezone is invalid
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    }
}

/**
 * Check and send messages to subscribers whose time has come
 */
async function checkAndSendMessages() {
    try {
        // Get all active subscribers
        const subscribers = db.getAllActiveSubscribers();

        for (const subscriber of subscribers) {
            const currentTime = getCurrentTime(subscriber.timezone);

            // Check if it's time to send (compare HH:MM)
            if (currentTime === subscriber.preferred_time) {
                await sendDailyVerseToSubscriber(subscriber);
            }
        }
    } catch (error) {
        console.error('Scheduler error:', error.message);
    }
}

/**
 * Send daily verse to a specific subscriber
 * @param {object} subscriber - Subscriber object from database
 */
async function sendDailyVerseToSubscriber(subscriber) {
    try {
        // Get verses already sent to this subscriber
        const sentVerseIds = db.getSentVerses(subscriber.id);

        // Get a random verse (excluding recently sent ones)
        const verse = verseService.getRandomVerse(sentVerseIds);

        if (!verse) {
            console.error(`No verses available for subscriber ${subscriber.phone}`);
            return;
        }

        // Send the verse
        const result = await twilio.sendVerseCard(
            subscriber.phone,
            verse,
            subscriber.language
        );

        // Record the sent message
        db.recordMessage(subscriber.id, verse.id, result.status || 'sent');

        console.log(`Daily verse sent to ${subscriber.phone}: ${verse.id}`);
    } catch (error) {
        console.error(`Failed to send daily verse to ${subscriber.phone}:`, error.message);
        // Record failed attempt
        try {
            db.recordMessage(subscriber.id, 'unknown', 'failed');
        } catch (dbError) {
            console.error('Failed to record error:', dbError.message);
        }
    }
}

/**
 * Manually trigger daily verse sending for testing
 * @param {string} phone - Optional specific phone number
 */
async function triggerManually(phone = null) {
    try {
        if (phone) {
            const subscriber = db.getSubscriber(phone);
            if (subscriber && subscriber.active) {
                await sendDailyVerseToSubscriber(subscriber);
                return { success: true, phone };
            }
            return { success: false, error: 'Subscriber not found or inactive' };
        }

        // Send to all active subscribers
        const subscribers = db.getAllActiveSubscribers();
        const results = [];

        for (const subscriber of subscribers) {
            try {
                await sendDailyVerseToSubscriber(subscriber);
                results.push({ phone: subscriber.phone, success: true });
            } catch (error) {
                results.push({ phone: subscriber.phone, success: false, error: error.message });
            }
        }

        return { success: true, results };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

/**
 * Get scheduler status
 */
function getStatus() {
    return {
        running: schedulerJob !== null,
        interval: config.scheduler.checkInterval,
        activeSubscribers: db.getAllActiveSubscribers().length
    };
}

module.exports = {
    initScheduler,
    stopScheduler,
    checkAndSendMessages,
    sendDailyVerseToSubscriber,
    triggerManually,
    getStatus,
    getCurrentTime
};
