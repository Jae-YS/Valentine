const form = document.querySelector("form");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const inputValue = document.getElementById("inputCode").value;
    const randomNumber = Math.floor(Math.random() * 4) + 1;
    const response = await fetch(
      `http://localhost:8000/vc_card${randomNumber}/?code=${encodeURIComponent(
        inputValue
      )}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      console.log("Row data:", data);
    } else {
      console.error("Server returned an error:", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

form.addEventListener("submit", handleSubmit);
form.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSubmit(e);
  }
});
