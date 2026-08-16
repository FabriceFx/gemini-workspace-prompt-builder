/* Moteur commun du Prompt Builder.
 *
 * Cette page ne contient aucune donnée métier : tout vient de
 * window.PROMPT_LIBRARY, défini par assets/libraries/<slug>.js et chargé
 * avant ce fichier. Ajouter un métier = ajouter une bibliothèque + une page
 * d'accueil de trois lignes ; ce fichier n'a pas à changer.
 *
 * Règle de sûreté appliquée partout : tout ce qui provient de l'utilisateur
 * (instructions, noms de fichiers, noms de modèles) est posé via .value ou
 * .textContent, jamais concaténé dans du HTML.
 */
(function () {
    'use strict';

    const LIB = window.PROMPT_LIBRARY;
    if (!LIB) throw new Error('Aucune bibliothèque chargée : vérifiez la balise <script src="assets/libraries/…">.');

    // ------------------------------------------------------------------ état
    const state = {
        lang: 'fr',
        role: '', task: '', context: '',
        toneKey: '', formatKey: '', constraints: '',
        feedbackLoop: false,
        files: [],
        instructions: [],
    };
    let currentTab = 'markdown';
    let customTemplates = [];

    const t = () => LIB.strings[state.lang];
    const $ = (id) => document.getElementById(id);

    // ------------------------------------------------- fabrique d'éléments
    function el(tag, props, children) {
        const node = document.createElement(tag);
        for (const [k, v] of Object.entries(props || {})) {
            if (k === 'class') node.className = v;
            else if (k === 'text') node.textContent = v;
            else if (k === 'html') node.innerHTML = v;          // seulement pour du balisage constant
            else if (k === 'dataset') Object.assign(node.dataset, v);
            else if (k.startsWith('on')) node.addEventListener(k.slice(2), v);
            else if (v !== null && v !== undefined) node.setAttribute(k, v);
        }
        (children || []).forEach((c) => node.append(c));
        return node;
    }

    const icon = (name) => el('i', { class: name });

    // ------------------------------------------------------------- gabarits
    const FIELD_INPUT = (id, labelKey, multiline) => `
        <div class="m3-field">
            ${multiline
            ? `<textarea id="${id}" rows="3" class="m3-input resize-none" placeholder=" "></textarea>`
            : `<input type="text" id="${id}" class="m3-input" placeholder=" ">`}
            <label class="m3-label" id="lbl-${id}" for="${id}">${labelKey}</label>
        </div>`;

    const SELECT_FIELD = (id, labelId) => `
        <div class="m3-field rounded-t-lg">
            <select id="${id}" class="m3-input pt-6 bg-transparent"></select>
            <label class="m3-label" id="${labelId}" for="${id}"></label>
            <i class="fas fa-caret-down absolute right-3 top-6 text-gray-500 pointer-events-none"></i>
        </div>`;

    const hasTemplates = Object.keys(LIB.templates || {}).length > 0;

    function buildLayout() {
        document.body.className = 'h-dvh w-screen overflow-hidden flex flex-col md:flex-row';
        document.body.innerHTML = `
    <aside id="panel-editor" class="w-full md:w-[500px] flex-col h-full bg-white border-r border-[color:var(--outline-soft)] z-20 shadow-lg flex">

        <header class="p-3 md:p-4 flex items-center justify-between border-b border-gray-100 flex-none bg-white z-10 gap-2">
            <h1 class="text-xl font-normal tracking-tight text-[color:var(--on-surface-muted)] hidden sm:block whitespace-nowrap">
                Le Prompt<span class="font-medium accent" id="brand-name"></span>
            </h1>

            <div class="flex items-center gap-2 flex-grow sm:flex-grow-0 justify-end">
                <div class="template-select-wrapper flex-grow sm:flex-grow-0 min-w-[140px] max-w-[200px]">
                    <label class="sr-only" for="template-selector" id="lbl-template-selector"></label>
                    <select id="template-selector" class="w-full template-select text-sm font-medium text-gray-600 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-lg transition border border-gray-200 focus:outline-none"></select>
                    <i class="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 pointer-events-none"></i>
                </div>

                <button type="button" id="btn-save-template" class="text-gray-500 hover:text-[color:var(--accent)] hover:bg-[color:var(--tint)] p-2 rounded-full transition">
                    <i class="far fa-save"></i>
                </button>
                <button type="button" id="btn-delete-template" class="hidden text-gray-500 hover:text-red-600 hover:bg-red-50 p-2 rounded-full transition">
                    <i class="far fa-trash-alt"></i>
                </button>

                <div class="relative">
                    <button type="button" id="btn-more" aria-haspopup="true" aria-expanded="false" class="text-gray-500 hover:text-[color:var(--accent)] hover:bg-[color:var(--tint)] p-2 rounded-full transition">
                        <i class="fas fa-ellipsis-vertical"></i>
                    </button>
                    <div id="menu-more" class="hidden absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-200 py-1 z-50" role="menu">
                        <button type="button" id="btn-export" role="menuitem" class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                            <i class="fas fa-file-export w-4 text-gray-500"></i><span></span>
                        </button>
                        <button type="button" id="btn-import" role="menuitem" class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                            <i class="fas fa-file-import w-4 text-gray-500"></i><span></span>
                        </button>
                        <div class="h-px bg-gray-100 my-1"></div>
                        <button type="button" id="btn-share" role="menuitem" class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3">
                            <i class="fas fa-link w-4 text-gray-500"></i><span></span>
                        </button>
                    </div>
                </div>
                <input type="file" id="import-file" accept="application/json,.json" class="hidden">

                <div class="h-6 w-px bg-gray-200 mx-1"></div>

                <button type="button" id="btn-lang" class="text-sm font-medium accent hover:bg-[color:var(--tint)] px-3 py-1 rounded-full transition border border-[color:var(--tint)] whitespace-nowrap">
                    <span id="lang-display">FR</span>
                </button>
                <button type="button" id="btn-reset" class="text-gray-500 hover:bg-gray-100 p-2 rounded-full transition">
                    <i class="fas fa-eraser"></i>
                </button>
            </div>
        </header>

        <div class="flex-grow overflow-y-auto p-4 space-y-6 pb-24 md:pb-4">
            ${FIELD_INPUT('role', '', false)}
            ${FIELD_INPUT('task', '', true)}
            ${FIELD_INPUT('context', '', true)}

            <div class="space-y-3">
                <h2 class="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1" id="lbl-header-format"></h2>
                <div class="grid grid-cols-2 gap-3">
                    ${SELECT_FIELD('tone', 'lbl-tone')}
                    ${SELECT_FIELD('format', 'lbl-format')}
                </div>
                ${FIELD_INPUT('constraints', '', false)}
            </div>

            <div class="space-y-2">
                <h2 class="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1" id="lbl-header-files"></h2>
                <div class="border border-dashed border-[color:var(--outline)] rounded-xl p-4 bg-white relative">
                    <input type="file" id="file-upload" class="absolute inset-0 w-full h-full opacity-0 cursor-pointer" multiple>
                    <div class="text-center pointer-events-none">
                        <i class="fas fa-cloud-upload-alt accent text-xl mb-1"></i>
                        <p class="text-sm text-[color:var(--on-surface-muted)]" id="txt-dropzone"></p>
                    </div>
                </div>
                <div id="file-list" class="flex flex-wrap gap-2"></div>
                <div id="file-warning" class="hidden bg-orange-50 border border-orange-200 rounded-lg p-3 flex gap-3 items-start mt-2">
                    <i class="fas fa-exclamation-triangle text-orange-500 mt-0.5 text-sm"></i>
                    <p class="text-xs text-orange-800 leading-relaxed" id="txt-file-warning"></p>
                </div>
            </div>

            <div class="space-y-2">
                <div class="flex justify-between items-center">
                    <h2 class="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1" id="lbl-header-instructions"></h2>
                    <button type="button" id="btn-add-instruction" class="accent hover:bg-[color:var(--tint)] w-6 h-6 rounded-full flex items-center justify-center transition">
                        <i class="fas fa-plus text-xs"></i>
                    </button>
                </div>
                <div id="instructions-container" class="space-y-2"></div>
            </div>

            <div class="pt-2 border-t border-gray-100">
                <label class="m3-checkbox-container">
                    <input type="checkbox" id="feedback-loop" class="m3-checkbox">
                    <span class="text-sm text-[color:var(--on-surface-muted)] font-medium" id="lbl-feedback"></span>
                </label>
                <p class="text-xs text-gray-500 pl-8" id="txt-feedback-help"></p>
            </div>

            <div class="md:hidden pt-8 pb-4 text-center border-t border-gray-100 mt-4">
                <p class="text-xs text-gray-500 mb-2"><span class="lbl-developed"></span> <strong>Fabrice Faucheux</strong></p>
                <a href="https://paypal.me/FFaucheux?country.x=FR&locale.x=fr_FR" target="_blank" rel="noopener" class="text-xs inline-flex items-center gap-2 px-4 py-2 bg-[#003087] text-white rounded-full hover:bg-[#001c64] transition shadow-sm font-medium">
                    <i class="fab fa-paypal"></i> <span class="lbl-tip"></span>
                </a>
            </div>
        </div>

        <footer class="hidden md:block flex-none p-4 border-t border-gray-200 bg-gray-50 text-center">
            <p class="text-xs text-gray-500 mb-2"><span class="lbl-developed"></span> <strong class="text-gray-700">Fabrice Faucheux</strong></p>
            <a href="https://paypal.me/FFaucheux?country.x=FR&locale.x=fr_FR" target="_blank" rel="noopener" class="text-xs inline-flex items-center gap-2 px-4 py-2 bg-[#003087] text-white rounded-full hover:bg-[#001c64] transition shadow-sm font-medium">
                <i class="fab fa-paypal"></i> <span class="lbl-tip"></span>
            </a>
        </footer>
    </aside>

    <main id="panel-preview" class="hidden md:flex flex-grow flex-col h-full overflow-hidden relative pb-20 md:pb-0">
        <div class="flex-none px-4 pt-4 pb-2 flex justify-between items-end flex-wrap gap-2">
            <div class="flex bg-white rounded-full p-1 shadow-sm border border-gray-200" role="tablist">
                <button type="button" role="tab" id="tab-btn-markdown" class="tab-active px-4 py-2 rounded-full text-xs md:text-sm transition-all flex items-center gap-2">
                    <i class="fab fa-markdown"></i> <span id="lbl-preview"></span>
                </button>
                <button type="button" role="tab" id="tab-btn-json" class="tab-inactive px-4 py-2 rounded-full text-xs md:text-sm transition-all flex items-center gap-2">
                    <i class="fas fa-code"></i> JSON
                </button>
            </div>
            <button type="button" id="btn-copy" class="accent-bg hover:opacity-90 text-white px-5 py-2.5 rounded-full shadow transition-all flex items-center gap-2 text-sm font-medium">
                <i class="far fa-copy"></i> <span id="copy-btn-text"></span>
            </button>
        </div>

        <div id="coach" class="coach hidden" role="status" aria-live="polite">
            <i id="coach-icon"></i>
            <p><span id="coach-text" class="font-medium"></span> <span id="coach-hint" class="coach-hint"></span></p>
        </div>

        <div class="flex-grow p-4 overflow-hidden">
            <div class="h-full w-full bg-white rounded-3xl border border-white shadow-sm overflow-hidden flex flex-col">
                <div id="view-markdown" role="tabpanel" class="p-6 md:p-8 overflow-y-auto h-full max-w-none text-gray-700 text-sm md:text-base">
                    <div class="flex items-center gap-2 text-gray-500 mb-4 opacity-70 select-none">
                        <i class="fas fa-wand-magic-sparkles"></i> <span id="lbl-generated"></span>
                    </div>
                    <div id="markdown-content" class="whitespace-pre-wrap leading-relaxed"></div>
                </div>
                <div id="view-json" role="tabpanel" class="hidden p-0 h-full bg-[#1e1e1e] overflow-auto">
                    <pre class="p-6 text-xs md:text-sm leading-relaxed text-[#e0e0e0]" style="font-family:'Roboto Mono',monospace"><code id="json-content"></code></pre>
                </div>
            </div>
        </div>
    </main>

    <nav class="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around p-2 z-50">
        <button type="button" id="nav-btn-editor" class="mobile-nav-btn active flex flex-col items-center gap-1 p-2 rounded-xl flex-1 transition text-gray-500">
            <i class="fas fa-pen"></i> <span class="text-xs font-medium" id="lbl-nav-edit"></span>
        </button>
        <div class="w-px bg-gray-200 my-1"></div>
        <button type="button" id="nav-btn-preview" class="mobile-nav-btn flex flex-col items-center gap-1 p-2 rounded-xl flex-1 transition text-gray-500">
            <i class="fas fa-eye"></i> <span class="text-xs font-medium" id="lbl-nav-view"></span>
        </button>
    </nav>

    <div id="toast" role="status" aria-live="polite" class="fixed top-6 left-1/2 -translate-x-1/2 bg-[#323232] text-white px-4 py-3 rounded shadow-lg opacity-0 pointer-events-none transition-opacity duration-300 z-[60] flex items-center gap-3 w-max">
        <i class="fas fa-check-circle text-green-400"></i> <span id="txt-toast"></span>
    </div>

    <div id="modal-save" class="hidden fixed inset-0 z-[70] modal-backdrop flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl" role="dialog" aria-modal="true" aria-labelledby="lbl-modal-title">
            <h2 class="text-lg font-medium mb-4" id="lbl-modal-title"></h2>
            <input type="text" id="template-name-input" class="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none focus:border-[color:var(--accent)]">
            <div class="flex justify-end gap-2 mt-5">
                <button type="button" id="btn-modal-cancel" class="px-4 py-2 text-sm rounded-full text-gray-600 hover:bg-gray-100 transition"></button>
                <button type="button" id="btn-modal-confirm" class="px-4 py-2 text-sm rounded-full accent-bg text-white hover:opacity-90 transition"></button>
            </div>
        </div>
    </div>`;
    }

    // ------------------------------------------------------------ traduction
    const LABEL_MAP = {
        'lbl-role': 'lbl_role', 'lbl-task': 'lbl_task', 'lbl-context': 'lbl_context',
        'lbl-header-format': 'lbl_header_format', 'lbl-tone': 'lbl_tone', 'lbl-format': 'lbl_format',
        'lbl-constraints': 'lbl_constraints', 'lbl-header-files': 'lbl_header_files',
        'lbl-header-instructions': 'lbl_header_instructions', 'lbl-feedback': 'lbl_feedback',
        'lbl-preview': 'lbl_preview', 'lbl-generated': 'lbl_generated', 'copy-btn-text': 'btn_copy',
        'txt-toast': 'txt_toast', 'lbl-nav-edit': 'lbl_nav_edit', 'lbl-nav-view': 'lbl_nav_view',
        'lbl-modal-title': 'lbl_modal_title', 'lbl-template-selector': 'lbl_template_default',
    };

    const PLACEHOLDERS = { role: 'ph_role', task: 'ph_task', context: 'ph_context', constraints: 'ph_constraints' };

    // Textes du moteur, absents des bibliothèques d'origine.
    const UI = {
        fr: { feedback_help: "Demande à l'IA de poser des questions de clarification avant de répondre.",
              save_title: 'Sauvegarder ce modèle', delete_title: 'Supprimer ce modèle',
              reset_title: 'Tout effacer', lang_title: 'Changer de langue',
              name_placeholder: 'Nom du modèle', cancel: 'Annuler', save: 'Enregistrer',
              saved: 'Modèle sauvegardé !', confirm_reset: 'Tout effacer ?',
              confirm_delete: 'Supprimer ce modèle ?', storage_error: "Stockage local indisponible : le modèle n'a pas pu être enregistré.",
              add_instruction: 'Ajouter une instruction', remove: 'Supprimer',
              // Menu secondaire
              more_title: 'Autres actions', export: 'Exporter mes modèles',
              import: 'Importer des modèles', share: 'Copier un lien de partage',
              export_empty: "Vous n'avez aucun modèle personnalisé à exporter.",
              exported: 'Modèles exportés.',
              imported: (n) => `${n} modèle${n > 1 ? 's' : ''} importé${n > 1 ? 's' : ''}.`,
              import_invalid: "Fichier illisible : ce n'est pas un export de modèles.",
              share_warning: "Le lien contiendra tout le texte saisi. Il circulera dans des messageries qui l'archivent : ne l'utilisez pas pour des données confidentielles.\n\nCopier quand même le lien ?",
              share_copied: 'Lien copié dans le presse-papier.',
              share_loaded: 'Prompt chargé depuis le lien partagé.',
              share_invalid: 'Le lien partagé est illisible.',
              // Coach de complétude
              coach_missing: 'Piliers non renseignés :',
              coach_hint: 'Sans eux, la réponse sera générique.',
              coach_ok: 'Les 4 piliers sont renseignés.',
              coach_ok_hint: 'Ajoutez des instructions pour cadrer davantage la réponse.',
              pillar_persona: 'Persona', pillar_task: 'Tâche',
              pillar_context: 'Contexte', pillar_format: 'Format' },
        en: { feedback_help: 'Ask the AI to ask clarifying questions before answering.',
              save_title: 'Save this template', delete_title: 'Delete this template',
              reset_title: 'Clear all', lang_title: 'Switch language',
              name_placeholder: 'Template name', cancel: 'Cancel', save: 'Save',
              saved: 'Template saved!', confirm_reset: 'Clear all?',
              confirm_delete: 'Delete this template?', storage_error: 'Local storage unavailable: the template could not be saved.',
              add_instruction: 'Add an instruction', remove: 'Remove',
              more_title: 'More actions', export: 'Export my templates',
              import: 'Import templates', share: 'Copy a shareable link',
              export_empty: 'You have no custom templates to export.',
              exported: 'Templates exported.',
              imported: (n) => `${n} template${n > 1 ? 's' : ''} imported.`,
              import_invalid: 'Unreadable file: this is not a template export.',
              share_warning: 'The link will contain everything you typed. It will travel through messaging tools that archive it — do not use it for confidential data.\n\nCopy the link anyway?',
              share_copied: 'Link copied to clipboard.',
              share_loaded: 'Prompt loaded from the shared link.',
              share_invalid: 'The shared link is unreadable.',
              coach_missing: 'Missing pillars:',
              coach_hint: 'Without them, the answer will be generic.',
              coach_ok: 'All 4 pillars are filled in.',
              coach_ok_hint: 'Add instructions to steer the answer further.',
              pillar_persona: 'Persona', pillar_task: 'Task',
              pillar_context: 'Context', pillar_format: 'Format' },
    };
    const ui = () => UI[state.lang];

    function applyLanguage() {
        const s = t();
        document.documentElement.lang = state.lang;
        $('lang-display').textContent = state.lang.toUpperCase();
        $('brand-name').textContent = LIB.name[state.lang];

        for (const [id, key] of Object.entries(LABEL_MAP)) {
            const node = $(id);
            if (node && s[key]) node.textContent = s[key];
        }
        for (const [id, key] of Object.entries(PLACEHOLDERS)) {
            if (s[key]) $(id).placeholder = s[key];
        }

        // Ces deux chaînes portent un <span> de mise en valeur : balisage constant, contenu de la bibliothèque.
        $('txt-dropzone').innerHTML = s.txt_dropzone;
        $('txt-file-warning').textContent = s.txt_file_warning;
        $('txt-feedback-help').textContent = ui().feedback_help;

        document.querySelectorAll('.lbl-developed').forEach((n) => { n.textContent = s.lbl_developed; });
        document.querySelectorAll('.lbl-tip').forEach((n) => { n.textContent = s.lbl_tip; });

        $('btn-save-template').title = ui().save_title;
        $('btn-save-template').setAttribute('aria-label', ui().save_title);
        $('btn-delete-template').title = ui().delete_title;
        $('btn-delete-template').setAttribute('aria-label', ui().delete_title);
        $('btn-reset').title = ui().reset_title;
        $('btn-reset').setAttribute('aria-label', ui().reset_title);
        $('btn-lang').title = ui().lang_title;
        $('btn-add-instruction').setAttribute('aria-label', ui().add_instruction);
        $('template-name-input').placeholder = ui().name_placeholder;
        $('btn-modal-cancel').textContent = ui().cancel;
        $('btn-modal-confirm').textContent = ui().save;

        $('btn-more').title = ui().more_title;
        $('btn-more').setAttribute('aria-label', ui().more_title);
        $('btn-export').querySelector('span').textContent = ui().export;
        $('btn-import').querySelector('span').textContent = ui().import;
        $('btn-share').querySelector('span').textContent = ui().share;
    }

    // --------------------------------------------------------------- options
    const makeOption = (value, label) => {
        const o = document.createElement('option');
        o.value = value;
        o.textContent = label;                 // nom potentiellement saisi par l'utilisateur
        return o;
    };

    function renderOptions() {
        for (const [id, list, selected] of [['tone', LIB.tones, state.toneKey], ['format', LIB.formats, state.formatKey]]) {
            const select = $(id);
            select.innerHTML = '';
            list.forEach((o) => select.appendChild(makeOption(o.key, o[state.lang])));
            select.value = selected;
            if (select.selectedIndex === -1) select.selectedIndex = 0;
        }
        state.toneKey = $('tone').value;
        state.formatKey = $('format').value;
    }

    function renderTemplateList() {
        const s = t();
        const select = $('template-selector');
        const previous = select.value;
        select.innerHTML = '';
        select.appendChild(makeOption('', s.lbl_template_default));

        if (hasTemplates) {
            const group = el('optgroup', { label: s.lbl_group_default });
            for (const key of Object.keys(LIB.templates)) {
                group.appendChild(makeOption('std:' + key, LIB.templates[key][state.lang].name));
            }
            select.appendChild(group);
        }
        if (customTemplates.length) {
            const group = el('optgroup', { label: s.lbl_group_custom });
            customTemplates.forEach((tpl) => group.appendChild(makeOption('cust:' + tpl.id, tpl.name)));
            select.appendChild(group);
        }
        select.value = previous;
        if (select.selectedIndex === -1) select.value = '';
    }

    // ------------------------------------------------------------- stockage
    function loadCustomTemplates() {
        try {
            const raw = localStorage.getItem(LIB.storageKey);
            const parsed = raw ? JSON.parse(raw) : [];
            customTemplates = Array.isArray(parsed) ? parsed : [];
        } catch (e) {
            console.warn('Modèles personnalisés illisibles, ils sont ignorés.', e);
            customTemplates = [];
        }
    }

    function persistCustomTemplates() {
        try {
            localStorage.setItem(LIB.storageKey, JSON.stringify(customTemplates));
            return true;
        } catch (e) {
            console.error(e);
            showToast(ui().storage_error);
            return false;
        }
    }

    // ------------------------------------------------------------- modèles
    function templateFromKey(value) {
        if (value.startsWith('std:')) {
            const data = LIB.templates[value.slice(4)];
            return data ? { ...data[state.lang], feedback: false } : null;   // copie : jamais de mutation du catalogue
        }
        if (value.startsWith('cust:')) {
            const found = customTemplates.find((tpl) => tpl.id === value.slice(5));
            return found ? { ...found } : null;
        }
        return null;
    }

    function applyTemplate(value) {
        const btnDelete = $('btn-delete-template');
        btnDelete.classList.toggle('hidden', !value.startsWith('cust:'));
        if (!value) return;

        const data = templateFromKey(value);
        if (!data) return;

        $('role').value = data.role || '';
        $('task').value = data.task || '';
        $('context').value = data.context || '';
        $('constraints').value = data.constraints || '';
        state.toneKey = data.tone || '';
        state.formatKey = data.format || '';
        renderOptions();
        $('feedback-loop').checked = Boolean(data.feedback);

        $('instructions-container').innerHTML = '';
        const list = Array.isArray(data.instructions) ? data.instructions : [];
        if (list.length) list.forEach(addInstruction);
        else addInstruction();

        updateOutput();
    }

    function saveTemplate() {
        const name = $('template-name-input').value.trim();
        if (!name) return;
        updateOutput();
        const tpl = {
            id: String(Date.now()),
            name,
            role: state.role, task: state.task, context: state.context,
            tone: state.toneKey, format: state.formatKey,
            constraints: state.constraints, feedback: state.feedbackLoop,
            instructions: [...state.instructions],
        };
        customTemplates.push(tpl);
        if (!persistCustomTemplates()) { customTemplates.pop(); return; }
        closeModal();
        renderTemplateList();
        $('template-selector').value = 'cust:' + tpl.id;
        $('btn-delete-template').classList.remove('hidden');
        showToast(ui().saved);
    }

    function deleteTemplate() {
        const value = $('template-selector').value;
        if (!value.startsWith('cust:')) return;
        if (!window.confirm(ui().confirm_delete)) return;
        customTemplates = customTemplates.filter((tpl) => tpl.id !== value.slice(5));
        persistCustomTemplates();
        $('template-selector').value = '';
        $('btn-delete-template').classList.add('hidden');
        renderTemplateList();
    }

    // --------------------------------------------------------- instructions
    function addInstruction(value) {
        const row = el('div', { class: 'flex items-center gap-2 animate-fade-in' });
        const input = el('input', {
            type: 'text',
            class: 'instruction-input flex-grow bg-white border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-[color:var(--accent)]',
            oninput: updateOutput,
        });
        input.value = typeof value === 'string' ? value : '';   // saisie utilisateur : jamais via innerHTML
        const remove = el('button', {
            type: 'button', class: 'text-gray-500 hover:text-red-500', 'aria-label': ui().remove,
            onclick: () => { row.remove(); updateOutput(); },
        }, [icon('fas fa-times')]);
        row.append(input, remove);
        $('instructions-container').appendChild(row);
    }

    // -------------------------------------------------------------- fichiers
    function addFiles(fileList) {
        state.files.push(...Array.from(fileList));
        // Sans cette remise à zéro, resélectionner le même fichier ne déclenche
        // pas d'événement « change » et l'ajout paraît ignoré.
        $('file-upload').value = '';
        renderFiles();
        updateOutput();
    }

    function renderFiles() {
        const list = $('file-list');
        list.innerHTML = '';
        state.files.forEach((file, index) => {
            const label = el('span', { class: 'max-w-[140px] truncate' });
            label.textContent = file.name;                       // nom de fichier : jamais via innerHTML
            const remove = el('button', {
                type: 'button', class: 'text-red-500 hover:text-red-700', 'aria-label': ui().remove,
                onclick: () => { state.files.splice(index, 1); renderFiles(); updateOutput(); },
            });
            remove.textContent = '×';
            list.appendChild(el('div', {
                class: 'bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs flex items-center gap-2',
            }, [icon('fas fa-file'), label, remove]));
        });
    }

    // ---------------------------------------------------------------- sortie
    function readForm() {
        state.role = $('role').value;
        state.task = $('task').value;
        state.context = $('context').value;
        state.toneKey = $('tone').value;
        state.formatKey = $('format').value;
        state.constraints = $('constraints').value;
        state.feedbackLoop = $('feedback-loop').checked;
        state.instructions = Array.from(document.querySelectorAll('.instruction-input'))
            .map((i) => i.value).filter((v) => v.trim() !== '');
    }

    const labelOf = (list, key) => (list.find((o) => o.key === key) || {})[state.lang];

    function generateMarkdown() {
        const s = t();
        const parts = [];
        if (state.role) parts.push(`${s.prompt_you_are} **${state.role}**.`);
        if (state.task) parts.push(`${s.prompt_task} ${state.task}`);
        if (state.context) parts.push(`**${s.prompt_context}** ${state.context}`);
        if (state.toneKey) parts.push(`${s.prompt_tone} ${labelOf(LIB.tones, state.toneKey)}.`);
        if (state.formatKey) parts.push(`${s.prompt_format} ${labelOf(LIB.formats, state.formatKey)}.`);
        if (state.constraints) parts.push(`${s.prompt_constraints} ${state.constraints}.`);
        if (state.files.length) {
            parts.push(`\n${s.prompt_files}`);
            state.files.forEach((f) => parts.push(`- ${s.prompt_file_item}${f.name}]`));
        }
        if (state.instructions.length) {
            parts.push(`\n**${s.prompt_instructions}**`);
            state.instructions.forEach((i) => parts.push(`- ${i}`));
        }
        if (state.feedbackLoop) parts.push(s.prompt_feedback);
        return parts.join('\n\n');
    }

    const generateJSON = () => ({
        meta: { lang: state.lang, library: LIB.slug },
        role: state.role, task: state.task, context: state.context,
        config: {
            tone: state.toneKey, format: state.formatKey,
            constraints: state.constraints, feedback: state.feedbackLoop,
        },
        attachments: state.files.map((f) => f.name),
        instructions: state.instructions,
    });

    function syntaxHighlight(json) {
        return json
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, (match) => {
                let cls = 'json-number';
                if (/^"/.test(match)) cls = /:$/.test(match) ? 'json-key' : 'json-string';
                else if (/true|false|null/.test(match)) cls = 'json-boolean';
                return `<span class="${cls}">${match}</span>`;
            });
    }

    function updateOutput() {
        readForm();
        $('file-warning').classList.toggle('hidden', state.files.length === 0);
        $('markdown-content').textContent = generateMarkdown();
        // Le JSON est échappé avant coloration : aucune saisie ne peut produire du balisage.
        $('json-content').innerHTML = syntaxHighlight(JSON.stringify(generateJSON(), null, 2));
        updateCoach();
    }

    // ----------------------------------------------------------------- vues
    const TAB_CLASSES = 'px-4 py-2 rounded-full text-xs md:text-sm transition-all flex items-center gap-2';

    function switchTab(tab) {
        currentTab = tab;
        const isMarkdown = tab === 'markdown';
        $('view-markdown').classList.toggle('hidden', !isMarkdown);
        $('view-json').classList.toggle('hidden', isMarkdown);
        $('tab-btn-markdown').className = `${isMarkdown ? 'tab-active' : 'tab-inactive'} ${TAB_CLASSES}`;
        $('tab-btn-json').className = `${isMarkdown ? 'tab-inactive' : 'tab-active'} ${TAB_CLASSES}`;
        $('tab-btn-markdown').setAttribute('aria-selected', String(isMarkdown));
        $('tab-btn-json').setAttribute('aria-selected', String(!isMarkdown));
    }

    function showMobileTab(view) {
        const editor = $('panel-editor');
        const preview = $('panel-preview');
        const isEditor = view === 'editor';
        editor.classList.toggle('hidden', !isEditor);
        editor.classList.toggle('flex', isEditor);
        preview.classList.toggle('hidden', isEditor);
        preview.classList.toggle('flex', !isEditor);
        $('nav-btn-editor').classList.toggle('active', isEditor);
        $('nav-btn-preview').classList.toggle('active', !isEditor);
    }

    let toastTimer = null;
    function showToast(message) {
        const toast = $('toast');
        $('txt-toast').textContent = message;
        toast.classList.remove('opacity-0');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.add('opacity-0'), 2500);
    }

    function copyCurrent() {
        const text = currentTab === 'markdown'
            ? $('markdown-content').textContent
            : $('json-content').textContent;
        navigator.clipboard.writeText(text)
            .then(() => showToast(t().txt_toast))
            .catch(() => showToast(t().txt_toast));
    }

    function resetForm() {
        if (!window.confirm(ui().confirm_reset)) return;
        ['role', 'task', 'context', 'constraints'].forEach((id) => { $(id).value = ''; });
        $('feedback-loop').checked = false;
        state.files = [];
        state.toneKey = '';
        state.formatKey = '';
        $('file-upload').value = '';
        $('template-selector').value = '';
        $('btn-delete-template').classList.add('hidden');
        $('instructions-container').innerHTML = '';
        renderFiles();
        renderOptions();
        addInstruction();
        updateOutput();
    }

    // ------------------------------------------------ coach de complétude
    function updateCoach() {
        const box = $('coach');
        const filled = state.role || state.task || state.context || state.constraints
            || state.instructions.length || state.toneKey || state.formatKey;
        if (!filled) { box.className = 'coach hidden'; return; }   // page vierge : on ne réprimande pas

        const missing = [];
        if (!state.role) missing.push(ui().pillar_persona);
        if (!state.task) missing.push(ui().pillar_task);
        if (!state.context) missing.push(ui().pillar_context);
        if (!state.toneKey && !state.formatKey) missing.push(ui().pillar_format);

        const complete = missing.length === 0;
        box.className = 'coach ' + (complete ? 'coach--ok' : 'coach--warn');
        $('coach-icon').className = 'fas ' + (complete ? 'fa-circle-check' : 'fa-lightbulb');
        $('coach-text').textContent = complete ? ui().coach_ok : `${ui().coach_missing} ${missing.join(', ')}`;
        $('coach-hint').textContent = complete
            ? (state.instructions.length ? '' : ui().coach_ok_hint)
            : ui().coach_hint;
    }

    // ------------------------------------------- export / import de modèles
    function exportTemplates() {
        if (!customTemplates.length) { showToast(ui().export_empty); return; }
        const payload = { format: 'promptbuilder-templates', version: 1, library: LIB.slug, templates: customTemplates };
        const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }));
        const link = el('a', { href: url, download: `promptbuilder-${LIB.slug}-modeles.json` });
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
        showToast(ui().exported);
    }

    // Un modèle importé doit au minimum porter un nom et un contenu exploitable.
    const isTemplate = (t) => t && typeof t === 'object' && typeof t.name === 'string' && t.name.trim() !== ''
        && ['role', 'task', 'context', 'constraints'].some((k) => typeof t[k] === 'string' && t[k] !== '');

    function importTemplates(file) {
        const reader = new FileReader();
        reader.onload = () => {
            let list;
            try {
                const parsed = JSON.parse(String(reader.result));
                list = Array.isArray(parsed) ? parsed : parsed.templates;   // accepte aussi un tableau nu
            } catch (e) { showToast(ui().import_invalid); return; }

            if (!Array.isArray(list)) { showToast(ui().import_invalid); return; }
            const valid = list.filter(isTemplate);
            if (!valid.length) { showToast(ui().import_invalid); return; }

            let stamp = Date.now();
            valid.forEach((tpl) => {
                customTemplates.push({
                    id: String(stamp++),                       // identifiant neuf : jamais d'écrasement
                    name: String(tpl.name),
                    role: String(tpl.role || ''), task: String(tpl.task || ''),
                    context: String(tpl.context || ''), constraints: String(tpl.constraints || ''),
                    tone: String(tpl.tone || ''), format: String(tpl.format || ''),
                    feedback: Boolean(tpl.feedback),
                    instructions: Array.isArray(tpl.instructions) ? tpl.instructions.map(String) : [],
                });
            });
            if (persistCustomTemplates()) { renderTemplateList(); showToast(ui().imported(valid.length)); }
        };
        reader.onerror = () => showToast(ui().import_invalid);
        reader.readAsText(file);
    }

    // ------------------------------------------------------ lien de partage
    // base64url compatible UTF-8, par blocs pour ne pas saturer la pile d'appels.
    function toBase64Url(text) {
        const bytes = new TextEncoder().encode(text);
        let binary = '';
        for (let i = 0; i < bytes.length; i += 0x8000) {
            binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
        }
        return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    }

    function fromBase64Url(encoded) {
        const binary = atob(encoded.replace(/-/g, '+').replace(/_/g, '/'));
        return new TextDecoder().decode(Uint8Array.from(binary, (c) => c.charCodeAt(0)));
    }

    function shareLink() {
        readForm();
        // Le fragment n'est jamais transmis au serveur, mais le lien lui-même circule :
        // l'utilisateur doit décider en connaissance de cause.
        if (!window.confirm(ui().share_warning)) return;
        const payload = { v: 1, lang: state.lang, role: state.role, task: state.task,
            context: state.context, tone: state.toneKey, format: state.formatKey,
            constraints: state.constraints, feedback: state.feedbackLoop, instructions: state.instructions };
        const url = location.origin + location.pathname + '#p=' + toBase64Url(JSON.stringify(payload));
        navigator.clipboard.writeText(url)
            .then(() => showToast(ui().share_copied))
            .catch(() => showToast(ui().share_copied));
    }

    function loadFromHash() {
        if (!location.hash.startsWith('#p=')) return false;
        try {
            const data = JSON.parse(fromBase64Url(location.hash.slice(3)));
            if (!data || typeof data !== 'object') throw new Error('payload');
            if (data.lang === 'fr' || data.lang === 'en') state.lang = data.lang;
            $('role').value = String(data.role || '');
            $('task').value = String(data.task || '');
            $('context').value = String(data.context || '');
            $('constraints').value = String(data.constraints || '');
            state.toneKey = String(data.tone || '');
            state.formatKey = String(data.format || '');
            $('feedback-loop').checked = Boolean(data.feedback);
            $('instructions-container').innerHTML = '';
            const list = Array.isArray(data.instructions) ? data.instructions : [];
            if (list.length) list.forEach((i) => addInstruction(String(i)));
            else addInstruction();
            return true;
        } catch (e) {
            console.warn('Lien partagé illisible.', e);
            showToast(ui().share_invalid);
            return false;
        }
    }

    // ---------------------------------------------------------------- modale
    let lastFocused = null;

    function openModal() {
        lastFocused = document.activeElement;
        $('modal-save').classList.remove('hidden');
        $('template-name-input').focus();
    }

    function closeModal() {
        if ($('modal-save').classList.contains('hidden')) return;
        $('modal-save').classList.add('hidden');
        $('template-name-input').value = '';
        if (lastFocused && lastFocused.focus) lastFocused.focus();
        lastFocused = null;
    }

    // Maintient le focus clavier à l'intérieur de la modale tant qu'elle est ouverte.
    function trapFocus(event) {
        if (event.key !== 'Tab' || $('modal-save').classList.contains('hidden')) return;
        const focusable = $('modal-save').querySelectorAll('input, button');
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }

    // ------------------------------------------------------- menu secondaire
    function toggleMenu(force) {
        const menu = $('menu-more');
        const open = force !== undefined ? force : menu.classList.contains('hidden');
        menu.classList.toggle('hidden', !open);
        $('btn-more').setAttribute('aria-expanded', String(open));
    }

    // ----------------------------------------------------------------- thème
    // Correspondance explicite entre les clés de la bibliothèque et les
    // variables de builder.css : une clé non listée est ignorée, pas devinée.
    const THEME_VARS = { primary: '--accent', surface: '--surface', tint: '--tint', onTint: '--on-tint' };

    function applyTheme() {
        const root = document.documentElement.style;
        for (const [key, cssVar] of Object.entries(THEME_VARS)) {
            const value = (LIB.theme || {})[key];
            if (value) root.setProperty(cssVar, value);
        }
    }

    // ------------------------------------------------------------------ init
    function init() {
        applyTheme();
        buildLayout();

        if ((navigator.language || 'fr').toLowerCase().startsWith('en')) state.lang = 'en';

        loadCustomTemplates();

        // Un lien partagé impose sa langue et son contenu : il est lu avant le
        // premier rendu, pour éviter d'afficher puis d'écraser un formulaire vide.
        const fromLink = loadFromHash();

        applyLanguage();
        renderOptions();
        renderTemplateList();
        if (!fromLink) addInstruction();
        updateOutput();
        switchTab('markdown');
        if (fromLink) showToast(ui().share_loaded);

        $('btn-lang').addEventListener('click', () => {
            state.lang = state.lang === 'fr' ? 'en' : 'fr';
            readForm();
            applyLanguage();
            renderOptions();
            renderTemplateList();
            document.querySelectorAll('.instruction-input').forEach((i) => i.setAttribute('aria-label', t().lbl_header_instructions));
            updateOutput();
        });
        $('btn-reset').addEventListener('click', resetForm);
        $('btn-add-instruction').addEventListener('click', () => addInstruction());
        $('file-upload').addEventListener('change', (e) => addFiles(e.target.files));
        $('template-selector').addEventListener('change', (e) => applyTemplate(e.target.value));
        $('btn-save-template').addEventListener('click', openModal);
        $('btn-delete-template').addEventListener('click', deleteTemplate);
        $('btn-modal-cancel').addEventListener('click', closeModal);
        $('btn-modal-confirm').addEventListener('click', saveTemplate);
        $('template-name-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') saveTemplate(); });
        $('tab-btn-markdown').addEventListener('click', () => switchTab('markdown'));
        $('tab-btn-json').addEventListener('click', () => switchTab('json'));
        $('btn-copy').addEventListener('click', copyCurrent);
        $('nav-btn-editor').addEventListener('click', () => showMobileTab('editor'));
        $('nav-btn-preview').addEventListener('click', () => showMobileTab('preview'));
        ['role', 'task', 'context', 'constraints'].forEach((id) => $(id).addEventListener('input', updateOutput));
        ['tone', 'format'].forEach((id) => $(id).addEventListener('change', updateOutput));
        $('feedback-loop').addEventListener('change', updateOutput);

        $('btn-more').addEventListener('click', (e) => { e.stopPropagation(); toggleMenu(); });
        $('btn-export').addEventListener('click', () => { toggleMenu(false); exportTemplates(); });
        $('btn-import').addEventListener('click', () => { toggleMenu(false); $('import-file').click(); });
        $('btn-share').addEventListener('click', () => { toggleMenu(false); shareLink(); });
        $('import-file').addEventListener('change', (e) => {
            if (e.target.files[0]) importTemplates(e.target.files[0]);
            e.target.value = '';
        });
        document.addEventListener('click', () => toggleMenu(false));

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') { closeModal(); toggleMenu(false); }
            trapFocus(e);
        });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();

    // Exposé pour les tests de non-régression.
    window.__builder = { state, addInstruction, addFiles, renderFiles, updateOutput, applyTemplate,
                         saveTemplate, renderTemplateList, generateMarkdown, resetForm,
                         importTemplates, exportTemplates, toBase64Url, fromBase64Url,
                         updateCoach, toggleMenu, openModal, closeModal, isTemplate,
                         get customTemplates() { return customTemplates; }, LIB };
})();
