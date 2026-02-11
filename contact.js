const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    code: document.getElementById("code").value
  };

  try {
    const response = await fetch("http://127.0.0.1:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    // ✅ use message
    alert(result.message);

  } catch (error) {
    alert("Server not responding");
    console.log(error);
  }
});