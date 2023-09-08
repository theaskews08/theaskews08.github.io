// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.querySelector('input[type="search"]');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceButton = document.getElementById('voiceButton');

// Initialize SpeechRecognition API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Event Listeners
searchInput.addEventListener('input', function () {
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
  for (let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }

  if (foundItems.length === 0) {
    outputLabel.textContent = 'Not found';
  }
});

// Close keyboard on "Enter" key press
searchInput.addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    searchInput.blur();
  }
});

clearButton.addEventListener('click', function () {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function () {
  window.close();
});

// Voice search functionality
voiceButton.addEventListener('click', function () {
  recognition.start();
});

recognition.addEventListener('result', function (event) {
  const transcript = event.results[0][0].transcript;
  searchInput.value = transcript;
  searchInput.dispatchEvent(new Event('input'));
});

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));
