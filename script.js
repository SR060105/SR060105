// Scroll-to-Section
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(e.target.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Character Counter
const messageField = document.getElementById("message");
const charCountDisplay = document.querySelector(".char-count");
messageField.addEventListener("input", () => {
    const remaining = 500 - messageField.value.length;
    charCountDisplay.textContent = `${remaining} characters remaining`;
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    if (!name || !email || !phone) {
        alert("Please fill out all required fields.");
        return;
    }
    alert("Form submitted successfully!");
});


