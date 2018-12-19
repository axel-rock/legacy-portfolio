function Mask(options) {
	options = Object.assign({
		colors: ['#ffffff', '#000000'],
		progress: 0,
		pixelRatio: 2,
	}, options)

	var image = options.source.image,
		width = image.naturalWidth,
		height = image.naturalHeight,
		canvas = Helper.createElement({tag: 'canvas', width: width, height: height, parent: options.source}),
		context = canvas.getContext('2d'),
		colors = [/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(options.colors[0]), /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(options.colors[1])]

	context.drawImage(image, 0, 0, width, height)
	context.fillStyle = '#000000'
	var imageData = context.getImageData(0, 0, width, height),
		data = imageData.data

	canvas.style.width = options.source.width + 'px'
	canvas.style.height = options.source.height + 'px'
	colors = [[parseInt(colors[0][1], 16), parseInt(colors[0][2], 16), parseInt(colors[0][3], 16)], [parseInt(colors[1][1], 16), parseInt(colors[1][2], 16), parseInt(colors[1][3], 16)]]

	var gradient = []

	for (var i = 0; i < 256; i++) {
		gradient[i] = [
			~~(((255 - i) * colors[0][0] + i * colors[1][0]) / 255),
			~~(((255 - i) * colors[0][1] + i * colors[1][1]) / 255),
			~~(((255 - i) * colors[0][2] + i * colors[1][2]) / 255),
			255,
		]
	}

	for (var i = 0; i < data.length; i += 4) {
		var greyscale = ~~(data[i + 0] / 3 + data[i + 1] / 3 + data[i + 2] / 3)
		data[i + 0] = gradient[greyscale][0]
		data[i + 1] = gradient[greyscale][1]
		data[i + 2] = gradient[greyscale][2]
		data[i + 3] = gradient[greyscale][3]
	}

	canvas.progress = options.progress
	canvas.render = function() {
		context.putImageData(imageData, 0, 0)
		context.globalCompositeOperation = 'destination-out'
		context.fillRect(0, 0, width, height - canvas.progress * height)
	}

	canvas.to = function(speed, args) {
		return new TimelineMax({onUpdate: canvas.render}).to(canvas, speed, args)
	}

	canvas.render()

	return canvas
}

Helper.createTextElement = function(args) {
	args = Array.isArray(args) ? args : [args]
	var container = Helper.createElement({display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', textAlign: 'center', parent: args[0].parent})

	for (var i = 0; i < args.length; i++) {
		delete args[i].parent

		args[i] = Object.assign({position: 'relative', letterSpacing: '-0px', lineHeight: '0.9em'}, args[i])
		args[i].parent = container

		var txt = Helper.createElement(args[i])
	}

	return container
}
