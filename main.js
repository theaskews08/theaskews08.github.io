document.addEventListener("DOMContentLoaded", function() {
  // Load CSV file
  Papa.parse("data.csv", {
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      const data = results.data;
      const searchInput = document.getElementById("searchInput");
      const outputLabel = document.getElementById("outputLabel");

      searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value;
        const foundItem = data.find(item => item["Plu code"] === searchTerm);
        if (foundItem) {
          outputLabel.innerHTML = `<a href="https://www.google.com/search?q=${foundItem.Name} recipes">${foundItem.Name}</a>`;
        } else {
          outputLabel.textContent = "Not found";
        }
      });
    }
  });
});
