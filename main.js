function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundItems = pluData.filter(item => {
    return item.Name.toLowerCase().includes(searchTerm) || 
           item['PLU Code'].toString().includes(searchTerm);
  });

  outputLabel.innerHTML = '';
  foundItems.forEach(item => {
    // Update the URL as needed. Below is an example using Google Search.
    let searchUrl = `https://www.google.com/search?q=${encodeURIComponent(item.Name)}`;
    outputLabel.innerHTML += `<div><a href="${searchUrl}" target="_blank">${item.Name} (PLU Code: ${item['PLU Code']})</a></div>`;
  });

  if (foundItems.length === 0) {
    outputLabel.textContent = 'No matches found';
  }
}