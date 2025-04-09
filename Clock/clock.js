let amPM = document.getElementById("#ampm")

function displayTime() {

    let datetime = new Date();
    let hours = datetime.getHours();
    let minutes = datetime.getMinutes();
    let seconds = datetime.getSeconds();
    if (hours > 12) {
        hours = hours - 12;
        amPM.innerHTML = "PM"
    }
    document.querySelector("#hrs").innerHTML = padZero(hours);
    document.querySelector("#mins").innerHTML = padZero(minutes);
    document.querySelector("#secs").innerHTML = padZero(seconds);

}

function padZero(num) {
    return num < 10 ? "0" + num : num
}
setInterval(displayTime, 500);