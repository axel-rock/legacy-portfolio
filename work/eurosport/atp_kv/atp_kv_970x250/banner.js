'use strict'

function init() {
	Helper.onReady()
	var width = Helper.getDimensions().width,
		height = Helper.getDimensions().height,
		border = Helper.createElement({id: 'border', width: width, height: height, border: 'solid 1px #ccc', overflow: 'hidden', parent: document.body}),
		banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, opacity: 0, cursor: 'pointer', parent: border}),
		dc = dynamicContent[Object.keys(dynamicContent)[0]][0],
		fontFactor = 0.7,
		images = [
			'atp_1000_white.png',
			'atp_1000_purple.png',
			'f2_txt_1.png',
			'f2_txt_2.png',
			'f2_txt_3.png',
			'f3_txt_1.png',
			'f3_txt_2.png',
			'f3_txt_3.png',
			'cta_txt.png',
			'background_end.jpg',
			// '../atp_kv-assets/txt_1.png',
		]

	for (var i in dc) {
		if (dc[i].Url && dc[i].Url.match(/.(jpg|jpeg|png|gif)$/i))
			images.push(dc[i].Url)
	}

	Helper.preloadImages(images, function() {
		var total_size = dc.TXT_1_SIZE + dc.TXT_2_SIZE + dc.TXT_3_SIZE

		TweenMax.set(border, {backgroundColor: '#00915a'})

		var frame_1_container = Helper.createElement({
			width: width,
			height: height * total_size,
			display: 'flex',
			justifyContent: 'center',
			transformOrigin: 'top center',
			parent: banner,
		})
			var player_1 = Helper.createElement({image: dc.Player_1.Url, retina: false, transformOrigin: 'top center', parent: frame_1_container})
			var txt_1 = Helper.createTextElement({
				text: dc.TXT_1,
				height: height * 0.9 * dc.TXT_1_SIZE,
				top: height * 0.05,
				parent: frame_1_container
			})
			var txt_1_rect = txt_1.getBoundingClientRect()
			var txt_1_width = txt_1_rect.width
			TweenMax.set(txt_1, {color: dc.TXT_1_COLOR})
			var player_2 = Helper.createElement({image: dc.Player_2.Url, retina: false, transformOrigin: 'top center', scale: dc.TXT_1_SIZE + dc.TXT_2_SIZE, parent: frame_1_container})
			var txt_2 = Helper.createTextElement({
				text: dc.TXT_2,
				height: height * 0.9 * dc.TXT_2_SIZE,
				top: height * dc.TXT_1_SIZE,
				parent: frame_1_container
			})
			var txt_2_rect = txt_2.getBoundingClientRect()
			var txt_2_width = txt_2_rect.width
			TweenMax.set(txt_2, {color: dc.TXT_2_COLOR})
			var player_3 = Helper.createElement({image: dc.Player_3.Url, retina: false, transformOrigin: 'top center', scale: total_size, parent: frame_1_container})
			var txt_3 = Helper.createTextElement({
				text: dc.TXT_3,
				height: height * 0.9 * dc.TXT_3_SIZE,
				top: height * (dc.TXT_1_SIZE + dc.TXT_2_SIZE),
				parent: frame_1_container
			})
			var txt_3_rect = txt_3.getBoundingClientRect()
			var txt_3_width = txt_3_rect.width
			TweenMax.set(txt_3, {color: dc.TXT_3_COLOR})

		var frame_2_container = Helper.createElement({
			width: width,
			height: height,
			// backgroundColor: 'red',
			// display: 'flex',
			// justifyContent: 'center',
			parent: banner,
		})
			var f2_txt_1 = Helper.createElement({image: 'f2_txt_1.png', parent: frame_2_container})
			var f2_txt_2 = Helper.createElement({image: 'f2_txt_2.png', parent: frame_2_container})
			var f2_txt_3 = Helper.createElement({image: 'f2_txt_3.png', parent: frame_2_container})

		var frame_3_container = Helper.createElement({
			width: width,
			height: height * 0.9,
			top: height * 0.05,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			parent: banner,
		})
			var background = Helper.createElement({image: '../atp_kv-assets/background_end.jpg', retina: false, parent: frame_3_container})
			var f3_txt_1 = Helper.createElement({image: 'f3_txt_1.png', position: 'relative', parent: frame_3_container})
			var f3_txt_2 = Helper.createElement({image: 'f3_txt_2.png', position: 'relative', parent: frame_3_container})
			var f3_txt_3 = Helper.createElement({image: 'f3_txt_3.png', position: 'relative', parent: frame_3_container})
			var cta = Helper.createElement({image: 'cta_txt.png', position: 'relative', backgroundColor: '#50e68c', parent: frame_3_container})

		// TweenMax.set(txt_1, {fontSize: height, lineHeight: height, height: height})

		// Animation

		TweenMax.delayedCall(0.1, function() {
			txt_1_rect = txt_1.getBoundingClientRect()
			txt_1_width = txt_1_rect.width
			txt_2_rect = txt_2.getBoundingClientRect()
			txt_2_width = txt_2_rect.width
			txt_3_rect = txt_3.getBoundingClientRect()
			txt_3_width = txt_3_rect.width

			var ease = Power2.easeOut
			var none = Power0.easeNone
			var speed = 1.5

			var tl = new TimelineMax()
				.add('frame_1_1')
				.to(banner, 0.1, {opacity: 1})
				.fromTo(
					txt_1,
					speed * 3,
					{x: (txt_1_width - width) / 2},
					{x: -(txt_1_width - width) / 2 / total_size, ease: none},
					'frame_1_1'
				)
				.add(animatePlayer(player_1, 1), 0)

				.add('frame_1_2', speed)
				.to(frame_1_container, 0.1, {scale: 1 / (dc.TXT_1_SIZE + dc.TXT_2_SIZE)}, 'frame_1_2')
				.fromTo(
					txt_2,
					speed * 2,
					{x: -(txt_2_width - width) / 2 / (dc.TXT_1_SIZE + dc.TXT_2_SIZE)},
					{x: (txt_2_width - width) / 2 / total_size, ease: none},
					'frame_1_2'
				)
				.add(animatePlayer(player_2, -1), 'frame_1_2')

				.add('frame_1_3', speed * 2)
				.to(frame_1_container, 0.1, {scale: 1 / total_size}, 'frame_1_3')
				.fromTo(
					txt_3,
					speed,
					{x: (txt_3_width - width) / 2 / total_size},
					{x: -(txt_3_width - width) / 2 / total_size, ease: none},
					'frame_1_3'
				)
				.add(animatePlayer(player_3, 1), 'frame_1_3')

				.add('frame_1_4', speed * 3 - 0.3)
				.to(txt_1, 0.3, {x: '-=' + width * 4, skewX: '-30deg', scaleY: 1.2, opacity: 0, ease: Power1.easeIn}, 'frame_1_4')
				.to(txt_2, 0.3, {x: '+=' + width * 3, skewX: '+30deg', scaleY: 1.2, opacity: 0, ease: Power1.easeIn}, 'frame_1_4')
				.to(txt_3, 0.3, {x: '-=' + width * 2, skewX: '-30deg', scaleY: 1.2, opacity: 0, ease: Power1.easeIn}, 'frame_1_4')

				.add('frame_2', '+=0.3')
				.staggerFrom([f2_txt_1, f2_txt_2, f2_txt_3], 0.5, {opacity: 0}, 0.1, 'frame_2')

				.add('frame_3', '+=1')
				.to(frame_2_container, 0.5, {opacity: 0}, 'frame_3')
				.staggerFrom([background, f3_txt_1, f3_txt_2, f3_txt_3, cta], 0.5, {opacity: 0}, 0.1)

			// tl.play('frame_3')

			function animatePlayer(player, direction) {
				return new TimelineMax()
					.from(player, 0.3, {opacity: 0})
					.fromTo(player, speed, {x: width * direction * 0.1}, {x: -width * direction * 0.1, ease: none}, 0)
					.to(player, 0.3, {opacity: 0}, '-=0.3')
			}
		})

		// Interaction

		banner.addEventListener('mouseenter', function() {
			TweenMax.to(cta, 0.3, {backgroundColor: '#FFFFFF'})
		})

		banner.addEventListener('mouseleave', function() {
			TweenMax.to(cta, 0.3, {backgroundColor: '#50e68c'})
		})

		banner.addEventListener('click', function() {
			Helper.onClick()
		})
	})
}
