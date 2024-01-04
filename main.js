// Initialize empty array to hold PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Fetch PLU data from the API
fetch('https://gregrasmussen.com/store-system/public-plu-data')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));

// Event Listener for search input
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => {
    return item.Name.toLowerCase().includes(searchTerm) ||
           item['PLU Code'].toString().toLowerCase().includes(searchTerm);
  });

  // Clear the output label
  outputLabel.innerHTML = '';

  // Display the matched items
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
  window.close(); // Note: This only works for windows opened via script
});