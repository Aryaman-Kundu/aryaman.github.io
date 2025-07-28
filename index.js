document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('.login-button');
    const usernameInput = document.querySelector('.username');
    const passwordInput = document.querySelector('.password');
    const container = document.querySelector('.container');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'admin' && password === 'password123') {
            container.classList.add('success-border');
            alert('Login successful!');
        } else {
            container.classList.add('error-border');
            alert('Invalid username or password');
            
            setTimeout(() => {
                container.classList.remove('error-border');
            }, 500);
        }
    });
});