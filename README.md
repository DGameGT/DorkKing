# 👑 Dork King - Ultimate Google Dorks Generator

> **Professional-Grade Passive Reconnaissance Tool for Security Researchers & Bug Bounty Hunters**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![100% Client-Side](https://img.shields.io/badge/Client--Side-100%25-green.svg)](https://dork.dgxo.my.id)
[![Privacy Focused](https://img.shields.io/badge/Privacy-Focused-brightgreen.svg)](https://dork.dgxo.my.id)

---

## Credits & Attribution

**Original Source Code:** This project is based on [OSINT-dork-tool](https://github.com/mitocondria40/OSINT-dork-tool.git) by mitocondria40.

**Dork King 👑 Enhancements:** Extensively modified and enhanced by DGXO Team with revolutionary features including dual-mode system, query builder, 150+ patterns, and 24 operators.

---

**Dork King 👑** is the most comprehensive and powerful Google Dorks generator available. With 150+ pre-built dork patterns across 20 categories, 24 quick operators, and a revolutionary query builder system, it's designed to be the ultimate tool for security research, bug bounty hunting, and OSINT investigations.

**Live Demo:** [https://dork.dgxo.my.id](https://dork.dgxo.my.id)

---

## Why Dork King 👑?

### The Crown Jewels

- **Revolutionary Query Builder** - Build complex multi-dork queries interactively instead of one-click searches
- **Dual Mode System** - Switch between Target Domain mode and Free Input mode
- **24 Quick Operators** - Industry-leading operator coverage with one-click insertion
- **150+ Dork Patterns** - Most comprehensive collection organized in 20 categories
- **Enterprise Features** - Batch Search, Presets, Share Query, Export Results
- **100% Client-Side** - No data sent to any server, complete privacy
- **Real-Time Preview** - See your query before executing

### What Makes It Different

Most dork tools are simple "click and search" interfaces. **Dork King 👑** is a **query construction workshop** that gives you:

- **Full Control** - Build queries step-by-step, combine multiple dorks, edit manually  
- **Learning Tool** - Understand how dorks combine and work together  
- **Flexibility** - Target specific domains OR craft free-form queries  
- **Efficiency** - Quick operator buttons eliminate syntax memorization  
- **Power** - Combine 2, 3, 4+ dorks in ways competitors can't handle  

---

## Key Features

### 1. Dual Mode System

#### Target Domain Mode
Focus your dorks on a specific target domain:
- Automatic `site:` prefix handling
- Domain validation and cleanup
- Perfect for bug bounty and targeted recon

#### Free Input Mode
Full freedom for complex custom queries:
- No automatic prefixes
- Manual query crafting
- Ideal for OSINT and advanced research

**Switch between modes instantly!**

---

### 2. Revolutionary Query Builder

Unlike traditional tools that execute searches immediately, Dork King lets you **BUILD** queries:

1. **Click operators** → Insert at cursor position
2. **Click dork patterns** → Add to query (doesn't search yet!)
3. **Combine multiple dorks** → Build complex queries
4. **Edit manually** → Fine-tune your query
5. **Preview in real-time** → See the final result
6. **Execute when ready** → Click "🔍 SEARCH NOW"

**Example Workflow:**
```
1. Switch to "Free Input" mode
2. Click [intext:] → "intext:"
3. Click [" "] → "intext:"
4. Type: password → "intext:"password""
5. Click "SQL Dumps" → "intext:"password" filetype:sql intext:CREATE TABLE"
6. Click "AWS Keys" → "intext:"password" filetype:sql intext:CREATE TABLE intext:AKIA"
7. Preview shows full query
8. Click 🔍 SEARCH NOW to execute
```

---

### 3. Quick Operators (24 Total)

#### Basic Search Operators
- `intext:` - Search within page text
- `intitle:` - Search within page titles
- `inurl:` - Search within URLs
- `filetype:` - Filter by file extension
- `site:` - Restrict to specific domain

#### All Variants (Strict Matching)
- `allintext:` - ALL keywords must be in text
- `allintitle:` - ALL keywords must be in title
- `allinurl:` - ALL keywords must be in URL

#### Extended Operators
- `ext:` - Alias for filetype
- `inanchor:` - Search in link anchor text
- `related:` - Find similar websites
- `cache:` - View cached version
- `define:` - Dictionary definition

#### Time & Date Filters
- `before:` - Results before date (YYYY-MM-DD)
- `after:` - Results after date (YYYY-MM-DD)

#### Special Operators
- `" "` - Exact phrase match
- `*` - Wildcard (any word)
- `+` - Force include term
- `-` - Exclude term
- `OR` - Logical OR
- `AND` - Logical AND
- `AROUND(X)` - Terms within X words of each other
- `..` - Number range (e.g., 2020..2025)

---

### 4. Dork Patterns (150+ in 20 Categories)

#### Files & Documents (10 patterns)
PDF files, Excel sheets, Word docs, presentations, archives, eBooks, and more.

#### Server & Config (10 patterns)
Directory listings, config files, log files, web server status, Docker/Kubernetes configs.

#### Bug Bounty & Vulnerabilities (10 patterns)
Open redirects, XSS params, SQL injection vectors, LFI/RFI, SSRF, IDOR, file uploads, XXE.

#### Cloud & DevOps (10 patterns)
AWS S3 buckets, Azure storage, Google Cloud, Git repos, CI/CD configs, environment files.

#### Databases & Backups (10 patterns)
SQL dumps, MongoDB exports, Redis dumps, database backups, phpMyAdmin, credentials.

#### Credentials & Secrets (10 patterns)
API keys, AWS keys, SSH keys, JWT tokens, OAuth tokens, Stripe keys, GitHub tokens, Slack tokens.

#### Source Code & Leaks (8 patterns)
Exposed source code, backup files, hardcoded passwords, .git exposure, SVN, swap files.

#### Debug & Dev Environments (8 patterns)
Debug mode enabled, test/staging sites, Swagger APIs, GraphQL, Laravel/Django debug, stack traces.

#### Network & Infrastructure (8 patterns)
Open ports, Elasticsearch, Kibana, Grafana, RabbitMQ, Redis, Apache Tomcat, Prometheus.

#### People & Identity OSINT (8 patterns)
Employee lists, phone directories, CVs/resumes, ID numbers, email lists, org charts.

#### OSINT & Recon (8 patterns)
Subdomain discovery, Wayback Machine, public cameras, IoT devices, VPN panels, routers, webcams.

#### Web Technologies (8 patterns)
WordPress, Joomla, Drupal, PHP, ASP.NET, Node.js, React, Vue.js detection.

#### Authentication & Login (8 patterns)
Login pages, admin panels, forgot password, SSO, OAuth, SAML, basic auth, protected directories.

#### E-Commerce (7 patterns)
Magento, Shopify, WooCommerce, payment pages, cart pages, order forms, invoices.

#### Pastebin & Code Sharing (8 patterns)
Pastebin, GitHub, GitLab, Bitbucket, Gist, SourceForge, Paste.ee, Justpaste.it.

#### Breach & Incident Intelligence (6 patterns)
Data breach reports, ransomware victims, credential leaks, hack reports, vulnerability disclosures.

#### Advanced Operators (10 patterns)
Cache, related sites, exact matches, exclusions, all-in variants, anchors, number ranges.

#### Social Media (8 patterns)
Facebook, Twitter/X, LinkedIn, Instagram, TikTok, Reddit, GitHub discussions, Stack Overflow.

#### API & Documentation (8 patterns)
API endpoints, Swagger/OpenAPI, Postman, GraphQL, REST, SOAP, API docs.

#### CMS & Frameworks (8 patterns)
Laravel, Django, Ruby on Rails, Spring Boot, Struts, CodeIgniter, Symfony, Flask.

---

## Use Cases

### Bug Bounty Hunting
- Find vulnerabilities in target domains
- Discover exposed credentials and secrets
- Identify misconfigurations and security issues
- Locate admin panels and debug pages

### OSINT Investigations
- People search and background checks
- Company intelligence gathering
- Social media reconnaissance
- Data breach monitoring

### Security Research
- Passive reconnaissance
- Attack surface mapping
- Technology stack identification
- Infrastructure enumeration

### Penetration Testing
- Initial reconnaissance phase
- Target profiling
- Vulnerability discovery
- Credential harvesting

---

## Example Queries

### Basic Target Domain Scan
```
Mode: Target Domain
Input: example.com
Click: "Admin Panels" + "Login Pages" + "SQL Errors"
Result: site:example.com (inurl:admin OR inurl:login) intitle:"login" intext:"sql syntax"
```

### Advanced Multi-Dork Leak Hunting
```
Mode: Free Input
Build: intext:"password" filetype:sql intext:"CREATE TABLE" site:pastebin.com before:2024-01-01
Finds: SQL dumps with passwords on Pastebin before 2024
```

### Cloud Storage Discovery
```
Mode: Free Input
Build: site:s3.amazonaws.com OR site:blob.core.windows.net intext:"confidential"
Finds: Exposed cloud storage buckets with confidential data
```

### API Key Exposure
```
Mode: Free Input
Build: (intext:"api_key" OR intext:"AKIA") (filetype:json OR filetype:env OR filetype:txt)
Finds: Exposed API keys and AWS credentials in files
```

---

## User Interface

### Clean, Dark, Professional Design
- **Dark Theme** - Easy on the eyes for long research sessions
- **Organized Categories** - Emoji icons for quick visual navigation  
- **Responsive Layout** - Works on desktop, tablet, and mobile
- **Accessibility** - Screen reader support, keyboard navigation
- **Minimal Distractions** - Focus on the work

### UX Highlights
- 🟢 **Active/Inactive Mode Toggle** - Green highlight for active mode
- 📊 **Real-Time Query Preview** - See your query as you build
- 📋 **One-Click Copy** - Copy queries to clipboard
- 🔍 **Prominent Search Button** - Clear call-to-action
- ⚡ **Keyboard Shortcuts** - Enter to search

---

## Privacy & Security

### 100% Client-Side Processing
- **No Server Communication** - All processing happens in your browser
- **No Data Collection** - We don't track, log, or store anything
- **No Cookies** - Zero tracking cookies
- **HTTPS Only** - Secure connection to Google Search
- **Open Source** - Audit the code yourself

### Responsible Use
> [!WARNING]
> **Use Responsibly and Legally**
> 
> Dork King is designed for legitimate security research, OSINT, and educational purposes. Users must:
> - Respect website terms of service
> - Obtain proper authorization before testing
> - Comply with local laws and regulations
> - Use findings ethically and responsibly
> 
> The tool creators are not responsible for misuse.

---

## Technical Stack

- **HTML5** - Semantic, accessible markup
- **CSS3** - Modern styling with CSS variables
- **Vanilla JavaScript** - No frameworks, pure performance
- **Google Fonts** - Roboto Mono for that hacker aesthetic

### Browser Support
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

---

## Installation & Deployment

### Option 1: Use Online (Recommended)
Simply visit [https://dork.dgxo.my.id](https://dork.dgxo.my.id)

### Option 2: Clone and Run Locally
```bash
# Clone the repository
git clone https://github.com/yourusername/dork-king.git

# Navigate to directory
cd dork-king

# Open in browser (no build required!)
open index.html
```

### Option 3: Deploy to GitHub Pages
1. Fork this repository
2. Enable GitHub Pages in Settings
3. Set source to `main` branch
4. Access at `https://yourusername.github.io/dork-king/`

### Option 4: Deploy to Vercel/Netlify
Just drag and drop the folder - it works instantly!

---

## Documentation

### Quick Start Guide

1. **Choose Your Mode**
   - Click "🌐 Target Domain" for focused domain scanning
   - Click "📝 Free Input" for custom query building

2. **Build Your Query**
   - Use Quick Operator buttons to insert syntax
   - Click Dork Category buttons to add patterns
   - Type manually for fine control

3. **Preview & Execute**
   - Watch the query preview update in real-time
   - Click "🔍 SEARCH NOW" when ready
   - Results open in new tab

### Advanced Tips

**Combining Multiple Dorks:**
```
Site Mode: example.com (Added "Admin Panels" + "Config Files" + "SQL Dumps")
Result: site:example.com (inurl:admin OR inurl:login) (filetype:xml OR filetype:conf) filetype:sql
```

**Time-Bound Searches:**
```
Click [before:] → Type: 2024-01-01
Click [after:] → Type: 2020-01-01
Add: filetype:pdf breach
Result: filetype:pdf breach before:2024-01-01 after:2020-01-01
```

**Proximity Searches:**
```
Type: password
Click [AROUND()]
Type: leak
Result: password AROUND(5) leak
```

### Keyboard Shortcuts
- `Enter` - Execute search (when input is focused)
- `Tab` - Navigate between elements
- `Escape` - Close notifications

---

## Contributing

We welcome contributions! Here's how you can help:

### Adding New Dork Patterns
1. Edit `script.js`
2. Find the `dorksData` array
3. Add your pattern to the appropriate category:
```javascript
{
  category: "🐛 Bug Bounty & Vulnerabilities",
  items: [
    // ... existing items
    { label: "Your New Dork", dork: "your:dork query:here" }
  ]
}
```

### Reporting Issues
- Use GitHub Issues
- Provide browser version and OS
- Include steps to reproduce
- Screenshots help!

### Feature Requests
- Open a discussion first
- Explain the use case
- Consider backward compatibility

---

## Version History

### v2.0.0 (2026-01-11) - **Dork King Edition** 👑
**Major Overhaul:**
- 🔥 **NEW:** Revolutionary Query Builder System
- 🔥 **NEW:** Dual Mode (Target Domain / Free Input)
- 🔥 **NEW:** 24 Quick Operators (expanded from 9)
- 🔥 **NEW:** 150+ Dork Patterns (expanded from ~80)
- 🔥 **NEW:** 20 Categories (expanded from 13)
- 🔥 **NEW:** 7 New Categories Added:
  - 🛠️ Web Technologies
  - 🔐 Authentication & Login
  - 🛒 E-Commerce
  - 📋 Pastebin & Code Sharing
  - 📱 Social Media
  - 📡 API & Documentation
  - ⚡ CMS & Frameworks
- ✨ **IMPROVED:** Category emojis for better UX
- ✨ **IMPROVED:** More patterns in existing categories
- ✨ **IMPROVED:** Real-time query preview
- ✨ **IMPROVED:** Dedicated search button
- ✨ **IMPROVED:** Better operator organization
### v2.5.0 (2026-01-11) - **Enterprise Edition** 👑
**Major Feature Update:**
- 🔥 **NEW:** **Batch Search Generator** - Run dorks against multiple domains at once
- 🔥 **NEW:** **Save/Load Presets** - Save your favorite queries (Local & File Export)
- 🔥 **NEW:** **Query Validator** - Real-time syntax checking & warnings
- 🔥 **NEW:** **Share Query** - Generate shareable links for collaboration
- 🔥 **NEW:** **Export Results** - Export queries to JSON, CSV, MD, or TXT
- 🔥 **NEW:** **UI Overhaul** - New Navbar, Burger Menu, and Dork Search Filter
- ✨ **IMPROVED:** Copy & Favorite dorks (Star system)
- ✨ **IMPROVED:** Toast notifications system

### v2.0.0 (2026-01-11) - **Dork King Edition** 👑
**Major Overhaul:**
- 🔥 **NEW:** Revolutionary Query Builder System
- Basic dork categories
- Simple click-to-search interface
- Core functionality

---

## Credits

**Created with ❤️ by DGXO Team**

- **Lead Developer:** DGameGT
- **AI Assistant:** Masha (Google Gemini)
- **Design:** DGXO Design Team
- **Powered By:** DGXO Infrastructure

### Acknowledgments
- Google Search Operators Documentation
- OSINT Community
- Bug Bounty Community
- Security Researchers Worldwide

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2026 DGXO - Dork King

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## Links

- **Website:** [https://dork.dgxo.my.id](https://dork.dgxo.my.id)
- **Documentation:** [https://dork.dgxo.my.id/docs](https://dork.dgxo.my.id/docs)
- **GitHub:** [https://github.com/dgxo/dork-king](https://github.com/dgxo/dork-king)
- **Issues:** [https://github.com/dgxo/dork-king/issues](https://github.com/dgxo/dork-king/issues)
- **DGXO:** [https://dgxo.my.id](https://dgxo.my.id)

---

## Contact & Support

- **Email:** contact@dgxo.my.id
- **Twitter:** [@DGXO_Official](https://twitter.com/DGXO_Official)
- **Discord:** [DGXO Community](https://discord.gg/dgxo)

---

<div align="center">

**🌟 If you find Dork King useful, please give it a star! 🌟**

Made with 👑 by the DGXO Team

**Knowledge is power. Security is freedom. Use both responsibly.**

---

**© 2026 Dork King - Powered by DGXO**

</div>
