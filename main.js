// main.js
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById('searchInput');
  const outputLabel = document.getElementById('outputLabel');
  const clearButton = document.getElementById('clearButton');
  const exitButton = document.getElementById('exitButton');

  // Your existing code for the PLU Lookup Tool can go here.

  // This part adjusts the page when the keyboard appears
  searchInput.addEventListener("focus", function() {
    setTimeout(() => {
      window.scrollTo(0, searchInput.offsetTop);
    }, 300);
  });

  // Clear button event
  clearButton.addEventListener('click', function() {
    searchInput.value = '';
    outputLabel.textContent = '';
  });

  // Exit button event
  exitButton.addEventListener('click', function() {
    window.close();
  });
});