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
  performSearch();
});

// Function to perform search
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => {
    return item.Name.toLowerCase().includes(searchTerm) || 
           item['PLU Code'].toString().includes(searchTerm);
  });

  outputLabel.innerHTML = '';
  foundItems.forEach(item => {
    let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(item.Name)}`;
    outputLabel.innerHTML += `<div><a href="${searchUrl}" target="_blank">${item.Name} (PLU Code: ${item['PLU Code']})</a></div>`;
  });

  if (foundItems.length === 0) {
    outputLabel.textContent = 'No matches found';
  }
}

// Event Listener for clear button
clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

// Event Listener for exit button
exitButton.addEventListener('click', function() {
  window.close();
});