'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
		height = Helper.getDimensions().height,
		border = Helper.createElement({id: 'border', width: width, height: height, border: 'solid 1px #ccc', overflow: 'hidden', parent: document.getElementById('EUROSPORT_ADTECH_clicktag') || document.body}),
		banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, cursor: 'pointer', position: 'absolute', parent: border}),
		tl = new TimelineMax(),
		logo,
		cta_hover = false,
		cta_tl = new TimelineMax({repeat: 1, paused: true, onComplete: function() {
			if (cta_hover)
				this.play(0)
		}}),
		// dc = dynamicContent[Object.keys(dynamicContent)[0]][0],
		images = [
			// 'image_1.jpg',
			'image_2.jpg',
			'image_3.jpg',
			'logo_esp.png',
		]

	// for (var i in dc) {
	// 	if (dc[i].Url && dc[i].Url.match(/.(jpg|jpeg|png|gif)$/i))
	// 		images.push(dc[i].Url)
	// }

	Helper.preloadImages(images, function() {
		TweenMax.set(banner, {fontSize: 40, lineHeight: 1, color: '#ffff00', fontStyle: 'italic'})

		// Create Elements

		var frame_7 = Helper.createElement({id: 'frame_7', width: width, height: height, parent: banner})
			var frame_7_inner = Helper.createElement({width: width - 20, height: height - 20, backgroundColor: '#000000', parent: frame_7})
			var frame_7_txt =  Helper.createElement({width: width - 20, height: height - 20, backgroundColor: '#000000', parent: frame_7})
				var txt_7_1 = Helper.createTextElement('TXT_7_1', frame_7_txt, {fontSize: 72, lineHeight: '0.9em', color: '#ffffff', position: 'relative'})
				var txt_7_2 = Helper.createTextElement('TXT_7_2', frame_7_txt, {fontSize: 24, fontWeight: 100, color: '#ffffff', position: 'relative', margin: 5})
				var cta = Helper.createTextElement('TXT_CTA', frame_7_txt, {fontSize: 20, fontWeight: 100, padding: '10px 25px', fontStyle: 'normal', backgroundColor: '#ffff00', color: '#000000', position: 'relative'})
				var txt_legal = Helper.createTextElement('TXT_LEGAL', frame_7_txt, {fontSize: 8, fontFamily: '"Verdana", "Arial", sans-serif', fontWeight: '100', fontStyle: 'normal', color: '#ffffff', bottom: 3})


		var frame_6 = Helper.createElement({id: 'frame_6', width: width, height: height, parent: banner})
			var frame_6_inner = Helper.createElement({width: width - 20, height: height - 20, backgroundColor: '#000000', parent: frame_6})
			var txt_6_1 = Helper.createTextElement('TXT_6_1', frame_6, {fontSize: 42, lineHeight: '0.9em', color: '#ffffff', position: 'relative'})
			var txt_6_2 = Helper.createTextElement('TXT_6_2', frame_6, {fontSize: 25, lineHeight: '1.5em', fontWeight: 100, position: 'relative'})

		var frame_5 = Helper.createElement({id: 'frame_5', width: width, height: height, parent: banner})
			var frame_5_inner = Helper.createElement({width: width - 20, height: height - 20, backgroundColor: '#000000', parent: frame_5})
			var txt_5 = Helper.createTextElement('TXT_5', frame_5, {fontSize: 25, fontFamily: 'Verdana, Arial, sans-serif', fontWeight: '100', fontStyle: 'normal', padding: '25px 0', width: width - 20, backgroundColor: '#000000'})

		var frame_4 = Helper.createElement({id: 'frame_4', width: width, height: height, parent: banner})
			var image_4 = Helper.createElement({image: 'image_4.jpg', retina: false, parent: frame_4})
			var txt_4 = Helper.createTextElement('TXT_4', frame_4, {width: width - 20, backgroundColor: '#000000'})

		var frame_3 = Helper.createElement({id: 'frame_3', width: width, height: height, parent: banner})
			var image_3 = Helper.createElement({image: 'image_3.jpg', retina: false, parent: frame_3})
			var txt_3 = Helper.createTextElement('TXT_3', frame_3, {width: width - 20, backgroundColor: '#000000'})

		var frame_2 = Helper.createElement({id: 'frame_2', width: width, height: height, parent: banner})
			var image_2 = Helper.createElement({image: 'image_2.jpg', retina: false, parent: frame_2})
			var txt_2 = Helper.createTextElement('TXT_2', frame_2, {width: width - 20, backgroundColor: '#000000'})

		var frame_1 = Helper.createElement({id: 'frame_1', width: width, height: height, parent: banner})
			var frame_1_inner = Helper.createElement({width: width - 20, height: height - 20, backgroundColor: '#000000', parent: frame_1})
			var txt_1_1 = Helper.createTextElement('TXT_1_1', frame_1, {fontSize: 58, lineHeight: 1, width: width - 20, backgroundColor: '#000000'})
			var txt_1_2 = Helper.createTextElement('TXT_1_2', frame_1, {fontSize: 16, fontFamily: 'Circular Std', fontStyle: 'normal', color: '#ffffff'})

		var logo_tdf = Helper.createElement({image: 'logo_tdf.png', top: 10, parent: banner})
		var logo_esp = Helper.createElement({image: 'logo_esp.png', bottom: 0, parent: banner})

		TweenMax.set([frame_1, image_2, frame_2, image_3, frame_3, image_4, frame_4, frame_6, frame_7_txt, cta], {clip: `rect(0, ${width}px, ${height}px, 0)`})
		TweenMax.set([txt_7_1, txt_7_2, cta], {y: logo_esp.offsetHeight / 4})

		// Animation

		function blink(txt) {
			return new TimelineMax()
				.to(txt, 0.05, {color: '#000000'})
				.to(txt, 0.05, {color: '#ffff00'}, 0.2)
				.to(txt, 0.05, {color: '#000000'}, 0.3)
				.to(txt, 0.05, {color: '#ffff00'}, 0.4)
		}

		// Timeline

		tl
			.add(blink(txt_1_1))

			.addLabel('frame_1_expand', '+=0.3')
			.from(frame_1_inner, 0.5, {scaleY: 0, ease: Power1.easeInOut}, 'frame_1_expand')
			.from(logo_esp, 0.5, {y: logo_esp.height, ease: Power1.easeInOut}, 'frame_1_expand+=0.3')
			.to(txt_1_1, 0.5, {y: -0.5 * txt_1_1.offsetHeight, ease: Power1.easeInOut}, 'frame_1_expand+=0.3')
			.to(txt_1_2, 0.5, {y: 0.5 * txt_1_2.offsetHeight, ease: Power1.easeInOut}, 'frame_1_expand+=0.3')
			.from([logo_tdf, txt_1_2], 0.3, {opacity: 0}, 'frame_1_expand+=0.5')
			.add(blink(txt_1_1), '+=0.2')

			.addLabel('frame_2', '+=1.25')
			.to([frame_1], 0.5, {clip: `rect(0, ${width}px, 0, 0)`}, 'frame_2')
			.from(image_2, 0.5, {clip: `rect(${height}px, ${width}px, ${height}px, 0)`}, 'frame_2+=0.3')
			.from(txt_2, 0.5, {y: height, color: '#000'}, 'frame_2+=0.3')

			.addLabel('frame_3', '+=0.75')
			.to(frame_2, 0.5, {clip: `rect(0, ${width}px, 0, 0)`}, 'frame_3')
			.from(image_3, 0.5, {clip: `rect(${height}px, ${width}px, ${height}px, 0)`}, 'frame_3+=0.3')
			.from(txt_3, 0.5, {y: height, color: '#000'}, 'frame_3+=0.3')

			.addLabel('frame_4', '+=0.75')
			.to(frame_3, 0.5, {clip: `rect(0, ${width}px, 0, 0)`}, 'frame_4')
			.from(image_4, 0.5, {clip: `rect(${height}px, ${width}px, ${height}px, 0)`}, 'frame_4+=0.3')
			.from(txt_4, 0.5, {y: height, color: '#000'}, 'frame_4+=0.3')

			.addLabel('frame_5', '+=1')
			.from(frame_5, 0.1, {opacity: 0}, 'frame_5-=0.5')
			.to(frame_4, 0.5, {clip: `rect(0, ${width}px, 0, 0)`}, 'frame_5')
			.to(frame_5_inner, 0.5, {scaleY: 0, ease: Power1.easeInOut}, 'frame_5+=0.3')
			.from(txt_5, 0.5, {color: '#000'}, 'frame_5+=0.3')
			.add(blink(txt_5))

			.addLabel('frame_6', '+=0.75')
			.from(frame_6, 0.1, {opacity: 0}, 'frame_6+=0.2')
			.from(frame_6_inner, 0.5, {scaleY: 0, ease: Power1.easeInOut}, 'frame_6')
			.to(frame_5, 0.5, {opacity: 0}, 'frame_6+=0.3')
			.from([txt_6_1, txt_6_2], 0.5, {color: '#000'}, 'frame_6+=0.5')

			.addLabel('frame_7', '+=0.75')
			.from(frame_7, 0.1, {opacity: 0}, 'frame_7-=0.5')
			.to(frame_6, 0.5, {clip: `rect(0, ${width}px, 0, 0)`}, 'frame_7')
			.from(frame_7_txt, 0.5, {clip: `rect(${height}px, ${width}px, ${height}px, 0)`}, 'frame_7+=0.2')
			.to(logo_tdf, 0.5, {opacity: 0}, 'frame_7')
			.to(logo_esp, 0.5, {y: -height + logo_esp.offsetHeight}, 'frame_7')
			.from(cta, 0.5, {clip: `rect(0px, ${width/2}px, ${height}px, ${width/2}px)`}, 'frame_7+=1')

		// tl.play('frame_7')

		banner.addEventListener('mouseenter', function() {
			TweenMax.to(cta, 0.3, {backgroundColor: '#ffffff'})
		})

		banner.addEventListener('mouseleave', function() {
			TweenMax.to(cta, 0.3, {backgroundColor: '#ffff00'})
		})

		banner.addEventListener('click', function(e) {
			Helper.onClick()
		})
	})
}
