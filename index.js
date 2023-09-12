const currentDay = document.getElementById('day')
const currentTime = document.getElementById('time')

function getTime() {
    let A = Date.now()

    currentTime.innerHTML = A
}

function getDay() {
    const d = new Date()

    const dayTime = d.getDay()

    if (dayTime == 1) {
        currentDay.innerHTML = 'Monday'
    } else if (dayTime == 2) {
        currentDay.innerHTML = 'Tuesday'
    } else if (dayTime == 3) {
        currentDay.innerHTML = 'Wednesday'
    } else if (dayTime == 4) {
        currentDay.innerHTML = 'Thursday'
    } else if (dayTime == 5) {
        currentDay.innerHTML = 'Friday'
    } else if (dayTime == 6) {
        currentDay.innerHTML = 'Saturday'
    } else if (dayTime == 0) {
        currentDay.innerHTML = 'Sunday'
    }
}
//getDay()
setInterval(getDay, 100)
setInterval(getTime, 10)
