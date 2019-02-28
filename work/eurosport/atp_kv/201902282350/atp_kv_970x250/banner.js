'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
		height = Helper.getDimensions().height,
		border = Helper.createElement({id: 'border', width: width, height: height, border: 'solid 1px #ccc', overflow: 'hidden', parent: document.body}),
		banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, opacity: 0, cursor: 'pointer', parent: border}),
		dynamicContent = dynamicContent || devDynamicContent,
		dc = dynamicContent[Object.keys(dynamicContent)[0]][0],
		fontFactor = 0.7,
		images = [
			'txt_1_2.png',
			// 'txt_3_3.png',
			'background_end.jpg',
		]

	for (var i in dc) {
		if (dc[i].Url && dc[i].Url.match(/.(jpg|jpeg|png|gif)$/i))
			images.push(dc[i].Url)
	}

	Helper.preloadImages(images, function() {
		var total_size = dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE + dc.TXT_2_3_SIZE
		var txt_2_1_width
		var txt_2_2_width
		var txt_2_3_width
		var txt_3_1_width
		var txt_3_2_rect
		var txt_3_3_rect

		TweenMax.set(border, {backgroundColor: dc.BG_1})

		var frame_2_container = Helper.createElement({
			id: 'frame_2_container',
			width: width,
			height: height * total_size,
			display: 'flex',
			justifyContent: 'center',
			transformOrigin: 'top center',
			backgroundColor: dc.BG_1,
			parent: banner,
		})
			var player_1 = Helper.createElement({image: dc.Player_1.Url, retina: false, transformOrigin: 'top center', parent: frame_2_container})
			var txt_2_1 = Helper.createTextElement({
				text: dc.TXT_2_1 + dc.TXT_2_1,
				marginLeft: '-1.26em', // Center Logo.
				height: height * 0.9 * dc.TXT_2_1_SIZE,
				top: height * 0.05,
				parent: frame_2_container
			})
			TweenMax.set(txt_2_1, {color: dc.TXT_2_1_COLOR})
			var player_2 = Helper.createElement({image: dc.Player_2.Url, retina: false, transformOrigin: 'top center', scale: dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE, parent: frame_2_container})
			var txt_2_2 = Helper.createTextElement({
				text: dc.TXT_2_2,
				height: height * 0.9 * dc.TXT_2_2_SIZE,
				top: height * dc.TXT_2_1_SIZE,
				parent: frame_2_container
			})
			TweenMax.set(txt_2_2, {color: dc.TXT_2_2_COLOR})
			var player_3 = Helper.createElement({image: dc.Player_3.Url, retina: false, transformOrigin: 'top center', scale: total_size, parent: frame_2_container})
			var txt_2_3 = Helper.createTextElement({
				text: dc.TXT_2_3,
				height: height * 0.9 * dc.TXT_2_3_SIZE,
				top: height * (dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE),
				parent: frame_2_container
			})
			TweenMax.set(txt_2_3, {color: dc.TXT_2_3_COLOR})

		var frame_1_container = Helper.createElement({
			id: 'frame_1_container',
			width: width,
			height: height,
			padding: '50px auto',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			backgroundColor: dc.BG_1,
			parent: banner,
		})
			// var f2_txt_1 = Helper.createElement({image: 'f2_txt_1.png', parent: frame_1_container})
			var txt_1_1 = Helper.createTextElement({text: dc.TXT_1_1, height: 40, position: 'relative', parent: frame_1_container})
			TweenMax.set(txt_1_1, {fontSize: '40px'})
			var txt_1_2 = Helper.createElement({image: 'txt_1_2.png', position: 'relative', parent: frame_1_container})
			var txt_1_3 = Helper.createTextElement({text: dc.TXT_1_3, fontSize: '40px', position: 'relative', parent: frame_1_container})
			TweenMax.set(txt_1_3, {display: 'flex', justifyContent: 'space-around'})

		var frame_3_container = Helper.createElement({
			id: 'frame_3_container',
			width: width,
			height: height,
			padding: height * 0.02 + 'px auto',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			backgroundColor: dc.BG_2,
			overflow: 'hidden',
			parent: banner,
		})
			var background = Helper.createElement({image: dc.Background.Url, retina: true, position: 'absolute', parent: frame_3_container})
			var txt_3_1 = Helper.createTextElement({text: dc.TXT_3_1, height: 72, position: 'relative', parent: frame_3_container})
			TweenMax.set(txt_3_1, {lineHeight: 0.88, marginTop: 0})
			var txt_3_2 = Helper.createTextElement({text: dc.TXT_3_2, height: 40, position: 'relative', parent: frame_3_container})
				var txt_3_2_bar = Helper.createElement({width: 0, height: 1, backgroundColor: '#ffffff', insertBefore: txt_3_2})
			TweenMax.set(txt_3_2, {lineHeight: 0.88, marginTop: 0, backgroundColor: dc.BG_2, padding: '0 20px'})
			var txt_3_3 = Helper.createTextElement({text: dc.TXT_3_3, height: 40, position: 'relative', parent: frame_3_container})
			TweenMax.set(txt_3_3, {marginTop: '-.3em'})
			var cta = Helper.createElement({borderRadius: '5px', position: 'relative', parent: frame_3_container})
				var cta_frame = Helper.createElement({width: '100%', height: '100%', backgroundColor: '#4ee9a1', borderRadius: 5, parent: cta})
				var cta_txt = Helper.createTextElement({text: dc.CTA, height: 24, padding: '7px 50px', position: 'relative', parent: cta})

			TweenMax.set(cta_txt, {color: '#52446b', marginTop: 0, fontSize: '35px', lineHeight: 0.88})

		// Animation

		TweenMax.delayedCall(0.1, function() {
			txt_2_1_width = txt_2_1.getBoundingClientRect().width
			txt_2_2_width = txt_2_2.getBoundingClientRect().width
			txt_2_3_width = txt_2_3.getBoundingClientRect().width
			txt_3_1_width = txt_3_1.getBoundingClientRect().width
			txt_3_2_rect = txt_3_2.getBoundingClientRect()
			txt_3_3_rect = txt_3_3.getBoundingClientRect()

			TweenMax.set(txt_3_2_bar, {width: txt_3_1_width, top: txt_3_2_rect.top + txt_3_2_rect.height / 2})

			var ease = Power2.easeOut
			var none = Power0.easeNone
			var speed = 1.6
			var tl = new TimelineMax()
				.add('frame_1')
				.to(banner, 0.1, {opacity: 1})
				.staggerFrom([txt_1_1, txt_1_2], 0.5, {opacity: 0}, 0.1)
				.add(animateLogos(txt_1_3.querySelectorAll('i')), 'frame_1')

				.add('frame_2_1', '+=0.5')
				.to(frame_1_container, 0.3, {opacity: 0, ease: Power2.easeIn}, 'frame_2_1')
				.add(animatePlayer(player_1, 1), 'frame_2_1+=0.3')
				.fromTo(
					txt_2_1,
					speed * 3 + 0.3,
					{x: 200},
					{x: -(txt_2_1_width - width) / 2 / total_size, ease: none},
					'frame_2_1'
				)

				.add('frame_2_2', 'frame_2_1+=' + (speed + 0.3))
				.add(animatePlayer(player_2, -1), 'frame_2_2')
				.to(frame_2_container, 0.3, {scale: 1 / (dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE)}, 'frame_2_2')
				.fromTo(
					txt_2_2,
					speed * 2,
					{x: -(txt_2_2_width - width) / 2 / (dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE)},
					{x: (txt_2_2_width - width) / 2 / total_size, ease: none},
					'frame_2_2'
				)

				.add('frame_2_3', 'frame_2_2+=' + speed)
				.add(animatePlayer(player_3, 1), 'frame_2_3')
				.to(frame_2_container, 0.3, {scale: 1 / total_size}, 'frame_2_3')
				.fromTo(
					txt_2_3,
					speed,
					{x: (txt_2_3_width - width) / 2 / total_size},
					{x: -(txt_2_3_width - width) / 2 / total_size, ease: none},
					'frame_2_3'
				)

				.add('frame_3', '-=0.3')
				.from(frame_3_container, 0.5, {y: height}, 'frame_3')
				.fromTo(txt_3_3, 0.5, {y: -height * 0.5}, {y: height / 2 - txt_3_3_rect.top - txt_3_3_rect.height / 2}, 'frame_3')
				.to(txt_3_3, 0.5, {y: 0, ease: Power2.easeInOut}, '+=0.5')
				// .from()
				.staggerFrom([background, txt_3_1, [txt_3_2, txt_3_2_bar]], 0.5, {opacity: 0}, 0.1, '-=0.5')
				.from(txt_3_2_bar, 0.5, {scaleX: 0, ease: Power2.easeInOut}, '-=0.3')
				.from(cta_frame, 0.5, {scaleX: 0, ease: Power2.easeInOut}, '-=0.5')

			// tl.play('frame_3')
			// tl.pause('frame_1+=1')
			// console.log(frame_2_container)

			function animateLogos(logos) {
				return new TimelineMax()
				.from(logos[0], 0.3, {x: -70, opacity: 0}, 0.5)
				.from(logos[1], 0.3, {x: -50, opacity: 0}, 0.4)
				.from(logos[2], 0.3, {x: -30, opacity: 0}, 0.3)
				.from(logos[3], 0.3, {x: -10, opacity: 0}, 0.2)
				.from(logos[4], 0.3, {x:  10, opacity: 0}, 0.2)
				.from(logos[5], 0.3, {x:  30, opacity: 0}, 0.3)
				.from(logos[6], 0.3, {x:  50, opacity: 0}, 0.4)
				.from(logos[7], 0.3, {x:  70, opacity: 0}, 0.5)
			}

			function animatePlayer(player, direction) {
				return new TimelineMax()
					.from(player, 0.3, {opacity: 0})
					.fromTo(player, speed-0.1, {x: width * direction * 0.1}, {x: -width * direction * 0.1, ease: none}, 0)
					.to(player, 0.3, {opacity: 0}, '-=0.3')
			}
		})

		// Interaction

		banner.addEventListener('mouseenter', function() {
			TweenMax.to(cta_frame, 0.3, {backgroundColor: '#FFFFFF'})
		})

		banner.addEventListener('mouseleave', function() {
			TweenMax.to(cta_frame, 0.3, {backgroundColor: '#4ee9a1'})
		})

		banner.addEventListener('click', function() {
			Helper.onClick()
		})
	})
}
