document.addEventListener('DOMContentLoaded', function () {
    // Initialize EmailJS (add your User ID here)
    emailjs.init("EMAILJS_PUBLIC_KEY");

    // Form submission handler
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent default form submission

        // Form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send the email via EmailJS
        emailjs.send("EMAILJS_SERVICE_ID", "EMAILJS_TEMPLATE_ID", formData)
            .then(function(response) {
                // Show success message
                document.getElementById('form-status').innerHTML = "Your message has been sent successfully!";
            }, function(error) {
                // Show error message
                document.getElementById('form-status').innerHTML = "Failed to send the message. Please try again.";
            });
    });
});
