// Fetch PLU data from somewhere, dummy data for now
let plu_data.json = {}; // This should be filled by your fetchPLU.js

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
    outputLabel.textContent = `Found: ${plu}`;
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

// Populate PLU list (you can do this once your fetchPLU.js fetches the actual data)
for (let code in pluData) {
  const li = document.createElement('li');
  li.textContent = `${code}: ${pluData[code]}`;
  pluList.appendChild(li);
}
