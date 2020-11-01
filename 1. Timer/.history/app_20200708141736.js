class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }

  // To start a timer
  start = () => {
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };

  // To pause a timer
  pause = () => {
    clearInterval(this.interval);
  };

  // To countdown timer
  tick = () => {
    const timeRemaining = parseFloat(this.durationInput.value) - 1;
    this.durationInput.value = timeRemaining;
  };
}

// Get button on DOM
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
