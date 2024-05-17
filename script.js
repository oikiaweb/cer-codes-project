const searchInput = document.getElementById('searchInput');
const codeInput = document.getElementById('codeInput');
const descriptionInput = document.getElementById('descriptionInput');
const advancedSearchToggle = document.getElementById('advancedSearchToggle');
const advancedSearch = document.getElementById('advancedSearch');
const resultsList = document.getElementById('results');

let cerCodes = [];

// Carica i codici CER dal file JSON
fetch('cer_codes.json')
    .then(response => response.json())
    .then(data => {
        cerCodes = data;
    })
    .catch(error => {
        console.error('Errore nel caricamento dei codici CER:', error);
    });

// Funzione per visualizzare i risultati
function displayResults(results) {
    resultsList.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = `${result.code}: ${result.description}`;
        resultsList.appendChild(li);
    });
}

// Aggiungi event listener per la ricerca di base
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredResults = cerCodes.filter(item => 
        item &&
        item.description &&
        typeof item.description === 'string' &&
        (item.description.toLowerCase().includes(query) || item.code.includes(query))
    );
    
    displayResults(filteredResults);
});

// Aggiungi event listener per il toggle della ricerca avanzata
advancedSearchToggle.addEventListener('click', () => {
    if (advancedSearch.style.display === 'none') {
        advancedSearch.style.display = 'block';
    } else {
        advancedSearch.style.display = 'none';
    }
});

// Aggiungi event listener per la ricerca avanzata
[codeInput, descriptionInput].forEach(input => {
    input.addEventListener('input', () => {
        const codeQuery = codeInput.value.toLowerCase();
        const descriptionQuery = descriptionInput.value.toLowerCase();
        const filteredResults = cerCodes.filter(item => 
            item &&
            item.description &&
            typeof item.description === 'string' &&
            item.code.includes(codeQuery) &&
            item.description.toLowerCase().includes(descriptionQuery)
        );
        
        displayResults(filteredResults);
    });
});

// Codice di verifica debugging
advancedSearchToggle.addEventListener('click', () => {
    console.log('Pulsante ricerca avanzata cliccato');
    if (advancedSearch.style.display === 'none') {
        advancedSearch.style.display = 'block';
    } else {
        advancedSearch.style.display = 'none';
    }
});
