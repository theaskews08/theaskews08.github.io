let pluData = [];

async function fetchData() {
  try {
    const response = await fetch('./plu_data.json');
    pluData = await response.json();
    initializeApp();
  } catch (error) {
    console.error('Error fetching PLU data:', error);
  }
}

function initializeApp() {
  // Get DOM elements
  const searchInput = document.getElementById('searchInput');
  const outputLabel = document.getElementById('outputLabel');
  const clearButton = document.getElementById('clearButton');
  const exitButton = document.getElementById('exitButton');

  // Event Listeners
  searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase();
    const plu = pluData.find(item => item.Name.toLowerCase().includes(searchValue));
    
    if (plu) {
      outputLabel.textContent = `Found: ${plu.Name}, PLU Code: ${plu['PLU Code']}`;
    } else {
      outputLabel.textContent = 'Not Found';
    }
  });

  clearButton.addEventListener('click', function() {
    searchInput.value = '';
    outputLabel.textContent = '';
  });

  exitButton.addEventListener('click', function() {
    window.close();
  });
}

fetchData();
