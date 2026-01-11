
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





// DOMContentLoaded listener moved to bottom of file


function renderButtons() {
  const container = document.getElementById('dorks-container');
  
  if (!container) {
    console.error('Dork container not found');
    return;
  }
  
  container.innerHTML = ''; 
  
  // Prepare data with Favorites if they exist
  let displayData = [...dorksData];
  
  // Filter favorites
  if (favoriteDorks && favoriteDorks.length > 0) {
      const favItems = [];
      dorksData.forEach(cat => {
          cat.items.forEach(item => {
              if (favoriteDorks.includes(item.dork)) {
                  // Prevent duplicates in favorites list if same dork exists in multiple categories
                  if (!favItems.some(f => f.dork === item.dork)) {
                      favItems.push(item);
                  }
              }
          });
      });
      
      if (favItems.length > 0) {
          displayData.unshift({
              category: "⭐ Favorites",
              items: favItems
          });
      }
  }
  
  displayData.forEach(category => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('role', 'region');
    card.setAttribute('aria-label', category.category);
    // Add data attribute for styling
    if (category.category === "⭐ Favorites") {
        card.setAttribute('data-category', 'Favorites');
    }
    
    const title = document.createElement('h3');
    title.textContent = category.category;
    card.appendChild(title);

    category.items.forEach(item => {
      // Wrapper
      const wrapper = document.createElement('div');
      wrapper.className = 'dork-item';

      // Main Dork Button
      const btn = document.createElement('button');
      btn.className = 'dork-btn';
      btn.textContent = item.label;
      btn.setAttribute('aria-label', `Add ${item.label} to query`);
      btn.setAttribute('data-dork', item.dork);
      btn.onclick = () => addDorkToQuery(item.dork);
      
      // Actions
      const actions = document.createElement('div');
      actions.className = 'dork-actions';
      
      // Copy Button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'action-btn copy-icon';
      copyBtn.innerHTML = '📋';
      copyBtn.title = 'Copy to clipboard';
      copyBtn.onclick = (e) => {
          e.stopPropagation();
          copyDorkToClipboard(item.dork);
      };

      // Star Button
      const isFav = favoriteDorks.includes(item.dork);
      const starBtn = document.createElement('button');
      starBtn.className = `action-btn star-icon ${isFav ? 'active' : ''}`;
      starBtn.innerHTML = isFav ? '⭐' : '☆';
      starBtn.title = isFav ? 'Remove from favorites' : 'Add to favorites';
      starBtn.onclick = (e) => {
          e.stopPropagation();
          toggleFavorite(item.dork);
      };

      actions.appendChild(copyBtn);
      actions.appendChild(starBtn);

      wrapper.appendChild(btn);
      wrapper.appendChild(actions);
      card.appendChild(wrapper);
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
let favoriteDorks = JSON.parse(localStorage.getItem('dorkking_favorites')) || [];
let validatorEnabled = localStorage.getItem('dorkking_validator') === 'true'; // Moved from line 1158

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
  
  // targetInput.focus(); // Removed to prevent scroll jumping
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

function copyDorkToClipboard(dork) {
    navigator.clipboard.writeText(dork).then(() => {
        showNotification('📋 Dork copied!');
    }).catch(err => {
        console.error(err);
        showNotification('Failed to copy', 'error');
    });
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
  // Remove existing toast if any
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  
  if (type === 'error') toast.style.backgroundColor = 'var(--error-color)';
  if (type === 'warning') toast.style.backgroundColor = 'var(--warning-color)';
  
  document.body.appendChild(toast);
  
  // Trigger reflow
  toast.offsetHeight;
  
  toast.classList.add('show');
  
  setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
  }, 3000);
  
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
window.toggleFavorite = toggleFavorite;
window.copyDorkToClipboard = copyDorkToClipboard;

function toggleFavorite(dork) {
    const index = favoriteDorks.indexOf(dork);
    if (index === -1) {
        favoriteDorks.push(dork);
        showNotification('⭐ Added to Favorites');
    } else {
        favoriteDorks.splice(index, 1);
        showNotification('Removed from Favorites');
    }
    localStorage.setItem('dorkking_favorites', JSON.stringify(favoriteDorks));
    renderButtons();
}


// --- Preset Management Logic ---

let savedPresets = JSON.parse(localStorage.getItem('dorkking_presets')) || [];

function openModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add('active');
}

function closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove('active');
}

function openSavePresetModal() {
    openModal('save-preset-modal');
    setTimeout(() => document.getElementById('preset-name').focus(), 100);
}

function openPresetManager() {
    renderPresets();
    openModal('preset-manager-modal');
}

function saveCurrentPreset() {
    const nameInput = document.getElementById('preset-name');
    const name = nameInput.value.trim();
    
    if (!name) {
        showNotification('Please enter a preset name', 'warning');
        nameInput.focus();
        return;
    }
    
    const targetInput = document.getElementById('target');
    const query = targetInput.value;
    
    // Generate simple ID
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    
    const preset = {
        id: id,
        name: name,
        mode: currentMode,
        query: query,
        created: new Date().toISOString()
    };
    
    savedPresets.push(preset);
    localStorage.setItem('dorkking_presets', JSON.stringify(savedPresets));
    
    showNotification('✅ Preset saved successfully!');
    closeModal('save-preset-modal');
    nameInput.value = '';
}

function loadPreset(id) {
    const preset = savedPresets.find(p => p.id === id);
    if (!preset) return;
    
    if (preset.mode !== currentMode) {
        switchMode(preset.mode);
    }
    
    const targetInput = document.getElementById('target');
    targetInput.value = preset.query;
    updateQueryPreview();
    
    showNotification(`📂 Loaded preset: ${preset.name}`);
    closeModal('preset-manager-modal');
}

function deletePreset(id) {
    if (!confirm('Are you sure you want to delete this preset?')) return;
    
    savedPresets = savedPresets.filter(p => p.id !== id);
    localStorage.setItem('dorkking_presets', JSON.stringify(savedPresets));
    renderPresets();
    showNotification('Preset deleted');
}

function renderPresets() {
    const list = document.getElementById('presets-list');
    if (!list) return;
    
    list.innerHTML = '';
    
    if (savedPresets.length === 0) {
        list.innerHTML = '<div class="empty-state">No saved presets yet.</div>';
        return;
    }
    
    // Sort by newest first
    const sorted = [...savedPresets].reverse();
    
    sorted.forEach(p => {
        const item = document.createElement('div');
        item.className = 'preset-item';
        
        const modeLabel = p.mode === 'domain' ? '🌐 DOMAIN' : '📝 FREE';
        
        item.innerHTML = `
            <div class="preset-info">
                <h4>${p.name}</h4>
                <p><span class="highlight" style="font-size:0.75rem; border:1px solid #30363d; padding:2px 5px; border-radius:4px;">${modeLabel}</span> ${p.query ? p.query.substring(0, 40) + (p.query.length>40?'...':'') : '(empty)'}</p>
            </div>
            <div class="preset-actions">
                <button class="preset-btn btn-primary" onclick="loadPreset('${p.id}')">Load</button>
                <button class="preset-btn btn-danger" onclick="deletePreset('${p.id}')">Delete</button>
            </div>
        `;
        list.appendChild(item);
    });
}

function exportPresets() {
    if (savedPresets.length === 0) {
        showNotification('No presets to export', 'warning');
        return;
    }
    
    const data = {
        tool: "Dork King",
        version: "2.5.0",
        exported: new Date().toISOString(),
        presets: savedPresets
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: 'application/json'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dorkking-presets-${new Date().toISOString().slice(0,10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('⬇️ Presets exported to file!');
}

function importPresets(input) {
    const file = input.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data.presets && Array.isArray(data.presets)) {
                let count = 0;
                data.presets.forEach(p => {
                    // Avoid duplicates by ID
                    if (!savedPresets.some(existing => existing.id === p.id)) {
                        savedPresets.push(p);
                        count++;
                    }
                });
                
                localStorage.setItem('dorkking_presets', JSON.stringify(savedPresets));
                renderPresets();
                showNotification(`✅ Imported ${count} new presets!`);
            } else {
                showNotification('Invalid preset file format', 'error');
            }
        } catch (err) {
            console.error(err);
            showNotification('Failed to parse file', 'error');
        }
    };
    reader.readAsText(file);
    input.value = ''; // Reset file input
}

// Export new functions
window.openModal = openModal;
window.closeModal = closeModal;
window.openSavePresetModal = openSavePresetModal;
window.openPresetManager = openPresetManager;
window.saveCurrentPreset = saveCurrentPreset;
window.loadPreset = loadPreset;
window.deletePreset = deletePreset;
window.exportPresets = exportPresets;
window.importPresets = importPresets;

window.generateShareURL = generateShareURL;
window.copyShareURL = copyShareURL;
window.toggleValidator = toggleValidator;
window.openExportModal = openExportModal;
window.exportResult = exportResult;


// --- Phase 2: Advanced Features Logic ---

// 1. Share Query
function generateShareURL() {
    const targetInput = document.getElementById('target');
    const query = targetInput.value.trim();
    
    if (!query) {
        showNotification('Enter a query first to share', 'warning');
        return;
    }
    
    const params = new URLSearchParams();
    params.set('q', btoa(query)); // Basic encoding
    params.set('m', currentMode);
    
    const shareUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${params.toString()}`;
    
    const shareInput = document.getElementById('share-url-input');
    shareInput.value = shareUrl;
    
    openModal('share-modal');
}

function copyShareURL() {
    const shareInput = document.getElementById('share-url-input');
    shareInput.select();
    
    navigator.clipboard.writeText(shareInput.value).then(() => {
        showNotification('Link copied to clipboard!');
    }).catch(() => {
        document.execCommand('copy'); // Fallback
        showNotification('Link copied to clipboard!');
    });
}

function loadSharedQuery() {
    const params = new URLSearchParams(window.location.search);
    const encodedQuery = params.get('q');
    const mode = params.get('m');
    
    if (encodedQuery && mode) {
        try {
            const query = atob(encodedQuery);
            if (mode === 'domain' || mode === 'free') {
                switchMode(mode);
            }
            const targetInput = document.getElementById('target');
            targetInput.value = query;
            updateQueryPreview();
            showNotification('🔗 Shared query loaded!');
            
            // Clean URL without reload
            window.history.replaceState({}, document.title, window.location.pathname);
        } catch (e) {
            console.error('Failed to parse shared URL', e);
        }
    }
}

// 2. Export Results
function openExportModal() {
    openModal('export-modal');
}

function exportResult(format) {
    const targetInput = document.getElementById('target');
    const query = targetInput.value.trim();
    
    if (!query) {
        showNotification('No query to export', 'warning');
        return;
    }
    
    let content = '';
    let mimeType = 'text/plain';
    let extension = 'txt';
    let filename = `dork-export-${new Date().toISOString().slice(0,10)}`;
    
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    
    switch(format) {
        case 'json':
            content = JSON.stringify({
                tool: "Dork King",
                date: new Date().toISOString(),
                query: query,
                google_url: googleUrl,
                mode: currentMode
            }, null, 2);
            mimeType = 'application/json';
            extension = 'json';
            break;
        case 'csv':
            content = `Date,Query,Mode,URL\n"${new Date().toISOString()}","${query.replace(/"/g, '""')}","${currentMode}","${googleUrl}"`;
            mimeType = 'text/csv';
            extension = 'csv';
            break;
        case 'md':
            content = `# Dork King Export\n\n**Date:** ${new Date().toLocaleString()}\n**Query:** \`${query}\`\n**Mode:** ${currentMode}\n\n[Open in Google](${googleUrl})`;
            mimeType = 'text/markdown';
            extension = 'md';
            break;
        default: // txt
            content = `Query: ${query}\nURL: ${googleUrl}`;
            break;
    }
    
    const blob = new Blob([content], {type: mimeType});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.${extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    closeModal('export-modal');
    showNotification(`Exported as .${extension}`);
}

// 3. Validator
// Validator state moved to top

function toggleValidator() {
    validatorEnabled = document.getElementById('validator-toggle').checked;
    localStorage.setItem('dorkking_validator', validatorEnabled);
    
    if (validatorEnabled) {
        validateQuery();
    } else {
        const warningBox = document.getElementById('validator-warnings');
        warningBox.classList.remove('visible');
    }
}

function validateQuery() {
    if (!validatorEnabled) return;
    
    const targetInput = document.getElementById('target');
    const query = targetInput.value.trim();
    const warningBox = document.getElementById('validator-warnings');
    
    if (!query) {
        warningBox.classList.remove('visible');
        return;
    }
    
    const warnings = [];
    
    // Check 1: Length (Google limit is around 2048 characters, 32 words)
    if (query.length > 2000) {
        warnings.push("Query is close to Google's character limit (2048 chars).");
    }
    
    const wordCount = query.split(/\s+/).length;
    if (wordCount > 32) {
        warnings.push(`Query has ${wordCount} terms. Google ignores terms after the 32nd word.`);
    }
    
    // Check 2: Conflicting operators
    if (query.includes('allintext:') && query.includes('allinurl:')) {
        warnings.push("Mixing `allintext` and `allinurl` usually results in zero hits.");
    }
    
    // Check 3: Empty operators
    const operators = ['inurl:', 'intitle:', 'intext:', 'filetype:'];
    operators.forEach(op => {
        const regex = new RegExp(`${op}\\s`, 'i'); 
        if (regex.test(query)) {
            warnings.push(`Operator <code>${op}</code> seems to have a space after it. Remove the space.`);
        }
    });

    if (warnings.length > 0) {
        warningBox.innerHTML = `<strong>⚠️ Validator Warnings:</strong><ul>${warnings.map(w => `<li>${w}</li>`).join('')}</ul>`;
        warningBox.classList.add('visible');
    } else {
        warningBox.classList.remove('visible');
    }
}


// --- Phase 3: Batch Search Logic ---

let batchResults = [];

function openBatchModal() {
    openModal('batch-modal');
}

function generateBatchLinks() {
    const targetsText = document.getElementById('batch-targets').value;
    const dork = document.getElementById('batch-dork').value.trim();
    
    const targets = targetsText.split('\n').map(t => t.trim()).filter(t => t);
    
    if (targets.length === 0) { showNotification('Enter at least one target domain', 'warning'); return; }
    if (!dork) { showNotification('Enter a dork pattern', 'warning'); return; }
    
    batchResults = [];
    const output = document.getElementById('batch-output');
    output.innerHTML = '';
    
    targets.forEach(domain => {
        // Simple clean logic
        let clean = domain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');
        
        let query = '';
        if (dork.includes('site:')) {
             query = `${dork} site:${clean}`; // Append if dork is custom
        } else {
             query = `site:${clean} ${dork}`;
        }
        
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        batchResults.push({domain: clean, query: query, url: url});
        
        const linkDiv = document.createElement('div');
        linkDiv.style.marginBottom = '8px';
        linkDiv.style.padding = '8px';
        linkDiv.style.background = 'rgba(255,255,255,0.05)';
        linkDiv.style.borderRadius = '4px';
        linkDiv.style.fontSize = '0.9rem';
        
        linkDiv.innerHTML = `
            <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                <span style="color:var(--accent-green); font-weight:bold;">${clean}</span>
                <a href="${url}" target="_blank" style="color:#58a6ff; text-decoration:none;">Open ↗</a>
            </div>
            <div style="color:var(--text-muted); font-size:0.85em; font-family:'Roboto Mono', monospace;">${dork}</div>
        `;
        output.appendChild(linkDiv);
    });
    
    document.getElementById('batch-count').textContent = batchResults.length;
    document.getElementById('batch-results-area').classList.remove('hidden');
    showNotification(`Generated ${batchResults.length} search links!`);
}

function exportBatchCSV() {
    if (batchResults.length === 0) return;
    
    // CSV Header
    let csv = "Domain,Query,Search_URL\n";
    
    batchResults.forEach(r => {
        // Escape quotes
        const q = r.query.replace(/"/g, '""');
        csv += `"${r.domain}","${q}","${r.url}"\n`;
    });
    
    const blob = new Blob([csv], {type: 'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `batch_dorks_${new Date().toISOString().slice(0,10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    showNotification('Batch results exported to CSV');
}

// Export Phase 3 Functions
window.openBatchModal = openBatchModal;
window.generateBatchLinks = generateBatchLinks;
window.exportBatchCSV = exportBatchCSV;


// --- Phase 4: UI/UX Refinement Logic ---

function toggleMenu() {
    const sidebar = document.getElementById('nav-sidebar');
    const overlay = document.querySelector('.modal-overlay'); // Reuse overlay if we want, or just sidebar
    
    sidebar.classList.toggle('active');
    
    // Close sidebar when clicking outside (optional simple implementation)
    if (sidebar.classList.contains('active')) {
        document.addEventListener('click', closeMenuOutside);
    } else {
        document.removeEventListener('click', closeMenuOutside);
    }
}

function closeMenuOutside(e) {
    const sidebar = document.getElementById('nav-sidebar');
    const burgerBtn = document.querySelector('.burger-btn');
    
    if (!sidebar.contains(e.target) && !burgerBtn.contains(e.target)) {
        sidebar.classList.remove('active');
        document.removeEventListener('click', closeMenuOutside);
    }
}

function filterDorks() {
    const input = document.getElementById('dork-search');
    const filter = input.value.toLowerCase();
    
    const cards = document.querySelectorAll('.card');
    let hasVisibleDorks = false;

    cards.forEach(card => {
        let cardHasMatch = false;
        const dorkItems = card.querySelectorAll('.dork-item');
        
        dorkItems.forEach(item => {
            const btn = item.querySelector('.dork-btn');
            const label = btn.textContent.toLowerCase();
            const dork = btn.getAttribute('data-dork').toLowerCase();
            
            if (label.includes(filter) || dork.includes(filter)) {
                item.classList.remove('hidden-item');
                cardHasMatch = true;
                hasVisibleDorks = true;
                
                // Highlight match logic (optional, keeping simple for now)
            } else {
                item.classList.add('hidden-item');
            }
        });
        
        if (cardHasMatch) {
            card.classList.remove('hidden-item');
        } else {
            card.classList.add('hidden-item');
        }
    });

}

// Export Phase 4 Functions
window.toggleMenu = toggleMenu;
window.filterDorks = filterDorks;

// Phase 5: Imported Dorks from List (Bonus)
const importedDorks = {
  category: "🔥 Imported / Community (Bonus)",
  items: [
    { label: "Edu Phone Numbers", dork: 'site:.edu "phone number"' },
    { label: "Edu Student Login", dork: 'inurl:edu "login"' },
    { label: "Edu vBulletin Forums", dork: '"powered by vbulletin" site:.edu' },
    { label: "Gov vBulletin Forums", dork: '"powered by vbulletin" site:.gov' },
    { label: "Mil vBulletin Forums", dork: '"powered by vbulletin" site:.mil' },
    { label: "Web Config + FTP", dork: 'filetype:config inurl:web.config inurl:ftp' },
    { label: "Env.ini Config", dork: 'ext:ini intext:env.ini' },
    { label: "Microsoft IIS Logs", dork: 'ext:log "Software: Microsoft Internet Information Services"' },
    { label: "Access DB Dump", dork: 'ext:mdb inurl:*.mdb inurl:fpdb shop.mdb' },
    { label: "Open Directories (MP3)", dork: 'intitle:"index of" "parent directory" MP3 -html -htm -php' },
    { label: "Open Directories (Apps)", dork: 'intitle:"index of" "parent directory" /appz/ -html -htm -php' },
    { label: "Confidential Docs", dork: 'ext:(doc | pdf | xls | txt) (intext:"confidential salary" | intext:"budget approved")' },
    { label: "Search Index Cache", dork: 'cache:google.com' },
    { label: "Related Sites", dork: 'related:google.com' }
  ]
};

// Add to main data safely
if (typeof dorksData !== 'undefined') {
    dorksData.push(importedDorks);
}

// Phase 5: Keyboard Shortcuts Implementation
document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K to focus search input
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const targetInput = document.getElementById('target');
        if (targetInput) {
            targetInput.focus();
            
            // Visual feedback
            targetInput.style.boxShadow = '0 0 0 4px rgba(46, 160, 67, 0.4)';
            setTimeout(() => {
                targetInput.style.boxShadow = '';
            }, 300);
        }
    }

    // Esc to blur/unfocus
    if (e.key === 'Escape') {
        const targetInput = document.getElementById('target');
        if (document.activeElement === targetInput) {
            targetInput.blur();
        }
    }
});

// Initialize App (Moved from top to ensure all vars are defined)
document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  setupEventListeners();
  setupAccessibility();
  
  // Phase 2 Initialization
  const target = document.getElementById('target');
  if(target) {
      target.addEventListener('input', validateQuery);
  }
  
  const validatorToggle = document.getElementById('validator-toggle');
  if (validatorToggle) {
      validatorToggle.checked = validatorEnabled;
  }
  
  loadSharedQuery();

  // Phase 6 Initialization
  setupPhase6Listeners();
  loadTargets();
});

// ==========================================
// Phase 6: Ultra Features Logic (Target Manager & Builder)
// ==========================================

// --- Target Manager Logic ---
let targetList = [];
let massModeEnabled = false;

function setupPhase6Listeners() {
    // Target Manager Modal
    const targetModal = document.getElementById('target-modal');
    const openTargetBtn = document.getElementById('btn-target-manager');
    const closeTargetBtn = document.getElementById('close-target-modal');
    const saveTargetsBtn = document.getElementById('save-targets-btn');
    const addTargetBtn = document.getElementById('add-target-btn');
    const clearTargetsBtn = document.getElementById('clear-targets-btn');

    if(openTargetBtn) openTargetBtn.onclick = () => targetModal.classList.add('active');
    if(closeTargetBtn) closeTargetBtn.onclick = () => targetModal.classList.remove('active');
    
    if(addTargetBtn) {
        addTargetBtn.onclick = addTarget;
        // Allow Enter key to add target
        document.getElementById('new-target-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') addTarget();
        });
    }

    if(clearTargetsBtn) clearTargetsBtn.onclick = () => {
        targetList = [];
        renderTargets();
        saveTargets();
    };

    if(saveTargetsBtn) saveTargetsBtn.onclick = () => {
        saveTargets();
        targetModal.classList.remove('active');
        showToast('Targets saved!', 'success');
    };

    // Mass Mode Toggle
    const massToggle = document.getElementById('mass-mode-toggle');
    if(massToggle) {
        massToggle.onchange = (e) => {
            massModeEnabled = e.target.checked;
            const targetInput = document.getElementById('target');
            if(massModeEnabled) {
                targetInput.disabled = true;
                targetInput.placeholder = `Mass Mode Active (${targetList.length} targets)`;
                targetInput.value = ''; 
            } else {
                targetInput.disabled = false;
                targetInput.placeholder = "Target domain (e.g., gojek.com)";
            }
        };
    }

    // Builder Modal
    const builderModal = document.getElementById('builder-modal');
    const openBuilderBtn = document.getElementById('btn-builder');
    const closeBuilderBtn = document.getElementById('close-builder-modal');
    const addRowBtn = document.getElementById('add-row-btn');
    const applyBuilderBtn = document.getElementById('apply-builder-btn');

    if(openBuilderBtn) openBuilderBtn.onclick = () => {
        builderModal.classList.add('active');
        if(builderRows.length === 0) addBuilderRow(); // Add first row by default
    };
    if(closeBuilderBtn) closeBuilderBtn.onclick = () => builderModal.classList.remove('active');
    
    if(addRowBtn) addRowBtn.onclick = addBuilderRow;
    if(applyBuilderBtn) applyBuilderBtn.onclick = () => {
        const query = generateBuilderQuery();
        const mainInput = document.getElementById('target');
        // If main input has content, append? No, usually builder replaces or appends to dork.
        // For Dork King, let's assume this builds the "Dork" part, not the target.
        // Actually, users might want to build the WHOLE query including site:.
        // Simplest: Inject into search bar (conceptually, we don't have a main search bar for RAW query, 
        // we have Target Input + Dork Buttons). 
        // A better approach for this UI: Inject result into a "Custom Query" handler or just open Google.
        
        // Let's open Google directly with the built query + target
        const fullQuery = constructFinalQuery(query);
        window.open(`https://www.google.com/search?q=${encodeURIComponent(fullQuery)}`, '_blank');
        builderModal.classList.remove('active');
    };
}

function addTarget() {
    const input = document.getElementById('new-target-input');
    const domain = input.value.trim().replace(/^https?:\/\//, '').replace(/\/$/, ''); // Clean URL
    
    if (domain && !targetList.includes(domain)) {
        targetList.push(domain);
        renderTargets();
        input.value = '';
        input.focus();
    }
}

function renderTargets() {
    const container = document.getElementById('target-list-container');
    container.innerHTML = targetList.map(domain => `
        <span class="target-tag">
            ${domain}
            <button class="remove-target-btn" onclick="removeTarget('${domain}')">×</button>
        </span>
    `).join('');
    
    // Update Mass Mode placeholder if active
    if(massModeEnabled) {
        document.getElementById('target').placeholder = `Mass Mode Active (${targetList.length} targets)`;
    }
}

function removeTarget(domain) {
    targetList = targetList.filter(t => t !== domain);
    renderTargets();
}

function saveTargets() {
    localStorage.setItem('dorkKing_targets', JSON.stringify(targetList));
}

function loadTargets() {
    const saved = localStorage.getItem('dorkKing_targets');
    if (saved) {
        targetList = JSON.parse(saved);
        renderTargets();
    }
}

// Override logic: generate target string
// We need to Monkey-Patch or modify `updateLink` logic.
// Since `updateLink` uses `document.getElementById('target').value`, we need to handle mass mode there.
// BUT `updateLink` is defined separately. A cleaner way is to make a global function `getCurrentTarget()`
// and update `updateLink` to use it.
// OR, we can hijack the generation logic in the `updateLink` function itself if we had access.
// Since we are appending code, let's overwrite the `updateLink` function if possible, or 
// use a hook. 
// CHECK SCRIPT: `updateLink` is defined in global scope?
// YES. Let's Redefine `updateLink` here to support Mass Mode.

window.updateLink = function(dorkPattern) {
    let target = '';
    
    if (massModeEnabled && targetList.length > 0) {
        // Mass Mode: (site:a.com OR site:b.com)
        const sites = targetList.map(t => `site:${t}`).join(' OR ');
        target = `(${sites})`;
    } else {
        // Single Mode
        const rawTarget = document.getElementById('target').value.trim();
        if (rawTarget) {
            target = `site:${rawTarget}`;
        }
    }
    
    const query = `${target} ${dorkPattern}`.trim();
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
};


// --- Visual Builder Logic ---
let builderRows = [];

function addBuilderRow() {
    const rowId = Date.now();
    const rowHTML = `
        <div class="builder-row" id="row-${rowId}">
            <select class="builder-select op-select" onchange="updateBuilderPreview()">
                <option value="AND">AND</option>
                <option value="OR">OR</option>
            </select>
            
            <select class="builder-select type-select" onchange="updateBuilderPreview()">
                <option value="intext:">Intext (Text)</option>
                <option value="intitle:">Intitle (Title)</option>
                <option value="inurl:">Inurl (URL)</option>
                <option value="filetype:">Filetype</option>
                <option value="ext:">Ext</option>
                <option value="site:">Site</option>
                <option value="cache:">Cache</option>
                <option value="" selected>Raw Term</option>
            </select>
            
            <input type="text" class="builder-input val-input" placeholder="Value..." oninput="updateBuilderPreview()">
            
            <button class="remove-target-btn" onclick="removeBuilderRow(${rowId})">×</button>
        </div>
    `;
    
    document.getElementById('builder-rows').insertAdjacentHTML('beforeend', rowHTML);
    // Hide first operator
    const rows = document.getElementsByClassName('builder-row');
    if(rows.length > 0) {
        rows[0].querySelector('.op-select').style.visibility = 'hidden';
    }
}

window.removeBuilderRow = function(id) {
    const row = document.getElementById(`row-${id}`);
    if(row) row.remove();
    updateBuilderPreview();
}

window.updateBuilderPreview = function() {
    const query = generateBuilderQuery();
    document.getElementById('builder-preview-code').textContent = query || '...';
}

function generateBuilderQuery() {
    const rows = document.querySelectorAll('.builder-row');
    let query = '';
    
    rows.forEach((row, index) => {
        const op = row.querySelector('.op-select').value;
        const type = row.querySelector('.type-select').value;
        const val = row.querySelector('.val-input').value.trim();
        
        if(val) {
            let part = '';
            // Quote value if it has spaces and isn't a filetype
            const formattedVal = (val.includes(' ') && !type.includes('filetype') && !type.includes('ext')) ? `"${val}"` : val;
            
            part = `${type}${formattedVal}`;
            
            if (index === 0) {
                query += part;
            } else {
                query += ` ${op} ${part}`;
            }
        }
    });
    
    return query;
}

function constructFinalQuery(builderQuery) {
    // Combine Builder Query with Target Logic
    let target = '';
    if (massModeEnabled && targetList.length > 0) {
         const sites = targetList.map(t => `site:${t}`).join(' OR ');
         target = `(${sites})`;
    } else {
        const rawTarget = document.getElementById('target').value.trim();
        if (rawTarget) target = `site:${rawTarget}`;
    }
    
    return `${target} ${builderQuery}`.trim();
}

