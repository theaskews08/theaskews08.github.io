document.addEventListener("DOMContentLoaded", function() {
  Papa.parse("data.csv", {
    download: true,
    header: true,
    dynamicTyping: true,
    complete: function(results) {
      const pluContainer = document.getElementById("plu-container");
      results.data.forEach(item => {
        const pluItem = document.createElement("div");
        pluItem.textContent = `PLU Code: ${item["Plu code"]}, Name: ${item["Name"]}`;
        pluContainer.appendChild(pluItem);
      });
    }
  });
});
