let pluData = [];

const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceButton = document.getElementById('voiceButton');

console.log("DOM elements fetched:", searchInput, outputLabel, clearButton, exitButton, voiceButton);

// Search Input Handling
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item =>  
    item.Name.toLowerCase().includes(searchTerm) || 
    item['PLU Code'].toString().includes(searchTerm)
  );
  
  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
  
  outputLabel.innerHTML = '';
  
  for(let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }
  
  if (foundItems.length === 0) {
    outputLabel.textContent = 'Not found';
  }
});

// Voice Search Handling
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('Voice recognition started. Speak into the microphone.');
};

recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  console.log('You said: ', transcript);
  searchInput.value = transcript;
};

recognition.onend = function() {
  console.log('Voice recognition ended.');
};

voiceButton.addEventListener('click', function() {
  recognition.start();
});

// Clear Button Handling
clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

// Exit Button Handling
exitButton.addEventListener('click', function() {
  window.close();
});

// Fetch PLU data
fetch('./plu_data.json')  
  .then(response => {
    return response.json();
  })
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));
