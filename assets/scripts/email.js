// Form submission handler
document.getElementById('contact-form').addEventListener('submit', async function(event){
    
    // Form data
    const formData = {
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const response = await fetch('https://email.sarj33t.workers.dev/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
        console.log('Email sent successfully!', result);
        document.getElementById('form-status').innerHTML = "Your message has been sent successfully!";
    } else {
        console.error('Error sending email:', result.message);
        document.getElementById('form-status').innerHTML = "Failed to send the message. Please try again.";
    }
});
