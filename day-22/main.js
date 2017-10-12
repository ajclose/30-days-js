const links = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)

function highlightLink() {
  const linkCoords = this.getBoundingClientRect()
  console.log(linkCoords);
  const coords = {
    height: linkCoords.height,
    width: linkCoords.width,
    top: linkCoords.top + scrollY,
    left: linkCoords.left + scrollX
  }
  highlight.style.height = `${coords.height}px`
  highlight.style.width = `${coords.width}px`
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`

}

links.forEach(link => link.addEventListener('mouseenter', highlightLink))
