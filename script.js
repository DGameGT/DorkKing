
const dorksData = [

// Files & Documents
{
  category: "📄 Files & Documents",
  items: [
    { label: "Public PDFs", dork: "filetype:pdf" },
    { label: "Excel Data", dork: "filetype:xls OR filetype:xlsx OR filetype:csv" },
    { label: "Word Docs", dork: "filetype:doc OR filetype:docx" },
    { label: "Text / Notes", dork: "filetype:txt OR filetype:rtf OR filetype:md" },
    { label: "Presentations", dork: "filetype:ppt OR filetype:pptx" },
    { label: "Spreadsheets (ODS)", dork: "filetype:ods" },
    { label: "Archives", dork: "filetype:zip OR filetype:rar OR filetype:tar OR filetype:gz" },
    { label: "OpenOffice Files", dork: "filetype:odt OR filetype:sxw" },
    { label: "Rich Text", dork: "filetype:rtf" },
    { label: "eBooks", dork: "filetype:epub OR filetype:mobi" }
  ]
},

// Server & Config
{
  category: "⚙️ Server & Config",
  items: [
    { label: "Directory Listing", dork: "intitle:\"index of\"" },
    { label: "Config Files", dork: "filetype:xml OR filetype:conf OR filetype:cnf OR filetype:ini OR filetype:env" },
    { label: "Log Files", dork: "filetype:log OR filetype:err" },
    { label: "Apache / Nginx Status", dork: "inurl:server-status OR intitle:\"nginx status\"" },
    { label: "PHP Info", dork: "inurl:phpinfo.php OR intitle:phpinfo" },
    { label: "Docker Configs", dork: "filename:docker-compose OR filetype:yml intext:docker" },
    { label: "Kubernetes Configs", dork: "filetype:yaml intext:apiVersion" },
    { label: "Nginx Configs", dork: "filetype:conf intext:nginx" },
    { label: "Apache Configs", dork: "filetype:conf intext:apache OR intext:httpd" },
    { label: "Web Server Configs", dork: "intext:\"server {\" OR intext:\"VirtualHost\"" }
  ]
},

// Bug Bounty & Vulnerabilities
{
  category: "🐛 Bug Bounty & Vulnerabilities",
  items: [
    { label: "Open Redirect", dork: "inurl:redir OR inurl:redirect= OR inurl:return= OR inurl:next=" },
    { label: "XSS Parameters", dork: "inurl:q= OR inurl:search= OR inurl:s= OR inurl:lang=" },
    { label: "SQL Injection Params", dork: "inurl:id= OR inurl:cat= OR inurl:pid= OR inurl:sid=" },
    { label: "File Upload Forms", dork: "inurl:upload OR inurl:uploader" },
    { label: "Admin Panels", dork: "inurl:admin OR inurl:login OR inurl:dashboard" },
    { label: "SQL Errors", dork: "intext:\"sql syntax\" OR intext:\"mysql_fetch\" OR intext:\"Fatal error\"" },
    { label: "LFI / RFI", dork: "inurl:file= OR inurl:path= OR inurl:include=" },
    { label: "XXE Targets", dork: "filetype:xml intext:DOCTYPE" },
    { label: "SSRF Endpoints", dork: "inurl:proxy= OR inurl:url= OR inurl:path=http" },
    { label: "IDOR Endpoints", dork: "inurl:user= OR inurl:account= OR inurl:profile=" }
  ]
},

// Cloud & DevOps
{
  category: "☁️ Cloud & DevOps",
  items: [
    { label: "AWS S3 Buckets", dork: "intext:\"s3.amazonaws.com\"" },
    { label: "Azure Blob Storage", dork: "inurl:blob.core.windows.net" },
    { label: "Google Cloud Storage", dork: "inurl:storage.googleapis.com" },
    { label: "Git Repositories", dork: "inurl:/.git OR inurl:.git/config" },
    { label: "Environment Files", dork: "filename:.env" },
    { label: "Jenkins Panels", dork: "intitle:\"Dashboard [Jenkins]\"" },
    { label: "Terraform Files", dork: "filetype:tf OR filetype:tfstate" },
    { label: "AWS Keys in Code", dork: "intext:AKIA filetype:json OR filetype:txt" },
    { label: "Docker Compose", dork: "filename:docker-compose.yml" },
    { label: "CI/CD Configs", dork: "filename:.gitlab-ci.yml OR filename:.travis.yml" }
  ]
},

// Databases & Backups
{
  category: "💾 Databases & Backups",
  items: [
    { label: "SQL Dumps", dork: "filetype:sql intext:\"CREATE TABLE\"" },
    { label: "Database Backups", dork: "filetype:bak OR filetype:dump" },
    { label: "SQLite DBs", dork: "filetype:sqlite OR filetype:db" },
    { label: "MongoDB Dumps", dork: "filetype:json intext:mongodb" },
    { label: "Redis Dumps", dork: "filetype:rdb" },
    { label: "cPanel Backups", dork: "filetype:tar.gz inurl:cpanel" },
    { label: "MySQL Dumps", dork: "filetype:sql intext:INSERT INTO" },
    { label: "PostgreSQL Dumps", dork: "filetype:sql intext:PostgreSQL" },
    { label: "Database Credentials", dork: "filetype:env intext:DB_PASSWORD" },
    { label: "phpMyAdmin", dork: "intitle:\"phpMyAdmin\" inurl:index.php" }
  ]
},

// Credentials & Secrets
{
  category: "🔑 Credentials & Secrets",
  items: [
    { label: "API Keys", dork: "intext:\"api_key\" OR intext:\"client_secret\"" },
    { label: "AWS Keys", dork: "intext:\"AKIA\" OR intext:\"aws_access_key_id\"" },
    { label: "Private SSH Keys", dork: "intext:\"BEGIN RSA PRIVATE KEY\"" },
    { label: "Passwords Files", dork: "filetype:txt intext:password" },
    { label: "JWT Tokens", dork: "intext:\"eyJ\" OR intext:\"Bearer eyJ\"" },
    { label: "OAuth Tokens", dork: "intext:\"access_token\"" },
    { label: "Stripe Keys", dork: "intext:\"sk_live_\" OR intext:\"pk_live_\"" },
    { label: "GitHub Tokens", dork: "intext:\"ghp_\" OR intext:\"github_token\"" },
    { label: "Slack Tokens", dork: "intext:\"xoxb-\" OR intext:\"xoxp-\"" },
    { label: "Mailgun Keys", dork: "intext:\"key-\" intext:mailgun" }
  ]
},

// Source Code & Leaks
{
  category: "📝 Source Code & Leaks",
  items: [
    { label: "Exposed Source Code", dork: "filetype:php OR filetype:js OR filetype:py OR filetype:java" },
    { label: "Backup Source Files", dork: "filetype:old OR filetype:bak OR filetype:swp" },
    { label: "Secrets in JS", dork: "filetype:js intext:key OR intext:token" },
    { label: "Hardcoded Passwords", dork: "intext:\"password =\"" },
    { label: "Git Exposed", dork: "inurl:\"/.git\" filetype:git" },
    { label: "SVN Exposed", dork: "inurl:\"/.svn/entries\"" },
    { label: "Vim Swap Files", dork: "filetype:swp" },
    { label: "IDE Project Files", dork: "filetype:iml OR filetype:project" }
  ]
},

// Debug & Dev Environments
{
  category: "🔧 Debug & Dev Environments",
  items: [
    { label: "Debug Enabled", dork: "APP_DEBUG=true OR debug=true" },
    { label: "Test / Dev Sites", dork: "inurl:test OR inurl:dev OR inurl:staging" },
    { label: "Swagger APIs", dork: "inurl:swagger OR inurl:api-docs" },
    { label: "GraphQL Endpoints", dork: "inurl:graphql OR intext:\"__schema\"" },
    { label: "Laravel Debug", dork: "intext:\"APP_ENV=local\" OR intext:\"APP_DEBUG=true\"" },
    { label: "Django Debug", dork: "intext:\"DEBUG = True\"" },
    { label: "Stack Traces", dork: "intext:\"Stack trace:\" OR intext:\"at line\"" },
    { label: "Error Pages", dork: "intitle:\"500 Internal Server Error\"" }
  ]
},

// Network & Infrastructure
{
  category: "🌐 Network & Infrastructure",
  items: [
    { label: "Open Web Ports", dork: "inurl:8080 OR inurl:8443 OR inurl:9200" },
    { label: "Elasticsearch", dork: "intitle:\"You Know, for Search\"" },
    { label: "Kibana Dashboards", dork: "intitle:\"Kibana\"" },
    { label: "Prometheus Metrics", dork: "inurl:/metrics" },
    { label: "Grafana", dork: "intitle:\"Grafana\" inurl:login" },
    { label: "RabbitMQ", dork: "intitle:\"RabbitMQ Management\"" },
    { label: "Redis Info", dork: "intitle:\"Redis\" inurl:info" },
    { label: "Apache Tomcat", dork: "intitle:\"Apache Tomcat\" inurl:manager" }
  ]
},

// People & Identity OSINT
{
  category: "👤 People & Identity OSINT",
  items: [
    { label: "Employee Lists", dork: "filetype:xls intext:employee" },
    { label: "Phone Directories", dork: "filetype:pdf intext:\"phone directory\"" },
    { label: "CVs / Resumes", dork: "filetype:pdf intext:resume OR intext:curriculum" },
    { label: "ID Numbers", dork: "filetype:xls intext:DNI OR intext:passport" },
    { label: "Email Lists", dork: "filetype:csv intext:email" },
    { label: "Org Charts", dork: "filetype:pdf intext:\"organizational chart\"" },
    { label: "Contact Lists", dork: "filetype:xls intext:\"contact list\"" },
    { label: "LinkedIn Profiles", dork: "site:linkedin.com" }
  ]
},

// OSINT & Recon
{
  category: "🔍 OSINT & Recon",
  items: [
    { label: "Subdomains", dork: "-www" },
    { label: "Wayback Machine", dork: "site:web.archive.org" },
    { label: "Public Cameras", dork: "intitle:\"Live View\" OR inurl:view.shtml" },
    { label: "Printers", dork: "intitle:\"HP LaserJet\"" },
    { label: "IoT Devices", dork: "intitle:\"AXIS\" OR intitle:\"NETGEAR\"" },
    { label: "VPN Login Pages", dork: "intitle:\"VPN\" inurl:login" },
    { label: "Router Panels", dork: "intitle:\"Router\" inurl:login" },
    { label: "Webcams", dork: "inurl:\"view/index.shtml\" OR inurl:\"ViewerFrame\"" }
  ]
},

// Web Technologies
{
  category: "🛠️ Web Technologies",
  items: [
    { label: "WordPress Sites", dork: "inurl:wp-content OR inurl:wp-admin" },
    { label: "Joomla Sites", dork: "inurl:\"com_content\" OR inurl:\"/administrator\"" },
    { label: "Drupal Sites", dork: "inurl:\"user/login\" intext:\"Drupal\"" },
    { label: "PHP Sites", dork: "inurl:\"index.php\"" },
    { label: "ASP.NET Sites", dork: "inurl:\".aspx\"" },
    { label: "Node.js Apps", dork: "intext:\"powered by Express\"" },
    { label: "React Apps", dork: "intext:\"react\" filetype:js" },
    { label: "Vue.js Apps", dork: "intext:\"vue\" filetype:js" }
  ]
},

// Authentication & Login
{
  category: "🔐 Authentication & Login",
  items: [
    { label: "Login Pages", dork: "intitle:\"login\" OR intitle:\"sign in\"" },
    { label: "Admin Login", dork: "inurl:admin inurl:login" },
    { label: "Forgot Password", dork: "intitle:\"forgot password\" OR inurl:\"reset\"" },
    { label: "SSO Pages", dork: "intitle:\"Single Sign-On\" OR inurl:sso" },
    { label: "OAuth Endpoints", dork: "inurl:oauth OR inurl:authorize" },
    { label: "SAML Login", dork: "inurl:saml OR intext:\"SAMLRequest\"" },
    { label: "Basic Auth", dork: "inurl:\"401 unauthorized\"" },
    { label: "Protected Directories", dork: "intitle:\"403 Forbidden\"" }
  ]
},

// E-Commerce
{
  category: "🛒 E-Commerce",
  items: [
    { label: "Magento Stores", dork: "inurl:\"magento\" OR inurl:\"checkout/cart\"" },
    { label: "Shopify Stores", dork: "inurl:\"myshopify.com\"" },
    { label: "WooCommerce", dork: "inurl:\"wc-api\" OR intext:\"WooCommerce\"" },
    { label: "Payment Pages", dork: "inurl:payment OR inurl:checkout" },
    { label: "Cart Pages", dork: "inurl:cart OR inurl:basket" },
    { label: "Order Forms", dork: "intitle:\"order form\" OR inurl:order" },
    { label: "Invoice Pages", dork: "intitle:\"invoice\" filetype:pdf" }
  ]
},

// Pastebin & Code Sharing
{
  category: "📋 Pastebin & Code Sharing",
  items: [
    { label: "Pastebin Leaks", dork: "site:pastebin.com" },
    { label: "GitHub Code", dork: "site:github.com" },
    { label: "GitLab Repos", dork: "site:gitlab.com" },
    { label: "Bitbucket Repos", dork: "site:bitbucket.org" },
    { label: "Gist Leaks", dork: "site:gist.github.com" },
    { label: "Sourceforge", dork: "site:sourceforge.net" },
    { label: "Paste.ee", dork: "site:paste.ee" },
    { label: "Justpaste.it", dork: "site:justpaste.it" }
  ]
},

// Breach & Incident Intelligence
{
  category: "🚨 Breach & Incident Intelligence",
  items: [
    { label: "Data Breach Reports", dork: "intext:\"data breach\"" },
    { label: "Ransomware Victims", dork: "intext:ransomware filetype:pdf" },
    { label: "Credential Leaks", dork: "filetype:txt intext:credentials" },
    { label: "Hack Reports", dork: "intext:\"hacked\" OR intext:\"compromised\"" },
    { label: "Vulnerability Disclosure", dork: "intext:\"vulnerability\" filetype:pdf" },
    { label: "Incident Response", dork: "intext:\"incident response\" filetype:pdf" }
  ]
},

// Advanced Operators
{
  category: "🎯 Advanced Operators",
  items: [
    { label: "Cached Pages", dork: "cache:" },
    { label: "Related Sites", dork: "related:" },
    { label: "Exact Title", dork: "intitle:\"\"" },
    { label: "Exact URL", dork: "inurl:\"\"" },
    { label: "Exclude Domain", dork: "-example.com" },
    { label: "All in Title", dork: "allintitle:" },
    { label: "All in URL", dork: "allinurl:" },
    { label: "All in Text", dork: "allintext:" },
    { label: "In Anchor", dork: "inanchor:" },
    { label: "Number Range", dork: "..\" (e.g., 2020..2025)" }
  ]
},

// Social Media
{
  category: "📱 Social Media",
  items: [
    { label: "Facebook Profiles", dork: "site:facebook.com" },
    { label: "Twitter Posts", dork: "site:twitter.com OR site:x.com" },
    { label: "LinkedIn Profiles", dork: "site:linkedin.com" },
    { label: "Instagram Posts", dork: "site:instagram.com" },
    { label: "TikTok Videos", dork: "site:tiktok.com" },
    { label: "Reddit Posts", dork: "site:reddit.com" },
    { label: "GitHub Discussions", dork: "site:github.com inurl:issues" },
    { label: "Stack Overflow", dork: "site:stackoverflow.com" }
  ]
},

// API & Documentation
{
  category: "📡 API & Documentation",
  items: [
    { label: "API Endpoints", dork: "inurl:api OR inurl:v1 OR inurl:v2" },
    { label: "API Documentation", dork: "intitle:\"API documentation\"" },
    { label: "Swagger/OpenAPI", dork: "inurl:\"swagger\" OR inurl:\"openapi\"" },
    { label: "Postman Collections", dork: "site:postman.com" },
    { label: "GraphQL Schemas", dork: "inurl:graphql intext:query" },
    { label: "REST APIs", dork: "inurl:rest OR inurl:restful" },
    { label: "SOAP Services", dork: "filetype:wsdl" },
    { label: "API Keys in Docs", dork: "intext:\"API key\" filetype:md" }
  ]
},

// CMS & Frameworks
{
  category: "⚡ CMS & Frameworks",
  items: [
    { label: "Laravel Apps", dork: "intext:\"Laravel\" filetype:env" },
    { label: "Django Sites", dork: "intext:\"Django\" inurl:admin" },
    { label: "Ruby on Rails", dork: "intext:\"Ruby on Rails\"" },
    { label: "Spring Boot", dork: "intext:\"Whitelabel Error Page\"" },
    { label: "Struts Apps", dork: "inurl:\"action\" filetype:action" },
    { label: "CodeIgniter", dork: "intext:\"CodeIgniter\" filetype:php" },
    { label: "Symfony Apps", dork: "intext:\"Symfony\" filetype:yml" },
    { label: "Flask Apps", dork: "intext:\"Werkzeug\"" }
  ]
}

];





document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  setupEventListeners();
  setupAccessibility();
});


function renderButtons() {
  const container = document.getElementById('dorks-container');
  
  if (!container) {
    console.error('Dorks container not found');
    return;
  }
  
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
      btn.setAttribute('aria-label', `Add ${item.label} to query`);
      btn.setAttribute('data-dork', item.dork);
      btn.onclick = () => addDorkToQuery(item.dork); // Changed from updateAndSearch
      card.appendChild(btn);
    });

    container.appendChild(card);
  });
}


function setupEventListeners() {
  const targetInput = document.getElementById('target');
  const customInput = document.getElementById('custom-dork-input');
  
  if (customInput) {
    customInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        runCustomDork();
      }
    });
  }
  
  if (targetInput) {
    // Real-time query preview update
    targetInput.addEventListener('input', () => {
      updateQueryPreview();
    });
    
    // Enter key to execute search
    targetInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        executeQuery();
      }
    });
    
    // Domain cleanup on blur (only in domain mode)
    targetInput.addEventListener('blur', () => {
      if (currentMode === 'domain') {
        const value = targetInput.value.trim();
        if (value) {
          const parts = value.split(' ');
          parts[0] = cleanDomain(parts[0]);
          targetInput.value = parts.join(' ');
          updateQueryPreview();
        }
      }
    });
  }
}


// Global state
let currentMode = 'domain'; // 'domain' or 'free'

function setupAccessibility() {
  if (!document.getElementById('aria-live-region')) {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.setAttribute('aria-atomic', 'true');
    liveRegion.className = 'sr-only';
    liveRegion.id = 'aria-live-region';
    document.body.appendChild(liveRegion);
  }
}


// Mode Switching
function switchMode(mode) {
  currentMode = mode;
  
  const domainBtn = document.getElementById('mode-domain');
  const freeBtn = document.getElementById('mode-free');
  const inputLabel = document.getElementById('input-label');
  const inputPrefix = document.getElementById('input-prefix');
  const targetInput = document.getElementById('target');
  const operatorHelpers = document.getElementById('operator-helpers');
  
  if (mode === 'domain') {
    // Activate Domain mode
    domainBtn.classList.add('active');
    freeBtn.classList.remove('active');
    
    inputLabel.textContent = 'Target Domain or Website:';
    inputPrefix.style.display = 'inline';
    targetInput.placeholder = 'example.com';
    targetInput.value = '';
    operatorHelpers.classList.add('hidden');
    
  } else {
    // Activate Free Input mode
    freeBtn.classList.add('active');
    domainBtn.classList.remove('active');
    
    inputLabel.textContent = 'Custom Search Query:';
    inputPrefix.style.display = 'none';
    targetInput.placeholder = 'e.g., intext:password filetype:txt';
    targetInput.value = '';
    operatorHelpers.classList.remove('hidden');
  }
  
  // Clear query preview
  const previewBox = document.getElementById('query-preview');
  previewBox.classList.add('hidden');
  
  announceToScreenReader(`Switched to ${mode === 'domain' ? 'Target Domain' : 'Free Input'} mode`);
}


// Insert Operator (for operator helper buttons)
function insertOperator(operator) {
  const targetInput = document.getElementById('target');
  const cursorPos = targetInput.selectionStart;
  const currentValue = targetInput.value;
  
  // Insert operator at cursor position
  const newValue = currentValue.substring(0, cursorPos) + operator + currentValue.substring(cursorPos);
  targetInput.value = newValue;
  
  // Move cursor after inserted operator
  targetInput.focus();
  targetInput.setSelectionRange(cursorPos + operator.length, cursorPos + operator.length);
  
  updateQueryPreview();
}


// Insert Quotes (for exact match searches)
function insertQuotes() {
  const targetInput = document.getElementById('target');
  const cursorPos = targetInput.selectionStart;
  const currentValue = targetInput.value;
  
  // Check if there's selected text
  const selectionStart = targetInput.selectionStart;
  const selectionEnd = targetInput.selectionEnd;
  
  if (selectionStart !== selectionEnd) {
    // Wrap selected text with quotes
    const selectedText = currentValue.substring(selectionStart, selectionEnd);
    const newValue = currentValue.substring(0, selectionStart) + 
                     '"' + selectedText + '"' + 
                     currentValue.substring(selectionEnd);
    targetInput.value = newValue;
    
    // Move cursor after closing quote
    targetInput.focus();
    targetInput.setSelectionRange(selectionStart + selectedText.length + 2, selectionStart + selectedText.length + 2);
  } else {
    // Insert empty quotes with cursor in between
    const newValue = currentValue.substring(0, cursorPos) + '""' + currentValue.substring(cursorPos);
    targetInput.value = newValue;
    
    // Move cursor between quotes
    targetInput.focus();
    targetInput.setSelectionRange(cursorPos + 1, cursorPos + 1);
  }
  
  updateQueryPreview();
}


// Add Dork to Query (for dork category buttons)
function addDorkToQuery(dorkQuery) {
  const targetInput = document.getElementById('target');
  let currentValue = targetInput.value.trim();
  
  if (currentMode === 'domain') {
    // In domain mode, append to domain value
    if (currentValue) {
      targetInput.value = currentValue + ' ' + dorkQuery;
    } else {
      targetInput.value = dorkQuery;
    }
  } else {
    // In free mode, combine with existing query
    if (currentValue) {
      targetInput.value = currentValue + ' ' + dorkQuery;
    } else {
      targetInput.value = dorkQuery;
    }
  }
  
  targetInput.focus();
  updateQueryPreview();
  announceToScreenReader('Dork added to query');
}


// Update Query Preview (real-time) 
function updateQueryPreview() {
  const targetInput = document.getElementById('target');
  const value = targetInput.value.trim();
  const previewBox = document.getElementById('query-preview');
  const queryText = document.getElementById('query-text');
  
  if (!value) {
    previewBox.classList.add('hidden');
    return;
  }
  
  let finalQuery = '';
  
  if (currentMode === 'domain') {
    // Extract domain part (before any operators)
    const parts = value.split(' ');
    const domain = cleanDomain(parts[0]);
    const operators = parts.slice(1).join(' ');
    
    if (domain) {
      finalQuery = `site:${domain}` + (operators ? ' ' + operators : '');
    }
  } else {
    // Free mode - use as is
    finalQuery = value;
  }
  
  if (finalQuery) {
    previewBox.classList.remove('hidden');
    queryText.textContent = finalQuery;
    setupCopyButton(finalQuery);
  } else {
    previewBox.classList.add('hidden');
  }
}


// Execute Search Query
function executeQuery() {
  const targetInput = document.getElementById('target');
  let value = targetInput.value.trim();
  
  if (!value) {
    showNotification('⚠️ Please enter a search query or domain first.', 'error');
    targetInput.focus();
    return;
  }
  
  let finalQuery = '';
  
  if (currentMode === 'domain') {
    // Domain mode: validate and build query
    const parts = value.split(' ');
    const domain = cleanDomain(parts[0]);
    
    if (!isValidDomain(domain)) {
      showNotification('⚠️ Invalid domain format. Please enter a valid domain (e.g., example.com)', 'error');
      targetInput.focus();
      return;
    }
    
    const operators = parts.slice(1).join(' ');
    finalQuery = `site:${domain}` + (operators ? ' ' + operators : '');
    
  } else {
    // Free mode: use query as is
    finalQuery = value;
  }
  
  if (finalQuery) {
    updateQueryPreview();
    executeSearch(finalQuery);
    announceToScreenReader(`Searching for: ${finalQuery}`);
  }
}


function runCustomDork() {
  const customInput = document.getElementById('custom-dork-input');
  const customDork = customInput.value.trim();
  
  if (!customDork) {
    showNotification('Please enter a custom dork query.', 'warning');
    customInput.focus();
    return;
  }

  if (customDork.includes('site:')) {
    executeSearch(customDork);
    updateQueryPreview(customDork);
  } else {
    updateAndSearch(customDork);
  }
}


function cleanDomain(domain) {
  domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '');
  
  domain = domain.replace(/\/.*$/, '');
  
  domain = domain.replace(/\.$/, '');
  
  return domain.toLowerCase();
}


function isValidDomain(domain) {
  const domainRegex = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,}$/i;
  return domainRegex.test(domain);
}


function updateQueryPreview(query) {
  const previewBox = document.getElementById('query-preview');
  const queryText = document.getElementById('query-text');
  
  if (!previewBox || !queryText) return;
  
  previewBox.classList.remove('hidden');
  queryText.textContent = query;

  setupCopyButton(query);
}


function setupCopyButton(text) {
  const copyBtn = document.getElementById('copy-btn');
  
  if (!copyBtn) return;
  
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(text).then(() => {
      const originalText = copyBtn.textContent;
      copyBtn.textContent = '✓ Copied!';
      copyBtn.style.backgroundColor = 'var(--accent-green)';
      
      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.style.backgroundColor = '';
      }, 2000);
      
      announceToScreenReader('Query copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy:', err);
      showNotification('Failed to copy to clipboard', 'error');
    });
  };
}


function executeSearch(query) {
  const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  
  const link = document.createElement('a');
  link.href = googleUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


function showNotification(message, type = 'info') {
  alert(message);
  announceToScreenReader(message);
}


function announceToScreenReader(message) {
  const liveRegion = document.getElementById('aria-live-region');
  if (liveRegion) {
    liveRegion.textContent = message;
    setTimeout(() => {
      liveRegion.textContent = '';
    }, 1000);
  }
}

// Export functions for HTML onclick handlers
window.switchMode = switchMode;
window.insertOperator = insertOperator;
window.insertQuotes = insertQuotes;
window.addDorkToQuery = addDorkToQuery;
window.executeQuery = executeQuery;
window.runCustomDork = runCustomDork;

