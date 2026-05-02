let totalMinutes = 60;

function updateTimer1() {
  let minutes = Math.floor(totalMinutes);
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

let timer1 = setInterval(updateTimer1, 60000); // кожну хвилину
updateTimer1();
