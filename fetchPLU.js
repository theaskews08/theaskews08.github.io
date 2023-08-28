fetch('const filePath = './plu_data.json')
  .then(response => response.json())
  .then(data => {
    pluData = data; // Make sure 'pluData' is declared in the global scope or accessible here.
  })
  .catch(error => console.error('Error fetching PLU data:', error));
