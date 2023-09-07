document.addEventListener('DOMContentLoaded', function() {
  // Initialize empty array for PLU data
  let pluData = [];

  // Get DOM elements
  const searchInput = document.getElementById('searchInput');
  const outputLabel = document.getElementById('outputLabel');
  const clearButton = document.getElementById('clearButton');
  const exitButton = document.getElementById('exitButton');

  // Event listeners and your existing logic for search, clear, and exit go here...

  // Fetch data from plu_data.json and update pluData
  fetch('./plu_data.json')  
    .then(response => response.json())
    .then(data => {
      pluData = data;
    })
    .catch(error => console.error('Error fetching PLU data:', error));

  // Move the screen up when search input is focused
  searchInput.addEventListener('focus', function() {
    document.body.style.position = 'fixed';
    document.body.style.bottom = '50px';
  });

  // Reset the screen position when search input loses focus
  searchInput.addEventListener('blur', function() {
    document.body.style.position = '';
    document.body.style.bottom = '';
  });
});