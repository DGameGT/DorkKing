// CONFIGURACIÓN: Lista de Dorks
// Puedes añadir más objetos a este array para ampliar la herramienta
const dorksData = [
    {
        category: "📂 Archivos y Documentos",
        items: [
            { label: "PDFs Públicos", dork: "filetype:pdf" },
            { label: "Excel (Tablas/Datos)", dork: "filetype:xls OR filetype:xlsx OR filetype:csv" },
            { label: "Documentos Word", dork: "filetype:doc OR filetype:docx" },
            { label: "Archivos de Texto", dork: "filetype:txt OR filetype:rtf OR filetype:md" }
        ]
    },
    {
        category: "⚙️ Configuración del Servidor",
        items: [
            { label: "Directory Traversal", dork: "intitle:\"index of\"" },
            { label: "Archivos de Config", dork: "filetype:xml OR filetype:conf OR filetype:cnf OR filetype:reg OR filetype:inf" },
            { label: "Logs de Errores", dork: "filetype:log OR filetype:err" },
            { label: "Bases de Datos SQL", dork: "filetype:sql OR filetype:dbf OR filetype:mdb" }
        ]
    },
    {
        category: "🔐 Puntos de Entrada",
        items: [
            { label: "Paneles de Admin", dork: "inurl:admin OR inurl:login OR inurl:wp-login" },
            { label: "Carpetas .Git Expuestas", dork: "inurl:/.git" },
            { label: "Archivos ENV", dork: "filetype:env" },
            { label: "Backups", dork: "filetype:bak OR filetype:old OR filetype:backup" }
        ]
    }
];

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    renderButtons();
});

// Renderiza los botones dinámicamente basado en dorksData
function renderButtons() {
    const container = document.getElementById('dorks-container');
    
    dorksData.forEach(cat => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const title = document.createElement('h3');
        title.innerText = cat.category;
        card.appendChild(title);

        cat.items.forEach(item => {
            const btn = document.createElement('button');
            btn.innerText = item.label;
            btn.setAttribute('aria-label', `Buscar ${item.label}`);
            btn.onclick = () => updateAndSearch(item.dork);
            card.appendChild(btn);
        });

        container.appendChild(card);
    });
}

// Lógica Principal
function updateAndSearch(dorkQuery) {
    let domain = document.getElementById('target').value;

    // 1. Validación y Limpieza
    if (!domain) {
        alert("⚠️ Error: Por favor, escribe un dominio objetivo primero.");
        document.getElementById('target').focus();
        return;
    }

    // Regex para limpiar http, www y rutas
    domain = domain.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/.*$/, '');
    
    // Actualizar el input con el dominio limpio (UX)
    document.getElementById('target').value = domain;

    // 2. Construcción de la Query
    const fullQuery = `site:${domain} ${dorkQuery}`;

    // 3. UI Update (Mostrar query)
    const previewBox = document.getElementById('query-preview');
    const queryText = document.getElementById('query-text');
    
    previewBox.classList.remove('hidden');
    queryText.innerText = fullQuery;

    // Configurar botón de copiado
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(fullQuery).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = "¡Copiado!";
            setTimeout(() => copyBtn.innerText = originalText, 1500);
        });
    };

    // 4. Ejecutar búsqueda
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(fullQuery)}`;
    window.open(googleUrl, '_blank');
}

// Lógica para el Custom Dork
function runCustomDork() {
    const customDork = document.getElementById('custom-dork-input').value;
    if(customDork) {
        // Si el usuario ya escribió 'site:domino', no lo duplicamos, sino usamos búsqueda directa
        if (customDork.includes('site:')) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(customDork)}`, '_blank');
        } else {
            updateAndSearch(customDork);
        }
    } else {
        alert("Introduce un dork personalizado.");
    }
}