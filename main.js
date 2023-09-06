// Initialize empty array for PLU data and saved searches
let pluData = [];
let savedSearches = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const exportButton = document.getElementById('exportButton');

// Event Listeners
searchInput.addEventListener('input', function() {
  // ... (same as before)
});

clearButton.addEventListener('click', function() {
  // ... (same as before)
});

exitButton.addEventListener('click', function() {
  // ... (same as before)
});

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));