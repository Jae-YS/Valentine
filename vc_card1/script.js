document.addEventListener("DOMContentLoaded", async function () {
  const valentinesDayCard = document.querySelector(".valentines-day-card");
  const hoverMessage = document.querySelector(".text");

  // Access the script tag by its id
  const scriptTag = document.getElementById("rowData");

  // Retrieve the content of the script tag
  const rowDataString = scriptTag.textContent;

  // Parse the content as JSON
  const rowData = JSON.parse(rowDataString);

  // Now you can use the rowData object
  console.log(rowData);

  const backButton = document.querySelector(".backwards");
  backButton.addEventListener("click", function () {
    // Navigate back to the homepage (index.html)
    window.location.href = "/index.html";
  });

  async function fetchMessage() {
    try {
      if (!rowData || !rowData.message) {
        throw new Error("Failed to fetch message");
      }
      return rowData.message || "You make me smile!";
    } catch (error) {
      console.error("Error fetching message:", error);
      return "Failed to fetch message";
    }
  }

  async function showMessage() {
    const message = await fetchMessage();
    hoverMessage.textContent = message;
  }

  async function resetMessage() {
    hoverMessage.textContent = "Happy Valentine's Day";
  }

  // Function to show sender and recipient
  async function showToFrom() {
    const sender = rowData.sender || null;
    const recipient = rowData.recipient || null;
    const fromElement = document.querySelector(".from");
    const toElement = document.querySelector(".to");

    if (sender) {
      fromElement.textContent = `From: ${sender}`;
      fromElement.style.display = "block"; // Show "From" element if there is a sender
    } else {
      fromElement.style.display = "none"; // Hide "From" element if there is no sender
    }

    if (recipient) {
      toElement.textContent = `To: ${recipient}`;
      toElement.style.display = "block"; // Show "To" element if there is a recipient
    } else {
      toElement.style.display = "none"; // Hide "To" element if there is no recipient
    }
  }

  // Set the default text of the card
  resetMessage();
  showToFrom();

  // Add event listeners to show/hide message on hover
  valentinesDayCard.addEventListener("mouseenter", showMessage);
  valentinesDayCard.addEventListener("mouseleave", resetMessage);
});
