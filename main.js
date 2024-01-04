// Initialize empty array to hold PLU data
let pluData = []; // Populate this with your data

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceSearchButton = document.getElementById('voiceSearchButton'); // Ensure you have this button in your HTML

// Perform Search Function
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

// Search Button Event Listener
searchInput.addEventListener('input', performSearch);

// Voice Search Functionality
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();
  recognition.onresult = function(event) {
    searchInput.value = event.results[0][0].transcript;
    performSearch();
  };
  voiceSearchButton.addEventListener('click', function() {
    recognition.start();
  });
} else {
  voiceSearchButton.style.display = 'none'; // Hide if not supported
}

// Clear Button Event Listener
clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

// Exit Button Event Listener
exitButton.addEventListener('click', function() {
  window.close(); // Note: This works only for pop-up windows opened via JavaScript
});