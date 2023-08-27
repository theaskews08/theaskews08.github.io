document.addEventListener("DOMContentLoaded", function () {
  // Simulate reading from a CSV file (replace this with actual CSV reading)
  const df = [
    { "Plu Code": "4011", "Name": "Banana" },
    { "Plu Code": "4012", "Name": "Apple" },
    // Add more items here
  ];

  const searchInput = document.getElementById("searchInput");
  const outputLabel = document.getElementById("outputLabel");
  const clearButton = document.getElementById("clearButton");
  const exitButton = document.getElementById("exitButton");

  searchInput.addEventListener("input", function () {
    const searchFor = searchInput.value.trim();
    if (searchFor) {
      const results = df.filter(
        (row) =>
          row["Name"].toLowerCase().includes(searchFor.toLowerCase()) ||
          row["PLU Code"].includes(searchFor)
      );
      const resultsStr = results
        .map((row) => `${row["PLU Code"]} - ${row["Name"]}`)
        .join("\n");
      outputLabel.textContent = resultsStr;
    } else {
      outputLabel.textContent = "";
    }
  });

  clearButton.addEventListener("click", function () {
    searchInput.value = "";
    outputLabel.textContent = "";
  });

  exitButton.addEventListener("click", function () {
    window.close();
  });
});
