console.log('script.js caricato correttamente');

const advancedSearchToggle = document.getElementById('advancedSearchToggle');
const advancedSearch = document.getElementById('advancedSearch');

advancedSearchToggle.addEventListener('click', () => {
    console.log('Pulsante ricerca avanzata cliccato');
    if (advancedSearch.style.display === 'none' || advancedSearch.style.display === '') {
        advancedSearch.style.display = 'block';
    } else {
        advancedSearch.style.display = 'none';
    }
});
