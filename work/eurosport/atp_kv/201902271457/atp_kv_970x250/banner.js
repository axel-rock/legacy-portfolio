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
			'background_end.jpg',
		]

	for (var i in dc) {
		if (dc[i].Url && dc[i].Url.match(/.(jpg|jpeg|png|gif)$/i))
			images.push(dc[i].Url)
	}

	Helper.preloadImages(images, function() {
		var total_size = dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE + dc.TXT_2_3_SIZE

		TweenMax.set(border, {backgroundColor: dc.END_COLOR})

		var frame_1_container = Helper.createElement({
			id: 'frame_1_container',
			width: width,
			height: 150,
			top: 50,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			parent: banner,
		})
			// var f2_txt_1 = Helper.createElement({image: 'f2_txt_1.png', parent: frame_1_container})
			var txt_1_1 = Helper.createTextElement({text: dc.TXT_1_1, height: 40, position: 'relative', parent: frame_1_container})
			TweenMax.set(txt_1_1, {fontSize: '40px'})
			var txt_1_2 = Helper.createElement({image: 'txt_1_2.png', position: 'relative', parent: frame_1_container})
			var txt_1_3 = Helper.createTextElement({text: dc.TXT_1_3, fontSize: '40px', position: 'relative', parent: frame_1_container})
			TweenMax.set(txt_1_3, {display: 'flex', justifyContent: 'space-around'})

		var frame_2_container = Helper.createElement({
			id: 'frame_2_container',
			width: width,
			height: height * total_size,
			display: 'flex',
			justifyContent: 'center',
			transformOrigin: 'top center',
			parent: banner,
		})
			var player_1 = Helper.createElement({image: dc.Player_1.Url, retina: false, transformOrigin: 'top center', parent: frame_2_container})
			var txt_1 = Helper.createTextElement({
				text: dc.TXT_2_1,
				height: height * 0.9 * dc.TXT_2_1_SIZE,
				top: height * 0.05,
				parent: frame_2_container
			})
			var txt_1_rect = txt_1.getBoundingClientRect()
			var txt_1_width = txt_1_rect.width
			TweenMax.set(txt_1, {color: dc.TXT_2_1_COLOR})
			var player_2 = Helper.createElement({image: dc.Player_2.Url, retina: false, transformOrigin: 'top center', scale: dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE, parent: frame_2_container})
			var txt_2 = Helper.createTextElement({
				text: dc.TXT_2_2,
				height: height * 0.9 * dc.TXT_2_2_SIZE,
				top: height * dc.TXT_2_1_SIZE,
				parent: frame_2_container
			})
			var txt_2_rect = txt_2.getBoundingClientRect()
			var txt_2_width = txt_2_rect.width
			TweenMax.set(txt_2, {color: dc.TXT_2_2_COLOR})
			var player_3 = Helper.createElement({image: dc.Player_3.Url, retina: false, transformOrigin: 'top center', scale: total_size, parent: frame_2_container})
			var txt_3 = Helper.createTextElement({
				text: dc.TXT_2_3,
				height: height * 0.9 * dc.TXT_2_3_SIZE,
				top: height * (dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE),
				parent: frame_2_container
			})
			var txt_3_rect = txt_3.getBoundingClientRect()
			var txt_3_width = txt_3_rect.width
			TweenMax.set(txt_3, {color: dc.TXT_2_3_COLOR})

		var frame_3_container = Helper.createElement({
			id: 'frame_3_container',
			width: width,
			height: height * 0.9,
			top: height * 0.05,
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',
			alignItems: 'center',
			parent: banner,
		})
			var background = Helper.createElement({image: dc.Background.Url, retina: false, position: 'absolute', parent: frame_3_container})
			var txt_3_1 = Helper.createTextElement({text: dc.TXT_3_1, height: 72, position: 'relative', parent: frame_3_container})
			TweenMax.set(txt_3_1, {lineHeight: 0.88, marginTop: 0})
			var txt_3_2 = Helper.createTextElement({text: dc.TXT_3_2, height: 40, position: 'relative', parent: frame_3_container})
			TweenMax.set(txt_3_2, {lineHeight: 0.88, marginTop: 0})
			var txt_3_3 = Helper.createTextElement({text: dc.TXT_3_3, height: 40, position: 'relative', parent: frame_3_container})
			TweenMax.set(txt_3_3, {lineHeight: 0.88, marginTop: 0})
			var cta = Helper.createTextElement({text: dc.CTA, height: 50, position: 'relative', parent: frame_3_container})
			TweenMax.set(cta, {color: '#3f3359', marginTop: 0, backgroundColor: '#50e68c', fontSize: '40px', lineHeight: 0.88, padding: '10px 80px'})

		// Animation

		TweenMax.delayedCall(0.1, function() {
			txt_1_rect = txt_1.getBoundingClientRect()
			txt_1_width = txt_1_rect.width
			txt_2_rect = txt_2.getBoundingClientRect()
			txt_2_width = txt_2_rect.width
			txt_3_rect = txt_3.getBoundingClientRect()
			txt_3_width = txt_3_rect.width

			var logos = txt_1_3.querySelectorAll('i')
			var ease = Power2.easeOut
			var none = Power0.easeNone
			var speed = 1.75

			var tl = new TimelineMax()
				.add('frame_1')
				.to(banner, 0.1, {opacity: 1})
				.staggerFrom([txt_1_1, txt_1_2], 0.5, {opacity: 0}, 0.1)
				.from(logos[0], 0.3, {x: -70, opacity: 0}, 'frame_1+=0.7')
				.from(logos[1], 0.3, {x: -50, opacity: 0}, 'frame_1+=0.6')
				.from(logos[2], 0.3, {x: -30, opacity: 0}, 'frame_1+=0.5')
				.from(logos[3], 0.3, {x: -10, opacity: 0}, 'frame_1+=0.4')
				.from(logos[4], 0.3, {x:  10, opacity: 0}, 'frame_1+=0.4')
				.from(logos[5], 0.3, {x:  30, opacity: 0}, 'frame_1+=0.5')
				.from(logos[6], 0.3, {x:  50, opacity: 0}, 'frame_1+=0.6')
				.from(logos[7], 0.3, {x:  70, opacity: 0}, 'frame_1+=0.7')

				.to(frame_1_container, 0.5, {opacity: 0}, '+=1')
				// .from(frame_2_container, 0.3, {opacity: 0})
				.add('frame_2_1')
				.from(frame_2_container, 0.3, {opacity: 0}, 'frame_2_1')
				.fromTo(
					txt_1,
					speed * 3,
					{x: (txt_1_width - width) / 2},
					{x: -(txt_1_width - width) / 2 / total_size, ease: none},
					'frame_2_1'
				)
				.add(animatePlayer(player_1, 1), 'frame_2_1')

				.add('frame_2_2', 'frame_2_1+=' + speed)
				.to(frame_2_container, 0.1, {scale: 1 / (dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE)}, 'frame_2_2')
				.fromTo(
					txt_2,
					speed * 2,
					{x: -(txt_2_width - width) / 2 / (dc.TXT_2_1_SIZE + dc.TXT_2_2_SIZE)},
					{x: (txt_2_width - width) / 2 / total_size, ease: none},
					'frame_2_2'
				)
				.add(animatePlayer(player_2, -1), 'frame_2_2')

				.add('frame_2_3', 'frame_2_2+=' + speed)
				.to(frame_2_container, 0.1, {scale: 1 / total_size}, 'frame_2_3')
				.fromTo(
					txt_3,
					speed,
					{x: (txt_3_width - width) / 2 / total_size},
					{x: -(txt_3_width - width) / 2 / total_size, ease: none},
					'frame_2_3'
				)
				.add(animatePlayer(player_3, 1), 'frame_2_3')

				.add('frame_2_4', 'frame_2_3+=' + (speed - 0.3))
				.to(txt_1, 0.3, {x: '-=' + width * 4, skewX: '-30deg', scaleY: 1.2, opacity: 0, ease: Power1.easeIn}, 'frame_2_4')
				.to(txt_2, 0.3, {x: '+=' + width * 3, skewX: '+30deg', scaleY: 1.2, opacity: 0, ease: Power1.easeIn}, 'frame_2_4')
				.to(txt_3, 0.3, {x: '-=' + width * 2, skewX: '-30deg', scaleY: 1.2, opacity: 0, ease: Power1.easeIn}, 'frame_2_4')

				.add('frame_3')
				.staggerFrom([background, txt_3_1, txt_3_2, txt_3_3, cta], 0.5, {opacity: 0}, 0.1)

			// tl.play('frame_3')
			// tl.pause('frame_1+=1')
			// console.log(frame_2_container)

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
