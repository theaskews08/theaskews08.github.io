// Initialize empty array for PLU data
let pluData = [];

// Initialize speech recognition
const recognition = new webkitSpeechRecognition();
recognition.continuous = false;

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const voiceButton = document.getElementById('voiceButton'); // New element

// Event Listeners
searchInput.addEventListener('input', searchItems);

// Add voice recognition event listener
voiceButton.addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('result', function(event) {
  searchInput.value = event.results[0][0].transcript;
  searchItems();
});

function searchItems() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item =>
    item.Name.toLowerCase().includes(searchTerm) ||
    item['PLU Code'].toString().includes(searchTerm)
  );

  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
  outputLabel.innerHTML = '';

  for (let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }
}

fetch('./plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));