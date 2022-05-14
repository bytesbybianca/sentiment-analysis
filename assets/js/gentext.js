// Anime Quotes
// https://animechan.vercel.app/
function anime(){
    const url = 'https://animechan.vercel.app/api/random'
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
        //   console.log(data)
        //   console.log(data.anime)
        //   console.log(data.character)
          document.querySelector('#text').value = data.quote
          generatedTextDisplay = data.quote
          displayMoreOne = data.character
          displayMoreTwo = data.anime
          document.querySelector('#text').innerText = generatedTextDisplay
          document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne} from ${displayMoreTwo}`
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
  }
  
// Kanye quotes
// https://kanye.rest/
function kanye(){
const url = 'https://api.kanye.rest'
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        document.querySelector('#text').value = data.quote
        generatedTextDisplay = data.quote
        displayMoreOne = 'Kanye West'
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Lord of the Rings
// https://the-one-api.dev/

// get LOTR quote
function lotrGetQuote(){
const url = 'https://the-one-api.dev/v2/quote'
fetch(url, {
    method: 'GET',
    headers: {
    'Authorization': `Bearer ${lotr_api_key}`
    }
})
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        let randomNum = Math.floor(Math.random()*1000)
        let randomLOTR = data.docs[randomNum]
        // console.log(randomNum)
        lotrQuote = randomLOTR.dialog
        // passing character and movie id info to function to get character name
        lotrGetName(randomLOTR.character, randomLOTR.movie, lotrQuote)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
// get LOTR character name from id
function lotrGetName(characterID, movie, quote){
const url = `https://the-one-api.dev/v2/character/${characterID}`
fetch(url, {
    method: 'GET',
    headers: {
    'Authorization': `Bearer ${lotr_api_key}`
    }
})
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        lotrChar = data.docs[0].name
        // passing character name and movie id info to function to get movie name
        lotrGetMovie(movie, lotrChar, quote)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
// get LOTR movie name from id
function lotrGetMovie(movieID, name, quote){
const url = `https://the-one-api.dev/v2/movie/${movieID}`
fetch(url, {
    method: 'GET',
    headers: {
    'Authorization': `Bearer ${lotr_api_key}`
    }
})
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        lotrMovie = data.docs[0].name
        lotr(quote, name, lotrMovie)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// display LOTR info on DOM
function lotr(quote, char, movie) {
// console.log(quote)
// console.log(char)
// console.log(movie)
document.querySelector('#text').value = quote
generatedTextDisplay = quote
displayMoreOne = char
displayMoreTwo = movie
document.querySelector('#text').innerText = generatedTextDisplay
document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne} from ${displayMoreTwo}`
}

// MCU
// https://rapidapi.com/kyledeguzmanx/api/marvel-quote-api/
function mcu(){
const url = 'https://marvel-quote-api.p.rapidapi.com/'
fetch(url, {
    method: 'GET',
    headers: {
    'X-RapidAPI-Host': 'marvel-quote-api.p.rapidapi.com',
    'X-RapidAPI-Key': `${mcu_api_key}`
    }
})
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        // console.log(data.Quote)
        // console.log(data.show)
        document.querySelector('#text').value = data.Quote
        generatedTextDisplay = data.Quote
        displayMoreOne = data.Speaker
        displayMoreTwo = data.Title
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne} from ${displayMoreTwo}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Movie and Series quotes
// https://github.com/F4R4N/movie-quote/
function movieAndSeries(){
const url = 'https://movie-quote-api.herokuapp.com/v1/quote/'
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        // console.log(data.quote)
        // console.log(data.show)
        document.querySelector('#text').value = data.quote
        generatedTextDisplay = data.quote
        displayMoreOne = data.role
        displayMoreTwo = data.show
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne} from ${displayMoreTwo}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Owen Wilson "WoW"
// https://owen-wilson-wow-api.herokuapp.com/
function owenWilsonWow(){
const url = 'https://owen-wilson-wow-api.herokuapp.com/wows/random'
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        // console.log(data[0].full_line)
        // console.log(data[0].movie)
        // console.log(data[0].total_wows_in_movie)
        document.querySelector('#text').value = data[0].full_line
        generatedTextDisplay = data[0].full_line
        displayMoreOne = data[0].movie
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `from ${displayMoreOne}`
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
        // console.log(data)
        // console.log(data.data)
        document.querySelector('#text').value = data.data
        generatedTextDisplay = data.data
        displayMoreOne = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `${displayMoreOne}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Ron Swanson quotes
// https://github.com/jamesseanwright/ron-swanson-quotes
function ronSwanson(){
const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        document.querySelector('#text').value = data
        generatedTextDisplay = data
        displayMoreOne = 'Ron Swanson'
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Stranger Things quotes
// https://github.com/shadowoff09/strangerthings-quotes
function strangerThings(){
const url = 'https://strangerthings-quotes.vercel.app/api/quotes'
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        // console.log(data[0].quote)
        // console.log(data[0].author)
        document.querySelector('#text').value = data[0].quote
        generatedTextDisplay = data[0].quote
        displayMoreOne = data[0].author
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Taylor Swift lyrics
// https://github.com/MitanshiKshatriya/taylor-swift-api
function taylor() {
const url = 'https://taylorswiftapi.herokuapp.com/get'
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        // console.log(data.quote)
        document.querySelector('#text').value = data.quote
        generatedTextDisplay = data.quote
        displayMoreOne = 'Taylor Swift'
        displayMoreTwo = data.song
        let displayMoreThree = data.album
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `- ${displayMoreOne}. "${displayMoreTwo}" from the album ${displayMoreThree}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// Useless Facts text // https://uselessfacts.jsph.pl/
function uselessFact(){
const url = 'https://uselessfacts.jsph.pl/random.json?language=en'
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data)
        // console.log(data.text)
        document.querySelector('#text').value = data.text
        generatedTextDisplay = data.text
        displayMoreOne = ''
        document.querySelector('#text').innerText = generatedTextDisplay
        document.querySelector('.moreInfoOne').innerText = `${displayMoreOne}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}