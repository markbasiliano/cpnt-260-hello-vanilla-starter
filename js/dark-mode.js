const toggle = document.getElementById('darkModeToggle');
const body = document.body;
const htmlWordmark = document.querySelector('.wordmark.html');
const cssWordmark = document.querySelector('.wordmark.css');

// Check local storage for dark mode preference
const darkModePreference = localStorage.getItem('darkMode');

if (darkModePreference === 'enabled') {
    body.classList.add('dark-mode');
    htmlWordmark.classList.add('dark-mode');
    cssWordmark.classList.add('dark-mode');
    toggle.checked = true; // Set toggle to checked if dark mode is enabled
}

// Event listener for toggle
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.add('dark-mode');
        htmlWordmark.classList.add('dark-mode');
        cssWordmark.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Store preference
    } else {
        body.classList.remove('dark-mode');
        htmlWordmark.classList.remove('dark-mode');
        cssWordmark.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Store preference
    }
});
