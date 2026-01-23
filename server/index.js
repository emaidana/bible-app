/**
 * Selah WhatsApp Server
 * Express server for WhatsApp integration with daily Bible verses
 */
require('dotenv').config({ path: '../.env' });

const express = require('express');
const cors = require('cors');
const path = require('path');

const config = require('./config');
const { initDB } = require('./services/db');
const { initTwilio } = require('./services/twilio');
const { initScheduler } = require('./services/scheduler');

// Import routes
const webhookRoutes = require('./routes/webhook');
const subscribeRoutes = require('./routes/subscribe');

// Create Express app
const app = express();

// Middleware
app.use(cors({
    origin: ['http://localhost:8080', 'http://127.0.0.1:8080', 'http://localhost:5500'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.path}`);
    next();
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        service: 'selah-whatsapp-server'
    });
});

// API Routes
app.use('/api/webhook', webhookRoutes);
app.use('/api/subscribe', subscribeRoutes);

// Serve static files from parent directory (for development)
app.use(express.static(path.join(__dirname, '..')));

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Not found',
        path: req.path
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});

// Initialize services and start server
async function start() {
    try {
        console.log('Starting Selah WhatsApp Server...\n');

        // Initialize database
        console.log('Initializing database...');
        initDB();

        // Initialize Twilio client
        console.log('Initializing Twilio client...');
        initTwilio();

        // Initialize scheduler
        console.log('Initializing scheduler...');
        initScheduler();

        // Start server
        const PORT = config.server.port;
        app.listen(PORT, () => {
            console.log(`
========================================
  Selah WhatsApp Server
========================================
  Server running on port ${PORT}
  API Base: http://localhost:${PORT}/api

  Endpoints:
  - POST   /api/subscribe      Subscribe to daily verses
  - DELETE /api/subscribe      Unsubscribe
  - PUT    /api/subscribe      Update settings
  - GET    /api/subscribe/status  Check subscription
  - POST   /api/webhook/incoming  Twilio webhook

  Health: http://localhost:${PORT}/api/health
========================================
`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

// Handle graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received. Shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('\nSIGINT received. Shutting down gracefully...');
    process.exit(0);
});

// Start the server
start();

module.exports = app;
