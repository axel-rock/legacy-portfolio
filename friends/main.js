const font = new FontFaceObserver('Friends'),
  space =
    String.fromCharCode(8201) + '<span>.</span>' + String.fromCharCode(8201)

input.onchange = () => (output.innerHTML = input.value.split('').join(space))

button.onclick = () => {
  html2canvas(output, {
    backgroundColor: null,
  }).then(canvas => {
    var link = document.createElement('a')
    link.download = `friends-${input.value}.png`
    link.href = canvas.toDataURL()
    link.click()
  })
}

invert.onchange = () => {
  document.body.classList.toggle('inverted')
}

shadow.onchange = () => {
  output.classList.toggle('shadow')
}

font.load().then(() => (output.innerHTML = input.value.split('').join(space)))
