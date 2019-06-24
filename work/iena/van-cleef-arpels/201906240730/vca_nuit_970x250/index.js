'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
	height = Helper.getDimensions().height,
	border = Helper.createElement({id: 'border', width: width, height: height, backgroundColor: '#10101c', border: 'solid 1px #ccc', overflow: 'hidden', parent: document.body}),
	banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, cursor: 'pointer', position: 'absolute', parent: border}),
	tl = new TimelineMax(),
	images = [
		'images/bridge_front.png',
		'images/character_boy.png',
		'images/character_girl.png',
		'images/city.jpg',
		'images/logo.png',
		'images/background_start.jpg',
		'images/city_overlay.jpg',
		'images/product.jpg',
		'images/product_mask.png',
		'images/txt_1.png',
	]

	Helper.preloadImages(images, function() {
		var background_end = Helper.createElement({image: 'images/background_start.jpg', retina: false, scaleX: -1, parent: banner})
		var product_end = Helper.createElement({image: 'images/product.jpg', x: 20, parent: banner})
		var product_end_mask = Helper.createElement({image: 'images/product_mask.png', parent: banner})
		var logo_end = Helper.createElement({image: 'images/logo.png', parent: banner})
		var txt_1 = Helper.createElement({image: 'images/txt_1.png', parent: banner})

		var scene = Helper.createElement({width: width, height: height, parent: banner})
		var city = Helper.createElement({image: 'images/city.jpg', retina: false, parent: scene})
		var character_girl = Helper.createElement({image: 'images/character_girl.png', transformOrigin: '50% 100%', retina: false, parent: scene})
		var character_boy = Helper.createElement({image: 'images/character_boy.png', transformOrigin: '50% 100%', retina: false, parent: scene})
		var bridge_front = Helper.createElement({image: 'images/bridge_front.png', retina: false, parent: scene})

		var frame_1 = Helper.createElement({width: width, height: height, parent: banner})
		var background_start = Helper.createElement({image: 'images/background_start.jpg', retina: false, parent: frame_1})
		var frame_1_scale = Helper.createElement({width: width, height: height, parent: frame_1})
		var product = Helper.createElement({image: 'images/product.jpg', x: 380, parent: frame_1_scale})
		var product_mask = Helper.createElement({image: 'images/product_mask.png', parent: frame_1_scale})
		var logo = Helper.createElement({image: 'images/logo.png', x: -340, y: 50, parent: frame_1_scale})

		var city_overlay = Helper.createElement({image: 'images/city_overlay.jpg', bottom: 0, retina: false, parent: banner})

		new Helper.mask(product_end, product_end_mask);
		new Helper.mask(product, product_mask);

		// TweenMax.set([character_girl, character_boy], {clip: 'rect(' + (height * 0.1) + 'px,' + (width * 0.9) + 'px,' + (height * 0.9) + 'px,' + (width * 0.1) + 'px)'}) // Firefox overflow fix

		tl
		.fromTo(frame_1, 3.5, {scale: 1.1}, {scale: 1.5, ease: Power0.easeNone})

		.from(city_overlay, 0.8, {opacity: 0, ease: Power0.easeNone}, 1.2)
		.fromTo(city_overlay, 3.8, {y: city_overlay.offsetHeight - height, scale: 1}, {y: -city_overlay.offsetHeight * 0.1, scale: 1.2, ease: Power1.easeIn}, 0.7)
		.to(city_overlay, 0.3, {opacity: 0, ease: Power0.easeNone}, 4.2)

		.from(scene, 0.2, {opacity: 0, ease: Power0.easeNone}, 3.5)
		.to(product, 0.3, {opacity: 0, ease: Power0.easeNone}, 3.5)
		.to(frame_1, 0.3, {opacity: 0, ease: Power0.easeNone}, 3.5)

		.to(scene, 3, {scale: 1.2, ease: Power1.easeIn}, 3.8)
		.fromTo(character_girl, 2.4, {rotation: -10}, {rotation: 2, ease: Power0.easeNone}, 3.8)
		.fromTo(character_boy, 2.4, {rotation: 10}, {rotation: -2, ease: Power0.easeNone}, 3.8)

		.to(scene, 0.6, {opacity: 0, ease: Power0.easeNone}, 5.5)
		.from(product_end, 1, {opacity: 0, ease: Power0.easeNone}, 5.5)
		.from(logo_end, 0.8, {opacity: 0, ease: Power0.easeNone}, 6.8)
		.from(txt_1, 0.8, {opacity: 0, ease: Power0.easeNone}, 6.8);

		banner.addEventListener('mouseenter', function() {
		})

		banner.addEventListener('mouseleave', function() {
		})

		banner.addEventListener('click', function(e) {
			// tl.pause()
			Helper.onClick()
		})
	})
}



function Helper() {}

Helper.createElement = function(options) {
	options = Object.assign({
		tag: 'div',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
		alignItems: 'center',
		position: 'absolute',
		retina: true,
		boxSizing: 'border-box',
		userSelect: 'none',
	}, options)

	var element = document.createElement(options.tag)
	element.retina = options.retina

	if (options.id)
		element.id = options.id
	else if (options.image)
		element.id = options.image.split('/').reverse()[0].split('.')[0]

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
	else if (options.parent)
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

Helper.createTextElement = function(id, parent, defaultStyle) {
	var textContent = dc[id].replace(/<i>(.*?)<\/i>/g, '<i class="icon-$1"></i>')
	var element = Helper.createElement({id: id, text: textContent, parent: parent})
	TweenMax.set(element, {paddingTop: (1 - dc.FONT_FACTOR) / 2 + 'em', height: dc.FONT_FACTOR + 'em'})
	if (defaultStyle)
	TweenMax.set(element, defaultStyle)
	if (dc[id + '_STYLE'])
	TweenMax.set(element, Helper.styleObject(dc[id + '_STYLE']))
	return element
}

Helper.styleObject = function(styleString) {
	var rules = styleString.split(';')
	var obj = {}
	for (var i = 0; i < rules.length; i++) {
		var rule = rules[i].trim()
		if (rule) {
			var parts = rule.split(':')
			obj[parts[0].trim()] = parts[1].trim()
		}
	}
	return obj
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
Helper.onClick = function() {
	EB.clickthrough();
}

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

Helper.mask = function (source, mask) { // eslint-disable-line no-unused-vars
	var w = source.offsetWidth,
	h = source.offsetHeight,
	canvas = Helper.createElement({tag: 'canvas', width: w, height: h}),
	context = canvas.getContext('2d'),
	img_source = Helper.imageCache[source.id + '.jpg'],
	img_mask = Helper.imageCache[mask.id + '.png'];

	canvas.width = w * 2;
	canvas.height = h * 2;
	canvas.style.width = w + 'px';
	canvas.style.height = h + 'px';
	context.scale(2, 2);
	TweenMax.set([source, mask], {backgroundImage: 'none'});

	context.drawImage(img_mask, 0, 0, w, h);
	context.globalCompositeOperation = 'source-in';
	context.drawImage(img_source, 0, 0, w, h);

	TweenMax.set(source, {backgroundImage: 'url(' + canvas.toDataURL('image/png') + ')'});
}
