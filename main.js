// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');  // Matched with HTML id
const outputLabel = document.getElementById('outputLabel');
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Your existing event listeners and logic here...

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));

window.addEventListener('DOMContentLoaded', function() {
  searchInput.addEventListener('focus', function() {
    document.body.style.position = 'fixed';
    document.body.style.bottom = '50px';
  });

  searchInput.addEventListener('blur', function() {
    document.body.style.position = '';
    document.body.style.bottom = '';
  });
});