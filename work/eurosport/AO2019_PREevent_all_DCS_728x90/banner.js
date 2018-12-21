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

		TweenMax.set(banner, {backgroundColor: dc.IMG_1_COLOR_2})

		var frame_1 = Helper.createElement({id: 'frame_1', width: width, height: height, parent: banner})
			var img_1 = Helper.createElement({id: 'img_1', image: 'FR1_IMG_1.jpg', width: width, height: height, parent: frame_1})
			var txt_1 = Helper.createTextElement({id: 'FR1_TXT_1', text: dc.FR1_TXT_1, color: dc.FR1_TXT_1_COLOR, fontSize: dc.FR1_TXT_1_SIZE, parent: frame_1})

		var frame_2 = Helper.createElement({id: 'frame_2', width: width, height: height, parent: banner})
			var img_2 = Helper.createElement({id: 'img_2', image: 'FR2_IMG_1.jpg', width: width, height: height, parent: frame_2})
			var txt_2 = Helper.createTextElement({id: 'FR2_TXT_1', text: dc.FR2_TXT_1, color: dc.FR2_TXT_1_COLOR, fontSize: dc.FR2_TXT_1_SIZE, parent: frame_2})

		var frame_3 = Helper.createElement({id: 'frame_3', width: width, height: height, parent: banner})
			var img_3 = Helper.createElement({id: 'img_3', image: 'FR3_IMG_1.jpg', width: width, height: height, parent: frame_3})
			var txt_3 = Helper.createTextElement([
				{id: 'FR3_TXT_1', text: dc.FR3_TXT_1, color: dc.FR3_TXT_1_COLOR, fontSize: dc.FR3_TXT_1_SIZE, parent: frame_3},
				{id: 'FR3_TXT_2', text: dc.FR3_TXT_2, color: dc.FR3_TXT_2_COLOR, fontSize: dc.FR3_TXT_2_SIZE, lineHeight: '1.5em', parent: frame_3}
			])

		var logo_bottom = Helper.createElement({id: 'logo_bottom', image: dc.ESPplayer_LT_logo.Url, right: 0, bottom: 0, parent: banner})

		var end_frame = Helper.createElement({id: 'end_frame', width: width, height: height, backgroundColor: config.endcolor, parent: banner})
			var frame_4 = Helper.createElement({id: 'frame_4', width: 364 - 16, height: height, backgroundColor: config.endcolor, parent: end_frame})
				var txt_4 = Helper.createTextElement([
					{id: 'FR4_TXT_1', text: dc.FR4_TXT_1, color: dc.FR4_TXT_1_COLOR, fontSize: dc.FR4_TXT_1_SIZE, lineHeight: '0.9em', textAlign: 'right', alignItems: 'right', parent: frame_4},
					{id: 'FR4_TXT_2', text: dc.FR4_TXT_2, color: dc.FR4_TXT_2_COLOR, fontSize: dc.FR4_TXT_2_SIZE, lineHeight: '1em', top: '5px', textAlign: 'right', alignItems: 'right', parent: frame_4}
				])

			var logo_top_2 = Helper.createElement({id: 'logo_top_2', image: dc.ESPplayer_MG_logo.Url, left: 364, parent: end_frame})

			var frame_5 = Helper.createElement({id: 'frame_5', /*display: 'grid', */width: 270 - 40, height: height - 20, left: 460 + 20, top: 15, backgroundColor: config.endcolor, parent: end_frame})
				var frame_5_top = Helper.createElement({id: 'frame_5_top', width: '100%', display: 'flex', justifyContent: 'space-between', position: 'relative', parent: frame_5})
					var frame_5_top_left = Helper.createElement({id: 'frame_5_top_left', position: 'relative', parent: frame_5_top})
						var txt_5 = Helper.createTextElement([
							{id: 'FR5_TXT_1', text: dc.FR5_TXT_1, color: dc.FR5_TXT_1_COLOR, fontSize: dc.FR5_TXT_1_SIZE, lineHeight: '0.9em', parent: frame_5_top_left},
							{id: 'FR5_TXT_2', text: dc.FR5_TXT_2, color: dc.FR5_TXT_2_COLOR, fontSize: dc.FR5_TXT_2_SIZE, lineHeight: '0.8', parent: frame_5_top_left}
						])
					var cta = Helper.createTextElement({id: 'FR5_TXT_3', text: '', parent: frame_5_top})
				var txt_5_5 = Helper.createTextElement({id: 'FR5_TXT_4', text: dc.FR5_TXT_4, color: dc.FR5_TXT_4_COLOR, fontSize: dc.FR5_TXT_4_SIZE, lineHeight: '1em', letterSpacing: 0, bottom: 0, parent: frame_5})


		var logo_top = Helper.createElement({id: 'logo_top', image: 'AO2018_logo.png', left: 0, parent: banner})

		// Adjust

		TweenMax.set(logo_top, {left: 20, top: (height - logo_top.height) / 2})
		TweenMax.set(cta, {width: 'auto', height: 'auto', position: 'relative', backgroundColor: dc.FR5_TXT_3_COLOR, right: 0})
		TweenMax.set(txt_5, {position: 'relative'})
		TweenMax.set(txt_5_5, {/*position: 'relative', */height: 'auto', bottom: 0})

		var cta_txt = cta.innerHTML
		cta.innerHTML = ''
		var cta_inner = Helper.createTextElement({id: 'cta_inner', position: 'relative', text: dc.FR5_TXT_3, color: config.endcolor, fontSize: dc.FR5_TXT_3_SIZE, padding: '10px 13px', lineHeight: '1em', parent: cta})
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
			.from(logo_top, speed, {x: -100, ease: ease}, '-=0.1')
			.from(logo_bottom, speed, {x: logo_bottom.width, ease: ease}, '-=' + speed)
			.add(mask_1.to(0.7, {progress: 1}), '-=0.1')
			.staggerFrom(txt_1.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.7')
			.from(txt_1, 0.4, {opacity: 0}, '-=' + speed)

			.add('frame_2', '+=1.3')
			.from(frame_2, 0.5, {opacity: 0}, 'frame_2')
			.add(mask_2.to(0.7, {progress: 1}), '-=0.1')
			.staggerFrom(txt_2.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.7')
			.from(txt_2, 0.4, {opacity: 0}, '-=' + speed)

			.add('frame_3', '+=1.3')
			.from(frame_3, 0.7, {x: -width, ease: ease}, 'frame_3')
			.staggerFrom(txt_3.childNodes, 0.4, {opacity: 0}, 0.05, '-=' + speed)

			.add('frame_4', '+=1.3')
			.from(frame_4, speed, {opacity: 0}, 'frame_4')
			.from(txt_4, 0.4, {opacity: 0}, '-=' + speed)
			.staggerFrom(txt_4.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=' + speed)
			.from(logo_top_2, speed, {y: -logo_top_2.height, ease: ease}, '-=' + speed)
			.from(end_frame, speed, {opacity: 0}, '-=0.1')
			.from(cta, speed, {width: 0}, '-=0.3')

			.add('blink', '+=1')
			.to(cta, 0.2, {backgroundColor: dc.FR5_TXT_4_COLOR}, 'blink')
			.to(cta, 0.2, {backgroundColor: dc.FR5_TXT_3_COLOR})

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
