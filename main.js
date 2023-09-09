 // Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceButton = document.getElementById('voiceButton');

console.log("DOM elements fetched:", searchInput, outputLabel, clearButton, exitButton, voiceButton);

// Event Listeners
searchInput.addEventListener('input', function() {
  console.log("Search input event triggered.");
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item =>  
    item.Name.toLowerCase().includes(searchTerm) ||  
    item['PLU Code'].toString().includes(searchTerm)
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

searchInput.addEventListener('keyup', function(event) {
  console.log("Keyup event triggered.");
  if (event.keyCode === 13) {
    searchInput.blur();
  }
});

clearButton.addEventListener('click', function() {
  console.log("Clear button clicked.");
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  console.log("Exit button clicked.");
  window.close();
});

voiceButton.addEventListener('click', function() {
  console.log("Voice button clicked.");
  // Implement voice search here
});

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => {
    console.log("Fetching PLU data...");
    return response.json();
  })
  .then(data => {
    console.log("PLU data fetched successfully:", data);
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));
