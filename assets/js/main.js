function createChampion(name, img) {
  const list = document.querySelector('.list')

  const champion = document.createElement('div')
  champion.classList.add('list__champion')
  list.appendChild(champion)

  const championImg = document.createElement('img')
  championImg.classList.add('list__champion__img')
  championImg.src = img
  championImg.alt = name + ' champion icon'
  champion.appendChild(championImg)

  const championName = document.createElement('h2')
  championName.classList.add('list__champion__name')
  championName.innerHTML = name
  champion.appendChild(championName)
}

function call() {
  const require = new XMLHttpRequest()
  require.open('GET', 'http://ddragon.leagueoflegends.com/cdn/8.24.1/data/pt_BR/champion.json', true)
  require.onload = function() {
    const championsJSON = JSON.parse(this.responseText).data
    const version = JSON.parse(this.responseText).version
    const champsLength = Object.keys(championsJSON).length

    for (let i = 0; i < champsLength; i++) {
      const championData = championsJSON[Object.keys(championsJSON)[i]]
      const getName = championData.name
      const getImageLink = 'http://ddragon.leagueoflegends.com/cdn/' + version +'/img/champion/' + championData.image.full

      createChampion(getName, getImageLink)
    }
  }
  require.send()
}
call()

// SEARCH
window.onload = function() {
  let search = document.getElementById('filterChampions')
  search.addEventListener('keyup', function(){
    let filter = search.value.toUpperCase()
    let champions = document.getElementsByClassName('list__champion')

    for (let i = 0; i < champions.length; i++) {
      const championName = champions[i].innerText.toUpperCase()

      if (championName.indexOf(filter) > -1) {
        champions[i].style.display = ''
      } else {
        champions[i].style.display = 'none'
      }
    }
  })
}