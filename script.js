const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');
let cerCodes = [];

// Carica i dati dei codici CER dal file JSON
fetch('cer_codes.json')
    .then(response => response.json())
    .then(data => {
        cerCodes = data;
    })
    .catch(error => console.error('Errore nel caricamento dei codici CER:', error));

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const filteredResults = cerCodes.filter(item => 
        item &&
        item.description &&
        typeof item.description === 'string' &&
        item.description.toLowerCase().includes(query) ||
        item.code.includes(query)
    );
    
    displayResults(filteredResults);
});

function displayResults(results) {
    resultsContainer.innerHTML = '';
    results.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.code}: ${item.description}`;
        resultsContainer.appendChild(li);
    });
}