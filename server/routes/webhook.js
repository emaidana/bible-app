/**
 * Twilio Webhook Handler
 * Handles incoming WhatsApp messages
 */
const express = require('express');
const router = express.Router();
const db = require('../services/db');
const twilio = require('../services/twilio');
const verseService = require('../services/verseService');

/**
 * Parse time from user input
 * @param {string} input - Time string like "8:00 AM", "14:00", etc.
 * @returns {string|null} Time in HH:MM format or null
 */
function parseTime(input) {
    if (!input) return null;

    const cleaned = input.trim().toUpperCase();

    // Match patterns like "8:00 AM", "8:00AM", "08:00", "8AM"
    const patterns = [
        /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/i,
        /^(\d{1,2})\s*(AM|PM)$/i
    ];

    for (const pattern of patterns) {
        const match = cleaned.match(pattern);
        if (match) {
            let hours = parseInt(match[1]);
            const minutes = match[2] && match[2].length === 2 ? parseInt(match[2]) : 0;
            const period = match[3] || match[2];

            // Convert to 24-hour format
            if (period === 'PM' && hours !== 12) {
                hours += 12;
            } else if (period === 'AM' && hours === 12) {
                hours = 0;
            }

            // Validate
            if (hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60) {
                return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
            }
        }
    }

    return null;
}

/**
 * Detect user intent from message
 * @param {string} message - User's message
 * @returns {object} Intent object { type, data }
 */
function detectIntent(message) {
    if (!message) return { type: 'unknown' };

    const text = message.trim();
    const upperText = text.toUpperCase();

    // Check for commands
    if (upperText === 'STOP' || upperText === 'UNSUBSCRIBE' || upperText === 'CANCELAR') {
        return { type: 'unsubscribe' };
    }

    if (upperText === 'SUBSCRIBE' || upperText === 'SUSCRIBIR' || upperText === 'START') {
        return { type: 'resubscribe' };
    }

    if (upperText === 'HELP' || upperText === 'AYUDA') {
        return { type: 'help' };
    }

    // Time change: "TIME 8:00 AM" or "HORA 8:00"
    const timeMatch = text.match(/^(?:TIME|HORA)\s+(.+)$/i);
    if (timeMatch) {
        const time = parseTime(timeMatch[1]);
        if (time) {
            return { type: 'change_time', data: time };
        }
    }

    // Language change: "LANG es" or "IDIOMA en"
    const langMatch = text.match(/^(?:LANG|LANGUAGE|IDIOMA)\s+(en|es|english|spanish|ingles|espanol)$/i);
    if (langMatch) {
        const lang = langMatch[1].toLowerCase();
        const language = ['es', 'spanish', 'espanol'].includes(lang) ? 'es' : 'en';
        return { type: 'change_language', data: language };
    }

    // Check if it's a verse reference
    const verseRef = verseService.parseVerseReference(text);
    if (verseRef) {
        return { type: 'verse_lookup', data: text };
    }

    // Unknown - might be a question or greeting
    return { type: 'unknown', data: text };
}

/**
 * POST /api/webhook/incoming
 * Handle incoming WhatsApp messages from Twilio
 */
router.post('/incoming', async (req, res) => {
    try {
        // Extract message data from Twilio webhook
        const {
            From: from,
            Body: body,
            ProfileName: profileName
        } = req.body;

        if (!from || !body) {
            return res.status(400).send('Missing required fields');
        }

        // Clean the phone number
        const phone = from.replace('whatsapp:', '');

        console.log(`Incoming message from ${phone}: ${body}`);

        // Get or create subscriber
        let subscriber = db.getSubscriber(phone);
        const language = subscriber?.language || 'en';

        // Detect intent
        const intent = detectIntent(body);

        switch (intent.type) {
            case 'unsubscribe':
                await handleUnsubscribe(phone, language);
                break;

            case 'resubscribe':
                await handleResubscribe(phone, language);
                break;

            case 'help':
                await twilio.sendHelpMessage(phone, language);
                break;

            case 'change_time':
                await handleTimeChange(phone, intent.data, language);
                break;

            case 'change_language':
                await handleLanguageChange(phone, intent.data);
                break;

            case 'verse_lookup':
                await handleVerseLookup(phone, intent.data, language);
                break;

            default:
                await handleUnknown(phone, body, language);
                break;
        }

        // Respond to Twilio (empty response = no auto-reply)
        res.status(200).send('');
    } catch (error) {
        console.error('Webhook error:', error);
        res.status(500).send('Internal server error');
    }
});

/**
 * Handle unsubscribe request
 */
async function handleUnsubscribe(phone, language) {
    const result = db.unsubscribe(phone);
    if (result) {
        await twilio.sendUnsubscribeConfirmation(phone, language);
    }
}

/**
 * Handle resubscribe request
 */
async function handleResubscribe(phone, language) {
    const subscriber = db.getSubscriber(phone);

    if (subscriber) {
        db.resubscribe(phone);
        await twilio.sendSubscriptionConfirmation(phone, subscriber.preferred_time, language);
    } else {
        // Create new subscription with defaults
        const newSubscriber = db.addSubscriber({
            phone,
            preferredTime: '07:00',
            timezone: 'America/New_York',
            language: language
        });
        await twilio.sendSubscriptionConfirmation(phone, newSubscriber.preferredTime, language);
    }
}

/**
 * Handle time change request
 */
async function handleTimeChange(phone, newTime, language) {
    const subscriber = db.getSubscriber(phone);

    if (subscriber) {
        db.updateSubscriber(phone, { preferredTime: newTime });

        // Format time for display (convert to 12-hour)
        const hours = parseInt(newTime.split(':')[0]);
        const minutes = newTime.split(':')[1];
        const period = hours >= 12 ? 'PM' : 'AM';
        const displayHours = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
        const displayTime = `${displayHours}:${minutes} ${period}`;

        const message = language === 'es'
            ? `Tu horario de entrega ha sido actualizado a *${displayTime}*.`
            : `Your delivery time has been updated to *${displayTime}*.`;

        await twilio.sendWhatsAppMessage(phone, message);
    } else {
        const message = language === 'es'
            ? 'No estas suscrito. Visita selah.app para suscribirte.'
            : "You're not subscribed. Visit selah.app to subscribe.";
        await twilio.sendWhatsAppMessage(phone, message);
    }
}

/**
 * Handle language change request
 */
async function handleLanguageChange(phone, newLanguage) {
    const subscriber = db.getSubscriber(phone);

    if (subscriber) {
        db.updateSubscriber(phone, { language: newLanguage });

        const message = newLanguage === 'es'
            ? 'Tu idioma ha sido cambiado a *Espanol*.'
            : 'Your language has been changed to *English*.';

        await twilio.sendWhatsAppMessage(phone, message);
    } else {
        const message = newLanguage === 'es'
            ? 'No estas suscrito. Visita selah.app para suscribirte.'
            : "You're not subscribed. Visit selah.app to subscribe.";
        await twilio.sendWhatsAppMessage(phone, message);
    }
}

/**
 * Handle verse lookup request
 */
async function handleVerseLookup(phone, reference, language) {
    const verse = verseService.findVerseByReference(reference);

    if (verse) {
        // Send the verse with full analysis
        const verseText = verseService.formatVerseForWhatsApp(verse, language);

        const sections = language === 'es'
            ? `\n\n*Analisis disponible:*
1. Contexto Historico
2. Contexto Economico
3. Contexto Social
4. Contexto Politico
5. Trasfondo del Autor
6. Neurociencia
7. Ciencia Conductual

Responde con el numero para mas detalles.`
            : `\n\n*Available analysis:*
1. Historical Context
2. Economic Context
3. Social Context
4. Political Context
5. Author Background
6. Neuroscience
7. Behavioral Science

Reply with a number for more details.`;

        await twilio.sendWhatsAppMessage(phone, verseText + sections);
    } else {
        const message = language === 'es'
            ? `No encontre "${reference}" en mi base de datos. Intenta con otra referencia como "Juan 3:16" o "Salmos 23:1".`
            : `I couldn't find "${reference}" in my database. Try another reference like "John 3:16" or "Psalm 23:1".`;

        await twilio.sendWhatsAppMessage(phone, message);
    }
}

/**
 * Handle unknown messages
 */
async function handleUnknown(phone, message, language) {
    // Check if it's a number (analysis section selection)
    const num = parseInt(message);
    if (num >= 1 && num <= 7) {
        // User is selecting an analysis section - but we'd need context
        // For now, suggest they look up a verse first
        const response = language === 'es'
            ? 'Por favor, primero escribe una referencia biblica (ej: "Juan 3:16") para ver su analisis.'
            : 'Please first type a Bible reference (e.g., "John 3:16") to see its analysis.';
        await twilio.sendWhatsAppMessage(phone, response);
        return;
    }

    // Default response
    const response = language === 'es'
        ? `No entendi tu mensaje. Intenta:
- Una referencia biblica (ej: "Juan 3:16")
- AYUDA para ver comandos
- STOP para cancelar`
        : `I didn't understand your message. Try:
- A Bible reference (e.g., "John 3:16")
- HELP to see commands
- STOP to unsubscribe`;

    await twilio.sendWhatsAppMessage(phone, response);
}

/**
 * POST /api/webhook/status
 * Handle message status callbacks from Twilio
 */
router.post('/status', (req, res) => {
    const { MessageSid, MessageStatus, To } = req.body;
    console.log(`Message ${MessageSid} to ${To}: ${MessageStatus}`);
    res.status(200).send('');
});

module.exports = router;
