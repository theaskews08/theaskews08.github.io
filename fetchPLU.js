fetch('./plu_data.json')  // Replace with your actual JSON file path
  .then(response => response.json())
  .then(data => {
    pluData = data;  // Make sure 'pluData' is declared in the global scope or accessible here.
  })
  .catch(error => console.error('Error fetching PLU data:', error));
