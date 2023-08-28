let pluData = {};

// Fetch PLU data
fetch('./plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));

const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

searchInput.addEventListener('input', function() {
  const searchValue = searchInput.value;
  const plu = pluData[searchValue];
  
  if (plu) {
    outputLabel.textContent = `Found: ${plu.Name}`;
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
