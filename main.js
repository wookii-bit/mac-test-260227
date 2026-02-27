const generateBtn = document.getElementById('generate-btn');
const lottoDisplay = document.querySelector('.lotto-display');

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

        // Assign color based on number range
        if (number <= 10) {
            ball.style.backgroundColor = '#f39c12'; // Orange
        } else if (number <= 20) {
            ball.style.backgroundColor = '#3498db'; // Blue
        } else if (number <= 30) {
            ball.style.backgroundColor = '#e74c3c'; // Red
        } else if (number <= 40) {
            ball.style.backgroundColor = '#9b59b6'; // Purple
        } else {
            ball.style.backgroundColor = '#2ecc71'; // Green
        }

        lottoDisplay.appendChild(ball);
    });
};

generateBtn.addEventListener('click', generateNumbers);
