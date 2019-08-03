'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
		height = Helper.getDimensions().height,
		border = Helper.createElement({id: 'border', width: width, height: height, border: 'solid 1px #ccc', overflow: 'hidden', parent: document.getElementById('EUROSPORT_ADTECH_clicktag') || document.body}),
		banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, cursor: 'pointer', position: 'absolute', lineHeight: 0.9, parent: border}),
		tl = window.banner_tl = new TimelineMax(),
		logo,
		cta_hover = false,
		cta_tl = new TimelineMax({repeat: 1, paused: true, onComplete: function() {
			if (cta_hover)
				this.play(0)
		}}),
		// dc = dynamicContent[Object.keys(dynamicContent)[0]][0],
		images = [
			'image_1.jpg',
			'image_2.jpg',
			'image_3.jpg',
			'badges.png',
			'devices.png',
		]

	// for (var i in dc) {
	// 	if (dc[i].Url && dc[i].Url.match(/.(jpg|jpeg|png|gif)$/i))
	// 		images.push(dc[i].Url)
	// }

	Helper.preloadImages(images, function() {

		var diagonal = Helper.createElement({width: Math.max(width, height) * 2, height: 60, rotation: -45, backgroundColor: dc.TXT_0_COLORS.split(',')[0], parent: banner})

		var frame_3 = Helper.createElement({id: 'frame_3', width: width, height: height, position: 'absolute', top: 0, parent: banner})
			var txt_5 = Helper.createTextElement('TXT_5', frame_3, {fontStyle: 'italic', padding: 10})
			var devices = Helper.createElement({image: 'devices.png', marginTop: -2, flex: 'none', parent: frame_3})
			var txt_6 = Helper.createTextElement('TXT_6', frame_3, {marginTop: 2, padding: 10, fontStyle: 'italic', position: 'absolute'})
			var logos = Helper.createElement({image: 'logos.png', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, parent: frame_3, width: width, height: height })

		var image_container = Helper.createElement({id: 'image_container', width: width, height: height, position: 'absolute', clip: clip(5), overflow: 'hidden', parent: banner})
			var image_wrapper = Helper.createElement({id: 'image_wrapper', width: width, height: height * 3, position: 'absolute', parent: image_container})
				var image_1 = Helper.createElement({image: 'image_1.jpg', width: width, height: height, parent: image_wrapper})
				var image_2 = Helper.createElement({image: 'image_2.jpg', width: width, height: height, parent: image_wrapper})
				var image_3 = Helper.createElement({image: 'image_3.jpg', width: width, height: height, parent: image_wrapper})

		var frame_2 = Helper.createElement({id: 'frame_2', width: width, height: height, clip: clip(15), position: 'absolute', top: 0, parent: banner})
			var txt_1 = Helper.createTextElement('TXT_1', frame_2, {fontStyle: 'italic', position: 'absolute', padding: 10})
			var txt_2 = Helper.createTextElement('TXT_2', frame_2, {fontStyle: 'italic', position: 'absolute', padding: 10, textShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'})
			var txt_3 = Helper.createTextElement('TXT_3', frame_2, {fontStyle: 'italic', position: 'absolute', padding: 10, textShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'})
			var txt_4 = Helper.createTextElement('TXT_4', frame_2, {fontStyle: 'italic', position: 'absolute', padding: 10, textShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)'})

		var frame_1 = Helper.createElement({id: 'frame_1', width: width, height: height, position: 'absolute', parent: banner, flexDirection: 'row'})
			var overlay = Helper.createElement({width: width, height: height, backgroundColor: dc.TXT_0_COLORS.split(',')[0], position: 'absolute', parent: frame_1})
			var txt_0_wrapper = Helper.createElement({overflow: 'hidden', parent: frame_1})
				var txt_0 = Helper.createTextElement('TXT_0', txt_0_wrapper, {width: 150, height: 58, fontSize: 44})


				var badges = Helper.createElement({image: 'badges.png', flex: 'none', parent: frame_3, position: 'absolute', right: 13, top: 15})
		 	var cta_wrapper = Helper.createElement({overflow: 'hidden', flex: 'none', position: 'absolute', top: 106, right: 89, parent: frame_3})
		 		var cta = Helper.createTextElement('TXT_CTA', cta_wrapper, {padding: '5px 15px'})

		 var txt_legal = Helper.createTextElement('TXT_LEGAL', banner, {fontFamily: 'Circular Std', fontSize: 9, position: 'absolute', lineHeight: 1.25, right: 15, top: 62, alignItems: 'flex-end'})

		// ADJUSTMENTS

		cta_wrapper._height = cta_wrapper.offsetHeight
		TweenMax.set(cta_wrapper, {height: 0})

		// ANIMATION

		function clip(padding, w = width, h = height) {
			// w = w || width
			// h = h || height
			return 'rect(' + padding + 'px, ' + (w - padding) + 'px, ' + (h - padding) + 'px, ' + padding + 'px)'
		}

		function animatedBackground(container, colors) {
			container.tl = new TimelineMax()
			for (var i = colors.length - 1; i >= 0 ; i--) {
				var layer = Helper.createElement({width: '100%', height: '100%', position: 'absolute', backgroundColor: colors[i], insertBefore: container.childNodes[0]})
				if (i > 0) container.tl.from(layer, 0.3, {y: '100%'}, (i - 1) * 0.3)
			}
		}

		function animateText(txt, duration = 1.5) {
			return new TimelineMax()
				.from(txt, 0.3, {opacity: 0})
				.fromTo(txt, duration, {y: height}, {y: -height, ease: SlowMo.ease.config(0.3, 0.95, false)}, 0)
				.to(txt, 0.3, {opacity: 0}, duration - 0.3)
		}

		function animateClip(element) {
			return new TimelineMax()
				.to(element, 0.15, {clip: clip(15), ease: Power0.easeNone})
				.to(element, 0.15, {clip: clip(5), ease: Power0.easeNone})
		}

		animatedBackground(txt_0_wrapper, dc.TXT_0_COLORS.split(','))
		animatedBackground(cta_wrapper, dc.TXT_CTA_COLORS.split(','))

		diagonal.tl = new TimelineMax()
			.fromTo(diagonal, 8, {y: Math.max(width, height)}, {y: -Math.max(width, height), ease: Power4.easeInOut})
			.from(diagonal, 1.5, {scaleY: 0, ease: Power2.easeOut}, 2.5)
			.to(diagonal, 1.5, {scaleY: 0, ease: Power2.easeIn}, 4)

		cta_wrapper.tl.pause()

		// TIMELINE

		tl
			// .to(image_wrapper, 1, {y:-height})
			.addLabel('frame_1')
			.from(txt_0, 0.5, {opacity: 0}, 'frame_1')
			.to(overlay, 0.5, {width: txt_0.getBoundingClientRect().width, height: txt_0.getBoundingClientRect().height, top: txt_0.getBoundingClientRect().top}, 'frame_1')
			.add(txt_0_wrapper.tl, 'frame_1+=0.5')

			.addLabel('frame_1_out', '+=0.3')
			.to([overlay, txt_0_wrapper], 0.5, {y: -height, ease: Power2.easeIn}, 'frame_1_out')
			.to([overlay, txt_0_wrapper], 0.4, {opacity: 0, ease: Power2.easeIn}, 'frame_1_out')

			.addLabel('frame_2', '+=0.01')
			// Reset
			.to(txt_0_wrapper, 0.01, {y: 0, x: (width / 2) + (txt_0.getBoundingClientRect().width / 2)}, 'frame_2-=0.01')
			.to(cta_wrapper, 0.01, {height: cta_wrapper._height}, 'frame_9')
			.to(txt_0, 0.01, {backgroundColor: dc.TXT_0_COLORS.split(',')[0]}, 'frame_2-=0.01')
			.staggerTo([txt_1, txt_2, txt_3, txt_4, txt_5, txt_6, devices], 0.01, {x: -txt_0.getBoundingClientRect().width / 2}, 0.05, 'frame_2-=0.01')

			.to(txt_0_wrapper, 0.5, {y: 0, x: (width / 2) - (txt_0.getBoundingClientRect().width / 2), opacity: 1}, 'frame_2')
			.add(animateText(txt_1), 'frame_2')

			.addLabel('frame_3')
			.add(animateText(txt_2, 1.75), 'frame_3')
			.from(image_container, 0.5, {height: 0}, 'frame_3')

			.addLabel('frame_4')
			.add(animateText(txt_3), 'frame_4')
			.add(animateClip(image_container), 'frame_4-=0.45')
			.from(image_wrapper, 0.5, {y: height, ease: Power2.easeInOut}, 'frame_4-=0.3')

			.addLabel('frame_5')
			.add(animateText(txt_4), 'frame_5')
			.add(animateClip(image_container), 'frame_5-=0.45')
			.to(image_wrapper, 0.5, {y: -height, ease: Power2.easeInOut}, 'frame_5-=0.3')

			.addLabel('frame_6')
			.add(animateText(txt_4), 'frame_6')
			.to(image_container, 0.01, {top: 0, bottom: ''}, 'frame_5')
			.to(image_container, 0.5, {height: 0, ease: Back.easeOut.config(0.6)}, 'frame_6')

			.addLabel('frame_6_out', '-=1')
			.add(animateText(txt_5, 2), 'frame_6_out')
			.add(animateText(devices, 2), 'frame_6_out+=0.05')

			.addLabel('frame_7')
			.add(animateText(txt_6, 2), 'frame_7')

			.addLabel('frame_8_out', '+=0.3')
			.staggerTo([[overlay, txt_0_wrapper]], 0.4, {x: (width / 2) + (txt_0.getBoundingClientRect().width / 2), opacity: 0, ease: Power2.easeIn}, 0.05, 'frame_8_out')
			.staggerTo([[overlay, txt_0_wrapper]], 0.5, {x: -(width / 2) - (txt_0.getBoundingClientRect().width / 2), opacity: 0, ease: Power2.easeIn}, 0.05, 'frame_8_out+=0.5')

			.addLabel('frame_8')
			//.to(txt_0, 0.5, {fontSize: 60}, 'frame_8')
			.to(txt_0_wrapper, 0.5, {opacity: 1, x: -(width / 2) + (txt_0.getBoundingClientRect().width / 2)}, 'frame_8')
			//.to(cta_wrapper, 0.5, {height: cta_wrapper._height}, 'frame_8')
			.from(logos, 0.5, {width: width, height: height, opacity: 0}, 'frame_8+=0.3')

			.addLabel('frame_9')
			//.to(logos, 0.5, {opacity: 0}, 'frame_9')
			.from(badges, 0.5, {opacity: 0, x: 100}, 'frame_9+=0.3')
			.to(cta_wrapper, 0.5, {opacity: 1, y: -90, height: 40}, 'frame_9+=0.4')
			.from(txt_legal, 0.5, {opacity: 0, y: height}, 'frame_9+=0.5')
			.call(cta_wrapper.tl.resume, null, cta_wrapper.tl, 'frame_9+=0.7')

			.add(diagonal.tl, 'frame_2')

		//tl.play('frame_7')
		//tl.tweenFromTo("frame_9","frame_10+=3");
		//tl.pause('frame_1');
		//tl.pause('frame_3+=0.5');

		TweenMax.set(banner, Helper.styleObject(dc.DEFAULT))

		banner.addEventListener('mouseenter', function() {
			if (cta_wrapper.tl.progress() === 1)
				cta_wrapper.tl.play(0)
		})

		banner.addEventListener('mouseleave', function() {
		})

		banner.addEventListener('click', function(e) {
			Helper.onClick()
		})
	})
}
