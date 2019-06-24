'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
	height = Helper.getDimensions().height,
	border = Helper.createElement({id: 'border', width: width, height: height, backgroundColor: '#e1daf9', border: 'solid 1px #ccc', overflow: 'hidden', parent: document.body}),
	banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, cursor: 'pointer', position: 'absolute', parent: border}),
	tl = new TimelineMax({paused: true}),
	images = [
		'images/jour_bird.png',
		'images/jour_bridge_front.png',
		'images/jour_character_boy.png',
		'images/jour_character_girl.png',
		'images/jour_city.jpg',
		'images/jour_cloud_1.jpg',
		'images/jour_cloud_1_mask.png',
		'images/jour_logo.png',
		'images/jour_background_start.jpg',
		'images/jour_background_end.jpg',
		'images/jour_product.jpg',
		'images/jour_product_mask.png',
		'images/jour_txt_1.png',
	]

	// TweenMax.ticker.fps(24)

	Helper.preloadImages(images, function() {
		var background_end = Helper.createElement({image: 'images/jour_background_end.jpg', retina: false, parent: banner})
		var product_end = Helper.createElement({image: 'images/jour_product.jpg', retina: false, parent: banner})
		var product_end_mask = Helper.createElement({image: 'images/jour_product_mask.png', parent: banner})
		var logo_end = Helper.createElement({image: 'images/jour_logo.png', parent: banner})
		var txt_1 = Helper.createElement({image: 'images/jour_txt_1.png', parent: banner})

		var scene = Helper.createElement({width: width, height: height, parent: banner})
		var city = Helper.createElement({image: 'images/jour_city.jpg', retina: false, parent: scene})
		var character_girl = Helper.createElement({image: 'images/jour_character_girl.png', transformOrigin: '50% 100%', retina: false, parent: scene})
		var character_boy = Helper.createElement({image: 'images/jour_character_boy.png', transformOrigin: '50% 100%', retina: false, parent: scene})
		var bridge_front = Helper.createElement({image: 'images/jour_bridge_front.png', retina: false, parent: scene})

		var clouds = Helper.createElement({width: width, height: height, parent: banner})
		var background_start = Helper.createElement({image: 'images/jour_background_start.jpg', retina: false, parent: clouds})
		var product = Helper.createElement({image: 'images/jour_product.jpg', retina: false, top: 50, parent: clouds})
		var product_mask = Helper.createElement({image: 'images/jour_product_mask.png', parent: clouds})
		var logo = Helper.createElement({image: 'images/jour_logo.png', parent: clouds})
		var cloud_2 = Helper.createElement({image: 'images/jour_cloud_1.jpg', bottom: 100, left: width * 1.6, scaleX: -1.5, scaleY: 1.5, retina: false, parent: clouds})
		var cloud_2_mask = Helper.createElement({image: 'images/jour_cloud_1_mask.png', retina: false, parent: clouds})
		var bird = Helper.createElement({image: 'images/jour_bird.png', transformOrigin: '50% 100%', parent: clouds})
		var cloud_1 = Helper.createElement({image: 'images/jour_cloud_1.jpg', bottom: 0, right: width, retina: false, parent: clouds})
		var cloud_1_mask = Helper.createElement({image: 'images/jour_cloud_1_mask.png', retina: false, parent: clouds})

		new Helper.mask(product_end, product_end_mask);
		new Helper.mask(product, product_mask);
		new Helper.mask(cloud_1, cloud_1_mask);
		new Helper.mask(cloud_2, cloud_2_mask);

		TweenMax.set([bird, character_girl, character_boy], {clip: 'rect(' + (height * 0.1) + 'px,' + (width * 0.9) + 'px,' + (height * 0.9) + 'px,' + (width * 0.1) + 'px)'}) // Firefox overflow fix

		tl
		.to(product, 3.5, {scale: 1.2, ease: Power0.easeNone})

		.to(cloud_1, 2.8, {x: 1600, ease: Power0.easeNone}, 0.7)
		.to(cloud_2, 2.8, {x: -2300, ease: Power0.easeNone}, 0.5)
		.fromTo(bird, 2, {rotation: 45, x: 200}, {rotation: -25, x: 0, ease: Power0.easeNone}, 1.4)

		.from(scene, 0.2, {opacity: 0, ease: Power0.easeNone}, 3)
		.to(product, 0.3, {opacity: 0, ease: Power0.easeNone}, 3)
		.to(clouds, 0.3, {opacity: 0, ease: Power0.easeNone}, 3)

		.to(scene, 3, {scale: 1.2, ease: Power1.easeIn}, 2.8)
		.fromTo(character_girl, 2.4, {rotation: -10}, {rotation: 2, ease: Power0.easeNone}, 2.8)
		.fromTo(character_boy, 2.4, {rotation: 10}, {rotation: -2, ease: Power0.easeNone}, 2.8)

		.to(scene, 0.6, {opacity: 0, ease: Power0.easeNone}, 4.5)
		.from(product_end, 1, {opacity: 0, ease: Power0.easeNone}, 4.5)
		.from(logo_end, 0.8, {opacity: 0, ease: Power0.easeNone}, 5.8)
		.from(txt_1, 0.8, {opacity: 0, ease: Power0.easeNone}, 5.8);

		// Handle Orientation Change

		var orientation = window.parent.innerWidth - window.parent.innerHeight <= 0 ? 'portrait' : 'landscape'

		addEventListener(window.parent, 'resize', function() {
			var new_orientation = window.parent.innerWidth - window.parent.innerHeight < 0 ? 'portrait' : 'landscape'
			if (orientation != new_orientation)
				tl.play(0)
			orientation = new_orientation
		})

		if ((width - height <= 0 ? 'portrait' : 'landscape') == orientation) {
			tl.play(0)
		}
	})
}

var addEventListener = (function() {
	if(document.addEventListener) {
		return function(element, event, handler) {
			element.addEventListener(event, handler, false);
		};
	}
	else {
		return function(element, event, handler) {
			element.attachEvent('on' + event, handler);
		};
	}
}());

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
// Helper.onClick = function() {
// 	EB.clickthrough();
// }

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
	var w = source.width,
	h = source.height,
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
