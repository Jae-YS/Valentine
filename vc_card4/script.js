document.addEventListener("DOMContentLoaded", function () {
  const backButton = document.querySelector(".backwards");
  backButton.addEventListener("click", function () {
    // Navigate back to the homepage (index.html)
    window.location.href = "/index.html";
  });

  // Access the script tag by its id
  const scriptTag = document.getElementById("rowData");

  // Retrieve the content of the script tag
  const rowDataString = scriptTag.textContent;

  // Parse the content as JSON
  const rowData = JSON.parse(rowDataString);

  // Now you can use the rowData object
  console.log(rowData);
});
