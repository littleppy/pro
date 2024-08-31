document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        // Prevent default form submission
        event.preventDefault();

        // Get form elements
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (username === '' || password === '') {
            alert('Both fields are required!');
            return;
        }

        // If validation passes, you can handle form submission here
        alert('Login successful!');
        form.reset(); // Optional: Reset the form fields after successful submission
    });
});
