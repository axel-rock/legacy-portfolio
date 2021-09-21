const dots = ['#fd0006', '#00b4ec', '#ffba00']

let canvas, currentText

// const context = canvas.getContext('2d')
// context.font = '100px Friends'
// context.textAlign = 'center'
// context.textBaseline = 'middle'

const space =
  String.fromCharCode(8201) + '<span>.</span>' + String.fromCharCode(8201)

input.onchange = () => draw(input.value)

function draw(text) {
  currentText = text
  output.innerHTML = text.split('').join(space)

  html2canvas(output, {
    backgroundColor: null,
  }).then(c => {
    canvas = c
  })
}

button.onclick = () => {
  var link = document.createElement('a')
  link.download = `friends-${currentText}.png`
  link.href = canvas.toDataURL()
  link.click()
}

var font = new FontFaceObserver('Friends')

font.load().then(() => draw('friends'))
