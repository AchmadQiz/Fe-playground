const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondEl = document.getElementById("second")

function updateClock() {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    let ampm = "AM"

    if (hour > 12) {
        ampm = "PM"
    }

    hour = hour < 10 ? "0" + hour: hour
    minute = minute < 10 ? "0" + minute: minute
    second = second < 10 ? "0" + second: second

    hourEl.innerText = hour
    minuteEl.innerText = minute
    secondEl.innerText = second
    ampm.innerText = ampm
    setTimeout(() => {
        updateClock()
    },1000)

}

updateClock()