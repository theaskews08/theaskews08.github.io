// Initialize with your local PLU data
let pluData = [
  { "PLU Code": "3000", "Name": "Alkmene Apples" },
  { "PLU Code": "3001", "Name": "Small Aurora/Southern Rose Apples" },
  { "PLU Code": "3002", "Name": "Cantared Apples" },
  // ... more items ...
];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

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
  window.close();
});

// Commenting out the voice 