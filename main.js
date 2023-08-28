// Fetch PLU data from somewhere
let pluData = {}; // This will be filled by fetchPLU.js

// Fetching the PLU data from the JSON file
fetch('./plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data;
    populatePLUList();
  })
  .catch(error => console.error('Error fetching PLU data:', error));

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const pluList = document.getElementById('pluList');

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

// Function to populate the PLU list
function populatePLUList() {
  for (let code in pluData) {
    const li = document.createElement('li');
    li.textContent = `${code}: ${pluData[code]['Name']}`;  // Using the "Name" property
    pluList.appendChild(li);
  }
}
