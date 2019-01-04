'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
		height = Helper.getDimensions().height,
		border = Helper.createElement({id: 'border', width: width, height: height, border: 'solid 1px #ccc', overflow: 'hidden', parent: document.body}),
		banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, cursor: 'pointer', parent: border}),
		// dc = dynamicContent.Eurosport__Australian_Open_2019_Feed[0],
		dc = dynamicContent[Object.keys(dynamicContent)[0]][0],
		images = ['FR1_IMG_1.jpg', 'FR2_IMG_1.jpg', 'FR2_IMG_2.jpg', 'FR2_IMG_3.jpg', 'FR3_IMG_1.jpg', 'AO2018_logo.png'],
		config = {
			duotone: ['#be9a25', '#ffdd00'],
			endcolor: dc.END_COLOR || '#0091d2',
		}

	for (var i in dc) {
		if (dc[i].Url && dc[i].Url.match(/.(jpg|jpeg|png|gif)$/i))
			images.push(dc[i].Url)
	}

	Helper.preloadImages(images, function() {

		TweenMax.set(banner, {backgroundColor: dc.IMG_1_COLOR_2})

		var frame_1 = Helper.createElement({id: 'frame_1', width: width, height: height, parent: banner})
			var img_1 = Helper.createElement({id: 'img_1', image: 'FR1_IMG_1.jpg', width: width, height: height, parent: frame_1})
			var txt_1 = Helper.createTextElement({id: 'FR1_TXT_1', text: dc.FR1_TXT_1, color: dc.FR1_TXT_1_COLOR, fontSize: dc.FR1_TXT_1_SIZE, lineHeight: 1, parent: frame_1})

		var frame_2 = new OverlayEffect()

		var frame_3 = Helper.createElement({id: 'frame_3', width: width, height: height, parent: banner})
			var img_3 = Helper.createElement({id: 'img_3', image: 'FR3_IMG_1.jpg', width: width, height: height, parent: frame_3})
			var txt_3 = Helper.createTextElement([
				{id: 'FR3_TXT_1', text: dc.FR3_TXT_1, color: dc.FR3_TXT_1_COLOR, fontSize: dc.FR3_TXT_1_SIZE, parent: frame_3},
				{id: 'FR3_TXT_2', text: dc.FR3_TXT_2, color: dc.FR3_TXT_2_COLOR, fontSize: dc.FR3_TXT_2_SIZE, lineHeight: '1.5em', parent: frame_3}
			])

		var logo_top = Helper.createElement({id: 'logo_top', image: 'AO2018_logo.png', left: 0, zIndex: 2, parent: banner})
		var logo_bottom = Helper.createElement({id: 'logo_bottom', image: dc.ESPplayer_LT_logo.Url, right: 0, bottom: 0, zIndex: 2, parent: banner})

		var end_frame = Helper.createElement({id: 'end_frame', width: width, height: height, backgroundColor: config.endcolor, parent: banner})

			var frame_4 = Helper.createElement({id: 'frame_4', width: width, height: height, parent: end_frame})
				var txt_4 = Helper.createTextElement([
					{id: 'FR4_TXT_1', text: dc.FR4_TXT_1, color: dc.FR4_TXT_1_COLOR, fontSize: dc.FR4_TXT_1_SIZE, lineHeight: '0.9em', parent: frame_4},
					{id: 'FR4_TXT_2', text: dc.FR4_TXT_2, color: dc.FR4_TXT_2_COLOR, fontSize: dc.FR4_TXT_2_SIZE, lineHeight: '1em', top: 1, parent: frame_4}
				])

			var frame_5 = Helper.createElement({id: 'frame_5', width: width, height: height, parent: end_frame})
				var frame_5_top = Helper.createElement({id: 'frame_5_top', width: '100%', height: '70%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', parent: frame_5})
					var txt_5_top_left = Helper.createTextElement([
						{id: 'FR5_TXT_1', text: dc.FR5_TXT_1, color: dc.FR5_TXT_1_COLOR, fontSize: dc.FR5_TXT_1_SIZE, textAlign: 'right', parent: frame_5_top},
						{id: 'FR5_TXT_2', text: dc.FR5_TXT_2, color: dc.FR5_TXT_2_COLOR, fontSize: dc.FR5_TXT_2_SIZE, textAlign: 'right', parent: frame_5_top},
					])
					var cta = Helper.createTextElement([
						{id: 'FR5_TXT_3', text: '', backgroundColor: dc.FR5_TXT_3_COLOR, width: '30%', height: 'auto', parent: frame_5_top},
					])
				var frame_5_bottom = Helper.createElement({id: 'frame_5_bottom', width: '100%', height: '40%', top: '60%', parent: frame_5})
					var txt_5_5 = Helper.createTextElement({id: 'FR5_TXT_4', text: dc.FR5_TXT_4, color: dc.FR5_TXT_4_COLOR, fontSize: dc.FR5_TXT_4_SIZE, lineHeight: '1em', letterSpacing: 0, fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '100', parent: frame_5_bottom})


		// Adjust
		TweenMax.set(logo_top, {left: 20, top: (height - logo_top.height) / 2})
		TweenMax.set(txt_5_top_left, {display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'})
		TweenMax.set(cta, {alignItems: 'flex-start'})
		TweenMax.set(frame_5_top.childNodes, {position: 'relative', width: '48%'})

		var cta_txt = cta.innerHTML
		cta.innerHTML = ''
		var cta_inner = Helper.createTextElement({id: 'cta_inner', position: 'relative', text: dc.FR5_TXT_3, color: config.endcolor, fontSize: dc.FR5_TXT_3_SIZE, padding: '10px 13px', lineHeight: '1em', parent: cta})
		TweenMax.set(cta, {overflow: 'hidden', height: 'auto'})
		TweenMax.set(cta_inner, {width: 'auto', height: 'auto', backgroundColor: dc.FR5_TXT_3_COLOR})
		TweenMax.set(cta.childNodes[0], {position: 'relative'})

		if (Helper.detectIE() && Helper.detectIE() == 11) {
			TweenMax.set(cta_inner, {top: dc.FR5_TXT_3_SIZE * 0.1})
		}

		var mask_1 = new Mask({source: img_1, colors: [config.duotone[0], config.duotone[1]]})

		// Animation

		var ease = Power2.easeOut
		var speed = 0.5
		var tl = new TimelineMax()
			.add('frame_1')
			.from(frame_1, speed, {opacity: 0, ease: ease}, 'frame_2')
			.from(logo_top, speed, {x: -150, ease: ease}, '-=0.1')
			.from(logo_bottom, speed, {x: logo_bottom.width, ease: ease}, '-=' + speed)
			.add(mask_1.to(0.7, {progress: 1}), '-=0.1')
			.staggerFrom(txt_1.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.7')
			.from(txt_1, 0.4, {opacity: 0}, '-=' + speed)

			.add('frame_2', '+=0.5')
			.add(frame_2.tl, 'frame_2')

			.add('frame_3', '-=0.1')
			.from(frame_3, 0.7, {x: -width, ease: ease}, 'frame_3')
			.staggerFrom(txt_3.childNodes, 0.4, {opacity: 0}, 0.05, '-=' + speed)

			.add('frame_4', '+=1.3')
			.from(frame_4, speed, {opacity: 0}, 'frame_4')
			.from(end_frame, speed, {opacity: 0}, 'frame_4')
			.from(txt_4, 0.4, {opacity: 0}, '-=' + speed)
			.staggerFrom(txt_4.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=' + speed)

			.add('frame_5', '+=1.5')
			.to(frame_4, speed, {opacity: 0, y: -height}, 'frame_5')
			.from(frame_5, 0.4, {opacity: 0, y: height}, '-=' + speed)

			.add('blink', '+=1')
			.to(cta_inner, 0.2, {backgroundColor: dc.FR5_TXT_4_COLOR}, 'blink')
			.to(cta_inner, 0.2, {backgroundColor: dc.FR5_TXT_3_COLOR})

		// Custom

		function OverlayEffect() {
			var container = Helper.createElement({id: 'OverlayEffect', width: width, height: height, parent: banner})
				var img_2_1_container = Helper.createElement({id: 'img_2_1_container', width: width, height: height, overflow: 'hidden', parent: container})
					var img_2_1 = Helper.createElement({id: 'img_2_1', image: 'FR2_IMG_1.jpg', retina: false, parent: img_2_1_container})
				var img_2_2_container = Helper.createElement({id: 'img_2_2_container', width: width * 0.7, right: width * 0.4, height: height, overflow: 'hidden', parent: container})
					var img_2_2 = Helper.createElement({id: 'img_2_2', image: 'FR2_IMG_2.jpg', retina: false, right: - width * 0.3, parent: img_2_2_container})
				var img_2_3_container = Helper.createElement({id: 'img_2_3_container', width: width * 0.35, left: 0, height: height, overflow: 'hidden', parent: container})
					var img_2_3 = Helper.createElement({id: 'img_2_3', image: 'FR2_IMG_3.jpg', retina: false, left: 0, parent: img_2_3_container})

			var speed = 1
			var ease = Power2.easeInOut
			container.tl = new TimelineMax()
				.from(img_2_1_container, speed, {width: 0, ease: ease})
				.from(img_2_2_container, speed, {width: 0, ease: ease})
				.from(img_2_3_container, speed, {width: 0, ease: ease})
				.fromTo(img_2_1, speed * 4, {x: -20}, {x:  0, ease: Linear.easeNone}, 0)
				.fromTo(img_2_2, speed * 3, {x:  50}, {x: 30, ease: Linear.easeNone}, speed)
				.fromTo(img_2_3, speed * 2, {x: -40}, {x:-20, ease: Linear.easeNone}, speed * 2)

			return container
		}

		// Interaction

		banner.addEventListener('mouseenter', function() {
			TweenMax.to(cta_inner, 0.3, {backgroundColor: dc.FR5_TXT_4_COLOR})
		})

		banner.addEventListener('mouseleave', function() {
			TweenMax.to(cta_inner, 0.3, {backgroundColor: dc.FR5_TXT_3_COLOR})
		})

		banner.addEventListener('click', function() {
			Helper.onClick()
		})
	})
}
