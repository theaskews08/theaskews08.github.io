// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const saveButton = document.getElementById('saveButton');
const savedList = document.getElementById('savedList');
const voiceSearchButton = document.getElementById('voiceSearchButton');
let savedItems = [];

let searchTimeoutToken;

// Debounced Search Functionality
searchInput.addEventListener('input', function() {
  clearTimeout(searchTimeoutToken);
  searchTimeoutToken = setTimeout(() => performSearch(), 300);
});

function performSearch() {
  // ... existing search logic ...
}

clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  // ... exit logic ...
});

saveButton.addEventListener('click', function() {
  const searchTerm = searchInput.value;
  if (searchTerm && !savedItems.includes(searchTerm