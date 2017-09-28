const canvas = document.querySelector("canvas")
const context = canvas.getContext('2d')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
context.strokeStyle = '#BADA55'
context.lineJoin = 'round'
context.lineCap = 'round'

let isDrawing = false
let lastX = 0
let lastY = 0

function draw(e) {
  if (!isDrawing) {
    return
  }
  console.log(e);
  context.beginPath()
  context.moveTo(lastX, lastY)
  context.lineTo(e.offsetX, e.offsetY)
  context.stroke()
  lastX = e.offsetX
  lastY = e.offsetY
}

canvas.addEventListener("mousemove", draw)
canvas.addEventListener("mousedown", function(e) {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
})
canvas.addEventListener("mouseup", function(e) {
  isDrawing = false
})
canvas.addEventListener("mouseout", function(e) {
  isDrawing = false
})
