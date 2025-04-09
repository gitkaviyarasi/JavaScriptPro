const display = document.getElementById("display");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const millisecondsEl = document.querySelector("#milliseconds");
const clockdisEl = document.querySelector("#clockdis")

let timer = null;
let startedTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startedTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startedTime;
        isRunning = false;
    }
}


function reset() {
    clearInterval(timer);
    startedTime = 0;
    elapsedTime = 0;
    isRunning = false;
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    millisecondsEl.textContent = "00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startedTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    //let seconds = Math.floor(elapsedTime / (1000));
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
    secondsEl.textContent = seconds;
    millisecondsEl.textContent = milliseconds;
}

function clock() {
    let clockdi = new Date();
    let hr = clockdi.getHours();
    min = clockdi.getMinutes();
    currenthour = String(hr).padStart(2, 0);
    currentmin = String(min).padStart(2, 0);

    clockdisEl.textContent = `${currenthour} : ${currentmin}`;

}
setInterval(clock, 100);