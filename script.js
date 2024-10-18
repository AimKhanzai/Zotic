// Set the initial time (2 minutes and 43 seconds)
let timeLeft = 2 * 60 + 43;
let timertext=document.getElementById('timer');

// Function to update the countdown timer every second
function countdown() {
    // Calculate the minutes and seconds remaining
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Display the time in MM:SS format
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
    const formattedTime = `${formattedMinutes}:${formattedSeconds}`;
    timertext.textContent= formattedTime;

    // Decrease the time left by 1 second
    timeLeft--;

    // If the timer reaches 0, stop the countdown
    if (timeLeft < 0) {
        clearInterval(timer);
        }
}

// Call the countdown function every second
const timer = setInterval(countdown, 1000);


const buttons = document.querySelectorAll('.prog');
const show = document.querySelectorAll('.stepsbox');
const step = document.querySelectorAll('.stepline');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('index');
    show.forEach(elm => {
      elm.classList.remove('active');
    });

    step.forEach(elm => {
      elm.classList.remove('active');
    });
    
    // step.classList.remove('active');
    show[index - 1].classList.add('active');
    step[index - 1].classList.add('active');
    // document.querySelector(`.elm_to_show[index="${index}"]`).classList.add('active');
  });
});
