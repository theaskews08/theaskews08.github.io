// Initialize empty array for PLU data and saved searches
let pluData = [];
let savedSearches = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const saveButton = document.getElementById('saveButton');
const exportButton = document.getElementById('exportButton');
const savedSearchesDiv = document.getElementById('savedSearches');

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

  // Show the first 5 matched items as suggestions
  for(let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }
  
  if (foundItems.length === 0) {
    outputLabel.textContent = 'Not found';
  }
});

searchInput.addEventListener('keydown', function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchInput.blur();
  }
});

clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  window.close();
});

saveButton.addEventListener('click', function() {
  const currentSearch = searchInput.value;
  if (currentSearch) {
    savedSearches.push(currentSearch);
    updateSavedSearches();
  }
});

exportButton.addEventListener('click', function() {
  const blob = new Blob([savedSearches.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'saved_searches.txt';
  a.click();
  URL.revokeObjectURL(url);
});

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));

function updateSavedSearches() {
  savedSearchesDiv.innerHTML = '';
  savedSearches.forEach(search => {
    savedSearchesDiv.innerHTML += `<p>${search}</p>`;
  });
}