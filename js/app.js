/**
 * Daily Bible Verse App - Main Application Logic
 */

const BibleApp = {
    currentLanguage: 'en',
    currentTheme: 'light',
    currentVerse: null,
    dailyVerse: null,
    isShowingDaily: true,
    bibleVersion: 'KJV', // KJV or ESV (English only)
    isSearching: false,
    searchDebounceTimer: null,

    // Server API base URL (for WhatsApp integration)
    apiBaseUrl: 'http://localhost:3000/api',

    // Section order for progression
    sectionOrder: ['historical', 'economic', 'political', 'social', 'author', 'neuroscience', 'behavioral', 'nudge', 'prayer'],

    // Track completed sections for current verse
    completedSections: new Set(),

    // UI Text translations
    translations: {
        en: {
            appTitle: 'Berean',
            appTagline: 'Applied Biblical Wisdom for Modern Life',
            analysisHeader: 'The Berean Method',
            worldBehindText: 'The World Behind the Text',
            historicalTitle: 'Historical Context',
            economicTitle: 'Economic Context',
            socialTitle: 'Social Context',
            politicalTitle: 'Political Context',
            authorTitle: 'About the Author',
            mentalModelHeader: 'The Mental Model',
            corePrincipleTitle: 'Core Principle',
            neuroscienceTitle: 'Neuroscience',
            behavioralTitle: 'Behavioral Science',
            modernTranslationTitle: 'Modern Translation',
            modernTranslationSubtitle: 'What This Looks Like Today',
            praxisHeader: "This Week's Praxis",
            nudgeTitle: 'Your Behavioral Experiment',
            footerText: 'Transform Scripture from something you consume to something you practice',
            historyBtn: 'Library',
            historyTitle: 'Your Library',
            historyEmpty: 'Your studied verses will appear here.',
            searchPlaceholder: 'Search any verse or topic...',
            searchHint: 'Try "John 3:16" or "faith"',
            todaysVerse: "Today's Verse",
            backToDaily: '← Back to Today\'s Verse',
            noResults: 'No matching verses found. Try another search.',
            viewedOn: 'Studied on',
            sourcesLabel: 'Sources',
            consensusLabel: 'Historical Consensus',
            debateLabel: 'Scholarly Debate',
            interpretiveLabel: 'Interpretive',
            scienceHeader: 'The Science',
            markComplete: "I've read this section",
            prayerTitle: 'Prayer',
            prayerScienceTitle: 'Why Prayer Matters (Neuroscience)',
            progressTitle: 'Your Progress',
            progressIncomplete: 'Complete all sections to master this verse',
            progressComplete: 'Verse mastered!',
            verseComplete: 'Verse Mastered!',
            subscribeCta: 'Start Free',
            ctaHint: 'Weekly wisdom • Email or WhatsApp • Free forever',
            registerModalTitle: 'Join Berean',
            registerModalDesc: 'Every Monday, receive one verse with deep context, mental models, and a clear behavioral experiment for the week.',
            emailLabel: 'Email Address',
            versionLabel: 'Bible Version',
            versionHint: 'Spanish uses RVR 1960',
            deliveryLabel: 'Delivery Method',
            deliveryHint: 'Choose at least one',
            registerBtn: 'Start Free',
            registerSuccessTitle: "Welcome to Berean!",
            registerSuccessMsg: 'Your first verse arrives Monday morning.',
            registerPrivacy: 'One email per week. No spam. Unsubscribe anytime.',
            depthSeeker: 'Seeker',
            depthExplorer: 'Explorer',
            depthScholar: 'Scholar',
            depthSage: 'Sage',
            depthDayOf: 'Day {current} of {total}',
            whatsappBtn: 'Get Weekly Wisdom on WhatsApp',
            whatsappModalTitle: 'Subscribe to Berean',
            whatsappModalDesc: 'Receive weekly biblical wisdom with neuroscience and actionable practice.',
            phoneLabel: 'Phone Number',
            phonePlaceholder: '1 234 567 8900',
            phoneHint: 'Include country code (e.g., 1 for US)',
            timeLabel: 'Preferred Time',
            langLabel: 'Language',
            subscribeBtn: 'Join Berean',
            subscribeSuccessTitle: "You're in!",
            subscribeSuccessMsg: 'Check your WhatsApp for a welcome message.',
            whatsappPrivacy: 'Weekly wisdom only. Reply STOP anytime.'
        },
        es: {
            appTitle: 'Berean',
            appTagline: 'Sabiduría Bíblica Aplicada para la Vida Moderna',
            analysisHeader: 'El Método Berean',
            worldBehindText: 'El Mundo Detrás del Texto',
            historicalTitle: 'Contexto Histórico',
            economicTitle: 'Contexto Económico',
            socialTitle: 'Contexto Social',
            politicalTitle: 'Contexto Político',
            authorTitle: 'Sobre el Autor',
            mentalModelHeader: 'El Modelo Mental',
            corePrincipleTitle: 'Principio Central',
            neuroscienceTitle: 'Neurociencia',
            behavioralTitle: 'Ciencia Conductual',
            modernTranslationTitle: 'Traducción Moderna',
            modernTranslationSubtitle: 'Cómo Se Ve Esto Hoy',
            praxisHeader: 'Praxis de Esta Semana',
            nudgeTitle: 'Tu Experimento Conductual',
            footerText: 'Transforma la Escritura de algo que consumís a algo que practicás',
            historyBtn: 'Biblioteca',
            historyTitle: 'Tu Biblioteca',
            historyEmpty: 'Tus versículos estudiados aparecerán aquí.',
            searchPlaceholder: 'Buscar versículo o tema...',
            searchHint: 'Probá "Juan 3:16" o "fe"',
            todaysVerse: 'Versículo de Hoy',
            backToDaily: '← Volver al Versículo de Hoy',
            noResults: 'No se encontraron versículos. Probá otra búsqueda.',
            viewedOn: 'Estudiado el',
            sourcesLabel: 'Fuentes',
            consensusLabel: 'Consenso Histórico',
            debateLabel: 'Debate Académico',
            interpretiveLabel: 'Interpretativo',
            scienceHeader: 'La Ciencia',
            markComplete: 'He leído esta sección',
            prayerTitle: 'Oración',
            prayerScienceTitle: 'Por Qué la Oración Importa (Neurociencia)',
            progressTitle: 'Tu Progreso',
            progressIncomplete: 'Completa todas las secciones para dominar este versículo',
            progressComplete: '¡Versículo dominado!',
            verseComplete: '¡Versículo Dominado!',
            subscribeCta: 'Comenzar Gratis',
            ctaHint: 'Sabiduría semanal • Email o WhatsApp • Gratis siempre',
            registerModalTitle: 'Únete a Berean',
            registerModalDesc: 'Cada lunes, recibí un versículo con contexto profundo, modelos mentales y un experimento conductual claro para la semana.',
            emailLabel: 'Correo Electrónico',
            versionLabel: 'Versión de la Biblia',
            versionHint: 'Español usa RVR 1960',
            deliveryLabel: 'Método de Entrega',
            deliveryHint: 'Elegí al menos uno',
            registerBtn: 'Comenzar Gratis',
            registerSuccessTitle: '¡Bienvenido a Berean!',
            registerSuccessMsg: 'Tu primer versículo llega el lunes.',
            registerPrivacy: 'Un email por semana. Sin spam. Cancelá cuando quieras.',
            depthSeeker: 'Buscador',
            depthExplorer: 'Explorador',
            depthScholar: 'Erudito',
            depthSage: 'Sabio',
            depthDayOf: 'Día {current} de {total}',
            whatsappBtn: 'Recibir Sabiduría por WhatsApp',
            whatsappModalTitle: 'Suscribirse a Berean',
            whatsappModalDesc: 'Recibí sabiduría bíblica semanal con neurociencia y práctica aplicable.',
            phoneLabel: 'Número de Teléfono',
            phonePlaceholder: '54 9 11 1234 5678',
            phoneHint: 'Incluí el código de país (ej: 54 para Argentina)',
            timeLabel: 'Hora Preferida',
            langLabel: 'Idioma',
            subscribeBtn: 'Unirme a Berean',
            subscribeSuccessTitle: '¡Estás adentro!',
            subscribeSuccessMsg: 'Revisá tu WhatsApp para ver el mensaje de bienvenida.',
            whatsappPrivacy: 'Solo sabiduría semanal. Respondé STOP cuando quieras.'
        }
    },

    // Confidence level labels
    confidenceLabels: {
        consensus: { en: 'Historical Consensus', es: 'Consenso Histórico' },
        'scholarly-debate': { en: 'Scholarly Debate', es: 'Debate Académico' },
        interpretation: { en: 'Interpretive', es: 'Interpretativo' }
    },

    // Analysis section IDs
    analysisSections: ['historical', 'economic', 'political', 'social', 'author', 'neuroscience', 'behavioral', 'nudge', 'prayer'],

    /**
     * Initialize the application
     */
    init() {
        // Load language preference
        this.currentLanguage = StorageManager.getLanguage();

        // Load theme preference
        this.currentTheme = StorageManager.getTheme();
        this.applyTheme(this.currentTheme);

        // Load Bible version preference
        this.bibleVersion = StorageManager.getBibleVersion();
        this.updateVersionToggle();

        // Update streak on app load
        this.updateStreak();

        // Select and display verse
        this.loadDailyVerse();

        // Setup event listeners
        this.setupEventListeners();

        // Update UI language
        this.updateUILanguage();
        this.updateLanguageToggleLabel();

        // Render gamification elements
        this.renderStreakBadge();
        this.updateBookmarkButton();

        // Initialize progress tracking
        this.initProgressTracking();

        // Render prayer section
        this.renderPrayerSection();
    },

    /**
     * Update language toggle button label
     */
    updateLanguageToggleLabel() {
        const label = document.getElementById('currentLangLabel');
        if (label) {
            label.textContent = this.currentLanguage.toUpperCase();
        }
    },

    /**
     * Update version toggle UI
     */
    updateVersionToggle() {
        const versionToggle = document.getElementById('versionToggle');
        if (!versionToggle) return;

        // Hide toggle for Spanish (only RVR1960 available)
        if (this.currentLanguage === 'es') {
            versionToggle.style.display = 'none';
            return;
        }

        versionToggle.style.display = 'flex';
        const buttons = versionToggle.querySelectorAll('.version-btn');
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.version === this.bibleVersion);
        });
    },

    /**
     * Set Bible version
     * @param {string} version - 'KJV' or 'ESV'
     */
    setBibleVersion(version) {
        this.bibleVersion = version;
        StorageManager.setBibleVersion(version);
        this.updateVersionToggle();
        // Clear Bible service cache when version changes
        if (typeof BibleService !== 'undefined') {
            BibleService.clearCache();
        }
    },

    /**
     * Apply theme to the document
     * @param {string} theme - 'light', 'dark', or 'auto'
     */
    applyTheme(theme) {
        if (theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        } else {
            document.documentElement.setAttribute('data-theme', theme);
        }
    },

    /**
     * Toggle between light and dark theme
     */
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        StorageManager.setTheme(this.currentTheme);
        this.applyTheme(this.currentTheme);
    },

    // Depth level definitions
    depthLevels: [
        { name: 'Seeker', nameKey: 'depthSeeker', minDays: 0, maxDays: 6, color: 'bronze' },
        { name: 'Explorer', nameKey: 'depthExplorer', minDays: 7, maxDays: 29, color: 'silver' },
        { name: 'Scholar', nameKey: 'depthScholar', minDays: 30, maxDays: 89, color: 'gold' },
        { name: 'Sage', nameKey: 'depthSage', minDays: 90, maxDays: Infinity, color: 'platinum' }
    ],

    /**
     * Update streak based on visit pattern
     */
    updateStreak() {
        const lastDate = StorageManager.getStreakLastDate();
        const today = StorageManager.getTodayString();
        const yesterday = StorageManager.getYesterdayString();

        if (lastDate === today) {
            // Already counted today
            return;
        }

        if (lastDate === yesterday) {
            // Consecutive day - increment streak
            const streak = StorageManager.getStreakCount() + 1;
            StorageManager.setStreakCount(streak);
        } else if (!lastDate) {
            // First time - start streak at 1
            StorageManager.setStreakCount(1);
        } else {
            // Streak broken - reset to 1
            StorageManager.setStreakCount(1);
        }

        StorageManager.setStreakLastDate(today);
        StorageManager.incrementTotalDays();
    },

    /**
     * Get current depth level based on total days
     * @returns {object} Depth level info
     */
    getDepthLevel() {
        const totalDays = StorageManager.getTotalDays();
        for (let i = this.depthLevels.length - 1; i >= 0; i--) {
            if (totalDays >= this.depthLevels[i].minDays) {
                return { ...this.depthLevels[i], currentDays: totalDays };
            }
        }
        return { ...this.depthLevels[0], currentDays: totalDays };
    },

    /**
     * Render the streak badge
     */
    renderStreakBadge() {
        const streakCount = StorageManager.getStreakCount();
        const streakBadge = document.getElementById('streakBadge');
        const streakCountEl = document.getElementById('streakCount');

        if (streakCount > 0) {
            streakCountEl.textContent = streakCount;
            streakBadge.style.display = 'inline-flex';
        } else {
            streakBadge.style.display = 'none';
        }
    },

    /**
     * Render the depth indicator (if present in layout)
     */
    renderDepthIndicator() {
        const depthIndicator = document.getElementById('depthIndicator');
        if (!depthIndicator) return; // Element not in current layout

        const lang = this.currentLanguage;
        const depthInfo = this.getDepthLevel();
        const depthLabel = document.getElementById('depthLabel');
        const depthDays = document.getElementById('depthDays');
        const depthFill = document.getElementById('depthFill');

        if (!depthLabel || !depthDays || !depthFill) return;

        // Set level name
        depthLabel.textContent = this.translations[lang][depthInfo.nameKey];

        // Calculate progress within current level
        const daysInLevel = depthInfo.currentDays - depthInfo.minDays;
        const levelRange = (depthInfo.maxDays === Infinity) ? 100 : depthInfo.maxDays - depthInfo.minDays + 1;
        const nextMilestone = depthInfo.maxDays === Infinity ? depthInfo.currentDays : depthInfo.maxDays + 1;
        const progress = depthInfo.maxDays === Infinity ? 100 : Math.min((daysInLevel / levelRange) * 100, 100);

        // Set progress text
        const dayText = this.translations[lang].depthDayOf
            .replace('{current}', depthInfo.currentDays)
            .replace('{total}', nextMilestone);
        depthDays.textContent = dayText;

        // Set progress bar
        depthFill.style.width = `${progress}%`;

        // Set color class
        depthIndicator.className = `depth-indicator depth-${depthInfo.color}`;
    },

    /**
     * Toggle bookmark for current verse
     */
    toggleBookmark() {
        if (!this.currentVerse) return;

        const isNowBookmarked = StorageManager.toggleBookmark(this.currentVerse.id);
        this.updateBookmarkButton();

        // Visual feedback
        const btn = document.getElementById('bookmarkBtn');
        btn.classList.add('pulse');
        setTimeout(() => btn.classList.remove('pulse'), 300);
    },

    /**
     * Update bookmark button state
     */
    updateBookmarkButton() {
        if (!this.currentVerse) return;

        const btn = document.getElementById('bookmarkBtn');
        const icon = btn.querySelector('.bookmark-icon');
        const isBookmarked = StorageManager.isBookmarked(this.currentVerse.id);

        if (isBookmarked) {
            btn.classList.add('active');
            icon.textContent = '♥';
        } else {
            btn.classList.remove('active');
            icon.textContent = '♡';
        }
    },

    /**
     * Handle commitment checkbox change
     * @param {boolean} isChecked - Whether checkbox is checked
     */
    handleCommitment(isChecked) {
        if (!isChecked || !this.currentVerse) return;
        if (!this.currentVerse.analysis || !this.currentVerse.analysis.nudge) return;

        const commitment = {
            verseId: this.currentVerse.id,
            date: StorageManager.getTodayString(),
            nudgeText: this.currentVerse.analysis.nudge[this.currentLanguage]
        };

        StorageManager.addCommitment(commitment);

        // Visual feedback
        const checkbox = document.getElementById('dailyCommitment');
        if (checkbox) {
            const label = checkbox.closest('.commitment-checkbox');
            if (label) label.classList.add('committed');
        }
    },

    /**
     * Check if already committed today
     */
    checkTodayCommitment() {
        const commitments = StorageManager.getCommitments();
        const today = StorageManager.getTodayString();
        const checkbox = document.getElementById('dailyCommitment');

        if (!checkbox) return;

        const alreadyCommitted = commitments.some(c =>
            c.verseId === this.currentVerse?.id && c.date === today
        );

        if (alreadyCommitted) {
            checkbox.checked = true;
            const label = checkbox.closest('.commitment-checkbox');
            if (label) label.classList.add('committed');
        } else {
            checkbox.checked = false;
            const label = checkbox.closest('.commitment-checkbox');
            if (label) label.classList.remove('committed');
        }
    },

    /**
     * Load today's verse or select a new one
     */
    loadDailyVerse() {
        const stored = StorageManager.getCurrentVerse();

        if (stored) {
            // Use today's stored verse
            this.dailyVerse = this.getVerseById(stored.verseId);
        } else {
            // Select a new verse
            this.dailyVerse = this.selectNewVerse();
            StorageManager.setCurrentVerse(this.dailyVerse.id);
            StorageManager.addViewedVerse(this.dailyVerse.id);
        }

        this.currentVerse = this.dailyVerse;
        this.isShowingDaily = true;
        this.renderVerse();
        this.updateDailyBadge();
    },

    /**
     * Get a verse by its ID
     * @param {string} id - The verse ID
     * @returns {object|null} The verse object or null
     */
    getVerseById(id) {
        return BibleVerses.find(v => v.id === id) || BibleVerses[0];
    },

    /**
     * Select a new verse that hasn't been recently viewed
     * @returns {object} The selected verse
     */
    selectNewVerse() {
        const viewedIds = StorageManager.getViewedVerses();

        // Filter out recently viewed verses
        let availableVerses = BibleVerses.filter(v => !viewedIds.includes(v.id));

        // If all verses have been viewed, reset and use all
        if (availableVerses.length === 0) {
            StorageManager.resetViewedHistory();
            availableVerses = BibleVerses;
        }

        // Random selection
        const randomIndex = Math.floor(Math.random() * availableVerses.length);
        return availableVerses[randomIndex];
    },

    /**
     * Display a specific verse (from search or history)
     * @param {object} verse - The verse to display
     */
    displayVerse(verse) {
        this.currentVerse = verse;
        this.isShowingDaily = (verse.id === this.dailyVerse?.id);

        // Show analysis sections for local verses
        if (!verse.isAPIVerse) {
            this.showAnalysisSections();
            this.initProgressTracking();
            this.renderPrayerSection();
        } else {
            // Hide progress for API verses without full analysis
            const completionSection = document.getElementById('completionSection');
            if (completionSection) completionSection.style.display = 'none';
        }

        this.renderVerse();
        this.updateDailyBadge();
        this.updateBookmarkButton();

        // Scroll to verse
        document.querySelector('.verse-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    },

    /**
     * Return to today's daily verse
     */
    backToDaily() {
        this.currentVerse = this.dailyVerse;
        this.isShowingDaily = true;
        this.renderVerse();
        this.updateDailyBadge();
    },

    /**
     * Update the daily badge visibility
     */
    updateDailyBadge() {
        // These elements may not exist in the new layout
        const badge = document.getElementById('dailyBadge');
        const backBtn = document.getElementById('backToDaily');

        if (badge) {
            if (this.isShowingDaily) {
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        if (backBtn) {
            backBtn.style.display = this.isShowingDaily ? 'none' : 'inline-block';
        }
    },

    /**
     * Render the current verse to the DOM
     */
    renderVerse() {
        const verse = this.currentVerse;
        const lang = this.currentLanguage;

        // Verse reference
        const verseBook = document.getElementById('verseBook');
        const verseChapter = document.getElementById('verseChapter');
        const verseNumber = document.getElementById('verseNumber');
        const verseText = document.getElementById('verseText');

        if (verseBook) verseBook.textContent = verse.book[lang];
        if (verseChapter) verseChapter.textContent = verse.chapter;
        if (verseNumber) verseNumber.textContent = verse.verse;
        if (verseText) verseText.textContent = verse.text[lang];

        // Only render analysis if verse has analysis data
        if (!verse.analysis) return;

        // Render each analysis section with sources, badges, and disclaimers
        this.analysisSections.forEach(sectionId => {
            const section = verse.analysis[sectionId];
            if (!section) return;

            // Content
            const contentEl = document.getElementById(`${sectionId}Content`);
            if (contentEl && section[lang]) {
                contentEl.textContent = section[lang];
            }

            // Confidence badge
            this.renderConfidenceBadge(sectionId, section.confidenceLevel, lang);

            // Sources
            this.renderAnalysisSources(sectionId, section.sources, lang);

            // Disclaimer
            this.renderDisclaimer(sectionId, section.disclaimer, lang);
        });

        // Render prayer section separately (it has different structure)
        this.renderPrayerSection();
    },

    /**
     * Render sources for an analysis section
     * @param {string} sectionId - The section identifier
     * @param {array} sources - Array of source objects
     * @param {string} lang - Current language
     */
    renderAnalysisSources(sectionId, sources, lang) {
        const container = document.getElementById(`${sectionId}Sources`);
        if (!container) return;

        if (!sources || sources.length === 0) {
            container.innerHTML = '';
            return;
        }

        const sourceList = sources.map(s => {
            const citation = lang === 'es' && s.citationEs ? s.citationEs : s.citation;
            return `<li class="source-item" data-type="${s.type}">${citation}</li>`;
        }).join('');

        container.innerHTML = `<details class="sources-dropdown">
            <summary>${this.translations[lang].sourcesLabel}</summary>
            <ul class="sources-list">${sourceList}</ul>
        </details>`;
    },

    /**
     * Render confidence badge for an analysis section
     * @param {string} sectionId - The section identifier
     * @param {string} level - Confidence level
     * @param {string} lang - Current language
     */
    renderConfidenceBadge(sectionId, level, lang) {
        const badge = document.getElementById(`${sectionId}Confidence`);
        if (!badge) return;

        if (!level || !this.confidenceLabels[level]) {
            badge.textContent = '';
            badge.className = 'confidence-badge';
            return;
        }
        badge.textContent = this.confidenceLabels[level][lang];
        badge.className = `confidence-badge confidence-${level}`;
    },

    /**
     * Render disclaimer for an analysis section
     * @param {string} sectionId - The section identifier
     * @param {object} disclaimer - Disclaimer object with en/es keys
     * @param {string} lang - Current language
     */
    renderDisclaimer(sectionId, disclaimer, lang) {
        const el = document.getElementById(`${sectionId}Disclaimer`);
        if (!el) return;

        if (!disclaimer || !disclaimer[lang]) {
            el.textContent = '';
            el.classList.remove('visible');
            return;
        }
        el.textContent = disclaimer[lang];
        el.classList.add('visible');
    },

    /**
     * Setup event listeners
     */
    setupEventListeners() {
        // Theme toggle
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.toggleTheme());
        }

        // Version toggle (KJV/ESV)
        const versionToggle = document.getElementById('versionToggle');
        if (versionToggle) {
            versionToggle.addEventListener('click', (e) => {
                const btn = e.target.closest('.version-btn');
                if (btn && btn.dataset.version) {
                    this.setBibleVersion(btn.dataset.version);
                }
            });
        }

        // Language toggle
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.addEventListener('click', () => this.toggleLanguage());
        }

        // History button
        const historyBtn = document.getElementById('historyBtn');
        if (historyBtn) {
            historyBtn.addEventListener('click', () => this.openHistory());
        }

        // Close history modal
        const closeHistory = document.getElementById('closeHistory');
        if (closeHistory) {
            closeHistory.addEventListener('click', () => this.closeHistory());
        }

        // Close modal on overlay click
        const historyModal = document.getElementById('historyModal');
        if (historyModal) {
            historyModal.addEventListener('click', (e) => {
                if (e.target === historyModal) this.closeHistory();
            });
        }

        // Bookmark button
        const bookmarkBtn = document.getElementById('bookmarkBtn');
        if (bookmarkBtn) {
            bookmarkBtn.addEventListener('click', () => this.toggleBookmark());
        }

        // CTA buttons - open register modal
        const ctaButtons = [
            document.getElementById('navCtaBtn'),
            document.getElementById('heroCtaBtn'),
            document.getElementById('pricingFreeBtn'),
            document.getElementById('finalCtaBtn')
        ];
        ctaButtons.forEach(btn => {
            if (btn) {
                btn.addEventListener('click', () => this.openRegisterModal());
            }
        });

        // Close register modal
        const closeRegister = document.getElementById('closeRegister');
        if (closeRegister) {
            closeRegister.addEventListener('click', () => this.closeRegisterModal());
        }

        // Close register modal on overlay click
        const registerModal = document.getElementById('registerModal');
        if (registerModal) {
            registerModal.addEventListener('click', (e) => {
                if (e.target === registerModal) this.closeRegisterModal();
            });
        }

        // Register form
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', (e) => this.handleRegister(e));
        }

        // Language select in register form - toggle version visibility
        const langSelectReg = document.getElementById('langSelect');
        if (langSelectReg) {
            langSelectReg.addEventListener('change', () => this.updateVersionVisibility());
        }

        // Section completion checkboxes
        document.querySelectorAll('.section-check').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                this.handleSectionComplete(e.target.dataset.section, e.target.checked);
            });
        });

        // Share button
        const shareBtn = document.getElementById('shareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => this.shareToWhatsApp());
        }

        // Search input
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => this.handleSearch(e.target.value));
            searchInput.addEventListener('focus', (e) => this.handleSearch(e.target.value));
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.performSearch();
                if (e.key === 'Escape') this.closeSuggestions();
            });
        }

        // Close suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                this.closeSuggestions();
            }
        });

        // Keyboard shortcut for search (Ctrl/Cmd + K)
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                const searchInput = document.getElementById('searchInput');
                if (searchInput) searchInput.focus();
            }
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    },

    /**
     * Handle search input with debouncing
     * @param {string} query - Search query
     */
    handleSearch(query) {
        const suggestions = document.getElementById('searchSuggestions');

        if (!query.trim()) {
            suggestions.classList.remove('active');
            return;
        }

        // Debounce the search
        if (this.searchDebounceTimer) {
            clearTimeout(this.searchDebounceTimer);
        }

        this.searchDebounceTimer = setTimeout(() => {
            this.performLiveSearch(query);
        }, 150);
    },

    /**
     * Perform live search with API and local data
     * @param {string} query - Search query
     */
    async performLiveSearch(query) {
        const suggestions = document.getElementById('searchSuggestions');
        const lang = this.currentLanguage;

        if (!query.trim()) {
            suggestions.classList.remove('active');
            return;
        }

        const normalizedQuery = query.toLowerCase().trim();

        // First, check local BibleVerses for analysis-rich content
        const localMatches = BibleVerses.filter(verse => {
            const bookEn = verse.book.en.toLowerCase();
            const bookEs = verse.book.es.toLowerCase();
            const reference = `${verse.book[lang]} ${verse.chapter}:${verse.verse}`.toLowerCase();
            const referenceAlt = `${verse.book[lang === 'en' ? 'es' : 'en']} ${verse.chapter}:${verse.verse}`.toLowerCase();
            const textPreview = verse.text[lang].toLowerCase();

            return bookEn.includes(normalizedQuery) ||
                   bookEs.includes(normalizedQuery) ||
                   reference.includes(normalizedQuery) ||
                   referenceAlt.includes(normalizedQuery) ||
                   textPreview.includes(normalizedQuery);
        });

        // Try to get autocomplete suggestions from Bible API
        let apiSuggestions = [];
        if (typeof BibleService !== 'undefined') {
            try {
                apiSuggestions = await BibleService.getAutocompleteSuggestions(
                    query,
                    lang,
                    this.bibleVersion
                );
            } catch (e) {
                console.warn('API autocomplete error:', e);
            }
        }

        // Combine and render suggestions
        this.renderEnhancedSuggestions(localMatches, apiSuggestions, query);
    },

    /**
     * Render enhanced search suggestions
     * @param {array} localMatches - Matches from local BibleVerses
     * @param {array} apiSuggestions - Suggestions from Bible API
     * @param {string} query - Original query
     */
    renderEnhancedSuggestions(localMatches, apiSuggestions, query) {
        const suggestions = document.getElementById('searchSuggestions');
        const lang = this.currentLanguage;
        let html = '';

        // Local matches with analysis (prioritized)
        if (localMatches.length > 0) {
            html += '<div class="suggestion-group"><div class="suggestion-group-label">With Analysis</div>';
            html += localMatches.slice(0, 5).map(verse => {
                const reference = `${verse.book[lang]} ${verse.chapter}:${verse.verse}`;
                const preview = verse.text[lang].substring(0, 50) + '...';
                return `
                    <div class="suggestion-item" data-verse-id="${verse.id}" data-source="local">
                        <span class="suggestion-reference">${reference}</span>
                        <span class="suggestion-preview">${preview}</span>
                        <span class="suggestion-badge">Analysis</span>
                    </div>
                `;
            }).join('');
            html += '</div>';
        }

        // API suggestions (full Bible)
        if (apiSuggestions.length > 0) {
            const apiItems = apiSuggestions.filter(s =>
                !localMatches.some(lm => {
                    const localRef = `${lm.book[lang]} ${lm.chapter}:${lm.verse}`.toLowerCase();
                    return localRef === s.display?.toLowerCase();
                })
            );

            if (apiItems.length > 0) {
                html += '<div class="suggestion-group"><div class="suggestion-group-label">All Bible</div>';
                html += apiItems.slice(0, 5).map(item => {
                    const preview = item.preview || '';
                    return `
                        <div class="suggestion-item" data-reference="${item.text}" data-source="api" data-type="${item.type}">
                            <span class="suggestion-reference">${item.display}</span>
                            ${preview ? `<span class="suggestion-preview">${preview}</span>` : ''}
                        </div>
                    `;
                }).join('');
                html += '</div>';
            }
        }

        if (!html) {
            html = `<div class="no-results">${this.translations[lang].noResults}</div>`;
        }

        suggestions.innerHTML = html;

        // Add click handlers
        suggestions.querySelectorAll('.suggestion-item').forEach(item => {
            item.addEventListener('click', () => {
                const source = item.dataset.source;
                if (source === 'local') {
                    const verseId = item.dataset.verseId;
                    const verse = this.getVerseById(verseId);
                    this.displayVerse(verse);
                } else {
                    // API result - fetch and display
                    const reference = item.dataset.reference;
                    this.fetchAndDisplayVerse(reference);
                }
                this.closeSuggestions();
                document.getElementById('searchInput').value = '';
            });
        });

        suggestions.classList.add('active');
    },

    /**
     * Fetch verse from API and display it
     * @param {string} reference - Verse reference like "John 3:16"
     */
    async fetchAndDisplayVerse(reference) {
        if (!reference || typeof BibleService === 'undefined') return;

        try {
            // Show loading state
            const verseCard = document.querySelector('.verse-card');
            verseCard.classList.add('loading');

            const result = await BibleService.getVerseByReference(
                reference,
                this.currentLanguage,
                this.bibleVersion
            );

            if (result && result.verses && result.verses.length > 0) {
                // Check if we have local analysis for this verse
                const localVerse = this.findLocalVerseByReference(result.reference);

                if (localVerse) {
                    // Use local verse with analysis
                    this.displayVerse(localVerse);
                } else {
                    // Create a display object from API data
                    this.displayAPIVerse(result);
                }
            }
        } catch (error) {
            console.error('Error fetching verse:', error);
            // Show error message
            const lang = this.currentLanguage;
            alert(lang === 'es'
                ? 'No se pudo encontrar el versículo. Intenta de nuevo.'
                : 'Could not find the verse. Please try again.');
        } finally {
            const verseCard = document.querySelector('.verse-card');
            verseCard.classList.remove('loading');
        }
    },

    /**
     * Find local verse by parsed reference
     * @param {object} ref - Parsed reference object
     * @returns {object|null} Local verse or null
     */
    findLocalVerseByReference(ref) {
        if (!ref) return null;

        return BibleVerses.find(v => {
            const bookMatch =
                v.book.en.toLowerCase() === ref.book.toLowerCase() ||
                v.book.es.toLowerCase() === ref.book.toLowerCase();
            return bookMatch && v.chapter === ref.chapter && v.verse === ref.verse;
        }) || null;
    },

    /**
     * Display a verse from the API (without local analysis)
     * @param {object} result - API result with reference and verses
     */
    displayAPIVerse(result) {
        const lang = this.currentLanguage;
        const ref = result.reference;

        // Create a verse-like object for display
        const apiVerse = {
            id: `api-${ref.bookNum}-${ref.chapter}-${ref.verse}`,
            book: { en: ref.book, es: ref.book },
            chapter: ref.chapter,
            verse: ref.verse,
            text: { en: result.text, es: result.text },
            isAPIVerse: true, // Flag to indicate no local analysis
            analysis: null
        };

        this.currentVerse = apiVerse;
        this.isShowingDaily = false;

        // Render verse reference and text
        document.getElementById('verseBook').textContent = ref.book;
        document.getElementById('verseChapter').textContent = ref.chapter;
        document.getElementById('verseNumber').textContent = ref.verse;
        document.getElementById('verseText').textContent = result.text;

        // Hide analysis sections for API verses
        this.hideAnalysisSections();
        this.updateDailyBadge();

        // Scroll to verse
        document.querySelector('.verse-card').scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Add to search history
        StorageManager.addSearchHistory(`${ref.book} ${ref.chapter}:${ref.verse}`);
    },

    /**
     * Hide analysis sections (for API verses without local analysis)
     */
    hideAnalysisSections() {
        const sections = document.querySelectorAll('.context-section, .nudge-section, .science-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
    },

    /**
     * Show analysis sections (for local verses with analysis)
     */
    showAnalysisSections() {
        const sections = document.querySelectorAll('.context-section, .nudge-section, .science-section');
        sections.forEach(section => {
            section.style.display = '';
        });
    },

    /**
     * Perform search (when clicking button or pressing Enter)
     */
    async performSearch() {
        const query = document.getElementById('searchInput').value.trim();
        if (!query) return;

        const lang = this.currentLanguage;
        const normalizedQuery = query.toLowerCase();

        // Try to find exact match in local data first
        const exactMatch = BibleVerses.find(verse => {
            const reference = `${verse.book[lang]} ${verse.chapter}:${verse.verse}`.toLowerCase();
            const referenceAlt = `${verse.book[lang === 'en' ? 'es' : 'en']} ${verse.chapter}:${verse.verse}`.toLowerCase();
            return reference === normalizedQuery || referenceAlt === normalizedQuery;
        });

        if (exactMatch) {
            this.displayVerse(exactMatch);
            this.closeSuggestions();
            document.getElementById('searchInput').value = '';
            return;
        }

        // Try API lookup for full Bible
        if (typeof BibleService !== 'undefined') {
            await this.fetchAndDisplayVerse(query);
            this.closeSuggestions();
            document.getElementById('searchInput').value = '';
        }
    },

    /**
     * Close search suggestions
     */
    closeSuggestions() {
        document.getElementById('searchSuggestions').classList.remove('active');
    },

    /**
     * Open history modal
     */
    openHistory() {
        this.renderHistory();
        const modal = document.getElementById('historyModal');
        if (modal) modal.classList.add('active');
    },

    /**
     * Close history modal
     */
    closeHistory() {
        const modal = document.getElementById('historyModal');
        if (modal) modal.classList.remove('active');
    },

    /**
     * Render history list
     */
    renderHistory() {
        const historyList = document.getElementById('historyList');
        const historyEmpty = document.getElementById('historyEmpty');
        const viewedVerses = StorageManager.getViewedVerses();
        const lang = this.currentLanguage;

        if (viewedVerses.length === 0) {
            historyList.innerHTML = '';
            historyEmpty.classList.remove('hidden');
            return;
        }

        historyEmpty.classList.add('hidden');

        historyList.innerHTML = viewedVerses.map(verseId => {
            const verse = this.getVerseById(verseId);
            if (!verse) return '';

            const reference = `${verse.book[lang]} ${verse.chapter}:${verse.verse}`;
            const preview = verse.text[lang].substring(0, 60) + '...';

            return `
                <li class="history-item" data-verse-id="${verse.id}">
                    <div class="history-item-reference">${reference}</div>
                    <div class="history-item-preview">${preview}</div>
                </li>
            `;
        }).join('');

        // Add click handlers
        historyList.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', () => {
                const verseId = item.dataset.verseId;
                const verse = this.getVerseById(verseId);
                this.displayVerse(verse);
                this.closeHistory();
            });
        });
    },

    /**
     * Toggle between English and Spanish
     */
    toggleLanguage() {
        this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en';
        StorageManager.setLanguage(this.currentLanguage);

        this.updateUILanguage();
        this.updateLanguageToggleLabel();
        this.renderVerse();
        this.updateVersionToggle();

        // Clear Bible service cache when language changes
        if (typeof BibleService !== 'undefined') {
            BibleService.clearCache();
        }

        // Update language select in register modal
        const langSelect = document.getElementById('langSelect');
        if (langSelect) langSelect.value = this.currentLanguage;
    },

    /**
     * Open WhatsApp subscribe modal
     */
    openWhatsAppModal() {
        // Reset form state
        document.getElementById('subscribeForm').style.display = 'flex';
        document.getElementById('subscribeSuccess').style.display = 'none';
        document.getElementById('subscribeError').style.display = 'none';
        document.getElementById('phoneInput').value = '';

        // Set language select to current language
        document.getElementById('langSelect').value = this.currentLanguage;

        // Show modal
        document.getElementById('whatsappModal').classList.add('active');
    },

    /**
     * Close WhatsApp subscribe modal
     */
    closeWhatsAppModal() {
        document.getElementById('whatsappModal').classList.remove('active');
    },

    /**
     * Handle subscribe form submission
     * @param {Event} e - Form submit event
     */
    async handleSubscribe(e) {
        e.preventDefault();

        const phoneInput = document.getElementById('phoneInput');
        const timeSelect = document.getElementById('timeSelect');
        const langSelect = document.getElementById('langSelect');
        const submitBtn = document.getElementById('subscribeSubmit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const errorDiv = document.getElementById('subscribeError');
        const errorMsg = document.getElementById('subscribeErrorMsg');

        // Get values
        const phone = phoneInput.value.trim();
        const preferredTime = timeSelect.value;
        const language = langSelect.value;

        // Basic validation
        if (!phone) {
            errorMsg.textContent = this.currentLanguage === 'es'
                ? 'Por favor ingresa tu número de teléfono.'
                : 'Please enter your phone number.';
            errorDiv.style.display = 'block';
            return;
        }

        // Show loading state
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitBtn.disabled = true;
        errorDiv.style.display = 'none';

        try {
            // Detect user's timezone
            const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/New_York';

            const response = await fetch(`${this.apiBaseUrl}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phone: '+' + phone.replace(/[^\d]/g, ''),
                    preferredTime,
                    timezone,
                    language
                })
            });

            const data = await response.json();

            if (data.success) {
                // Show success message
                document.getElementById('subscribeForm').style.display = 'none';
                document.getElementById('subscribeSuccess').style.display = 'block';
            } else {
                // Show error
                errorMsg.textContent = data.error || (this.currentLanguage === 'es'
                    ? 'Error al suscribirse. Por favor intenta de nuevo.'
                    : 'Failed to subscribe. Please try again.');
                errorDiv.style.display = 'block';
            }
        } catch (error) {
            console.error('Subscribe error:', error);
            errorMsg.textContent = this.currentLanguage === 'es'
                ? 'No se pudo conectar al servidor. Verifica que el servidor esté ejecutándose.'
                : 'Could not connect to server. Make sure the server is running.';
            errorDiv.style.display = 'block';
        } finally {
            // Reset button state
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    },

    /**
     * Initialize progress tracking for current verse
     */
    initProgressTracking() {
        this.completedSections = new Set();

        // Load saved progress for this verse
        if (this.currentVerse) {
            const savedProgress = StorageManager.getVerseProgress(this.currentVerse.id);
            if (savedProgress) {
                savedProgress.forEach(s => this.completedSections.add(s));
            }
        }

        // Set up checkboxes
        document.querySelectorAll('.section-check').forEach(checkbox => {
            const section = checkbox.dataset.section;
            checkbox.checked = this.completedSections.has(section);

            // Update status indicator
            this.updateSectionStatus(section);
        });

        this.updateProgress();
    },

    /**
     * Handle section completion checkbox
     * @param {string} section - Section ID
     * @param {boolean} completed - Completion state
     */
    handleSectionComplete(section, completed) {
        if (completed) {
            this.completedSections.add(section);
        } else {
            this.completedSections.delete(section);
        }

        // Save progress
        if (this.currentVerse) {
            StorageManager.saveVerseProgress(this.currentVerse.id, Array.from(this.completedSections));
        }

        // Update UI
        this.updateSectionStatus(section);
        this.updateProgress();
    },

    /**
     * Update section status indicator
     * @param {string} section - Section ID
     */
    updateSectionStatus(section) {
        const statusEl = document.querySelector(`.section-status[data-section="${section}"]`);
        if (statusEl) {
            statusEl.classList.toggle('completed', this.completedSections.has(section));
        }
    },

    /**
     * Update overall progress display
     */
    updateProgress() {
        const totalSections = this.sectionOrder.length;
        const completedCount = this.completedSections.size;
        const percentage = (completedCount / totalSections) * 100;

        // Update progress text
        const progressText = document.getElementById('progressText');
        if (progressText) {
            progressText.textContent = `${completedCount}/${totalSections}`;
        }

        // Update progress ring
        const progressRing = document.getElementById('progressRing');
        if (progressRing) {
            const circumference = 2 * Math.PI * 45; // r=45
            const offset = circumference - (percentage / 100) * circumference;
            progressRing.style.strokeDashoffset = offset;
        }

        // Update status text
        const progressStatus = document.getElementById('progressStatus');
        const completionBadge = document.getElementById('completionBadge');
        const lang = this.currentLanguage;

        if (completedCount === totalSections) {
            if (progressStatus) {
                progressStatus.textContent = this.translations[lang].progressComplete;
            }
            if (completionBadge) {
                completionBadge.style.display = 'flex';
            }

            // Record completion
            if (this.currentVerse) {
                StorageManager.recordVerseCompletion(this.currentVerse.id);
            }
        } else {
            if (progressStatus) {
                progressStatus.textContent = this.translations[lang].progressIncomplete;
            }
            if (completionBadge) {
                completionBadge.style.display = 'none';
            }
        }
    },

    /**
     * Open registration modal
     */
    openRegisterModal() {
        // Reset form state
        document.getElementById('registerForm').style.display = 'flex';
        document.getElementById('registerSuccess').style.display = 'none';
        document.getElementById('registerError').style.display = 'none';

        // Set language select to current language
        document.getElementById('langSelect').value = this.currentLanguage;

        // Set version select
        document.getElementById('versionSelect').value = this.bibleVersion;

        // Toggle version visibility based on language
        this.updateVersionVisibility();

        // Show modal
        document.getElementById('registerModal').classList.add('active');
    },

    /**
     * Close registration modal
     */
    closeRegisterModal() {
        document.getElementById('registerModal').classList.remove('active');
    },

    /**
     * Update version selector visibility based on language
     */
    updateVersionVisibility() {
        const versionGroup = document.getElementById('versionGroup');
        const langSelect = document.getElementById('langSelect');
        if (versionGroup && langSelect) {
            versionGroup.style.display = langSelect.value === 'es' ? 'none' : 'block';
        }
    },

    /**
     * Handle registration form submission
     * @param {Event} e - Form submit event
     */
    async handleRegister(e) {
        e.preventDefault();

        const emailInput = document.getElementById('emailInput');
        const phoneInput = document.getElementById('phoneInput');
        const langSelect = document.getElementById('langSelect');
        const versionSelect = document.getElementById('versionSelect');
        const deliveryEmail = document.getElementById('deliveryEmail');
        const deliveryWhatsApp = document.getElementById('deliveryWhatsApp');
        const submitBtn = document.getElementById('registerSubmit');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        const errorDiv = document.getElementById('registerError');
        const errorMsg = document.getElementById('registerErrorMsg');

        // Get values
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const language = langSelect.value;
        const version = versionSelect.value;
        const wantsEmail = deliveryEmail.checked;
        const wantsWhatsApp = deliveryWhatsApp.checked;

        // Validation
        if (!email) {
            errorMsg.textContent = this.currentLanguage === 'es'
                ? 'Por favor ingresá tu email.'
                : 'Please enter your email address.';
            errorDiv.style.display = 'block';
            return;
        }

        if (!wantsEmail && !wantsWhatsApp) {
            errorMsg.textContent = this.currentLanguage === 'es'
                ? 'Por favor elegí al menos un método de entrega.'
                : 'Please choose at least one delivery method.';
            errorDiv.style.display = 'block';
            return;
        }

        if (wantsWhatsApp && !phone) {
            errorMsg.textContent = this.currentLanguage === 'es'
                ? 'Por favor ingresá tu número de teléfono para WhatsApp.'
                : 'Please enter your phone number for WhatsApp delivery.';
            errorDiv.style.display = 'block';
            return;
        }

        // Show loading
        btnText.style.display = 'none';
        btnLoading.style.display = 'flex';
        submitBtn.disabled = true;
        errorDiv.style.display = 'none';

        try {
            const response = await fetch(`${this.apiBaseUrl}/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    phone: phone ? '+' + phone.replace(/[^\d]/g, '') : null,
                    language,
                    version,
                    deliveryEmail: wantsEmail,
                    deliveryWhatsApp: wantsWhatsApp
                })
            });

            const data = await response.json();

            if (data.success) {
                document.getElementById('registerForm').style.display = 'none';
                document.getElementById('registerSuccess').style.display = 'block';
            } else {
                errorMsg.textContent = data.error || 'Registration failed. Please try again.';
                errorDiv.style.display = 'block';
            }
        } catch (error) {
            console.error('Registration error:', error);
            errorMsg.textContent = this.currentLanguage === 'es'
                ? 'No se pudo conectar al servidor.'
                : 'Could not connect to server.';
            errorDiv.style.display = 'block';
        } finally {
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    },

    /**
     * Render prayer section
     */
    renderPrayerSection() {
        const verse = this.currentVerse;
        const lang = this.currentLanguage;

        const prayerCard = document.querySelector('.prayer-card');
        if (!prayerCard) return;

        if (!verse || !verse.analysis || !verse.analysis.prayer) {
            // Hide prayer card if no prayer data
            prayerCard.style.display = 'none';
            return;
        }

        prayerCard.style.display = '';

        const prayerContent = document.getElementById('prayerContent');
        const prayerScienceContent = document.getElementById('prayerScienceContent');

        // Prayer text is directly in verse.analysis.prayer[lang]
        if (prayerContent && verse.analysis.prayer[lang]) {
            prayerContent.textContent = verse.analysis.prayer[lang];
        }

        // Science backing is in verse.analysis.prayer.science[lang]
        if (prayerScienceContent && verse.analysis.prayer.science) {
            prayerScienceContent.textContent = verse.analysis.prayer.science[lang];
        }

        // Render sources if available
        const sourcesContainer = document.getElementById('prayerSources');
        if (sourcesContainer && verse.analysis.prayer.sources && verse.analysis.prayer.sources.length > 0) {
            this.renderAnalysisSources('prayer', verse.analysis.prayer.sources, lang);
        }
    },

    /**
     * Share current verse to WhatsApp
     */
    shareToWhatsApp() {
        if (!this.currentVerse) return;

        const lang = this.currentLanguage;
        const verse = this.currentVerse;
        const reference = `${verse.book[lang]} ${verse.chapter}:${verse.verse}`;
        const text = verse.text[lang];

        let shareText;
        if (verse.analysis && verse.analysis.nudge && verse.analysis.nudge[lang]) {
            const nudge = verse.analysis.nudge[lang];
            shareText = lang === 'es'
                ? `*${reference}*\n"${text}"\n\n✨ *Praxis:* ${nudge}\n\n— Enviado desde Berean`
                : `*${reference}*\n"${text}"\n\n✨ *This Week's Praxis:* ${nudge}\n\n— Sent from Berean`;
        } else {
            shareText = lang === 'es'
                ? `*${reference}*\n"${text}"\n\n— Enviado desde Berean`
                : `*${reference}*\n"${text}"\n\n— Sent from Berean`;
        }

        const url = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(url, '_blank');
    },

    /**
     * Update all UI text based on current language
     */
    updateUILanguage() {
        const lang = this.currentLanguage;
        const texts = this.translations[lang];

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (texts[key]) {
                element.textContent = texts[key];
            }
        });

        // Update placeholder texts
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.dataset.i18nPlaceholder;
            if (texts[key]) {
                element.placeholder = texts[key];
            }
        });

        // Update language toggle visual state
        const languageToggle = document.getElementById('languageToggle');
        if (languageToggle) {
            languageToggle.setAttribute('data-active', lang);
        }

        // Update document language attribute
        document.documentElement.lang = lang;
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    BibleApp.init();
});
