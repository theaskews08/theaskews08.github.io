let pluData = [];
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceSearch = document.getElementById('voiceSearch');

// Voice search functionality
voiceSearch.addEventListener('click', function() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new SpeechRecognition();

  recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    searchInput.value = transcript;
    search();
  };

  recognition.start();
});

searchInput.addEventListener('input', search);

function search() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => item.Name.toLowerCase().includes(searchTerm) || item['PLU Code'].toString().includes(searchTerm));
  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
  outputLabel.innerHTML = '';
  
  for(let i = 0; i < Math.min(5, foundItems.length); i++) {
    outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }
  if (foundItems.length === 0) {
    outputLabel.textContent = 'Not found';
  }
}

clearButton.addEventListener('click', function() {
  searchInput.value = '';
  outputLabel.textContent = '';
});

exitButton.addEventListener('click', function() {
  window.close();
});

fetch('./plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));