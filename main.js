document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const outputLabel = document.getElementById("outputLabel");
  const clearButton = document.getElementById("clearButton");
  const exitButton = document.getElementById("exitButton");

  // Sample data, replace with your actual data
  const pluData = [
    { plu: "4011", name: "Banana" },
    { plu: "4131", name: "Apple" },
    // ... more data
  ];

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase().trim();
    const result = pluData.find(
      (item) => item.plu === query || item.name.toLowerCase() === query
    );

    if (result) {
      outputLabel.innerHTML = `PLU Code: ${result.plu}, Name: ${result.name}`;
    } else {
      outputLabel.innerHTML = "No match found";
    }
  });

  clearButton.addEventListener("click", () => {
    searchInput.value = "";
    outputLabel.innerHTML = "";
  });

  exitButton.addEventListener("click", () => {
    window.close();
  });
});