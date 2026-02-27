document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');

    if (!themeToggle) {
        console.error('Theme toggle element not found');
        return;
    }

    // Check for saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    } else {
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        const theme = isDarkMode ? 'dark-mode' : 'light-mode';
        
        themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('theme', theme);
    });
});
