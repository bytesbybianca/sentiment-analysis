// to run sentiment analysis when user clicks button
document.querySelector('.runAPI').addEventListener('click', getFetch)
// // to run function to transfer generated text to textarea
// document.querySelector('.useTextRunAPI').addEventListener('click', transferText)

// when user chooses text to generate, fetch from the respective API
const selectText = document.querySelector('.selectText');

selectText.addEventListener('change', choice => {
  console.log(choice.target.value)
  let functionName = choice.target.value
  functionName === 'uselessFact' ? uselessFact() :
  functionName === 'rickAndMorty' ? rickAndMorty() : 
  functionName === 'gameOfThrones' ? gameOfThrones() : 
  functionName === 'ronSwanson' ? ronSwanson() : 
  functionName === 'movieAndSeries' ? movieAndSeries() : 
  functionName === 'strangerThings' ? strangerThings() : 
  functionName === 'owenWilsonWow' ? owenWilsonWow() : 
  functionName === 'breakingBad' ? breakingBad() : null
})

let generatedTextDisplay = ''
let displayMoreOne = ''
let displayMoreTwo = ''

// For display results animation
// Scramble letters // https://codepen.io/stphnnnn/pen/PmEdVw
// Spark text // https://codepen.io/42EG4M1/pen/QjoYgG
// Typing // https://codepen.io/FelixLuciano/pen/PoqdMKP
// Typing from Google // https://codepen.io/sheikh_ishaan/pen/LYEOqjd
// Blink text // https://codepen.io/alphardex/pen/BayEGXB

// to transfer generated text to textarea
function transferText() {
  document.querySelector('#text').innerText = document.querySelector('.generatedText').innerText
  getFetch()
}

// https://sentim-api.herokuapp.com/
// run sentiment analysis
function getFetch(){
  let sentence = document.querySelector('#text').value
//   const sentence = 'I am so happy'
  const url = 'https://sentim-api.herokuapp.com/api/v1/'

// how to use headers and body: https://stackoverflow.com/questions/29775797/fetch-post-json-data
  fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 'text': sentence })
  })
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.result.type)
        console.log(data.result.polarity)
        document.querySelector('.displaySentiment').innerText = `${data.result.type}`
        document.querySelector('.displayPolarity').innerText = `${data.result.polarity}`

        // https://www.w3schools.com/howto/howto_js_rangeslider.asp
        // update for smoother transition
        document.querySelector('#slideRange').value = data.result.polarity
        document.querySelector('#slideRange').style.transition = "all 2s"
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// getFetch()

// Useless Facts text // https://uselessfacts.jsph.pl/
function uselessFact(){
  const url = 'https://uselessfacts.jsph.pl/random.json?language=en'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.text)
        generatedTextDisplay = data.text
        displayMoreOne = ''
        displayMoreTwo = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `${displayMoreOne}`
        document.querySelector('.moreInfoTwo').innerText = `${displayMoreTwo}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Rick and Morty quotes // http://loremricksum.com/documentation/
function rickAndMorty(){
  const url = 'http://loremricksum.com/api/'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.data)
        generatedTextDisplay = data.data
        displayMoreOne = ''
        displayMoreTwo = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `${displayMoreOne}`
        document.querySelector('.moreInfoTwo').innerText = `${displayMoreTwo}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Game of Thrones quotes
document.querySelector('.generateGameOfThrones').addEventListener('click', gameOfThrones)
// https://github.com/shevabam/game-of-thrones-quotes-api
function gameOfThrones(){
  const url = 'https://game-of-thrones-quotes.herokuapp.com/v1/random'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        generatedTextDisplay = data.sentence
        displayMoreOne = ''
        displayMoreTwo = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `${displayMoreOne}`
        document.querySelector('.moreInfoTwo').innerText = `${displayMoreTwo}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Ron Swanson quotes
document.querySelector('.generateRonSwanson').addEventListener('click', ronSwanson)
// https://github.com/jamesseanwright/ron-swanson-quotes
function ronSwanson(){
  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        generatedTextDisplay = data
        displayMoreOne = ''
        displayMoreTwo = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `${displayMoreOne}`
        document.querySelector('.moreInfoTwo').innerText = `${displayMoreTwo}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Movie and Series quotes
document.querySelector('.generateMovieSeries').addEventListener('click', movieAndSeries)
// https://github.com/F4R4N/movie-quote/
function movieAndSeries(){
  const url = 'https://movie-quote-api.herokuapp.com/v1/quote/'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data.quote)
        console.log(data.show)
        generatedTextDisplay = data.quote
        displayMoreOne = data.role
        displayMoreTwo = data.show
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne}`
        document.querySelector('.moreInfoTwo').innerText = `from ${displayMoreTwo}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// Stranger Things quotes
document.querySelector('.generateStrangerThings').addEventListener('click', strangerThings)
// https://github.com/shadowoff09/strangerthings-quotes
function strangerThings(){
  const url = 'https://strangerthings-quotes.vercel.app/api/quotes'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data[0].quote)
        console.log(data[0].author)
        generatedTextDisplay = data[0].quote
        displayMoreOne = data[0].author
        displayMoreTwo = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne}`
        document.querySelector('.moreInfoTwo').innerText = `${displayMoreTwo}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// Owen Wilson "WoW"
document.querySelector('.generateOwenWilsonWow').addEventListener('click', owenWilsonWow)
// https://owen-wilson-wow-api.herokuapp.com/
function owenWilsonWow(){
  const url = 'https://owen-wilson-wow-api.herokuapp.com/wows/random'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data[0].full_line)
        console.log(data[0].movie)
        console.log(data[0].total_wows_in_movie)
        generatedTextDisplay = data[0].full_line
        displayMoreOne = data[0].movie
        displayMoreTwo = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `Movie: ${displayMoreOne}`
        document.querySelector('.moreInfoTwo').innerText = `${displayMoreTwo}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Breaking Bad
document.querySelector('.generateBreakingBad').addEventListener('click', breakingBad)
// https://github.com/shevabam/breaking-bad-quotes
function breakingBad(){
  const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data[0].quote)
        console.log(data[0].author)
        generatedTextDisplay = data[0].quote
        displayMoreOne = data[0].author
        displayMoreTwo = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne}`
        document.querySelector('.moreInfoTwo').innerText = `${displayMoreTwo}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

