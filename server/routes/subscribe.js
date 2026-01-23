/**
 * Subscription API Routes
 */
const express = require('express');
const router = express.Router();
const db = require('../services/db');
const twilio = require('../services/twilio');
const scheduler = require('../services/scheduler');

/**
 * Validate phone number format
 * @param {string} phone - Phone number
 * @returns {string|null} Cleaned phone or null if invalid
 */
function validatePhone(phone) {
    if (!phone) return null;

    // Remove all non-numeric characters except +
    let cleaned = phone.replace(/[^\d+]/g, '');

    // Ensure it starts with +
    if (!cleaned.startsWith('+')) {
        // Assume US number if no country code
        if (cleaned.length === 10) {
            cleaned = '+1' + cleaned;
        } else if (cleaned.length === 11 && cleaned.startsWith('1')) {
            cleaned = '+' + cleaned;
        } else {
            cleaned = '+' + cleaned;
        }
    }

    // Basic validation: should have at least 10 digits after +
    const digits = cleaned.replace(/\D/g, '');
    if (digits.length < 10 || digits.length > 15) {
        return null;
    }

    return cleaned;
}

/**
 * Validate time format
 * @param {string} time - Time string
 * @returns {string|null} Formatted time or null
 */
function validateTime(time) {
    if (!time) return '07:00';

    // Match HH:MM format
    const match = time.match(/^(\d{1,2}):(\d{2})$/);
    if (!match) return null;

    const hours = parseInt(match[1]);
    const minutes = parseInt(match[2]);

    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        return null;
    }

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

/**
 * POST /api/subscribe
 * Subscribe a new user to daily verses
 */
router.post('/', async (req, res) => {
    try {
        const { phone, preferredTime, timezone, language } = req.body;

        // Validate phone
        const validPhone = validatePhone(phone);
        if (!validPhone) {
            return res.status(400).json({
                success: false,
                error: 'Invalid phone number format. Please include country code (e.g., +1 for US).'
            });
        }

        // Validate time
        const validTime = validateTime(preferredTime);
        if (preferredTime && !validTime) {
            return res.status(400).json({
                success: false,
                error: 'Invalid time format. Please use HH:MM format (e.g., 07:00).'
            });
        }

        // Validate language
        const validLanguage = ['en', 'es'].includes(language) ? language : 'en';

        // Validate timezone (basic check)
        const validTimezone = timezone || 'America/New_York';

        // Add subscriber to database
        const subscriber = db.addSubscriber({
            phone: validPhone,
            preferredTime: validTime || '07:00',
            timezone: validTimezone,
            language: validLanguage
        });

        // Send confirmation via WhatsApp
        try {
            await twilio.sendSubscriptionConfirmation(
                validPhone,
                validTime || '07:00',
                validLanguage
            );
        } catch (twilioError) {
            console.error('Failed to send confirmation:', twilioError.message);
            // Don't fail the request if Twilio fails
        }

        res.json({
            success: true,
            message: 'Successfully subscribed to daily verses!',
            subscriber: {
                phone: validPhone,
                preferredTime: validTime || '07:00',
                timezone: validTimezone,
                language: validLanguage
            }
        });
    } catch (error) {
        console.error('Subscribe error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to subscribe. Please try again.'
        });
    }
});

/**
 * DELETE /api/subscribe
 * Unsubscribe a user
 */
router.delete('/', async (req, res) => {
    try {
        const { phone } = req.body;

        const validPhone = validatePhone(phone);
        if (!validPhone) {
            return res.status(400).json({
                success: false,
                error: 'Invalid phone number format.'
            });
        }

        const subscriber = db.getSubscriber(validPhone);
        if (!subscriber) {
            return res.status(404).json({
                success: false,
                error: 'Phone number not found in subscribers.'
            });
        }

        const result = db.unsubscribe(validPhone);

        if (result) {
            try {
                await twilio.sendUnsubscribeConfirmation(validPhone, subscriber.language);
            } catch (twilioError) {
                console.error('Failed to send unsubscribe confirmation:', twilioError.message);
            }
        }

        res.json({
            success: true,
            message: 'Successfully unsubscribed from daily verses.'
        });
    } catch (error) {
        console.error('Unsubscribe error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to unsubscribe. Please try again.'
        });
    }
});

/**
 * PUT /api/subscribe
 * Update subscriber settings
 */
router.put('/', async (req, res) => {
    try {
        const { phone, preferredTime, timezone, language } = req.body;

        const validPhone = validatePhone(phone);
        if (!validPhone) {
            return res.status(400).json({
                success: false,
                error: 'Invalid phone number format.'
            });
        }

        const subscriber = db.getSubscriber(validPhone);
        if (!subscriber) {
            return res.status(404).json({
                success: false,
                error: 'Phone number not found in subscribers.'
            });
        }

        const updates = {};

        if (preferredTime) {
            const validTime = validateTime(preferredTime);
            if (!validTime) {
                return res.status(400).json({
                    success: false,
                    error: 'Invalid time format.'
                });
            }
            updates.preferredTime = validTime;
        }

        if (timezone) {
            updates.timezone = timezone;
        }

        if (language && ['en', 'es'].includes(language)) {
            updates.language = language;
        }

        const updated = db.updateSubscriber(validPhone, updates);

        res.json({
            success: true,
            message: 'Settings updated successfully.',
            subscriber: updated
        });
    } catch (error) {
        console.error('Update error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to update settings. Please try again.'
        });
    }
});

/**
 * GET /api/subscribe/status
 * Check subscription status
 */
router.get('/status', (req, res) => {
    try {
        const { phone } = req.query;

        const validPhone = validatePhone(phone);
        if (!validPhone) {
            return res.status(400).json({
                success: false,
                error: 'Invalid phone number format.'
            });
        }

        const subscriber = db.getSubscriber(validPhone);

        if (!subscriber) {
            return res.json({
                success: true,
                subscribed: false
            });
        }

        res.json({
            success: true,
            subscribed: true,
            active: subscriber.active === 1,
            preferredTime: subscriber.preferred_time,
            timezone: subscriber.timezone,
            language: subscriber.language
        });
    } catch (error) {
        console.error('Status check error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to check status.'
        });
    }
});

/**
 * POST /api/subscribe/test
 * Trigger a test message (for development/testing)
 */
router.post('/test', async (req, res) => {
    try {
        const { phone } = req.body;

        const validPhone = validatePhone(phone);
        if (!validPhone) {
            return res.status(400).json({
                success: false,
                error: 'Invalid phone number format.'
            });
        }

        const result = await scheduler.triggerManually(validPhone);

        res.json({
            success: result.success,
            message: result.success
                ? 'Test message sent successfully.'
                : result.error
        });
    } catch (error) {
        console.error('Test send error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to send test message.'
        });
    }
});

/**
 * GET /api/subscribe/stats
 * Get subscription statistics (admin endpoint)
 */
router.get('/stats', (req, res) => {
    try {
        const allSubscribers = db.getAllActiveSubscribers();
        const schedulerStatus = scheduler.getStatus();

        const stats = {
            totalActive: allSubscribers.length,
            byLanguage: {
                en: allSubscribers.filter(s => s.language === 'en').length,
                es: allSubscribers.filter(s => s.language === 'es').length
            },
            scheduler: schedulerStatus
        };

        res.json({
            success: true,
            stats
        });
    } catch (error) {
        console.error('Stats error:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to get statistics.'
        });
    }
});

module.exports = router;
