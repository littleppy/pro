document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    
    form.addEventListener('submit', (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Get form elements
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (username === '' || email === '' || password === '') {
            alert('All fields are required!');
            return;
        }

        // More complex validation (example)
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If validation passes, submit the form or process the data
        alert('Registration successful!');
        form.reset(); // Optional: Reset the form fields after successful submission
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
