'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
		height = Helper.getDimensions().height,
		border = Helper.createElement({id: 'border', width: width, height: height, border: 'solid 1px #ccc', overflow: 'hidden', parent: document.body}),
		banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, cursor: 'pointer', parent: border}),
		// dc = dynamicContent.Eurosport__Australian_Open_2019_Feed[0],
		dc = dynamicContent[Object.keys(dynamicContent)[0]][0],
		images = ['FR1_IMG_1.jpg', 'FR2_IMG_1.jpg', 'FR3_IMG_1.jpg', 'AO2018_logo.png'],
		config = {
			duotone: ['#00283c', '#0091d2'],
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

		var frame_2 = Helper.createElement({id: 'frame_2', width: '100%', height: '100%', parent: banner})
			var img_2 = Helper.createElement({id: 'img_2', image: 'FR2_IMG_1.jpg', width: width, height: height, parent: frame_2})
			var txt_2 = Helper.createTextElement({id: 'FR2_TXT_1', text: dc.FR2_TXT_1, color: dc.FR2_TXT_1_COLOR, fontSize: dc.FR2_TXT_1_SIZE, parent: frame_2})

		var frame_3 = Helper.createElement({id: 'frame_3', width: '100%', height: '100%', parent: banner})
			var img_3 = Helper.createElement({id: 'img_3', image: 'FR3_IMG_1.jpg', width: width, height: height, parent: frame_3})
			var txt_3 = Helper.createTextElement([
				{id: 'FR3_TXT_1', text: dc.FR3_TXT_1, color: dc.FR3_TXT_1_COLOR, fontSize: dc.FR3_TXT_1_SIZE, parent: frame_3},
				{id: 'FR3_TXT_2', text: dc.FR3_TXT_2, color: dc.FR3_TXT_2_COLOR, fontSize: dc.FR3_TXT_2_SIZE, parent: frame_3}
			])

		// var container_top = Helper.createElement({id: 'container_top', width: width, height: limit, parent: banner})
			// var frame_4 = Helper.createElement({id: 'frame_4', width: '100%', height: '100%', parent: container_top})
			// 	var txt_4 = Helper.createTextElement([
			// 		{id: 'FR4_TXT_1', text: dc.FR4_TXT_1, color: dc.FR4_TXT_1_COLOR, fontSize: dc.FR4_TXT_1_SIZE, lineHeight: '0.9em', parent: frame_4},
			// 		{id: 'FR4_TXT_2', text: dc.FR4_TXT_2, color: dc.FR4_TXT_2_COLOR, fontSize: dc.FR4_TXT_2_SIZE, lineHeight: '1em', top: '5px', parent: frame_4}
			// 	])

		var logo_bottom = Helper.createElement({id: 'logo_bottom', image: dc.ESPplayer_LT_logo.Url, left: 0, right: 0, bottom: 0, margin: '0 auto', parent: banner})

		// var container_bottom = Helper.createElement({id: 'container_bottom', top: limit, width: width, height: height - limit, overflow: 'hidden', parent: banner})
		// 	var frame_5 = Helper.createElement({id: 'frame_5', width: '100%', height: '100%', parent: container_bottom})
		// 		var txt_5 = Helper.createTextElement([
		// 			{id: 'FR5_TXT_1', text: dc.FR5_TXT_1, color: dc.FR5_TXT_1_COLOR, fontSize: dc.FR5_TXT_1_SIZE, lineHeight: '0.9em', parent: frame_5},
		// 			{id: 'FR5_TXT_2', text: dc.FR5_TXT_2, color: dc.FR5_TXT_2_COLOR, fontSize: dc.FR5_TXT_2_SIZE, lineHeight: '0.8', parent: frame_5},
		// 			{id: 'FR5_TXT_3', text: '', backgroundColor: dc.FR5_TXT_3_COLOR, parent: frame_5},
		// 			{id: 'FR5_TXT_4', text: dc.FR5_TXT_4, color: dc.FR5_TXT_4_COLOR, fontSize: dc.FR5_TXT_4_SIZE, lineHeight: '1em', letterSpacing: 0, fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '100', parent: container_bottom}
		// 		])

		var logo_top = Helper.createElement({id: 'logo_top', image: 'AO2018_logo.png', left: 0, right: 0, top: 20, margin: '0 auto', parent: banner})
		var logo_middle = Helper.createElement({id: 'logo_middle', image: dc.ESPplayer_MG_logo.Url, left: 0, right: 0, margin: '0 auto', parent: banner})

		var endframe = Helper.createElement({id: 'endframe', width: width, height: height - logo_middle.height, top: logo_middle.height, parent: banner})
			var txt_4_1 = Helper.createTextElement({id: 'FR4_TXT_1', text: dc.FR4_TXT_1, color: dc.FR4_TXT_1_COLOR, fontSize: dc.FR4_TXT_1_SIZE, lineHeight: '0.9em', parent: endframe})
			var endframe_bottom = Helper.createElement({id: 'endframe_bottom', width: '100%', parent: endframe})
				var txt_4_2 = Helper.createTextElement({id: 'FR4_TXT_2', text: dc.FR4_TXT_2, color: dc.FR4_TXT_2_COLOR, fontSize: dc.FR4_TXT_2_SIZE, lineHeight: '1em', top: '5px', parent: endframe_bottom})
				var frame_5 = Helper.createElement({id: 'frame_5', width: '100%', height: '100%', parent: endframe_bottom})
					// var txt_5 = {}
					var txt_5 = Helper.createTextElement([{id: 'FR5_TXT_1', text: dc.FR5_TXT_1, color: dc.FR5_TXT_1_COLOR, fontSize: dc.FR5_TXT_1_SIZE, parent: frame_5}, {id: 'FR5_TXT_2', text: dc.FR5_TXT_2, color: dc.FR5_TXT_2_COLOR, fontSize: dc.FR5_TXT_2_SIZE, lineHeight: '0.8em', parent: frame_5}])
					var cta_container = Helper.createTextElement([{id: 'FR5_TXT_3', text: '', backgroundColor: dc.FR5_TXT_3_COLOR, parent: frame_5}])
					var txt_legal = Helper.createTextElement({id: 'FR5_TXT_4', text: dc.FR5_TXT_4, color: dc.FR5_TXT_4_COLOR, fontSize: dc.FR5_TXT_4_SIZE, lineHeight: '1em', letterSpacing: 0, fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '100', parent: frame_5})

						// var txt_5 = Helper.createTextElement([
						// 	{id: 'FR5_TXT_1', text: dc.FR5_TXT_1, color: dc.FR5_TXT_1_COLOR, fontSize: dc.FR5_TXT_1_SIZE, lineHeight: '0.9em', parent: frame_5},
						// 	{id: 'FR5_TXT_2', text: dc.FR5_TXT_2, color: dc.FR5_TXT_2_COLOR, fontSize: dc.FR5_TXT_2_SIZE, lineHeight: '0.8', parent: frame_5},
						// 	{id: 'FR5_TXT_3', text: '', backgroundColor: dc.FR5_TXT_3_COLOR, parent: frame_5},
						// 	{id: 'FR5_TXT_4', text: dc.FR5_TXT_4, color: dc.FR5_TXT_4_COLOR, fontSize: dc.FR5_TXT_4_SIZE, lineHeight: '1em', letterSpacing: 0, fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: '100', parent: frame_5}
						// ])

		// Adjust

		TweenMax.set(txt_2, {height: height * 0.6 - logo_bottom.height, bottom: logo_bottom.height})
		TweenMax.set(txt_3, {textShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'})
		TweenMax.set([endframe, endframe_bottom], {display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', flexGrow: 3})
		TweenMax.set(txt_4_1, {flexGrow: 1})
		TweenMax.set(txt_4_2, {justifyContent: 'flex-start'})
		TweenMax.set(endframe.childNodes, {position: 'relative', height: 'auto'})
		TweenMax.set(frame_5.childNodes, {position: 'relative', height: 'auto'})
		TweenMax.set(endframe_bottom.childNodes, {position: 'absolute', height: '100%', width: '100%'})
		// TweenMax.set(txt_4, {height: height * 0.6 - logo_bottom.height, bottom: logo_bottom.height})
		// TweenMax.set(txt_4, {y: (logo_top.height) / 2})
		// TweenMax.set(frame_5, {height: height - logo_middle.height - 8, top: logo_middle.height + 5})
		TweenMax.set(frame_5, {display: 'flex', flexDirection: 'column', justifyContent: 'space-around'})

		var cta = cta_container.childNodes[0]
		var cta_txt = cta.innerHTML
		cta.innerHTML = ''
		var cta_inner = Helper.createTextElement({id: 'cta_inner', position: 'relative', text: dc.FR5_TXT_3, color: config.endcolor, fontSize: dc.FR5_TXT_3_SIZE, padding: '14px 15px', lineHeight: '1em', parent: cta})
		TweenMax.set(cta, {overflow: 'hidden'})
		TweenMax.set(cta.childNodes[0], {position: 'relative'})

		if (Helper.detectIE() && Helper.detectIE() == 11) {
			TweenMax.set(cta_inner, {top: dc.FR5_TXT_3_SIZE * 0.1})
		}

		var mask_1 = new Mask({source: img_1, colors: [config.duotone[0], config.duotone[1]]})
		var mask_2 = new Mask({source: img_2, colors: [config.duotone[0], config.duotone[1]]})

		// Animation

		var ease = Power2.easeOut
		var speed = 0.5
		var tl = new TimelineMax()
			.add('frame_1')
			.from(frame_1, speed, {opacity: 0, ease: ease}, 'frame_2')
			.from(logo_top, speed, {y: -logo_top.height - 20, ease: ease}, '-=0.1')
			.from(logo_bottom, speed, {y: logo_bottom.height, ease: ease}, '-=' + speed)
			.add(mask_1.to(0.7, {progress: 1}), '-=0.3')
			.staggerFrom(txt_1.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.7')
			.from(txt_1, 0.4, {opacity: 0}, '-=' + (speed * 0.5))

			.add('frame_2', '+=1.3')
			.to(frame_1, speed, {opacity: 0}, 'frame_2')
			.from(frame_2, 0.5, {opacity: 0}, 'frame_2')
			.add(mask_2.to(0.7, {progress: 1}), '-=0.3')
			.staggerFrom(txt_2.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.7')
			.from(txt_2, 0.4, {opacity: 0}, '-=' + speed)

			.add('frame_3', '+=1.3')
			.to(frame_2, speed, {opacity: 0}, 'frame_3')
			.from(frame_3, 0.7, {x: -width, ease: ease}, 'frame_3')
			.staggerFrom(txt_3.childNodes, 0.4, {opacity: 0}, 0.05, '-=' + speed)

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
			// .staggerFrom(txt_4.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=' + speed)
			.from(txt_5, speed, {opacity: 0}, '-=' + (speed * 0.5))
			.from(cta, speed, {width: 0}, '-=0.3')
			.from(txt_legal, speed, {opacity: 0}, '-=0.3')

			.add('blink', '+=1')
			.to(cta, 0.2, {backgroundColor: dc.FR5_TXT_4_COLOR}, 'blink')
			.to(cta, 0.2, {backgroundColor: dc.FR5_TXT_3_COLOR})

		// console.log(tl.duration())

		// tl.play('frame_4')

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
