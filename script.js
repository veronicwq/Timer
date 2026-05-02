let totalMinutes = 60;

function updateTimer1() {
  let minutes = totalMinutes;
  let seconds = 0;

  document.getElementById("timer1").textContent =
    `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (totalMinutes === 30) {
    alert("Залишилось менше половини часу!");
  }

  if (totalMinutes <= 0) {
    clearInterval(timer1);
  }

  totalMinutes--;
}

let timer1 = setInterval(updateTimer1, 60000);
updateTimer1();

// ===== ТАЙМЕР 2 =====
let time = 30000;

const timerDisplay = document.getElementById("timer2");
const button = document.getElementById("startBtn");

function updateTimer2() {
  let seconds = (time / 1000).toFixed(3);
  timerDisplay.textContent = seconds;

  if (time === 10000) {
    timerDisplay.classList.add("animate");
  }

  if (time <= 0) {
    clearInterval(timer2);
    timerDisplay.classList.remove("animate");
    button.disabled = false;
  }

  time--;
}

let timer2 = setInterval(updateTimer2, 1);
