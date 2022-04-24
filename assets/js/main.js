document.querySelector('.runAPI').addEventListener('click', getFetch)
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

// https://sentim-api.herokuapp.com/
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
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// getFetch()

// Useless Facts text
document.querySelector('.generateUselessFact').addEventListener('click', uselessFact)
// https://uselessfacts.jsph.pl/
function uselessFact(){
  const url = 'https://uselessfacts.jsph.pl/random.json?language=en'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.text)
        document.querySelector('#text').innerText = data.text
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// Rick and Morty quotes
document.querySelector('.generateRickAndMorty').addEventListener('click', rickAndMorty)
// http://loremricksum.com/documentation/
function rickAndMorty(){
  const url = 'http://loremricksum.com/api/'
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.data)
        document.querySelector('#text').innerText = data.data
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
        document.querySelector('#text').innerText = data.sentence
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
        document.querySelector('#text').innerText = data
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
        document.querySelector('#text').innerText = data.quote
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
        document.querySelector('#text').innerText = data[0].quote
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
        document.querySelector('#text').innerText = data[0].full_line
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
        document.querySelector('#text').innerText = data[0].quote
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}