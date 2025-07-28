document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-button');
    const usernameInput = document.querySelector('.username');
    const passwordInput = document.querySelector('.password');
    const container = document.querySelector('.container');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Example validation - replace with your own authentication logic
        if (username === 'admin' && password === 'password123') {
            container.style.border = '2px solid #00ff00'; // Green border
            alert('Login successful!');
            // Redirect to dashboard or home page
            // window.location.href = 'dashboard.html';
        } else {
            container.style.border = '2px solid #ff0000'; // Red border
            alert('Invalid username or password');
            
            // Reset border color after 2 seconds
            setTimeout(() => {
                container.style.border = 'solid 1px rgba(0, 0, 0, 0.1)';
            }, 2000);
        }
    });
});