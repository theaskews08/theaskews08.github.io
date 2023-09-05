// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const languageSelect = document.getElementById('languageSelect');
const title = document.getElementById('title');
const createdBy = document.getElementById('createdBy');

// Event Listeners
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => 
    item.Name.toLowerCase().includes(searchTerm) || 
    item['PLU Code'].toString().includes(searchTerm)
  );
  
  // Sort the items alphabetically
  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
  
  // Clear the output label
  outputLabel.innerHTML = '';

  searchInput.addEventListener('focus', function() {
  searchInput.scrollIntoView({behavior: "smooth"});
});

  // Show the first 5 matched items as suggestions
  for(let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }
  
  if (foundItems.length === 0) {
    outputLabel.textContent = 'Not found';
  }
});

clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  window.close();
});

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));

// Language selection logic
languageSelect.addEventListener('change', function() {
  const selectedLanguage = languageSelect.value;
  if (selectedLanguage === 'es') {
    title.textContent = 'HERRAMIENTA DE BÚSQUEDA PLU';
    createdBy.textContent = 'Creado por Brian Askew';
    // Add more translations here
  } else {
    title.textContent = 'PLU LOOKUP TOOL';
    createdBy.textContent = 'Created by Brian Askew';
    // Reset to default English text
  }
});
