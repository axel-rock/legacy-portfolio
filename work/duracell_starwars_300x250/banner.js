var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, backgroundColor: "#000", overflow: "hidden", cursor: "pointer", parent: document.body});
	
	var images = [
		"background.jpg", 
		"kid.png", 
		"battery.png", 
		"battery_light.png", 
		"battery_blur.png", 
		"battery_glow.png", 
		"txt_2_line.png", 
		"txt_2.png", 
		"txt_1_1.png", 
		"txt_1_2.png", 
		"txt_1_3.png", 
		"txt_1_shade.png", 
		"copper_top.jpg", 
		"battery_small.png", 
		"legal.png", 
		"logo_starwars_rogueone.png", 
		"logo_duracell.png", 
		"copper_left.jpg", 
	];

	bannerboy.preloadImages(images.concat(starwars_images), function() {

		/* Create elements
		================================================= */

		var background = bannerboy.createElement({backgroundImage: "background.jpg", bottom: 0, retina: true, parent: banner});
		var death_star_container = bannerboy.createElement({left: -11, top: 20, width: 169, height: 155, parent: banner});
		var space = bannerboy.createElement({width: width, height: height, perspective: 500, perspectiveOrigin: '65% 45%', parent: banner}) // perspective origin defines where the fighters come from
		var copper_top = bannerboy.createElement({backgroundImage: "copper_top.jpg", parent: banner});
		var kid = bannerboy.createElement({backgroundImage: "kid.png", bottom: 0, retina: true, parent: banner});
		var walker_head_container = bannerboy.createElement({left: 179,  bottom: 85, width: 45, height: 36, parent: kid});
		var battery_container = bannerboy.createElement({left: 20, top: -12, width: 98, height: 262, parent: banner});
			var battery = bannerboy.createElement({backgroundImage: "battery.png", top: 25, retina: true, parent: battery_container});
			var battery_light = bannerboy.createElement({backgroundImage: "battery_light.png", top: 25, parent: battery_container});
			var battery_blur = bannerboy.createElement({backgroundImage: "battery_blur.png", top: 12, parent: battery_container});
			var battery_glow = bannerboy.createElement({backgroundImage: "battery_glow.png", left: 22, parent: battery_container});
		var txt_2_line = bannerboy.createElement({backgroundImage: "txt_2_line.png", left: 104, top: 165, retina: true, parent: banner});
		var txt_2 = bannerboy.createElement({backgroundImage: "txt_2.png", left: 92, top: 110, retina: true, parent: banner});
		var txt_1 = bannerboy.createElement({width: 222, height: 183, parent: banner});
			var txt_1_shade = bannerboy.createElement({backgroundImage: "txt_1_shade.png", opacity: 0.56, parent: txt_1});
			var txt_1_1 = bannerboy.createElement({backgroundImage: "txt_1_1.png", left: 11, top: 52, retina: true, parent: txt_1});
			var txt_1_2 = bannerboy.createElement({backgroundImage: "txt_1_2.png", left: 11, top: 72, retina: true, parent: txt_1});
			var txt_1_3 = bannerboy.createElement({backgroundImage: "txt_1_3.png", left: 12, top: 86, retina: true, parent: txt_1});
		var battery_small = bannerboy.createElement({backgroundImage: "battery_small.png", right: 14, top: 13, retina: true, parent: banner});
		var legal = bannerboy.createElement({backgroundImage: "legal.png", bottom: 0, retina: true, parent: banner});
		var logo_starwars_rogueone = bannerboy.createElement({backgroundImage: "logo_starwars_rogueone.png", right: 7, bottom: 6, retina: true, parent: banner});
		var logo_duracell = bannerboy.createElement({backgroundImage: "logo_duracell.png", left: 126, top: 119, retina: true, parent: banner});
		var copper_left = bannerboy.createElement({backgroundImage: "copper_left.jpg", parent: banner});


		battery_glow.set({top: -20})

		var battery_flash = bannerboy.createElement({backgroundImage: "battery_glow.png", left: 0, top: 50, scale: 4, opacity: 0.5, insertAfter: battery_blur, parent: battery_container});

		var death_star = new DeathStar({y: -10, scale: .7, parent: death_star_container})
		var walker = new Walker({scale: .28, parent: walker_head_container}, banner)

		var fighter_1 = new Fighter({id: 'fighter_1', left: 90, top: 40, x: 1500, y: -2500, parent: space}) // initial pos
		var fighter_2 = new Fighter({id: 'fighter_2', left: 90, top: 40, x: 1500, y: -2500, parent: space}) // initial pos
		var fighter_3 = new Fighter({id: 'fighter_3', left: 90, top: 40, x: 1500, y: -2500, parent: space}) // initial pos

		/* Initiate
		================================================= */
		
		animations();
		timeline();
		interaction();

		/* Animations
		================================================= */

		function timeline() {
			var tl = new BBTimeline()
				// Frame 1 in
				.from(copper_left, .7, {x: -width/2, ease: Power2.easeInOut})
				.offset(.2)
				.from(logo_duracell, .8, {x: -width, ease: Power3.easeInOut})

				// Frame 1 out
				.chain(1)
				.to(logo_duracell, .5, {x: -width, ease: Back.easeIn.config(1)})
				.offset(0.26)
				.to(copper_left, .28, {x: -width/2, ease: Power2.easeIn})

				// Frame 2 in
				.chain()
				.fromTo(copper_top, .6, {y: -copper_top.get('height')}, {y: -12, ease: Power2.easeInOut})
				.from([background, kid], .5, {opacity: 0, ease: Power2.easeIn})
				.offset(.2)
				.from(battery_small, .8, {y: -battery_small.get('height'), opacity: 0, ease: Back.easeOut.config(1)})
				.offset(.5)
				.staggerFrom(txt_1.childNodes, .9, {opacity: 0, ease: Power2.easeInOut}, .1)
				.from([legal, logo_starwars_rogueone], .5, {opacity: 0})
				.add(death_star.tl)
				.offset(3)
				.call(walker.shoot, null, walker)
				.offset(1)
				.call(walker.shoot, null, walker)
				.add(fighter_1.tl)
				.offset(.4)
				.add(fighter_2.tl)
				.add(fighter_3.tl)
				.offset(2)
				.call(walker.shoot, null, walker)
				.offset(1.2)
				.call(walker.shoot, null, walker)

				// Frame 2 out
				.end(1)
				.to(battery_small, .8, {y: -battery_small.get('height'), opacity: 0, ease: Back.easeIn})
				.offset(.4)
				.to([background, death_star_container, kid, space, legal, txt_1, logo_starwars_rogueone], .5, {opacity: 0})

				// Frame 3 in
				.chain()
				.to(copper_top, .7, {y: 0, ease: Back.easeInOut})
				.add(battery.tl_in)
				.offset(.3)
				.from(txt_2, .5, {opacity: 0})
				.offset(.2)
				.from(txt_2_line, .5, {opacity: 0, scale: .5})

			scrubber(tl)
		}

		function animations() {
			// battery
			battery.tl_fall = new BBTimeline()
				.from(battery_container, 0.3, {y: -400, ease: Power3.easeIn})
				.chain()
				.to(battery_container, 0.05, {scaleY: 0.98, ease: Power2.easeOut})
				.chain()
				.to(battery_container, 0.2, {scaleY: 1, ease: Power2.easeInOut});

			battery.tl_glow = new BBTimeline()
				.from(battery_glow, 0.5, {scale: 0, ease: Power4.easeInOut})
				.offset(0.22)
				.from(battery_glow, 1.5, {y: 175, ease: Power4.easeOut})
				.offset(0.1)
				.to(battery_glow, 0.7, {scaleX: 0, ease: Power2.easeIn})
				.offset(0.1)
				.to(battery_glow, 0.6, {scaleY: 0.2, ease: Power2.easeIn});

			battery.tl_effects = new BBTimeline()
				.from(battery_light, 0.2, {opacity: 0, ease: Power4.easeIn})
				.chain(-0.1)
				.from(battery_blur, 0.2, {scaleY: 0.5, opacity: 0, ease: Power2.easeOut})
				.chain()
				.to(battery_light, 0.5, {opacity: 0, ease: Power2.easeOut})
				.to(battery_blur, 0.3, {scaleY: 0.8, opacity: 0, ease: Power2.easeIn})

			battery.tl_flash = new BBTimeline()
				.from(battery_flash, 0.15, {y: -100, scale: 2.5, opacity: 0, ease: Power2.easeOut})
				.chain()
				.to(battery_flash, 0.4, {scale: 1, opacity: 0, ease: Power2.easeInOut});

			battery.tl_in = new BBTimeline()
				.add(battery.tl_fall)
				.offset(0.16)
				.add(battery.tl_glow)
				.offset(0.01)
				.add(battery.tl_effects)
				.offset(0.1)
				.add(battery.tl_flash);

			fighter_1.tl = new BBTimeline()
				.from(fighter_1, .4, {opacity: 0})
				.fromTo(fighter_1, 4, {z: -150000, rotationX: -40, rotationY: -45}, {z: 1000, rotationX: -5, rotationY: 10})
				.to(fighter_1, 4, {bezier: {curviness: 1.25, values: [
					{x: 1000, y: 150},
					{x: 250, y: 10} // destination position
				], autoRotate: 140}, ease: Power3.easeOut}) // autoRotate value here fixes the fighter's rotation at en position
				.chain(-1)
				.to(fighter_1, 1, {rotationX: 10, rotationY: 40, ease: Power1.easeIn}) // final orientation move

			fighter_2.tl = new BBTimeline()
				.timeScale(.95)
				.from(fighter_2, .4, {opacity: 0})
				.fromTo(fighter_2, 3, {z: -100000, rotationX: -40, rotationY: 30}, {z: 1000, rotationX: 10, rotationY: -10})
				.to(fighter_2, 3, {bezier: {curviness: 1.25, values: [
					{x: 2000, y: -2500},
					{x: 3000, y: -300},
					{x: 500, y: -60} // destination position
				], autoRotate: 180}, ease: Power3.easeOut}) // autoRotate value here fixes the fighter's rotation at en position
				.chain(-1.5)
				.to(fighter_2, 1.5, {rotationX: 20, rotationY: 60, ease: Power1.easeIn}) // final orientation move

			fighter_3.tl = new BBTimeline()
				.from(fighter_3, .4, {opacity: 0})
				.fromTo(fighter_3, 2.5, {z: -150000, rotationX: -40, rotationY: -45}, {z: 1000, rotationX: 20, rotationY: 0})
				.to(fighter_3, 2.5, {bezier: {curviness: 1.25, values: [
					{x: 1000, y: -1000},
					{x: 500, y: 150},
					{x: 400, y: -40} // destination position
				], autoRotate: 100}, ease: Power3.easeOut}) // autoRotate value here fixes the fighter's rotation at en position
				.chain(-1)
				.to(fighter_3, 1, {rotationX: 30, rotationY: 25, ease: Power1.easeIn}) // final orientation move
		}

		/* Interactions
		================================================= */

		function interaction() {
			banner.addEventListener("click", function() {
				window.open(window.clickTag, "_blank");
			})

			banner.addEventListener("mouseenter", function() {
				walker.shoot()
			})
		}

		/* Helpers
		================================================= */

		/* Scrubber
		================================================= */

		function scrubber(tl) {
			if (window.location.origin == "file://") {
				bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	});
};