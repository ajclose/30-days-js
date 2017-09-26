const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'
const cities = []
fetch(endpoint)
.then(response => response.json())
.then(function(json) {
  json.forEach(json => cities.push(json))
})

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi')
    return place.city.match(regex) || place.state.match(regex)
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matches = findMatches(this.value, cities)
  const html = matches.map(match => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = match.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = match.state.replace(regex, `<span class="hl">${this.value}</span>`)
    const population = numberWithCommas(match.population)
    return `
    <li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${population}</span>
    </li>
    `
  }).join('')
  suggestions.innerHTML = html
}

const search = document.querySelector('input.search')
const suggestions = document.querySelector('.suggestions')
search.addEventListener("input", displayMatches)
