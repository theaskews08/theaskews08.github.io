// Initialize empty array for PLU data
let pluData = [];

// Import language files
import en from './localization/en.js';
import es from './localization/es.js';

// Current language and translations
let currentLang = 'en';
let translations = en;

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');
const languageSelect = document.getElementById('languageSelect'); // Language selection dropdown

// Function to change language
function changeLanguage(lang) {
  currentLang = lang;
  translations = lang === 'es' ? es : en;
  updateTexts();
}

// Function to update texts based on current language
function updateTexts() {
  searchInput.placeholder = translations.searchPlaceholder;
  // ... update other text elements ...
}

// Event Listeners
searchInput.addEventListener('input', function() {
  // ... existing search functionality ...
});

clearButton.addEventListener('click', function() {
  // ... existing clear functionality ...
});

exitButton.addEventListener('click', function() {
  // ... existing exit functionality ...
});

// Event listener for language selection
languageSelect.addEventListener('change', function(event) {
  changeLanguage(event.target.value);
});

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));

// Initialize texts
document.addEventListener('DOMContentLoaded', updateTexts);
