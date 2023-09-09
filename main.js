// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceButton = document.getElementById('voiceButton');

// Event Listeners
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase().split(' ');

  let foundItems = pluData.filter(item => {
    const itemNameTokens = item.Name.toLowerCase().split(' ');

    return searchTerm.every(term => itemNameTokens.some(token => token.includes(term))) ||  
    item['PLU Code'].toString().includes(searchTerm.join(' '));
  });

  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
  outputLabel.innerHTML = '';

  for(let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }

  if (foundItems.length === 0) {
    outputLabel.textContent = 'Not found';
  }
});

searchInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    searchInput.blur();
  }
});

clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  window.close();
});

voiceButton.addEventListener('click', function() {
  // Implement voice search here
});

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));