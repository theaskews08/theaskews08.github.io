// Initialize empty array for PLU data
let pluData = [];

// Get DOM elements
const searchInput = document.getElementById('searchInput');
const predictiveContainer = document.getElementById('predictiveContainer'); // Container for predictive items
const clearButton = document.getElementById('clearButton');
const exitButton = document.getElementById('exitButton');

// Event Listeners
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase().split(' ');
  let foundItems = pluData.filter(item => {
    const itemNameTokens = item.Name.toLowerCase().split(' ');

    return searchTerm.every(term => itemNameTokens.some(token => token.includes(term))) ||  
           item['PLU Code'].toString().includes(searchTerm.join(' '));
  });

  // Clear the predictive container
  predictiveContainer.innerHTML = '';

  // Sort and show the first 5 matched items as suggestions in predictiveContainer
  foundItems.sort((a, b) => a.Name.localeCompare(b.Name));
  for(let i = 0; i < Math.min(5, foundItems.length); i++) {
    predictiveContainer.innerHTML += `<a href="https://www.google.com/search?q=${foundItems[i].Name}">${foundItems[i].Name}</a> (PLU Code: ${foundItems[i]['PLU Code']})<br>`;
  }

  if (foundItems.length === 0) {
    predictiveContainer.textContent = 'Not found';
  }

  // Show or hide predictive container based on the input
  if(searchInput.value && foundItems.length > 0) {
    predictiveContainer.style.display = 'block';
  } else {
    predictiveContainer.style.display = 'none';
  }
});

clearButton.addEventListener('click', function() {
  searchInput.value = '';
  predictiveContainer.innerHTML = '';
  predictiveContainer.style.display = 'none';
});

exitButton.addEventListener('click', function() {
  window.close();
});

// Fetch data from plu_data.json and update pluData
fetch('./plu_data.json')  
  .then(response => response.json())
  .then(data => {
    pluData = data;
  })
  .catch(error => console.error('Error fetching PLU data:', error));
