let countdownInterval;
let totalTime;

const minutesInput = document.getElementById('minutes');
const secondsInput = document.getElementById('seconds');
const timerDisplay = document.getElementById('timerDisplay');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

function startTimer() {
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;
    totalTime = minutes * 60 + seconds;

    if (totalTime > 0) {
        countdownInterval = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    if (totalTime <= 0) {
        clearInterval(countdownInterval);
        timerDisplay.textContent = "00:00";
        return;
    }

    totalTime--;
    const minutes = Math.floor(totalTime / 60);
    const seconds = totalTime % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function pauseTimer() {
    clearInterval(countdownInterval);
}

function resetTimer() {
    clearInterval(countdownInterval);
    timerDisplay.textContent = "00:00";
    minutesInput.value = '';
    secondsInput.value = '';
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
