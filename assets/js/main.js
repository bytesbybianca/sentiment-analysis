

//Example fetch using pokemonapi.co
document.querySelector('.runAPI').addEventListener('click', getFetch)

function getFetch(){
  let sentence = document.querySelector('input').value
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
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// getFetch()