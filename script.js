const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")


btnEl.addEventListener("click", getJoke)

var apikey = "  81GGKSd0vm1Ifv6CaIM6yA==X9RVzt2GeuzKZivC"

const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apikey},
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {
    jokeEl.innerText = "Updating..."
    btnEl.disabled = true
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL,options)
    const data = await response.json()
    
    btnEl.disabled = false
    btnEl.innerText = "Tell me a Joke"

    jokeEl.innerHTML = data[0].joke    
}