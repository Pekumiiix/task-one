const currentDay = document.getElementById('day')
const currentTime = document.getElementById('time')

function getTime() {
    const now = new Date()

    const secondsTime = now.getUTCSeconds()
    const minutesTime = now.getUTCMinutes()
    const hourTime = now.getUTCHours()
    const milliSeconds = now.getMilliseconds()
    
    currentTime.innerHTML ='Time: ' + hourTime + 'hr(s)' + ' ' + minutesTime + 'min(s)' + ' ' + secondsTime + 'sec(s)' + ' ' + milliSeconds + "ms"
}

function getDay() {
    const d = new Date()

    const dayTime = d.getDay()

    if (dayTime == 1) {
        currentDay.innerHTML = 'Day: Monday'
    } else if (dayTime == 2) {
        currentDay.innerHTML = 'Day: Tuesday'
    } else if (dayTime == 3) {
        currentDay.innerHTML = 'Day: Wednesday'
    } else if (dayTime == 4) {
        currentDay.innerHTML = 'Day: Thursday'
    } else if (dayTime == 5) {
        currentDay.innerHTML = 'Day: Friday'
    } else if (dayTime == 6) {
        currentDay.innerHTML = 'Day: Saturday'
    } else if (dayTime == 0) {
        currentDay.innerHTML = 'Day: Sunday'
    }
}
//getDay()
setInterval(getDay, 100)
setInterval(getTime, 10)
