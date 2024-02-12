document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("top-right")
    .addEventListener("mouseenter", function () {
      document.getElementById("white").style.display = "block";
    });

  document
    .getElementById("top-right")
    .addEventListener("mouseout", function () {
      document.getElementById("white").style.display = "none";
    });

  document
    .getElementById("bottom-left")
    .addEventListener("mouseenter", function () {
      document.getElementById("milk").style.display = "block";
    });

  document
    .getElementById("bottom-left")
    .addEventListener("mouseout", function () {
      document.getElementById("milk").style.display = "none";
    });

  document
    .getElementById("bottom-right")
    .addEventListener("mouseenter", function () {
      document.getElementById("truffle").style.display = "block";
    });

  document
    .getElementById("bottom-right")
    .addEventListener("mouseout", function () {
      document.getElementById("truffle").style.display = "none";
    });

  document
    .getElementById("top-left")
    .addEventListener("mouseenter", function () {
      document.getElementById("truffle2").style.display = "block";
    });

  document.getElementById("top-left").addEventListener("mouseout", function () {
    document.getElementById("truffle2").style.display = "none";
  });

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
