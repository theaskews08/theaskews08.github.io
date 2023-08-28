// Fetch PLU data from somewhere, dummy data for now
let pluData = []; // This should be filled by your fetchPLU.js

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Event Listeners
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value;
  let foundItem;
  
  // Search by PLU Code if searchTerm is a number
  if (!isNaN(searchTerm)) {
    foundItem = pluData.find(item => item['PLU Code'] === parseInt(searchTerm));
    if (foundItem) {
      outputLabel.textContent = `Name: ${foundItem.Name}`;
      return;
    }
  }

  // Search by Name if searchTerm is text
  foundItem = pluData.find(item => item.Name.toLowerCase().includes(searchTerm.toLowerCase()));
  if (foundItem) {
    outputLabel.textContent = `PLU Code: ${foundItem['PLU Code']}`;
  } else {
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
