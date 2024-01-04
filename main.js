// Initialize with your local PLU data
let pluData = [
  // Populate this array with your actual PLU data
  { "PLU Code": "3000", "Name": "Alkmene Apples" },
  { "PLU Code": "3001", "Name": "Small Aurora/Southern Rose Apples" },
  { "PLU Code": "3002", "Name": "Cantared Apples" },
  // ... more items ...
];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceSearchButton = document.getElementById('voiceSearchButton');

// Event Listener for search input
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => {
    return (item.Name && item.Name.toLowerCase().includes(searchTerm)) ||
           (item['PLU Code'] && item['PLU Code'].toString().toLowerCase().includes(searchTerm));
  });

  outputLabel.innerHTML = '';
  foundItems.forEach(item => {
    outputLabel.innerHTML += `<div>${item.Name || 'Unnamed Item'} (PLU Code: ${item['PLU Code']})</div>`;
  });

  if (foundItems.length === 0) {
    outputLabel.textContent = 'No matches found';
  }
});

// Event Listeners for clear and exit buttons
clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  window.close(); // Note: This only works for pop-up windows opened via script
});

// Voice Search Functionality
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();

  recognition.onstart = function() {
    console.log("Voice search started. Speak into the microphone.");
  };

  recognition.onresult = function(event) {
    searchInput.value = event.results[0][0].transcript;
    searchInput.dispatchEvent(new Event('input'));
  };

  recognition.onerror = function(event) {
    if (event.error === 'not-allowed') {
      alert('Microphone access is not allowed. Please enable it to use voice search.');
    }
  };

  voiceSearchButton.addEventListener('click', function() {
    recognition.start(); // This will automatically prompt for microphone permission
  });
} else {
  voiceSearchButton.style.display = 'none'; // Hide if not supported
}

// ... [rest of your script] ...
// Initialize with your local PLU data
let pluData = [
  // Populate this array with your actual PLU data
  { "PLU Code": "3000", "Name": "Alkmene Apples" },
  { "PLU Code": "3001", "Name": "Small Aurora/Southern Rose Apples" },
  { "PLU Code": "3002", "Name": "Cantared Apples" },
  // ... more items ...
];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceSearchButton = document.getElementById('voiceSearchButton');

// Event Listener for search input
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => {
    return (item.Name && item.Name.toLowerCase().includes(searchTerm)) ||
           (item['PLU Code'] && item['PLU Code'].toString().toLowerCase().includes(searchTerm));
  });

  outputLabel.innerHTML = '';
  foundItems.forEach(item => {
    outputLabel.innerHTML += `<div>${item.Name || 'Unnamed Item'} (PLU Code: ${item['PLU Code']})</div>`;
  });

  if (foundItems.length === 0) {
    outputLabel.textContent = 'No matches found';
  }
});

// Event Listeners for clear and exit buttons
clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  window.close(); // Note: This only works for pop-up windows opened via script
});

// Voice Search Functionality
if ('webkitSpeechRecognition' in window) {
  const recognition = new webkitSpeechRecognition();

  recognition.onstart = function() {
    console.log("Voice search started. Speak into the microphone.");
  };

  recognition.onresult = function(event) {
    searchInput.value = event.results[0][0].transcript;
    searchInput.dispatchEvent(new Event('input'));
  };

  voiceSearchButton.addEventListener('click', function() {
    navigator.permissions.query({ name: 'microphone' }).then(function(permissionStatus) {
      if (permissionStatus.state === 'granted') {
        recognition.start();
      } else if (permissionStatus.state === 'prompt') {
        alert("Please allow microphone access for voice search.");
        recognition.start(); // This will prompt for permission
      } else {
        alert("Microphone access is required for voice search. Please enable it in your browser settings.");
      }
    });
  });
} else {
  voiceSearchButton.style.display = 'none'; // Hide if not supported
}