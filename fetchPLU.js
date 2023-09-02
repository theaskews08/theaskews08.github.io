// Initialize empty array to hold PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Fetch PLU data from the API
fetch('https://gregrasmussen.com/store-system/public-plu-data')
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));

// Event Listeners
// ... (your existing event listener code here)