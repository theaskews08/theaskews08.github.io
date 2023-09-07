document.addEventListener('DOMContentLoaded', function() {
  let pluData = [];
  const searchInput = document.getElementById('searchInput');
  const outputLabel = document.getElementById('outputLabel');
  const clearButton = document.getElementById('clearButton');
  const exitButton = document.getElementById('exitButton');

  fetch('./plu_data.json')
    .then(response => response.json())
    .then(data => {
      pluData = data;
    })
    .catch(error => console.error('Error fetching PLU data:', error));

  searchInput.addEventListener('input', function() {
    // Your search logic here
  });

  // Your other event listeners and logic...
});