function ImageSequence(parameters) {
	parameters = bannerboy.combineObjects({
		basename: 'sequence/img_',
		pad: parameters.range[1].toString().length || 0,
		fps: 24,
		autoplay: false,
		autoload: true,
		loop: false,
		range: [0, 0],
		map: {},
		extension: '.png',
		reverse: false,
		startAt: 0,
		parent: document.body,
	}, parameters)

	var _ = this,
	canvas,
	context,
	images = [],
	increment = 1,
	current = parameters.startAt

	for (var i = parameters.range[0]; i <= parameters.range[1]; i++) {
		var _i = typeof parameters.map[i] === 'undefined' ? i : parseInt(parameters.map[i])
		images.push(parameters.basename + bannerboy.utils.pad(_i, parameters.pad) + parameters.extension)
	}

	function load() {
		bannerboy.preloadImages(images, onload)
	}

	function onload() {
		for (var i = 0; i < images.length; i++) {
			var _image = new Image()
			_image.src = images[i]
			images[i] = _image
		}

		canvas = bannerboy.createElement({type: 'canvas', width: images[0].width, height: images[0].height, parent: parameters.parent})
		context = canvas.getContext('2d')

		render()

		if (parameters.autoplay) play()
	}

	function play() {
		increment = 1
		TweenMax.ticker.fps(parameters.fps)
		TweenMax.ticker.addEventListener('tick', render)
	}

	function render() {
		if (current + increment > images.length-1 || current + increment < 0) {
			if (!parameters.loop) 
				return TweenMax.ticker.removeEventListener('tick', render)
			else if (parameters.reverse) 
				reverse()
		}
		
		context.drawImage(images[current % images.length], 0, 0)
		current += increment
	}

	function reverse() {
		increment = -increment
	}

	this.load = load
	this.play = play

	if (parameters.autoload) load()
}