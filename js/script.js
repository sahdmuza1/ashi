function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    if (!name || !email || !phone || !message) {
        alert("Please fill out all fields before submitting the form.");
        return false;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; 
    }
    const phonePattern = /^[0-9+() -]{10,15}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (e.g., +1234567890).");
        return false; 
    }
    sendMail();
    return false;
}
function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };
    emailjs.send("service_oin9fm7", "template_dbt7vxa", params)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email sent successfully!");
        })
        .catch(function (error) {
            console.log("FAILED...", error);
            alert("Failed to send email. Please try again.");
        });
}

