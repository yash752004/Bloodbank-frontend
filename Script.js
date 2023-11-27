// Function to display a basic alert when a CTA button is clicked
function showAlert(message) {
    alert(message);
}

// Add event listeners to the CTA buttons
document.addEventListener("DOMContentLoaded", function () {
    const donateButton = document.querySelector(".hero .cta-button");
    const donorRegistrationButton = document.querySelector(".donor-registration .cta-button");
    const bloodRequestButton = document.querySelector(".blood-request .cta-button");
    const contactButton = document.querySelector(".contact .cta-button");

    donateButton.addEventListener("click", function () {
        showAlert("Thank you for your willingness to donate blood!");
    });

    donorRegistrationButton.addEventListener("click", function () {
        showAlert("You are now being redirected to the donor registration page.");
    });

    bloodRequestButton.addEventListener("click", function () {
        showAlert("You are now being redirected to the blood request page.");
    });

    contactButton.addEventListener("click", function () {
        showAlert("Please fill out the contact form, and we'll get back to you shortly.");
    });
});
// Function to handle login form submission
document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Implement your authentication logic here (e.g., validate credentials, set cookies or tokens, and redirect to a dashboard)
});
// Function to handle registration form submission
document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Implement your registration logic here (e.g., create a new user account, store user data, and redirect to login)
});
// Function to handle appointment form submission
document.getElementById('appointment-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from actually submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;

    // Implement your appointment scheduling logic here, e.g., sending data to your server, storing it, and confirming the appointment
});
