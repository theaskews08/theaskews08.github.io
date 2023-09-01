// Fetch PLU data from somewhere, dummy data for now
let pluData = []; // This should be filled by your fetchPLU.js

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Event Listeners
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => 
    item.Name.toLowerCase().includes(searchTerm) || 
    item['PLU Code'].toLowerCase().includes(searchTerm)
  );
  
  // Sort the items alphabetically
  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
  
  // Clear the output label
  outputLabel.innerHTML = '';

  // Show the first 5 matched items as suggestions
  for(let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }
  
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

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));
