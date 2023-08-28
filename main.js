// Fetch PLU data from somewhere
let pluData = {}; // This will be filled by fetchPLU.js

// Fetching the PLU data from the JSON file
fetch('./plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Event Listeners
searchInput.addEventListener('input', function() {
  const searchValue = searchInput.value;
  const plu = pluData[searchValue];
  
  if (plu) {
    outputLabel.textContent = `Found: ${plu['Name']}`;  // Using the "Name" property
  } else {
    outputLabel.textContent = 'Not Found';
  }
});

clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  window.close();
});
