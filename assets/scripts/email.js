// Form submission handler
document.getElementById('contact-form').addEventListener('submit', async function(event){
    event.preventDefault();

    const form = document.getElementById('contact-form');

    // // Form data
    const formData = {
        name: document.getElementById('username').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const response = await fetch('https://email.sarj33t.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.text();
      console.log(result)
      
      form.reset();
      
      if (response.ok) {
        console.log(result.success);
        const statusElement = document.getElementById('form-status');
        statusElement.innerHTML = "Your message has been sent successfully!";
        statusElement.style.color = "green"; // Set text color to green for success
    } else {
        console.error(result);
        const statusElement = document.getElementById('form-status');
        statusElement.innerHTML = "Failed to send the message. Please try again.";
        statusElement.style.color = "red"; // Set text color to red for failure
    }
});
