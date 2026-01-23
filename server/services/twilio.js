/**
 * Twilio WhatsApp Service
 */
const config = require('../config');

let twilioClient = null;

/**
 * Initialize Twilio client
 */
function initTwilio() {
    if (!config.twilio.accountSid || !config.twilio.authToken) {
        console.warn('Twilio credentials not configured. WhatsApp messaging will be disabled.');
        return null;
    }

    const twilio = require('twilio');
    twilioClient = twilio(config.twilio.accountSid, config.twilio.authToken);
    console.log('Twilio client initialized');
    return twilioClient;
}

/**
 * Get Twilio client instance
 */
function getClient() {
    return twilioClient;
}

/**
 * Format phone number for WhatsApp
 * @param {string} phone - Phone number
 * @returns {string} Formatted WhatsApp number
 */
function formatWhatsAppNumber(phone) {
    // Remove any existing 'whatsapp:' prefix
    let cleaned = phone.replace('whatsapp:', '').trim();

    // Remove spaces, dashes, parentheses
    cleaned = cleaned.replace(/[\s\-\(\)]/g, '');

    // Ensure it starts with +
    if (!cleaned.startsWith('+')) {
        cleaned = '+' + cleaned;
    }

    return `whatsapp:${cleaned}`;
}

/**
 * Send a WhatsApp message
 * @param {string} to - Recipient phone number
 * @param {string} body - Message body
 * @returns {Promise<object>} Message result
 */
async function sendWhatsAppMessage(to, body) {
    if (!twilioClient) {
        console.log('[Mock] Would send to', to, ':', body.substring(0, 100) + '...');
        return { sid: 'mock_' + Date.now(), status: 'mock' };
    }

    try {
        const message = await twilioClient.messages.create({
            from: config.twilio.whatsappNumber,
            to: formatWhatsAppNumber(to),
            body: body
        });

        console.log(`Message sent to ${to}: ${message.sid}`);
        return message;
    } catch (error) {
        console.error(`Failed to send message to ${to}:`, error.message);
        throw error;
    }
}

/**
 * Send a daily verse card
 * @param {string} to - Recipient phone number
 * @param {object} verse - Verse object
 * @param {string} language - Language code (en/es)
 * @returns {Promise<object>} Message result
 */
async function sendVerseCard(to, verse, language = 'en') {
    const reference = `${verse.book[language]} ${verse.chapter}:${verse.verse}`;
    const nudge = verse.analysis.nudge[language];

    const message = language === 'es'
        ? formatVerseMessageEs(reference, verse.text.es, nudge)
        : formatVerseMessageEn(reference, verse.text.en, nudge);

    return sendWhatsAppMessage(to, message);
}

/**
 * Format verse message in English
 */
function formatVerseMessageEn(reference, text, nudge) {
    return `*Selah Daily Verse*
━━━━━━━━━━━━━━━━━━━━

*${reference}*
"${text}"

━━━━━━━━━━━━━━━━━━━━
*Today's Nudge:* ${nudge}

Reply with a verse reference for analysis
(e.g., "John 3:16")

Reply STOP to unsubscribe
Reply TIME 8:00 AM to change delivery time
Reply HELP for commands`;
}

/**
 * Format verse message in Spanish
 */
function formatVerseMessageEs(reference, text, nudge) {
    return `*Selah Versiculo Diario*
━━━━━━━━━━━━━━━━━━━━

*${reference}*
"${text}"

━━━━━━━━━━━━━━━━━━━━
*Consejo de Hoy:* ${nudge}

Responde con una referencia para analisis
(ej: "Juan 3:16")

Responde STOP para cancelar
Responde HORA 8:00 AM para cambiar horario
Responde AYUDA para comandos`;
}

/**
 * Send verse analysis
 * @param {string} to - Recipient phone number
 * @param {object} verse - Verse object
 * @param {string} section - Analysis section to send
 * @param {string} language - Language code
 * @returns {Promise<object>} Message result
 */
async function sendAnalysis(to, verse, section, language = 'en') {
    const reference = `${verse.book[language]} ${verse.chapter}:${verse.verse}`;
    const sectionTitles = {
        en: {
            historical: 'Historical Context',
            economic: 'Economic Context',
            social: 'Social Context',
            political: 'Political Context',
            author: 'Author Background',
            neuroscience: 'Neuroscience Connection',
            behavioral: 'Behavioral Science',
            nudge: "Today's Practical Nudge"
        },
        es: {
            historical: 'Contexto Historico',
            economic: 'Contexto Economico',
            social: 'Contexto Social',
            political: 'Contexto Politico',
            author: 'Trasfondo del Autor',
            neuroscience: 'Conexion con Neurociencia',
            behavioral: 'Ciencia Conductual',
            nudge: 'Consejo Practico de Hoy'
        }
    };

    const title = sectionTitles[language][section] || section;
    const content = verse.analysis[section]?.[language] || 'Analysis not available.';

    const message = `*${reference}*
*${title}*

${content}

━━━━━━━━━━━━━━━━━━━━
${language === 'es'
    ? 'Responde con otra referencia o pregunta'
    : 'Reply with another verse reference or question'}`;

    return sendWhatsAppMessage(to, message);
}

/**
 * Send help message
 * @param {string} to - Recipient phone number
 * @param {string} language - Language code
 */
async function sendHelpMessage(to, language = 'en') {
    const message = language === 'es'
        ? `*Comandos de Selah*

*Buscar versiculo:* Escribe la referencia
  Ej: "Juan 3:16" o "Salmos 23"

*Cambiar horario:* HORA [hora]
  Ej: "HORA 8:00 AM"

*Cambiar idioma:* IDIOMA [en/es]
  Ej: "IDIOMA en"

*Cancelar suscripcion:* STOP

*Ver comandos:* AYUDA

Visita selah.app para mas funciones`
        : `*Selah Commands*

*Look up verse:* Type the reference
  Ex: "John 3:16" or "Psalm 23"

*Change time:* TIME [time]
  Ex: "TIME 8:00 AM"

*Change language:* LANG [en/es]
  Ex: "LANG es"

*Unsubscribe:* STOP

*See commands:* HELP

Visit selah.app for more features`;

    return sendWhatsAppMessage(to, message);
}

/**
 * Send confirmation message after subscription
 * @param {string} to - Recipient phone number
 * @param {string} time - Delivery time
 * @param {string} language - Language code
 */
async function sendSubscriptionConfirmation(to, time, language = 'en') {
    const message = language === 'es'
        ? `*Bienvenido a Selah!*

Recibiras un versiculo diario a las *${time}*.

Puedes responder con cualquier referencia biblica para recibir un analisis detallado.

Escribe AYUDA para ver todos los comandos.

Que tengas un dia bendecido!`
        : `*Welcome to Selah!*

You'll receive a daily verse at *${time}*.

You can reply with any Bible reference to get a detailed analysis.

Type HELP to see all commands.

Have a blessed day!`;

    return sendWhatsAppMessage(to, message);
}

/**
 * Send unsubscribe confirmation
 * @param {string} to - Recipient phone number
 * @param {string} language - Language code
 */
async function sendUnsubscribeConfirmation(to, language = 'en') {
    const message = language === 'es'
        ? `Has sido dado de baja de Selah.

Puedes volver a suscribirte en cualquier momento visitando selah.app o escribiendo SUSCRIBIR.

Bendiciones!`
        : `You've been unsubscribed from Selah.

You can resubscribe anytime by visiting selah.app or by texting SUBSCRIBE.

Blessings!`;

    return sendWhatsAppMessage(to, message);
}

module.exports = {
    initTwilio,
    getClient,
    formatWhatsAppNumber,
    sendWhatsAppMessage,
    sendVerseCard,
    sendAnalysis,
    sendHelpMessage,
    sendSubscriptionConfirmation,
    sendUnsubscribeConfirmation
};
