const inputs = document.querySelectorAll(".controls input")

function handleUpdate() {
  const suffix = this.dataset.sizing || ""
  const value = this.value
  document.documentElement.style.setProperty(`--${this.name}`, value + suffix)
}

inputs.forEach(input => input.addEventListener("change", handleUpdate))
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate))
