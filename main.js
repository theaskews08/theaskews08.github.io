// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Initialize an empty array to hold PLU data
let pluData = [];

// Fetch PLU data from plu_data.json
fetch('plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => {
    console.error('Error fetching PLU data:', error);
    outputLabel.textContent = 'Failed to load PLU data.';
  });

// Event Listener for search input
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => {
    return (item.Name && item.Name.toLowerCase().includes(searchTerm)) ||
           (item['PLU Code'] && item['PLU Code'].toString().toLowerCase().includes(searchTerm));
  });

  outputLabel.innerHTML = '';
  foundItems.forEach(item => {
    outputLabel.innerHTML += `<div>${item.Name || 'Unnamed Item'} (PLU Code: ${item['PLU Code']})</div>`;
  });

  if (foundItems.length === 0) {
    outputLabel.textContent = 'No matches found';
  }
});

// Event Listeners for clear and exit buttons
clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  window.close(); // Note: This only works for pop-up windows opened via script
});