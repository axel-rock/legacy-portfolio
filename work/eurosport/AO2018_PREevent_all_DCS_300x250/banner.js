'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
		height = Helper.getDimensions().height,
		border = Helper.createElement({id: 'border', width: width, height: height, border: 'solid 1px #ccc', overflow: 'hidden', parent: document.body}),
		banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, cursor: 'pointer', parent: border}),
		dc = dynamicContent.Dynamic_Test_Sheet1[0]

	Helper.preloadImages(dc, function() {

		TweenMax.set(banner, {backgroundColor: dc.IMG_1_COLOR_2})

		var frame_1 = Helper.createElement({id: 'frame_1', width: width, height: height, parent: banner})
			var img_1 = Helper.createElement({id: 'img_1', image: dc.IMG_1.Url, parent: frame_1})
			var txt_1 = Helper.createTextElement({id: 'FR1_TXT_1', text: dc.FR1_TXT_1, color: dc.FR1_TXT_1_COLOR, fontSize: dc.FR1_TXT_1_SIZE, parent: frame_1})

		var frame_2 = Helper.createElement({id: 'frame_2', width: width, height: height, parent: banner})
			var img_2 = Helper.createElement({id: 'img_2', image: dc.IMG_2.Url, parent: frame_2})
			var txt_2 = Helper.createTextElement({id: 'FR2_TXT_1', text: dc.FR2_TXT_1, color: dc.FR2_TXT_1_COLOR, fontSize: dc.FR2_TXT_1_SIZE, parent: frame_2})

		var frame_3 = Helper.createElement({id: 'frame_3', width: width, height: height, parent: banner})
			var img_3 = Helper.createElement({id: 'img_3', image: dc.IMG_3.Url, parent: frame_3})
			var txt_3 = Helper.createTextElement([
				{id: 'FR3_TXT_1', text: dc.FR3_TXT_1, color: dc.FR3_TXT_1_COLOR, fontSize: dc.FR3_TXT_1_SIZE, parent: frame_3},
				{id: 'FR3_TXT_2', text: dc.FR3_TXT_2, color: dc.FR3_TXT_2_COLOR, fontSize: dc.FR3_TXT_2_SIZE, lineHeight: '1.5em', parent: frame_3}
			])

		var logo_bottom = Helper.createElement({id: 'logo_bottom', image: dc.ESPplayer_LT_logo.Url, left: 0, right: 0, bottom: 0, margin: '0 auto', parent: banner})

		var frame_4 = Helper.createElement({id: 'frame_4', width: width, height: height, backgroundColor: dc.END_COLOR, parent: banner})
			var txt_4 = Helper.createTextElement([
				{id: 'FR4_TXT_1', text: dc.FR4_TXT_1, color: dc.FR4_TXT_1_COLOR, fontSize: dc.FR4_TXT_1_SIZE, lineHeight: '0.9em', parent: frame_4},
				{id: 'FR4_TXT_2', text: dc.FR4_TXT_2, color: dc.FR4_TXT_2_COLOR, fontSize: dc.FR4_TXT_2_SIZE, lineHeight: '1em', top: '5px', parent: frame_4}
			])

		var frame_5 = Helper.createElement({id: 'frame_5', width: width, height: height, backgroundColor: dc.END_COLOR, parent: banner})
			var txt_5 = Helper.createTextElement([
				{id: 'FR5_TXT_1', text: dc.FR5_TXT_1, color: dc.FR5_TXT_1_COLOR, fontSize: dc.FR5_TXT_1_SIZE, lineHeight: '0.9em', parent: frame_5},
				{id: 'FR5_TXT_2', text: dc.FR5_TXT_2, color: dc.FR5_TXT_2_COLOR, fontSize: dc.FR5_TXT_2_SIZE, lineHeight: '0.8', parent: frame_5},
				{id: 'FR5_TXT_3', text: '', backgroundColor: dc.FR5_TXT_3_COLOR, parent: frame_5},
				{id: 'FR5_TXT_4', text: dc.FR5_TXT_4, color: dc.FR5_TXT_4_COLOR, fontSize: dc.FR5_TXT_4_SIZE, lineHeight: '1em', letterSpacing: 0, parent: frame_5}
			])

		var logo_top = Helper.createElement({id: 'logo_top', image: dc.AO2018_logo.Url, left: 0, right: 0, top: 10, margin: '0 auto', parent: banner})
		var logo_top_2 = Helper.createElement({id: 'logo_top_2', image: dc.ESPplayer_MG_logo.Url, left: 0, right: 0, margin: '0 auto', parent: banner})

		// Adjust

		TweenMax.set([txt_1, txt_2, txt_3], {y: (logo_top.height + 20) - logo_bottom.height})
		TweenMax.set(txt_4, {y: (logo_top_2.height) / 2})
		TweenMax.set(frame_5, {height: height - logo_top_2.height, top: logo_top_2.height})
		TweenMax.set(txt_5, {justifyContent: 'space-around'})

		var cta = txt_5.childNodes[2]
		var cta_txt = cta.innerHTML
		cta.innerHTML = ''
		var cta_inner = Helper.createTextElement({id: 'cta_inner', position: 'relative', text: dc.FR5_TXT_3, color: dc.END_COLOR, fontSize: dc.FR5_TXT_3_SIZE, padding: '13px 35px', lineHeight: '1em', parent: cta})
		TweenMax.set(cta, {overflow: 'hidden'})
		TweenMax.set(cta.childNodes[0], {position: 'relative'})


		var mask_1 = new Mask({source: img_1, colors: [dc.IMG_1_COLOR_1, dc.IMG_1_COLOR_2]})
		var mask_2 = new Mask({source: img_2, colors: [dc.IMG_2_COLOR_1, dc.IMG_2_COLOR_2]})

		// Animation

		var ease = Power1.easeInOut
		var tl = new TimelineMax()
			.add('frame_1')
			.from(frame_1, 0.3, {opacity: 0}, 'frame_2')
			.from(logo_top, 0.3, {y: -logo_top.height - 10, ease: ease}, '-=0.1')
			.from(logo_bottom, 0.3, {y: logo_bottom.height, ease: ease}, '-=0.3')
			// .fromTo(
			// 	logo_bottom,
			// 	0.4,
			// 	{clip: 'rect(0, ' + (logo_bottom.width * 0.5) + ', 100%, ' + (logo_bottom.width * 0.5) + ')'},
			// 	{clip: 'rect(0, ' + logo_bottom.width + ', ' + logo_bottom.width + ', 0)', ease: Power2.easeInOut}
			// )
			.add(mask_1.to(0.7, {progress: 1}), '-=0.1')
			.staggerFrom(txt_1.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.7')
			.from(txt_1, 0.4, {opacity: 0}, '-=0.3')

			.add('frame_2', '+=1')
			.from(frame_2, 0.5, {opacity: 0}, 'frame_2')
			.add(mask_2.to(0.7, {progress: 1}), '-=0.1')
			.staggerFrom(txt_2.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.7')
			.from(txt_2, 0.4, {opacity: 0}, '-=0.3')

			.add('frame_3', '+=1')
			.from(frame_3, 0.7, {x: -width, ease: ease}, 'frame_3')
			.staggerFrom(txt_3.childNodes, 0.4, {opacity: 0}, 0.05, '-=0.3')

			.add('frame_4', '+=1.2')
			.from(frame_4, 0.5, {opacity: 0}, 'frame_4')
			.from(txt_4, 0.4, {opacity: 0}, '-=0.3')
			.staggerFrom(txt_4.childNodes, 0.7, {y: height, ease: ease}, 0.05, '-=0.3')
			.from(logo_top_2, 0.3, {y: -logo_top_2.height, ease: ease}, '-=0.3')

			.add('frame_5', '+=1.2')
			.to(txt_4, 0.3, {opacity: 0}, 'frame_5')
			.from(frame_5, 0.5, {opacity: 0}, '-=0.3')
			.from(cta, 0.5, {width: 0}, '-=0.3')
			// .from(txt_5, 0.4, {opacity: 0}, '-=0.3')
			// .staggerFrom(txt_5.childNodes, 0.7, {y: height * 0.2, opacity: 0, ease: Power2.easeOut}, 0.05, '-=0.3')
			// .fromTo('#FR5_TXT_3', 0.5, {clip: 'rect(0 50px 0 50px)'}, {clip: 'rect(0 0 0 0)'})
			// .fromTo(
			// 	cta,
			// 	0.5,
			// 	{clip: 'rect(0, ' + (cta.offsetWidth * 0.5) + ', 100%, ' + (cta.offsetWidth * 0.5) + ')'},
			// 	{clip: 'rect(0, ' + cta.offsetWidth + ', ' + cta.offsetWidth + ', 0)', ease: Power2.easeInOut}, '+=1.2'
			// )

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
