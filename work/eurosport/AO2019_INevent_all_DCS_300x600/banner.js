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

		var limit = 293

		TweenMax.set(banner, {backgroundColor: config.endcolor})

		var frame_1 = Helper.createElement({id: 'frame_1', width: '100%', height: '100%', parent: banner})
			var img_1 = Helper.createElement({id: 'img_1', image: 'FR1_IMG_1.jpg', width: width, height: height, parent: frame_1})
			var txt_1 = Helper.createTextElement({id: 'FR1_TXT_1', text: dc.FR1_TXT_1, color: dc.FR1_TXT_1_COLOR, fontSize: dc.FR1_TXT_1_SIZE, parent: frame_1})

		var frame_2 = new OverlayEffect()

		var frame_3 = Helper.createElement({id: 'frame_3', width: '100%', height: '100%', parent: banner})
			var img_3 = Helper.createElement({id: 'img_3', image: 'FR3_IMG_1.jpg', width: width, height: height, parent: frame_3})
			var txt_3 = Helper.createTextElement([
				{id: 'FR3_TXT_1', text: dc.FR3_TXT_1, color: dc.FR3_TXT_1_COLOR, fontSize: dc.FR3_TXT_1_SIZE, parent: frame_3},
				{id: 'FR3_TXT_2', text: dc.FR3_TXT_2, color: dc.FR3_TXT_2_COLOR, fontSize: dc.FR3_TXT_2_SIZE, parent: frame_3}
			])

		var logo_bottom = Helper.createElement({id: 'logo_bottom', image: dc.ESPplayer_LT_logo.Url, left: 0, right: 0, bottom: 0, margin: '0 auto', parent: banner})
		var logo_top = Helper.createElement({id: 'logo_top', image: 'AO2018_logo.png', left: 0, right: 0, top: 20, margin: '0 auto', parent: banner})
		var logo_middle = Helper.createElement({id: 'logo_middle', image: dc.ESPplayer_MG_logo.Url, left: 0, right: 0, margin: '0 auto', parent: banner})

		var endframe = Helper.createElement({id: 'endframe', width: width, height: height - logo_middle.height, top: logo_middle.height, parent: banner})
			var txt_4_1 = Helper.createTextElement({id: 'FR4_TXT_1', text: dc.FR4_TXT_1, color: dc.FR4_TXT_1_COLOR, fontSize: dc.FR4_TXT_1_SIZE, lineHeight: '0.9em', parent: endframe})
			var endframe_bottom = Helper.createElement({id: 'endframe_bottom', width: '100%', parent: endframe})
				var txt_4_2 = Helper.createTextElement({id: 'FR4_TXT_2', text: dc.FR4_TXT_2, color: dc.FR4_TXT_2_COLOR, fontSize: dc.FR4_TXT_2_SIZE, lineHeight: '1em', top: '5px', parent: endframe_bottom})
				var frame_5 = Helper.createElement({id: 'frame_5', width: '100%', height: '100%', parent: endframe_bottom})
					// var txt_5 = {}
					var txt_5 = Helper.createTextElement([{id: 'FR5_TXT_1', text: dc.FR5_TXT_1, color: dc.FR5_TXT_1_COLOR, fontSize: dc.FR5_TXT_1_SIZE, lineHeight: '0.9em', parent: frame_5}, {id: 'FR5_TXT_2', text: dc.FR5_TXT_2, color: dc.FR5_TXT_2_COLOR, fontSize: dc.FR5_TXT_2_SIZE, lineHeight: '0.9em', parent: frame_5}])
					var cta_container = Helper.createTextElement([{id: 'FR5_TXT_3', text: '', backgroundColor: dc.FR5_TXT_3_COLOR, parent: frame_5}])
					var txt_legal = Helper.createTextElement({id: 'FR5_TXT_4', text: dc.FR5_TXT_4, color: dc.FR5_TXT_4_COLOR, fontSize: dc.FR5_TXT_4_SIZE, lineHeight: '1em', letterSpacing: 0, fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '100', parent: frame_5})

		// Adjust

		TweenMax.set([txt_1], {height: height * 0.6 - logo_bottom.height, bottom: logo_bottom.height})
		TweenMax.set(txt_3, {textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'})
		TweenMax.set([endframe, endframe_bottom], {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', flexGrow: 3})
		TweenMax.set(txt_4_1, {flexGrow: 1})
		TweenMax.set(txt_4_2, {justifyContent: 'flex-start'})
		TweenMax.set(endframe.childNodes, {position: 'relative', height: 'auto'})
		TweenMax.set(frame_5.childNodes, {position: 'relative', height: 'auto'})
		TweenMax.set(endframe_bottom.childNodes, {position: 'absolute', height: '100%', width: '100%'})
		TweenMax.set(frame_5, {display: 'flex', flexDirection: 'column', justifyContent: 'space-around'})

		var cta = cta_container.childNodes[0]
		var cta_txt = cta.innerHTML
		cta.innerHTML = ''
		var cta_inner = Helper.createTextElement({id: 'cta_inner', position: 'relative', text: dc.FR5_TXT_3, color: config.endcolor, fontSize: dc.FR5_TXT_3_SIZE, padding: '14px 15px', lineHeight: '1em', parent: cta})
		TweenMax.set(cta, {overflow: 'hidden'})
		TweenMax.set(cta.childNodes[0], {position: 'relative'})

		if (Helper.detectIE() && Helper.detectIE() == 11) {
			TweenMax.set(cta_inner, {top: dc.FR5_TXT_3_SIZE * 0.1})
			TweenMax.set(endframe_bottom, {width: 0, justifyContent: 'flex-start'})
		}

		var mask_1 = new Mask({source: img_1, colors: [config.duotone[0], config.duotone[1]]})

		// Animation

		var ease = Power2.easeOut
		var speed = 0.5
		var tl = new TimelineMax()
			.add('frame_1')
			.from(frame_1, speed, {opacity: 0, ease: ease}, 'frame_1')
			.from(logo_top, speed, {y: -logo_top.height - 20, ease: ease}, '-=0.1')
			.from(logo_bottom, speed, {y: logo_bottom.height, ease: ease}, '-=' + speed)
			.add(mask_1.to(0.7, {progress: 1}), '-=0.3')
			.staggerFrom(txt_1.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.7')
			.from(txt_1, 0.4, {opacity: 0}, '-=' + (speed * 0.5))

			.add('frame_2', '+=1.3')
			.to(frame_1, speed, {opacity: 0}, 'frame_2')
			.add(frame_2.tl, 'frame_2')

			.add('frame_3', '-=0.1')
			.from(frame_3, 0.7, {x: -width, ease: ease}, 'frame_3')
			.to(frame_2, speed, {opacity: 0}, 'frame_3')
			.staggerFrom(txt_3.childNodes, 0.4, {opacity: 0}, 0.05, '-=0.7')

			.add('frame_4', '+=1.3')
			.to(frame_3, speed, {opacity: 0}, 'frame_4')
			.to(logo_bottom, speed, {y: logo_bottom.height, ease: ease}, 'frame_4')
			.to(logo_top, speed, {y: -logo_top.height - 20, ease: ease}, 'frame_4')
			.from(endframe, speed, {opacity: 0}, 'frame_4')
			.from(logo_middle, speed, {y: -logo_middle.height, ease: ease}, 'frame_4')
			.staggerFrom([txt_4_1, txt_4_2], 0.7, {y: height, ease: ease}, 0.05, 'frame_4')
			.from([txt_4_1, txt_4_2], 0.4, {opacity: 0}, '-=' + speed)

			.add('frame_5', '+=1.3')
			.to(txt_4_2, speed, {opacity: 0}, 'frame_5')
			.from(txt_5, speed, {opacity: 0}, '-=' + (speed * 0.5))
			.from(cta, speed, {width: 0}, '-=0.3')
			.from(txt_legal, speed, {opacity: 0}, '-=0.3')

			.add('blink', '+=1')
			.to(cta, 0.2, {backgroundColor: dc.FR5_TXT_4_COLOR}, 'blink')
			.to(cta, 0.2, {backgroundColor: dc.FR5_TXT_3_COLOR})

		// Custom

		function OverlayEffect() {
			var container = Helper.createElement({id: 'OverlayEffect', width: width, height: height, parent: banner})
				var img_2_1_container = Helper.createElement({id: 'img_2_1_container', width: width, height: height, overflow: 'hidden', parent: container})
					var img_2_1 = Helper.createElement({id: 'img_2_1', image: 'FR2_IMG_1.jpg', retina: false, left: -20, parent: img_2_1_container})
				var img_2_2_container = Helper.createElement({id: 'img_2_2_container', width: width, right: 0, height: height, overflow: 'hidden', parent: container})
					var img_2_2 = Helper.createElement({id: 'img_2_2', image: 'FR2_IMG_2.jpg', retina: false, right: -20, parent: img_2_2_container})
				var img_2_3_container = Helper.createElement({id: 'img_2_3_container', width: width, left: 0, height: height, overflow: 'hidden', parent: container})
					var img_2_3 = Helper.createElement({id: 'img_2_3', image: 'FR2_IMG_3.jpg', retina: false, right: -20, parent: img_2_3_container})

			var speed = 1
			var ease = Power2.easeInOut
			container.tl = new TimelineMax()
				.from(img_2_1_container, speed, {width: 0, ease: ease})
				.from(img_2_2_container, speed, {width: 0, ease: ease})
				.from(img_2_3_container, speed, {width: 0, ease: ease})
				.fromTo(img_2_1, speed * 4, {x: -10}, {x:  10, ease: Linear.easeNone}, 0)
				.fromTo(img_2_2, speed * 3, {x:  10}, {x: -10, ease: Linear.easeNone}, speed)
				.fromTo(img_2_3, speed * 2, {x: -10}, {x:  10, ease: Linear.easeNone}, speed * 2)

			return container
		}

		// Interaction

		banner.addEventListener('mouseenter', function() {
			TweenMax.to(cta, 0.3, {backgroundColor: dc.FR5_TXT_4_COLOR})
		})

		banner.addEventListener('mouseleave', function() {
			TweenMax.to(cta, 0.3, {backgroundColor: dc.FR5_TXT_3_COLOR})
		})

		banner.addEventListener('click', function() {
			Helper.onClick()
		})
	})
}
