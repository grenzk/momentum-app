const quotes = [
  {
    quote: "You can't handle the truth!",
    movie: 'A Few Good Men (1992)',
  },
  {
    quote: 'You had me at hello.',
    movie: 'Jerry Maguire (1996)',
  },
  {
    quote: 'Keep your friends close, but your enemies closer.',
    movie: 'Godfather II (1974)',
  },
  {
    quote: 'Say hello to my little friend!',
    movie: 'Scarface (1983)',
  },
  {
    quote: 'I feel the need — the need for speed!',
    movie: 'Top Gun (1986)',
  },
  {
    quote: "Here's Johnny!",
    movie: 'The Shining (1980)',
  },
  {
    quote: "I'll be back.",
    movie: 'The Terminator (1984)',
  },
  {
    quote: "Frankly, my dear, I don't give a damn.",
    movie: 'Gone with the Wind (1939)',
  },
  {
    quote: 'You talking to me?',
    movie: 'Taxi Driver (1976)',
  },
]

const quote = document.querySelector('#quote span:first-child')
const movie = document.querySelector('#quote span:last-child')
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = `"${todaysQuote.quote}"`
movie.innerText = ` - ${todaysQuote.movie}`
