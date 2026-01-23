/**
 * Environment Configuration
 */
require('dotenv').config({ path: '../.env' });

module.exports = {
    // Twilio Configuration
    twilio: {
        accountSid: process.env.TWILIO_ACCOUNT_SID,
        authToken: process.env.TWILIO_AUTH_TOKEN,
        whatsappNumber: process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886'
    },

    // Database Configuration
    database: {
        path: process.env.DATABASE_PATH || './selah.db'
    },

    // Server Configuration
    server: {
        port: process.env.PORT || 3000,
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },

    // Scheduler Configuration
    scheduler: {
        checkInterval: '* * * * *' // Every minute
    }
};
