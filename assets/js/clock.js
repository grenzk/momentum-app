const hour = document.getElementById('clock-hour')
const minutes = document.getElementById('clock-minutes')
const seconds = document.getElementById('clock-seconds')
const textHour = document.getElementById('text-hour')
const textMinutes = document.getElementById('text-minutes')
const textAmPm = document.getElementById('text-ampm')

const clock = () => {
  let date = new Date()

  let hh = date.getHours() * 30
  let mm = date.getMinutes() * 6
  let ss = date.getSeconds() * 6

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
  minutes.style.transform = `rotateZ(${mm}deg)`
  seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000)

const clockText = () => {
  let date = new Date()

  let hh = date.getHours(),
    ampm,
    mm = date.getMinutes()

  if (hh >= 12) {
    hh = hh - 12
    ampm = 'PM'
  } else {
    ampm = 'AM'
  }

  if (hh == 0) {
    hh = 12
  }

  if (hh < 10) {
    hh = `0${hh}`
  }

  textHour.textContent = `${hh}:`

  if (mm < 10) {
    mm = `0${mm}`
  }

  textMinutes.textContent = mm
  textAmPm.textContent = ampm
}
setInterval(clockText, 1000)
