function Helper() {}

Helper.createElement = function(options) {
	options = Object.assign({
		tag: 'div',
		position: 'absolute',
		parent: document.body,
		retina: true,
		boxSizing: 'border-box',
		userSelect: 'none',
	}, options)

	var element = document.createElement(options.tag)
		element.retina = options.retina

	if (options.id)
		element.id = options.id

	if (options.text)
		element.innerHTML = options.text

	if (options.fontSize && parseInt(options.fontSize) == options.fontSize)
		options.fontSize += 'px'

	if (options.image) {
		options.backgroundImage = 'url(\'' + options.image + '\')'
		options.backgroundSize = 'contain'
		options.backgroundRepeat = 'no-repeat'

		var src = options.image

		if (Helper.imageCache[options.image.split('/').pop()]) {
			var image = Helper.imageCache[options.image.split('/').pop()]
			element.width = image.width * (element.retina ? 0.5 : 1)
			element.height = image.height * (element.retina ? 0.5 : 1)
			element.image = image
			if (!options.width && !options.height)
				TweenMax.set(element, {width: element.width, height: element.height})
		} else {
			var image = new Image()
			image.onload = function() {
				console.log(src)
				Helper.imageCache[src.split('/').pop()] = image
				element.width = image.width * (element.retina ? 0.5 : 1)
				element.height = image.height * (element.retina ? 0.5 : 1)
				element.image = image
				if (!options.width && !options.height)
					TweenMax.set(element, {width: element.width, height: element.height})
			}
			image.src = src
		}
	}

	if (options.tag == 'canvas') {
		element.width = options.width
		element.height = options.height
	}

	if (options.insertBefore)
		options.insertBefore.parentNode.insertBefore(element, options.insertBefore)
	else if (options.insertAfter)
		options.insertAfter.parentNode.insertAfter(element, options.insertAfter)
	else
		options.parent.appendChild(element)

	delete options.id
	delete options.tag
	delete options.text
	delete options.image
	delete options.parent
	delete options.retina
	delete options.insertAfter
	delete options.insertBefore

	TweenMax.set(element, options)

	return element
}

Helper.getDimensions = function() {
	var metas = document.getElementsByTagName('meta')

	for (var i = 0; i < metas.length; i++) {
		if (metas[i].getAttribute('name') === 'ad.size') {
			var meta = metas[i].getAttribute('content')
			return {
				width: parseInt(meta.match(/\d+/g)[0]),
				height: parseInt(meta.match(/\d+/g)[1]),
			}
		}
	}

	return {width: 0, height: 0}
}

Helper.imageCache = {}

Helper.preloadImages = function(images, callback) {
	var remaining = images.length

	for (var i = 0; i < images.length; i++) {
		var loader = new Image()
		loader.onload = function(e) {
			var path = e.target.src.split("/").pop()
			Helper.imageCache[path] = e.target
			if (--remaining == 0)
				callback()
		}
		loader.onerror = function(e) {
			if (--remaining == 0)
				callback()
		}
		loader.src = images[i]
	}
}

Helper.onReady = function() {}

if (typeof Object.assign != 'function') {
	// Must be writable: true, enumerable: false, configurable: true
	Object.defineProperty(Object, 'assign', {
		value: function assign(target, varArgs) { // .length of function is 2
			'use strict'
			if (target == null) { // TypeError if undefined or null
				throw new TypeError('Cannot convert undefined or null to object')
			}

			var to = Object(target)

			for (var index = 1; index < arguments.length; index++) {
				var nextSource = arguments[index]

				if (nextSource != null) { // Skip over if undefined or null
					for (var nextKey in nextSource) {
						// Avoid bugs when hasOwnProperty is shadowed
						if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
							to[nextKey] = nextSource[nextKey]
						}
					}
				}
			}
			return to
		},
		writable: true,
		configurable: true
	})
}

if (!Array.isArray) {
	Array.isArray = function(arg) {
		return Object.prototype.toString.call(arg) === '[object Array]'
	}
}

Helper.detectIE = function() {
	var ua = window.navigator.userAgent

	// Test values; Uncomment to check result …

	// IE 10
	// ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)'

	// IE 11
	// ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko'

	// Edge 12 (Spartan)
	// ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0'

	// Edge 13
	// ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586'

	var msie = ua.indexOf('MSIE ')
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
	}

	var trident = ua.indexOf('Trident/')
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:')
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
	}

	var edge = ua.indexOf('Edge/')
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
	}

	// other browser
	return false
}
