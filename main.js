object; it should be filled by your fetchPLU.js
let pluData = {};

// Fetch PLU data from JSON file
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
  const searchValue = searchInput.value.toLowerCase();
  const plu = pluData.find(item => item.Name.toLowerCase().includes(searchValue));
  
  if (plu) {
    outputLabel.textContent = `Found: ${plu.Name}, PLU Code: ${plu['PLU Code']}`;
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
