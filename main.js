// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Event Listeners for the search input, clear, and exit buttons
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase().split(' ');
  let foundItems = pluData.filter(item => {
    const itemNameTokens = item.Name.toLowerCase().split(' ');

    return searchTerm.every(term => itemNameTokens.some(token => token.includes(term))) ||  
           item['PLU Code'].toString().includes(searchTerm.join(' '));
  });

  // Clear the output label
  outputLabel.innerHTML = '';

  // Sort and show the first 5 matched items as suggestions
  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
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

// Annyang voice recognition integration
if (annyang) {
  // Define the commands
  var commands = {
    'search *term': function(term) {
      searchInput.value = term; // Set the search box value to the spoken term
      searchInput.dispatchEvent(new Event('input')); // Trigger the search functionality
    }
  };

  // Add the defined commands to annyang
  annyang.addCommands(commands);

  // Start listening for voice commands
  annyang.start();
}
