let circularProgress = document.querySelector(".circular-progress"),
  progressValue = document.querySelector(".progress-value");
// console.log(circularProgress);
let progressStartValue = 0,
  progressEndValue = 90,
  speed = 100;

let progress = setInterval(() => {
  progressStartValue++;
  if (progressStartValue == progressEndValue) {
    clearInterval(progress);
  }
  progressValue.textContent = `${progressStartValue}%`;
  circularProgress.style.background = `conic-gradient(var(--present-color) ${
    progressStartValue * 3.6
  }deg,var(--absent-color) 0deg)`;
  console.log(progress);
}, speed);
