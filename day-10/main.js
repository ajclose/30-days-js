const checkboxes = document.querySelectorAll("input[type='checkbox']")
let lastItem

function handleCheck(e) {
  let inBetween = false
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      if (checkbox === this || checkbox === lastItem) {
        inBetween = !inBetween
      }

      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  lastItem = this
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
document.addEventListener("keydown", function(e) {
  if (e.key != "Shift") {
    return
  }
})
