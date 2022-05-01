// to run sentiment analysis when user clicks button
document.querySelector('.runAPI').addEventListener('click', getFetch)
// // to run function to transfer generated text to textarea
// document.querySelector('.useTextRunAPI').addEventListener('click', transferText)

// when user chooses text to generate, fetch from the respective API
const selectText = document.querySelector('.selectText');

selectText.addEventListener('change', choice => {
  console.log(choice.target.value)
  let functionName = choice.target.value
  functionName === 'anime' ? anime() :
  functionName === 'kanye' ? kanye() : 
  functionName === 'lotr' ? lotrGetQuote() : 
  functionName === 'mcu' ? mcu() : 
  functionName === 'movieAndSeries' ? movieAndSeries() : 
  functionName === 'owenWilsonWow' ? owenWilsonWow() : 
  functionName === 'rickAndMorty' ? rickAndMorty() : 
  functionName === 'ronSwanson' ? ronSwanson() : 
  functionName === 'strangerThings' ? strangerThings() : 
  functionName === 'taylor' ? taylor() : 
  functionName === 'uselessFact' ? uselessFact() : null
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


// // ALTERNATIVE BUT ONLY DETERMINES BY 100%
// // https://rapidapi.com/fyhao/api/text-sentiment-analysis-method/
// function getFetch(){
//   let sentence = document.querySelector('#text').value
//   let encodedParams = new URLSearchParams();
// encodedParams.append("text", `${sentence}`);
// //   const sentence = 'I am so happy'
//   const url = 'https://text-sentiment.p.rapidapi.com/analyze'

// // how to use headers and body: https://stackoverflow.com/questions/29775797/fetch-post-json-data
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/x-www-form-urlencoded',
//       'X-RapidAPI-Host': 'text-sentiment.p.rapidapi.com',
//       'X-RapidAPI-Key': '930bd807f9msh37bdf32b3a45577p145336jsnd78191d93136'
//     },
//     body: encodedParams
//   })
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         // console.log(data.result.type)
//         // console.log(data.result.polarity)
//         // document.querySelector('.displaySentiment').innerText = `${data.result.type}`
//         // document.querySelector('.displayPolarity').innerText = `${data.result.polarity}`

//         // https://www.w3schools.com/howto/howto_js_rangeslider.asp
//         // update for smoother transition
//         // document.querySelector('#slideRange').value = data.result.polarity
//         // document.querySelector('#slideRange').style.transition = "all 2s"
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }