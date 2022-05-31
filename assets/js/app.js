const bgImage = document.querySelector('#bg')
const clock = document.querySelector('.clock-text')
const quotesApi = 'https://quotes.rest/qod?language=en'
const quote = document.querySelector('.quote')

const getStandardTime = () => {
  const time = new Date()
  let hours = time.getHours()
  let minutes = time.getMinutes()
  let seconds = time.getSeconds()
  let timeText = `${hours}:${minutes}:${seconds}`

  timeText = timeText.split(':')
  hours = Number(timeText[0])
  minutes = Number(timeText[1])
  seconds = Number(timeText[2])
  let finalTime

  if (hours > 0 && hours <= 12) {
    finalTime = '' + hours
  } else if (hours > 12) {
    finalTime = '' + (hours - 12)
  } else if (hours == 0) {
    finalTime = '12'
  }

  finalTime += minutes < 10 ? ':0' + minutes : ':' + minutes
  //finalTime += seconds < 10 ? ':0' + seconds : ':' + seconds
  //finalTime += hours >= 12 ? ' PM' : 'AM'

  clock.textContent = finalTime
}

const changeBackgroundImage = (() => {
  bgImage.style.backgroundImage = 'url(https://picsum.photos/1920/1200)'
})()

const generateQuotes = (() => {
  fetch(quotesApi)
    .then(response => response.json())
    .then(data => {
      let randomQuotes = data.contents.quotes[0].quote
      quote.textContent = `"${randomQuotes}"`
    })
})()

setInterval(getStandardTime, 1000)
