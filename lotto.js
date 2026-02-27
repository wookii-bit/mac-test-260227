document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const lottoDisplay = document.querySelector('.lotto-display');

    if (!generateBtn || !themeToggle || !lottoDisplay) {
        console.error('Required elements not found');
        return;
    }

    // Theme toggle
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

    const generateNumbers = () => {
        lottoDisplay.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            const ball = document.createElement('div');
            ball.classList.add('lotto-ball');
            ball.textContent = number;
            ball.style.animationDelay = `${index * 0.1}s`;

            if (number <= 10) {
                ball.style.backgroundColor = '#f39c12';
            } else if (number <= 20) {
                ball.style.backgroundColor = '#3498db';
            } else if (number <= 30) {
                ball.style.backgroundColor = '#e74c3c';
            } else if (number <= 40) {
                ball.style.backgroundColor = '#9b59b6';
            } else {
                ball.style.backgroundColor = '#2ecc71';
            }

            lottoDisplay.appendChild(ball);
        });
    };

    generateBtn.addEventListener('click', generateNumbers);
});
