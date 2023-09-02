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
  .catch(error => {
    console.error('Error fetching PLU data from API:', error);
  });

// Event Listeners
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => 
    item.Name.toLowerCase().includes(searchTerm) || 
    item['PLU Code'].toString().includes(searchTerm)
  );
  
  // Clear the output label
  outputLabel.innerHTML = '';

  // Show matched items
  foundItems.forEach(item => {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${item.Name}">${item.Name}</a> (PLU Code: ${item['PLU Code']})<br>`;
  });
  
  if (foundItems.length === 0) {
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