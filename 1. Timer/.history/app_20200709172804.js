// Get button on DOM
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const circle = document.querySelector("circle");
const perimeter = circle.getAttribute("r") * 2 * Math.PI;
circle.setAttribute("stroke-dasharray", perimeter);

let duration = 0;
const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart(timeRemaining) {
    duration = timeRemaining;
  },
  inTick() {
    circle.setAttribute("stroke-dashoffset", currentOffset);
  },
  onComplete() {
    console.log("Timer is completed");
  },
});
