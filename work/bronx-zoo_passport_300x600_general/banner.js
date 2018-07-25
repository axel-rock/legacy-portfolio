var bannerboy = bannerboy || {};
var browser = new bannerboy.detectBrowser();
if (browser.chrome() || browser.safari()) bannerboy.defaults.rotationZ = 0.001;
// TweenMax.ticker.fps(25);
TweenLite.defaultEase = Power2.easeInOut;

bannerboy.main = function() {
	var width = bannerboy.utils.getDimensions().width;
	var height = bannerboy.utils.getDimensions().height;
	var border = bannerboy.createElement({id: "border", width: width, height: height, border: "solid 1px #ccc", overflow: "hidden", boxSizing: "border-box", parent: document.body});
	var banner = bannerboy.createElement({id: "banner",	width: width, height: height, backgroundColor: "#b3022b", overflow: "hidden", left: -border.get("borderWidth"), top: -border.get("borderWidth"), cursor: "pointer", boxSizing: "border-box", parent: border});

	var images = [
		"bg_city.png",
		"el_bison.png",
		"el_bird.png",
		"el_butterfly.png",
		"dragon.png",
		"dancers_africa.png",
		"dancers_america.png",
		"lion.png",
		"cta_txt.png",
		"txt_5_shadow.png",
		"ribbon_0.png",
		"ribbon_1.png",
		"ribbon_2.png",
		"ribbon_3.png",
		"ribbon_8.png",
		"ribbon_9.png",
		"ribbon_10.png",
		"txt_5_1.png",
		"ribbon_4.png",
		"ribbon_5.png",
		"ribbon_6.png",
		"ribbon_7.png",
		"ribbon.png",
		"txt_5_2.png",
		"txt_4_1.png",
		"txt_4_2.png",
		"txt_3_1.png",
		"txt_2_1.png",
		"txt_2_2.png",
		"txt_1_1.png",
		"txt_1_2.png",
		"txt_1_3.png",
		"txt_1_4.png",
		"txt_1_5.png",
		"txt_1_6.png",
		"logo_bottom.png"
	];

	images.push(
		"earth.png",
		"train.png",
		"rail.png",
		"cloud_1.png",
		"cloud_2.png"
	);

	bannerboy.preloadImages(images, function() {

		var background = new Background(); // Create gradient and noise in code to save weight

		/* Create Elements
		================================================= */

		/* eslint-disable indent */

		var globe = bannerboy.createElement({id: "globe", left: -64, top: 62, width: 514, height: 569, parent: banner});
			var bg_city = bannerboy.createElement({id: "bg_city", backgroundImage: "bg_city.png", top: 79, width: 514, height: 449, retina: true, parent: globe});
			var pos_dancers_america = bannerboy.createElement({id: "pos_dancers_america", left: 125 + 20, top: 419, width: 49, height: 64, parent: globe});
			var pos_dragon = bannerboy.createElement({id: "pos_dragon", left: 247, top: 224, width: 132, height: 93, parent: globe});
			var pos_lion = bannerboy.createElement({id: "pos_lion", left: 322, top: 389, width: 58, height: 89, parent: globe});
			var pos_dancers_africa = bannerboy.createElement({id: "pos_dancers_africa", left: 316, top: 268, width: 44, height: 51, parent: globe});
			var el_bison = bannerboy.createElement({id: "el_bison", backgroundImage: "el_bison.png", left: 72, top: 195, width: 53, height: 46, retina: true, parent: globe});
			var el_bird = bannerboy.createElement({id: "el_bird", backgroundImage: "el_bird.png", left: 67, top: 395, width: 65, height: 52, retina: true, parent: globe});
			var el_butterfly = bannerboy.createElement({id: "el_butterfly", backgroundImage: "el_butterfly.png", left: 168, top: 270, width: 45, height: 41, retina: true, parent: globe});
			var pos_cloud_2 = bannerboy.createElement({id: "pos_cloud_2", left: 228, top: 429, width: 109, height: 37, parent: globe});
			var pos_cloud_1 = bannerboy.createElement({id: "pos_cloud_1", left: 250, top: 322, width: 134, height: 31, parent: globe});
		var dragon = bannerboy.createElement({id: "dragon", backgroundImage: "dragon.png", left: 122, top: 178, width: 235, height: 151, retina: true, parent: banner});
		var dancers_africa = bannerboy.createElement({id: "dancers_africa", backgroundImage: "dancers_africa.png", left: 226, top: 300, width: 96, height: 111, retina: true, parent: banner});
		var dancers_america = bannerboy.createElement({id: "dancers_america", backgroundImage: "dancers_america.png", left: 96 + 35, top: 176, width: 131, height: 164, retina: true, parent: banner});
		var lion = bannerboy.createElement({id: "lion", backgroundImage: "lion.png", left: 168, top: 317, width: 114, height: 173, retina: true, parent: banner});
		var cta = bannerboy.createElement({id: "cta", left: 73, top: 191, width: 155, height: 35, parent: banner});
			var cta_shape_shadow = bannerboy.createElement({id: "cta_shape_shadow", backgroundColor: "#248338", top: 3, width: 155, height: 33, parent: cta});
			var cta_shape = bannerboy.createElement({id: "cta_shape", backgroundColor: "#2fab49", width: 155, height: 33, parent: cta});
			var cta_txt = bannerboy.createElement({id: "cta_txt", backgroundImage: "cta_txt.png", left: 32, top: 11, width: 96, height: 12, retina: true, parent: cta});
		var txt_5 = bannerboy.createElement({id: "txt_5", width: 367, height: 232, parent: banner});
			var txt_5_shadow = bannerboy.createElement({id: "txt_5_shadow", backgroundImage: "txt_5_shadow.png", width: 300, height: 232, opacity: 0.2, parent: txt_5});
			var ribbon_back = bannerboy.createElement({id: "ribbon_back", left: 19, top: 144, width: 348, height: 53, parent: txt_5});
				var ribbon_0 = bannerboy.createElement({id: "ribbon_0", backgroundImage: "ribbon_0.png", left: 225, top: 7, width: 123, height: 46, retina: true, parent: ribbon_back});
				var ribbon_1 = bannerboy.createElement({id: "ribbon_1", backgroundImage: "ribbon_1.png", left: 190, width: 95, height: 40, retina: true, parent: ribbon_back});
				var ribbon_2 = bannerboy.createElement({id: "ribbon_2", backgroundImage: "ribbon_2.png", left: 188, width: 73, height: 36, retina: true, parent: ribbon_back});
				var ribbon_3 = bannerboy.createElement({id: "ribbon_3", backgroundImage: "ribbon_3.png", left: 188, top: 4, width: 38, height: 35, retina: true, parent: ribbon_back});
				var ribbon_8 = bannerboy.createElement({id: "ribbon_8", backgroundImage: "ribbon_8.png", left: 36, top: 4, width: 25, height: 19, retina: true, parent: ribbon_back});
				var ribbon_9 = bannerboy.createElement({id: "ribbon_9", backgroundImage: "ribbon_9.png", left: 36, top: 1, width: 38, height: 34, retina: true, parent: ribbon_back});
				var ribbon_10 = bannerboy.createElement({id: "ribbon_10", backgroundImage: "ribbon_10.png", top: 1, width: 74, height: 36, retina: true, parent: ribbon_back});
			var txt_5_1 = bannerboy.createElement({id: "txt_5_1", backgroundImage: "txt_5_1.png", left: 57, top: 14, width: 188, height: 153, retina: true, parent: txt_5});
			var ribbon_front = bannerboy.createElement({id: "ribbon_front", left: 84, top: 150, width: 161, height: 32, parent: txt_5});
				var ribbon_4 = bannerboy.createElement({id: "ribbon_4", backgroundImage: "ribbon_4.png", left: 92, top: 1, width: 70, height: 31, retina: true, parent: ribbon_front});
				var ribbon_5 = bannerboy.createElement({id: "ribbon_5", backgroundImage: "ribbon_5.png", left: 64, width: 97, height: 32, retina: true, parent: ribbon_front});
				var ribbon_6 = bannerboy.createElement({id: "ribbon_6", backgroundImage: "ribbon_6.png", left: 36, width: 126, height: 32, retina: true, parent: ribbon_front});
				var ribbon_7 = bannerboy.createElement({id: "ribbon_7", backgroundImage: "ribbon_7.png", width: 161, height: 32, retina: true, parent: ribbon_front});
			var txt_5_2_container = bannerboy.createElement({id: "txt_5_2_container", left: 55, top: 150, width: 191, height: 32, parent: txt_5});
				var ribbon = bannerboy.createElement({id: "ribbon", backgroundImage: "ribbon.png", width: 191, height: 32, retina: true, parent: txt_5_2_container});
				var txt_5_2 = bannerboy.createElement({id: "txt_5_2", backgroundImage: "txt_5_2.png", width: 191, height: 32, retina: true, parent: txt_5_2_container});
		var txt_4 = bannerboy.createElement({id: "txt_4", left: 95, top: 135, width: 138, height: 24, parent: banner});
			var txt_4_1 = bannerboy.createElement({id: "txt_4_1", backgroundImage: "txt_4_1.png", width: 24, height: 24, retina: true, parent: txt_4});
			var txt_4_2 = bannerboy.createElement({id: "txt_4_2", backgroundImage: "txt_4_2.png", left: 34, width: 104, height: 23, retina: true, parent: txt_4});
		var txt_3 = bannerboy.createElement({id: "txt_3", left: 30, top: 338, width: 113, height: 40, parent: banner});
			var txt_3_1 = bannerboy.createElement({id: "txt_3_1", backgroundImage: "txt_3_1.png", width: 113, height: 40, retina: true, parent: txt_3});
		var txt_2 = bannerboy.createElement({id: "txt_2", left: 69, top: 244, width: 184, height: 46, parent: banner});
			var txt_2_2 = bannerboy.createElement({id: "txt_2_2", backgroundImage: "txt_2_2.png", top: 18, width: 184, height: 28, retina: true, parent: txt_2});
			var txt_2_1 = bannerboy.createElement({id: "txt_2_1", backgroundImage: "txt_2_1.png", left: 49, width: 87, height: 16, retina: true, parent: txt_2});
		var txt_1 = bannerboy.createElement({id: "txt_1", left: 29, top: 33, width: 244, height: 84, parent: banner});
			var txt_1_1 = bannerboy.createElement({id: "txt_1_1", backgroundImage: "txt_1_1.png", left: 54, width: 43, height: 17, retina: true, parent: txt_1});
			var txt_1_2 = bannerboy.createElement({id: "txt_1_2", backgroundImage: "txt_1_2.png", left: 100, width: 90, height: 21, retina: true, parent: txt_1});
			var txt_1_3 = bannerboy.createElement({id: "txt_1_3", backgroundImage: "txt_1_3.png", top: 24, width: 104, height: 26, retina: true, parent: txt_1});
			var txt_1_4 = bannerboy.createElement({id: "txt_1_4", backgroundImage: "txt_1_4.png", left: 108, top: 24, width: 136, height: 26, retina: true, parent: txt_1});
			var txt_1_5 = bannerboy.createElement({id: "txt_1_5", backgroundImage: "txt_1_5.png", left: 10, top: 58, width: 53, height: 26, retina: true, parent: txt_1});
			var txt_1_6 = bannerboy.createElement({id: "txt_1_6", backgroundImage: "txt_1_6.png", left: 69, top: 58, width: 164, height: 26, retina: true, parent: txt_1});
		var logo_bottom = bannerboy.createElement({id: "logo_bottom", backgroundImage: "logo_bottom.png", bottom: 0, retina: true, parent: banner});

		/* eslint-enable indent */

		/* Adjust
		================================================= */

		var earth = new Earth();
		var clouds = [new Cloud(bannerboy.image_cache["cloud_1.png"]), new Cloud(bannerboy.image_cache["cloud_2.png"])];
		var train = new Train();
		var rails = new Rails();
		var ribbon = new Ribbon();

		var shadows = [
			new Shadow(lion, {rotation: -15}),
			new Shadow(pos_lion, {rotation: -15}),
			new Shadow(pos_dragon, {top: 10, opacity: 0.5}),
			new Shadow(pos_dancers_america, {opacity: 0.5, top: "50%", rotation: -15}),
			new Shadow(dancers_america, {opacity: 0.5, top: "50%", rotation: -15}),
			new Shadow(pos_dancers_africa, {top: "50%", scaleX: 0.7, scaleY: 0.3, opacity: 0.6}),
			new Shadow(el_bison, {top: "20%", rotation: -30, opacity: 0.8}),
		]

		// Set text's transform origins
		TweenMax.set(txt_1, {transformOrigin: "center " + (height/2) + "px"})
		TweenMax.set(txt_2, {transformOrigin: "right center"})
		TweenMax.set(txt_3, {transformOrigin: "center " + (height/2) + "px"})
		TweenMax.set(txt_4, {transformOrigin: "75% center"})
		TweenMax.set(txt_5, {transformOrigin: "center " + (height/2) + "px"})

		TweenMax.set(clouds[0], matchPosition(clouds[0], pos_cloud_1))
		TweenMax.set(clouds[1], matchPosition(clouds[1], pos_cloud_2))

		// Create place holder images inside the globe for the scaled images
		var high_res_lion = bannerboy.createElement({backgroundImage: "lion.png", parent: pos_lion})
		var high_res_dragon = bannerboy.createElement({backgroundImage: "dragon.png", parent: pos_dragon})
		var high_res_dancers_america = bannerboy.createElement({backgroundImage: "dancers_america.png", parent: pos_dancers_america})
		var high_res_dancers_africa = bannerboy.createElement({backgroundImage: "dancers_africa.png", parent: pos_dancers_africa})
		TweenMax.set(high_res_lion, {scale: pos_lion.get("width") / high_res_lion.get("width"), transformOrigin: "top left"});
		TweenMax.set(high_res_dragon, {scale: pos_dragon.get("width") / high_res_dragon.get("width"), transformOrigin: "top left"});
		TweenMax.set(high_res_dancers_america, {scale: pos_dancers_america.get("width") / high_res_dancers_america.get("width"), transformOrigin: "top left"});
		TweenMax.set(high_res_dancers_africa, {scale: pos_dancers_africa.get("width") / high_res_dancers_africa.get("width"), transformOrigin: "top left"});

		// TweenMax.set(lion, {left: "+=15"})
		// TweenMax.set(lion, matchPosition(lion, pos_lion))
		TweenMax.set(lion, {opacity: 0})
		TweenMax.set(dancers_africa, {opacity: 0})

		TweenMax.set(dragon, {opacity: 0})
		TweenMax.set(pos_dragon, {x: 30, y: -40, scale: 1, rotation: 15})

		TweenMax.set(dancers_america, {opacity: 0})
		TweenMax.set(pos_dancers_america, {top: "-=70"})

		/* Animation
		================================================= */

		// var zooms = [
		// 	{x: -140, y: -260, scale: 2.1, rotation: 0},
		// 	{x: -130, y: 120, scale: 2, rotation: -15},
		// 	{x: 220, y: -310, scale: 2.35, rotation: 3},
		// ]
		var zooms = [
			{x: -135, y: -250, scale: 1.99, rotation: 0},
			{x: -100, y: 50, scale: 1.99, rotation: -15},
			{x: 175, y: -290, scale: 1.99, rotation: 3},
		]
		var zoom_speed = 1.5

		function frame_1() {
			return new BBTimeline()
				.fromTo(train, 4, {rotation: -60}, {rotation: 30, ease: Power0.easeNone})
				.from(txt_1_1, 0.5, {y: 50, opacity: 0, ease: Power2.easeOut})
				.offset(0.1)
				.from(txt_1_2, 0.5, {y: 50, opacity: 0, ease: Power2.easeOut})
				.offset(0.8)
				.from(txt_1_3, 0.5, {y: 50, opacity: 0, ease: Power2.easeOut})
				.offset(0.1)
				.from(txt_1_4, 0.5, {y: 50, opacity: 0, ease: Power2.easeOut})
				.offset(0.8)
				.from(txt_1_5, 0.5, {y: 50, opacity: 0, ease: Power2.easeOut})
				.offset(0.1)
				.from(txt_1_6, 0.5, {y: 50, opacity: 0, ease: Power2.easeOut})
		}

		function frame_2() {
			return new BBTimeline()
				.to([globe, txt_1], zoom_speed, zooms[0])
				.offset(0.8)
				.from(txt_2_1, 0.3, {y: -20, opacity: 0})
				.from(txt_2_2, 0.3, {y:  20, opacity: 0})
		}

		function frame_3() {
			var relative_zoom = {
				x: (zooms[1].x - zooms[0].x) < 0 ? "-=" + Math.abs(zooms[1].x - zooms[0].x) : "+=" + (zooms[1].x - zooms[0].x),
				y: (zooms[1].y - zooms[0].y) < 0 ? "-=" + Math.abs(zooms[1].y - zooms[0].y) : "+=" + (zooms[1].y - zooms[0].y),
				rotation: (zooms[1].rotation - zooms[0].rotation) < 0 ? "-=" + Math.abs(zooms[1].rotation - zooms[0].rotation) : "+=" + (zooms[1].rotation - zooms[0].rotation)
			};

			return new BBTimeline()
				// .to(el_bird, 0.01, {scale: .5})
				.to(txt_2, zoom_speed, relative_zoom)
				.to(txt_2, zoom_speed / 2, {opacity: 0})
				.to(pos_dancers_africa, zoom_speed, {scale: .75, rotation: 15})
				.from(txt_3, zoom_speed, {x: zooms[0].x - zooms[1].x, y: zooms[0].y - zooms[1].y, rotation: zooms[0].rotation - zooms[1].rotation, opacity: -5})
				.to(globe, zoom_speed, zooms[1])
				.to(el_butterfly, zoom_speed, {scale: .7})
				.to(train, 4, {rotation: 120, ease: Power0.easeNone})
		}

		function frame_4() {
			var relative_zoom = {
				x: (zooms[2].x - zooms[1].x) < 0 ? "-=" + Math.abs(zooms[2].x - zooms[1].x) : "+=" + (zooms[2].x - zooms[1].x),
				y: (zooms[2].y - zooms[1].y) < 0 ? "-=" + Math.abs(zooms[2].y - zooms[1].y) : "+=" + (zooms[2].y - zooms[1].y),
				rotation: (zooms[1].rotation - zooms[0].rotation) < 0 ? "-=" + Math.abs(zooms[1].rotation - zooms[0].rotation) : "+=" + (zooms[1].rotation - zooms[0].rotation)
			};

			return new BBTimeline()
				.to(pos_dancers_africa, zoom_speed, resetPosition())
				.to(txt_3, zoom_speed, {x: relative_zoom.x, y: relative_zoom.y, opacity: 0})
				.from(txt_4, zoom_speed, {x: zooms[1].x - zooms[2].x, y: zooms[1].y - zooms[2].y, rotation: zooms[1].rotation - zooms[2].rotation, opacity: -5})
				.to(globe, zoom_speed, zooms[2])
		}

		function frame_5() {
			var relative_zoom = {
				x: (zooms[2].x - zooms[1].x) < 0 ? "-=" + Math.abs(zooms[2].x - zooms[1].x) : "+=" + (zooms[2].x - zooms[1].x),
				y: (zooms[2].y - zooms[1].y) < 0 ? "-=" + Math.abs(zooms[2].y - zooms[1].y) : "+=" + (zooms[2].y - zooms[1].y),
			}

			return new BBTimeline()
				.to([globe, el_butterfly], zoom_speed, resetPosition())
				.to(txt_4, zoom_speed, {x: -zooms[2].x / zooms[2].scale, y: 250, scale: 1 / zooms[2].scale, opacity: 0})
				.from(txt_5, zoom_speed, {x: zooms[2].x, y: zooms[2].y, scale: zooms[2].scale, opacity: 0})
				.offset(0.5)
				.fromTo(train, 4, {rotation: -30}, {rotation: 10, ease: Power2.easeOut})
				.offset(0.5)
				.add(ribbon)
				.offset(0.5)
				.from(cta, 0.3, {opacity: 0})
				.from(cta, 0.5, {scale: .0, ease: Back.easeOut.config(1.5)})
		}


		/* Timeline
		================================================= */

		var main_tl = new BBTimeline()
			.add(frame_1())
			.offset(3)
			.add(frame_2())
			.chain(1)
			.add(frame_3())
			.offset(2.5)
			.add(frame_4())
			.chain(1.3)
			.add(frame_5())

		scrubber(main_tl);

		/* Animate during the entire banner
		================================================= */

		TweenMax.to(clouds[0], main_tl.duration(), {x: -50, ease: Power1.easeInOut});
		TweenMax.to(clouds[1], main_tl.duration(), {x: -70, ease: Power1.easeInOut});

		/* Interactions
		================================================= */

		banner.onclick = function() {
			window.open(window.clickTag);
		};

		banner.addEventListener("mouseenter", function() {
			TweenMax.to([cta_shape, cta_txt], 0.1, { y: 2});
		});

		banner.addEventListener("mouseleave", function() {
			TweenMax.to([cta_shape, cta_txt], 0.1, { y: 0});
		});

		/* Helpers
		================================================= */

		function matchPosition(source, dest) {
			source.rect = source.rect || source.getBoundingClientRect()
			dest.rect = dest.getBoundingClientRect()
			return {
				x: dest.rect.left - source.rect.left - source.rect.width / 2 + dest.rect.width / 2,
				y: dest.rect.top - source.rect.top - source.rect.height / 2 + dest.rect.height / 2,
				scale: dest.rect.width / source.rect.width,
				ease: Power2.easeInOut,
			}
		}

		function resetPosition() {
			return {x: 0, y: 0, scale: 1, rotation: 0};
		}

		function Ribbon() {
			var frames = [
				[ribbon_0],
				[ribbon_1],
				[ribbon_2],
				[ribbon_3],
				[ribbon_3, ribbon_4],
				[ribbon_3, ribbon_5],
				[ribbon_3, ribbon_6],
				[ribbon_3, ribbon_7],
				[ribbon_3, ribbon],
				[ribbon_3, ribbon_8],
				[ribbon_3, ribbon_9],
				[ribbon_3, ribbon_10],
			]

			var erase = [
				null,
				null,
				null,
				null,
				null,
				ribbon_0,
				ribbon_1,
			]

			TweenMax.set(frames, {opacity: 0})
			TweenMax.set(ribbon, {opacity: 0})

			var tl = new BBTimeline()

			for (var i = 0; i < frames.length; i++) {
				tl
					.offset(1 / 25)
					.to(frames[i], 0.1, {opacity: 1});
				if (erase[i])
					tl.to(erase[i], 0.1, {opacity: 0})
			}

			tl.chain(-0.2)
				.from(txt_5_2, .2, {x: 10, opacity: 0, ease: Power0.easeNone})

			return tl;
		}

		function Shadow(parent, args) {
			var canvas = new Canvas(parent.get("width"), parent.get("width"), parent);
			var context = canvas.getContext("2d");
			var gradient = context.createRadialGradient(parent.get("width") * 0.5, parent.get("width") * 0.5, 0, parent.get("width") * 0.5, parent.get("width") * 0.5, parent.get("width") * 0.5);

			gradient.addColorStop(0, "rgba(0, 0, 0, 0.5)");
			gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

			context.fillStyle = gradient;
			context.fillRect(0, 0, parent.get("width"), parent.get("width"));

			args = args || {};
			args.scaleY = args.scaleY || 0.3;
			args.top = args.top || parent.get("height") * 0.6;

			TweenMax.set(canvas, args);

			return canvas;
		}

		function Train() {
			var angle = 18.5;
			var origin = [180 * 1.1, 650 * 1.3];
			var mask = bannerboy.createElement({id: "train", width: "100%", height: "60%", overflow: "hidden", parent: globe, insertAfter: bg_city})
			var container = bannerboy.createElement({id: "train", width: 1, height: 1, left: 200, top: 400, scale: 0.283, parent: mask});

			for (var i = 0; i < 6; i++) {
				var section = bannerboy.createElement({backgroundImage: "train.png", left: -origin[0], top:-origin[1], retina: true, transformOrigin: origin[0] + "px " + origin[1] + "px", rotation: -i * angle, parent: container});
			}

			return container;
		}

		function Rails() {
			var angle = 24.8;
			var mask = bannerboy.createElement({id: "rails", width: "100%", height: "60%", overflow: "hidden", parent: globe, insertAfter: bg_city})
			var container = bannerboy.createElement({width: 1, height: 1, left: 200, top: 400, scale: 0.48, parent: mask});

			for (var i = 0; i < 360; i+= angle) {
				var section = bannerboy.createElement({backgroundImage: "rail.png", left: 208, top: -414, retina: true, transformOrigin: "-208px 414px", rotation: i, parent: container});
			}

			return container;
		}

		function Cloud(img) {
			var canvas = new Canvas(img.width, img.height, globe);
			var context = canvas.getContext("2d");
			var gradient = context.createLinearGradient(0, 0, 0, img.height);
			TweenMax.set(canvas, {opacity: 0.5, top: 0, left: 0});

			context.drawImage(img, 0, 0, img.width, img.height);
			context.globalCompositeOperation = 'source-in';

			gradient.addColorStop(0, "rgba(255, 191, 242, 1)");
			gradient.addColorStop(1, "rgba(0, 94, 255, 0.5)");

			context.fillStyle = gradient;
			context.fillRect(0, 0, img.width, img.height);

			return canvas;
		}

		function Earth() {
			var diameter = 380;
			var container = bannerboy.createElement({id: "earth", width: diameter, height: diameter, left: 10, top: 196, borderRadius: diameter, overflow: "hidden", parent: globe, insertAfter: bg_city});
			var canvas = new Canvas(diameter, diameter, container);
			var context = canvas.getContext("2d");
			var gradient = context.createLinearGradient(0, 0, 0, diameter);
			gradient.addColorStop(0, "#64a5d6");
			gradient.addColorStop(1, "#3d6cac");
			context.fillStyle = gradient;
			context.fillRect(0, 0, diameter, diameter);

			var earth_img = bannerboy.createElement({backgroundImage: "earth.png", width: diameter, height: diameter, left: 0, top: 0, parent: container});

			return container;
		}

		function Background() {
			var canvas = new Canvas();
			var context = canvas.getContext("2d");
			var gradient = context.createLinearGradient(0, 0, 0, height);
			var grain = 0.3;
			var saturation = 0.8;
			var darker = 0.82;

			gradient.addColorStop(0.0000, "#ecd1e5");
			gradient.addColorStop(0.0266, "#ecd1e5");
			gradient.addColorStop(0.2220, "#7fc4ec");
			gradient.addColorStop(0.6873, "#88bed6");
			gradient.addColorStop(1.0000, "#9977a5");

			context.fillStyle = gradient;
			context.fillRect(0, 0, width, height);

			var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
			var data = imageData.data;
			for (var i = 0; i < data.length; i += 4) {
				// Add grain
				var pixelgrain = ~~(Math.random() * 60) * grain;
				data[i]     = data[i] - pixelgrain;     // red
				data[i + 1] = data[i + 1] - pixelgrain; // green
				data[i + 2] = data[i + 2] - pixelgrain; // blue

				// Add Saturation
		        var gray = 0.2989 * data[i] + 0.5870 * data[i + 1] + 0.1140 * data[i + 2]; //weights from CCIR 601 spec
		        data[i] = -gray * saturation + data[i] * (1 + saturation);
		        data[i + 1] = -gray * saturation + data[i + 1] * (1 + saturation);
		        data[i + 2] = -gray * saturation + data[i + 2] * (1 + saturation);

				// Make darker
				data[i]     = data[i] * darker;     // red
				data[i + 1] = data[i + 1] * darker; // green
				data[i + 2] = data[i + 2] * darker; // blue
			}
			context.putImageData(imageData, 0, 0);

			return canvas;
		}

		function Canvas(w, h, parent) {
			var canvas = document.createElement("canvas");
			canvas.width = w || width
			canvas.height = h || height
			TweenMax.set(canvas, {position: "absolute"});

			if (window.devicePixelRatio && window.devicePixelRatio >= 2) {
				canvas.style.width = canvas.width + "px";
				canvas.width = canvas.width * 2;
				canvas.style.height = canvas.height + "px";
				canvas.height = canvas.height * 2;
				canvas.getContext('2d').scale(2, 2);
			}
			(parent || banner).appendChild(canvas)
			return canvas
		}

		/* Scrubber
		================================================= */

		function scrubber(tl) {
			if (window.location.origin == "file://" || window.location.hostname == "localhost") {
				bannerboy.include(["../../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	});
};
