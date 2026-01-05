// ===========================================================================
// DorkSearch PRO - Enhanced JavaScript
// ===========================================================================

// CONFIGURATION: Google Dorks Database - Comprehensive Collection
const dorksData = [
    {
        category: "📂 Files & Documents",
        items: [
            { label: "Public PDFs", dork: "filetype:pdf" },
            { label: "Excel Data", dork: "filetype:xls OR filetype:xlsx OR filetype:csv" },
            { label: "Word Docs", dork: "filetype:doc OR filetype:docx" },
            { label: "Text/Notes", dork: "filetype:txt OR filetype:rtf OR filetype:md" },
            { label: "Presentations", dork: "filetype:ppt OR filetype:pptx" },
            { label: "Spreadsheets (ODS)", dork: "filetype:ods" },
            { label: "Archives", dork: "filetype:zip OR filetype:rar OR filetype:tar OR filetype:gz" }
        ]
    },
    {
        category: "⚙️ Server & Config",
        items: [
            { label: "Directory Traversal", dork: "intitle:\"index of\"" },
            { label: "Config Files", dork: "filetype:xml OR filetype:conf OR filetype:cnf OR filetype:reg OR filetype:inf OR filetype:ini" },
            { label: "Log Files", dork: "filetype:log OR filetype:err" },
            { label: "Apache/Nginx Status", dork: "inurl:server-status OR intitle:\"nginx status\"" },
            { label: "PHP Info", dork: "inurl:phpinfo.php OR intitle:phpinfo" },
            { label: "Apache Config", dork: "filetype:conf inurl:apache OR intext:\"<VirtualHost\"" },
            { label: "Docker Configs", dork: "filetype:yml intext:docker OR filename:docker-compose" },
            { label: "Kubernetes", dork: "filetype:yaml intext:kubernetes OR intext:apiVersion" }
        ]
    },
    {
        category: "🐞 Bug Bounty & Vulns",
        items: [
            { label: "Open Redirects", dork: "inurl:redir OR inurl:url= OR inurl:redirect= OR inurl:return= OR inurl:next=" },
            { label: "XSS Parameters", dork: "inurl:q= OR inurl:s= OR inurl:search= OR inurl:lang= OR inurl:keyword= OR inurl:query=" },
            { label: "SQL Injection Points", dork: "inurl:id= OR inurl:pid= OR inurl:category= OR inurl:cat= OR inurl:action= OR inurl:sid=" },
            { label: "File Upload Forms", dork: "inurl:upload OR inurl:uploader OR inurl:file_upload" },
            { label: "Admin/Login Panels", dork: "inurl:admin OR inurl:login OR inurl:cpanel OR inurl:dashboard OR inurl:portal" },
            { label: "Error Messages", dork: "intext:\"sql syntax\" OR intext:\"mysql_fetch\" OR intext:\"Warning: mysql\" OR intext:\"Fatal error\"" },
            { label: "LFI/RFI Vulnerable", dork: "inurl:include OR inurl:require OR inurl:path= OR inurl:file=" },
            { label: "XXE Vulnerable", dork: "filetype:xml intext:DOCTYPE" }
        ]
    },
    {
        category: "☁️ Cloud & DevOps",
        items: [
            { label: "AWS S3 Buckets", dork: "intext:\"s3.amazonaws.com\" OR inurl:s3.amazonaws.com" },
            { label: "Azure Blobs", dork: "intext:\"blob.core.windows.net\" OR inurl:blob.core.windows.net" },
            { label: "Google Cloud Storage", dork: "intext:\"storage.googleapis.com\" OR inurl:storage.googleapis.com" },
            { label: "Git Repositories", dork: "inurl:/.git OR inurl:/.gitignore OR inurl:/.git/config" },
            { label: "Environment Files", dork: "filetype:env OR filename:.env" },
            { label: "Jenkins/CI-CD", dork: "intitle:\"Dashboard [Jenkins]\" OR inurl:jenkins OR inurl:job" },
            { label: "Travis CI Configs", dork: "filename:.travis.yml" },
            { label: "SSH Private Keys", dork: "intext:\"-----BEGIN RSA PRIVATE KEY-----\" OR intext:\"-----BEGIN OPENSSH PRIVATE KEY-----\"" },
            { label: "Terraform Files", dork: "filetype:tf OR filetype:tfstate" }
        ]
    },
    {
        category: "🗄️ Database Files",
        items: [
            { label: "SQL Dumps", dork: "filetype:sql intext:\"INSERT INTO\" OR intext:\"CREATE TABLE\"" },
            { label: "DB Backups", dork: "filetype:bak intext:database OR filetype:dump" },
            { label: "SQLite Databases", dork: "filetype:db OR filetype:sqlite OR filetype:sqlite3" },
            { label: "MongoDB Files", dork: "filetype:json intext:mongodb OR filetype:bson" },
            { label: "MySQL Dumps", dork: "filetype:sql intext:\"phpMyAdmin\" OR intext:\"MySQL dump\"" },
            { label: "PostgreSQL Dumps", dork: "filetype:sql intext:\"PostgreSQL\" OR intext:\"pg_dump\"" },
            { label: "Redis Dumps", dork: "filetype:rdb" },
            { label: "Access Databases", dork: "filetype:mdb OR filetype:accdb" }
        ]
    },
    {
        category: "🔑 Credentials & Keys",
        items: [
            { label: "API Keys", dork: "intext:\"api_key\" OR intext:\"apikey\" OR intext:\"api-key\" OR intext:\"client_secret\"" },
            { label: "AWS Keys", dork: "intext:\"AKIA\" OR intext:\"aws_access_key_id\"" },
            { label: "SSH Keys", dork: "filetype:pem OR filetype:key OR filetype:ppk OR intext:\"BEGIN RSA PRIVATE KEY\"" },
            { label: "Password Files", dork: "filetype:txt intext:password OR intext:passwd" },
            { label: "Database Passwords", dork: "intext:\"DB_PASSWORD\" OR intext:\"database_password\"" },
            { label: "JWT Tokens", dork: "intext:\"eyJ\" filetype:txt OR intext:\"Bearer eyJ\"" },
            { label: "OAuth Tokens", dork: "intext:\"access_token\" OR intext:\"refresh_token\"" },
            { label: "FTP Credentials", dork: "filetype:txt intext:\"ftp://\" intext:password" }
        ]
    },
    {
        category: "📧 Email & Social",
        items: [
            { label: "Email Lists", dork: "filetype:xls intext:email OR filetype:csv intext:email" },
            { label: "Contact Forms", dork: "inurl:contact OR inurl:feedback" },
            { label: "Email Addresses", dork: "intext:\"@\" filetype:txt OR filetype:csv" },
            /* FIX: Estos dorks son externos, la lógica updateAndSearch los manejará diferente */
            { label: "LinkedIn Profiles", dork: "site:linkedin.com" },
            { label: "GitHub Repos", dork: "site:github.com" },
            { label: "Pastebin Leaks", dork: "site:pastebin.com" },
            { label: "Resumes/CVs", dork: "intitle:\"curriculum vitae\" OR filetype:pdf intext:resume" }
        ]
    },
    {
        category: "🎯 OSINT & Recon",
        items: [
            /* FIX: Cambiado de 'site:*.example.com' a '-www' para que funcione con la lógica automática */
            { label: "Subdomains", dork: "-www" }, 
            { label: "Wayback Machine", dork: "site:web.archive.org" },
            { label: "Public Cameras", dork: "inurl:/view/view.shtml OR intitle:\"Live View\" OR intitle:\"Network Camera\"" },
            { label: "Printers/Copiers", dork: "intitle:\"HP LaserJet\" OR inurl:hp/device" },
            { label: "IoT Devices", dork: "intitle:\"AXIS\" OR intitle:\"NETGEAR\" OR inurl:8080" },
            { label: "Network Devices", dork: "intitle:\"Cisco\" OR intitle:\"router\" OR intitle:\"switch\"" },
            { label: "Webcams", dork: "inurl:/view.shtml OR inurl:ViewerFrame" },
            { label: "VoIP Phones", dork: "intitle:\"Polycom\" OR inurl:8001" }
        ]
    },
    {
        category: "📱 Mobile & Apps",
        items: [
            { label: "APK Files", dork: "filetype:apk" },
            { label: "iOS Apps (IPA)", dork: "filetype:ipa" },
            { label: "Mobile Configs", dork: "filetype:plist OR filetype:mobileprovision" },
            { label: "App Source Code", dork: "intext:\"MainActivity\" filetype:java" },
            { label: "Firebase Configs", dork: "intext:\"firebaseio.com\" OR inurl:firebaseio.com" }
        ]
    },
    {
        category: "💼 Business & Financial",
        items: [
            { label: "Invoices", dork: "filetype:pdf intext:invoice OR intext:billing" },
            { label: "Purchase Orders", dork: "filetype:pdf intext:\"purchase order\" OR intext:\"PO\"" },
            { label: "Financial Reports", dork: "filetype:xls intext:revenue OR intext:budget" },
            { label: "Salary Information", dork: "filetype:xls intext:salary OR intext:compensation" },
            { label: "NDA Documents", dork: "filetype:pdf intext:\"non-disclosure agreement\"" },
            { label: "Contracts", dork: "filetype:doc intext:contract OR filetype:pdf intext:agreement" }
        ]
    },
    {
        category: "🔒 Security & Compliance",
        items: [
            { label: "Security Policies", dork: "filetype:pdf intext:\"security policy\"" },
            { label: "Audit Reports", dork: "filetype:pdf intext:\"audit report\" OR intext:\"penetration test\"" },
            { label: "Compliance Docs", dork: "filetype:pdf intext:GDPR OR intext:HIPAA OR intext:PCI-DSS" },
            { label: "Incident Reports", dork: "filetype:pdf intext:\"incident report\" OR intext:\"security breach\"" },
            { label: "Firewall Configs", dork: "filetype:conf intext:firewall OR intext:iptables" }
        ]
    },
    {
        category: "🌐 Web Technologies",
        items: [
            { label: "WordPress Sites", dork: "inurl:wp-content OR inurl:wp-admin OR inurl:wp-login" },
            { label: "Joomla Sites", dork: "inurl:\"com_content\" OR inurl:\"option=com\"" },
            { label: "Drupal Sites", dork: "inurl:\"node/\" OR inurl:\"drupal\"" },
            { label: "PHP Sites", dork: "inurl:index.php OR inurl:admin.php" },
            { label: "ASP.NET Sites", dork: "inurl:default.aspx OR inurl:login.aspx" },
            { label: "Django Sites", dork: "inurl:\"admin/login\" intext:django" },
            { label: "Laravel Sites", dork: "intext:\"Laravel\" OR inurl:laravel" }
        ]
    }
];

// ===========================================================================
// INITIALIZATION
// ===========================================================================

document.addEventListener('DOMContentLoaded', () => {
    renderButtons();
    setupEventListeners();
    setupAccessibility();
});

// ===========================================================================
// RENDER FUNCTIONS
// ===========================================================================

/**
 * Dynamically generates dork category cards and buttons
 */
function renderButtons() {
    const container = document.getElementById('dorks-container');
    
    if (!container) {
        console.error('Dorks container not found');
        return;
    }
    
    // Clear container to prevent duplicates
    container.innerHTML = ''; 
    
    dorksData.forEach(category => {
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('role', 'region');
        card.setAttribute('aria-label', category.category);
        
        const title = document.createElement('h3');
        title.textContent = category.category;
        card.appendChild(title);

        category.items.forEach(item => {
            const btn = document.createElement('button');
            btn.textContent = item.label;
            btn.setAttribute('aria-label', `Search for ${item.label}`);
            btn.setAttribute('data-dork', item.dork);
            btn.onclick = () => updateAndSearch(item.dork);
            card.appendChild(btn);
        });

        container.appendChild(card);
    });
}

/**
 * Sets up additional event listeners
 */
function setupEventListeners() {
    const targetInput = document.getElementById('target');
    const customInput = document.getElementById('custom-dork-input');
    
    // Allow Enter key to trigger custom dork
    if (customInput) {
        customInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                runCustomDork();
            }
        });
    }
    
    // Clean domain input on blur
    if (targetInput) {
        targetInput.addEventListener('blur', () => {
            const value = targetInput.value.trim();
            if (value) {
                targetInput.value = cleanDomain(value);
            }
        });
    }
}

/**
 * Improves accessibility for screen readers
 */
function setupAccessibility() {
    // Add live region for screen readers if it doesn't exist
    if (!document.getElementById('aria-live-region')) {
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('aria-live', 'polite');
        liveRegion.setAttribute('aria-atomic', 'true');
        liveRegion.className = 'sr-only';
        liveRegion.id = 'aria-live-region';
        document.body.appendChild(liveRegion);
    }
}

// ===========================================================================
// CORE FUNCTIONALITY
// ===========================================================================

/**
 * Main function: Updates query preview and executes Google search
 * @param {string} dorkQuery - The dork query to execute
 */
function updateAndSearch(dorkQuery) {
    const targetInput = document.getElementById('target');
    let domain = targetInput.value.trim();

    // Validation
    if (!domain) {
        showNotification('⚠️ Error: Please enter a target domain first.', 'error');
        targetInput.focus();
        return;
    }

    // Clean and validate domain
    domain = cleanDomain(domain);
    
    if (!isValidDomain(domain)) {
        showNotification('⚠️ Invalid domain format. Please enter a valid domain (e.g., example.com)', 'error');
        targetInput.focus();
        return;
    }
    
    // Update input with cleaned domain
    targetInput.value = domain;

    // INTELLIGENT QUERY BUILDER
    let fullQuery = "";
    
    // Si el dork empieza por "site:", es una búsqueda externa (ej: site:linkedin.com)
    // En este caso, buscamos el dominio DEL USUARIO dentro de ESE sitio.
    if (dorkQuery.startsWith("site:")) {
        fullQuery = `${dorkQuery} "${domain}"`;
    } else {
        // Comportamiento normal: Buscar dentro del dominio del usuario
        fullQuery = `site:${domain} ${dorkQuery}`;
    }

    // Update UI with query preview
    updateQueryPreview(fullQuery);

    // Execute Google search
    executeSearch(fullQuery);
    
    // Announce to screen readers
    announceToScreenReader(`Searching for ${dorkQuery} on ${domain}`);
}

/**
 * Executes custom dork query
 */
function runCustomDork() {
    const customInput = document.getElementById('custom-dork-input');
    const customDork = customInput.value.trim();
    
    if (!customDork) {
        showNotification('Please enter a custom dork query.', 'warning');
        customInput.focus();
        return;
    }

    // If user already included 'site:domain', search directly
    if (customDork.includes('site:')) {
        executeSearch(customDork);
        updateQueryPreview(customDork);
    } else {
        updateAndSearch(customDork);
    }
}

// ===========================================================================
// UTILITY FUNCTIONS
// ===========================================================================

/**
 * Cleans and normalizes domain input
 * @param {string} domain - Raw domain input
 * @returns {string} Cleaned domain
 */
function cleanDomain(domain) {
    // Remove protocol (http://, https://)
    domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
    
    // Remove paths and query strings
    domain = domain.replace(/\/.*$/, '');
    
    // Remove trailing dots
    domain = domain.replace(/\.$/, '');
    
    return domain.toLowerCase();
}

/**
 * Validates domain format
 * @param {string} domain - Domain to validate
 * @returns {boolean} True if valid
 */
function isValidDomain(domain) {
    // Basic domain validation regex
    const domainRegex = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}$/i;
    return domainRegex.test(domain);
}

/**
 * Updates the query preview box
 * @param {string} query - The query to display
 */
function updateQueryPreview(query) {
    const previewBox = document.getElementById('query-preview');
    const queryText = document.getElementById('query-text');
    
    if (!previewBox || !queryText) return;
    
    previewBox.classList.remove('hidden');
    queryText.textContent = query;

    // Setup copy button
    setupCopyButton(query);
}

/**
 * Sets up the copy-to-clipboard functionality
 * @param {string} text - Text to copy
 */
function setupCopyButton(text) {
    const copyBtn = document.getElementById('copy-btn');
    
    if (!copyBtn) return;
    
    // Remove old listeners to avoid duplicates if re-initialized
    const newBtn = copyBtn.cloneNode(true);
    copyBtn.parentNode.replaceChild(newBtn, copyBtn);
    
    newBtn.onclick = () => {
        navigator.clipboard.writeText(text).then(() => {
            const originalText = newBtn.textContent;
            newBtn.textContent = '✓ Copied!';
            newBtn.style.backgroundColor = 'var(--accent-green)';
            
            setTimeout(() => {
                newBtn.textContent = originalText;
                newBtn.style.backgroundColor = '';
            }, 2000);
            
            announceToScreenReader('Query copied to clipboard');
        }).catch(err => {
            console.error('Failed to copy:', err);
            showNotification('Failed to copy to clipboard', 'error');
        });
    };
}

/**
 * Executes Google search in new tab
 * @param {string} query - Search query
 */
function executeSearch(query) {
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    
    // Create a temporary link and click it programmatically
    const link = document.createElement('a');
    link.href = googleUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/**
 * Shows notification to user
 * @param {string} message - Notification message
 * @param {string} type - Notification type (error, warning, success)
 */
function showNotification(message, type = 'info') {
    alert(message);
    announceToScreenReader(message);
}

/**
 * Announces message to screen readers
 * @param {string} message - Message to announce
 */
function announceToScreenReader(message) {
    const liveRegion = document.getElementById('aria-live-region');
    if (liveRegion) {
        liveRegion.textContent = message;
        // Clear after announcement
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

// ===========================================================================
// EXPORT FOR INLINE USAGE
// ===========================================================================

// Make functions available globally for onclick handlers
window.updateAndSearch = updateAndSearch;
window.runCustomDork = runCustomDork;
