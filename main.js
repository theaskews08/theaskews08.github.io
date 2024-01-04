// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

let searchTimeoutToken;

// Debounced Search Functionality
searchInput.addEventListener('input', function() {
  clearTimeout(searchTimeoutToken);
  searchTimeoutToken = setTimeout(() => performSearch(), 300); // 300ms debounce
});

function performSearch() {
  const searchTerm = searchInput.value.toLowerCase().split(' ');
  let foundItems = pluData.filter(item => {
    const itemNameTokens = item.Name.toLowerCase().split(' ');
    return searchTerm.every(term => itemNameTokens.some(token => token.includes(term))) ||  
           item['PLU Code'].toString().includes(searchTerm.join(' '));
  });

  // Clear the output label
  outputLabel.innerHTML = '';

  // Displaying results
  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
  for(let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }

  if (foundItems.length === 0) {
    outputLabel.textContent = 'No matches found';
  }
}

clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  // Redirect to home page or show a message
  // window.location.href = 'home.html'; // Redirect to home page
  alert('Please close this tab to exit.'); // Show message
});