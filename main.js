document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const outputLabel = document.getElementById("outputLabel");
  const clearButton = document.getElementById("clearButton");
  const exitButton = document.getElementById("exitButton");

  // Sample data in CSV format
  const csvData = `4011, Banana
  4012, Apple
  4013, Fuji Apple
  4014, Orange`;

  // Convert CSV to array of objects
  const data = csvData.split("\n").map((line) => {
    const [pluCode, name] = line.split(", ");
    return { pluCode, name };
  });

  // Event listener for search input
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase().trim();
    const queryTokens = query.split(" ");

    const result = data.find((item) => {
      const nameTokens = item.name.toLowerCase().split(" ");
      return queryTokens.every((token) => nameTokens.includes(token));
    });

    if (result) {
      outputLabel.innerHTML = `PLU Code: ${result.pluCode}<br>Name: <a href="https://www.google.com/search?q=${result.name} recipes">${result.name}</a>`;
    } else {
      outputLabel.textContent = "No match found";
    }
  });

  // Event listener for clear button
  clearButton.addEventListener("click", function () {
    searchInput.value = "";
    outputLabel.textContent = "";
  });

  // Event listener for exit button
  exitButton.addEventListener("click", function () {
    window.close();
  });
});
