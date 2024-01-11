// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const voiceSearchButton = document.getElementById('voiceSearchButton');

// Event Listeners for search, clear, and exit
searchInput.addEventListener('input', handleTextInput);
clearButton.addEventListener('click', clearSearch);
exitButton.addEventListener('click', exitApp);
voiceSearchButton.addEventListener('click', startVoiceRecording);

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')
    .then(response => response.json())
    .then(data => {
        pluData = data;
    })
    .catch(error => console.error('Error fetching PLU data:', error));

// Function to handle text input
function handleTextInput() {
    const searchTerm = searchInput.value.toLowerCase().split(' ');
    searchAndDisplayResults(searchTerm);
}

// Function to start voice recording
function startVoiceRecording() {
    // Implement voice recording functionality
    console.log("Voice recording started");
    // Simulate voice transcription for now
    setTimeout(() => {
        const simulatedTranscription = "example voice input";
        searchInput.value = simulatedTranscription;
        searchInput.dispatchEvent(new Event('input'));
    }, 3000);
}

// Function to clear search
function clearSearch() {
    searchInput.value = '';
    outputLabel.textContent = '';
}

// Function to exit app
function exitApp() {
    window.close();
}

// Function to search and display results
function searchAndDisplayResults(searchTerms) {
    let foundItems = pluData.filter(item => {
        const itemNameTokens = item.Name.toLowerCase().split(' ');

        return searchTerms.every(term => itemNameTokens.some(token => token.includes(term))) ||
               item['PLU Code'].toString().includes(searchTerms.join(' '));
    });

    outputLabel.innerHTML = '';
    foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
    for (let i = 0; i < Math.min(5, foundItems.length); i++) {
        outputLabel.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
    }

    if (foundItems.length === 0) {
        outputLabel.textContent = 'Not found';
    }
}
