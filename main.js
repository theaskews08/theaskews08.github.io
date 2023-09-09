// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceButton = document.getElementById('voiceButton');  // New Voice Button

// Event Listeners
searchInput.addEventListener('input', function() {
  // ...existing search code...
});

clearButton.addEventListener('click', function() {
  // ...existing clear button code...
});

exitButton.addEventListener('click', function() {
  // ...existing exit button code...
});

// New voice search code
voiceButton.addEventListener('click', function() {
  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = 'en-US';

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    searchInput.dispatchEvent(new Event('input'));
  };

  recognition.start();
});

// Fetch data
fetch('./plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));