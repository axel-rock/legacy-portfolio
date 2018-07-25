var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 980;
	var height = 240;
	var colors = [
		'#ffcd00',
		'#059b41',
		'#00c3ff',
		'#0f5ab8',
		'#9f63dc',
		'#ff54aa',
		'#ff2c1e',
	];
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, backgroundColor: "#000", overflow: "hidden", cursor: "pointer", parent: document.body});
	var tl = new BBTimeline();

	// Nested 3d doesn't work on IE <= 11
	var ie = -1;
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			ie = parseFloat( RegExp.$1 );
	}
	else if (navigator.appName == 'Netscape'){
		var ua = navigator.userAgent;
		var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
			ie = parseFloat( RegExp.$1 );
	}
	ie = ie < 0 ? false : ie;

	var images = [
		"earth.jpg",
		"butterfly.png",
		"butterfly_1.png",
		"butterfly_2.png",
		"butterfly_shadow.png",
		"butterfly_1_shadow.png",
		"butterfly_2_shadow.png",
		"logo.png",
		"txt_2.png",
		"line.png",
		"txt_1.png",
	];

	bannerboy.preloadImages(images, function() {

		/* Create elements
		================================================= */

		var earth_container = bannerboy.createElement({left: -2193, top: -6, width: 5351, height: 5149, parent: banner});
			var earth = bannerboy.createElement({backgroundImage: "earth.jpg", left: 2142, width: 1407, height: 816, parent: earth_container});
		var line = bannerboy.createElement({backgroundImage: "line.png", top: 101, scaleY: 1, centerHorizontal: true, retina: true, parent: banner});
		var txt_2 = bannerboy.createElement({backgroundImage: "txt_2.png", top: 121, centerHorizontal: true, retina: true, parent: banner});
		var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", top: 45, centerHorizontal: true, retina: true, parent: banner});
		var dots = bannerboy.createElement({left: 441, top: 221, width: 100, height: 8, parent: banner});
		var logo = bannerboy.createElement({/*backgroundImage: "logo.png", */left: 389, top: 180, width: 200, height: 45, retina: true, parent: banner});
		logo.innerHTML = '<svg id="svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs>Using feColorMatrix for Tint FX</defs><!--<filter id="hue1"><feColorMatrix id="hue1feColorMatrix" in="SourceGraphic" type="hueRotate" values="0"/></filter>--><filter id="hue1" x="0" y="0"><feGaussianBlur id="hue1feGaussianBlur" in="SourceGraphic" stdDeviation="0" /></filter><image id="logo" xlink:href="logo.png" width="" height="" filter="url(#hue1)" /></svg>';
		TweenLite.set("#logo", {left: 389, top: 175, attr:{width: 200, height: 45}});
		
		// if(!ie)
			var butterfly = new Butterfly({id: "butterfly", left: 119, top: 17, scale: .4, parent: banner});


		dots.elements = [];
		for (var i = 0; i < colors.length; i++) {
			dots.elements.push(bannerboy.createElement({width: 8, height: 8, rotation: 45, left: 15 * i, backgroundColor: colors[i], borderRadius: 5, parent: dots}));
		}

		/* Initiate
		================================================= */

		animations();
		timeline();
		interaction();

		/* Animations
		================================================= */

		function timeline() {
			tl
			.add(earth.tl)
			.offset(1)
			.from(txt_1, 2.5, {opacity: 0, y: 10, ease: Power2.easeOut})

			if (ie) {
				tl
				.offset()
				.from(butterfly, 2.5, {opacity: 0, y: 10, ease: Power2.easeOut})
			}
			
			tl
			.chain(-1.5)
			.staggerFrom([txt_2, line], 1, {opacity: 0, scale: .95, ease: Power2.easeOut}, .3)
			.offset(.6)
			.add(logo.tl)
			.chain()
			.call(activeHover)

			if(!ie)
				tl.add(butterfly.tl)

			// scrubber(tl);
		}

		function animations() {
			// add animations that will go into main_tl here
			earth.tl = new BBTimeline()
			.from(earth_container, 15, {rotationZ: -1.5, ease: Power1.easeOut})

			logo.tl = new BBTimeline()
			.from(logo, .7, {opacity: 0, scale: .95, ease: Power2.easeOut})
			.offset(.2)
			.from("#hue1feGaussianBlur", .5, { attr: {"stdDeviation": 3}, ease: Power2.easeOut})
			.chain(.3)
			.staggerFrom(dots.elements, .15, {opacity: 0}, .05)
			.offset(.1)
			.staggerFrom(dots.elements, .15, {scaleX: 0, ease: Power1.easeInOut}, .05)

			logo.flip = new BBTimeline({paused: true})
			.staggerTo(dots.elements, .15, {scaleX: 0, ease: Power1.easeIn}, .05)
			.offset(.15)
			.staggerTo(dots.elements, .15, {scaleX: 1, ease: Power1.easeOut}, .05)
			.chain(.05)
			.call(function(){
				logo.flip.pause(0);
			})

			if(ie) return;

			butterfly.start();

			butterfly.tl = new BBTimeline()
			.timeScale(2)
			.from(butterfly, 2, {scale: .85, ease: Power1.easeIn})
			.offset()
			.from(butterfly, 5, {x: -300, ease: Power1.easeOut})
			.offset(2)
			.from(butterfly.wrapper, 3, {rotationX: 75, ease: Power1.easeInOut})
			.chain(-2.5)
			.to(butterfly.wrapper, 2, {rotationY: 330, rotationX: 25, ease: Power1.easeOut})
			.chain()
			.to(butterfly.shadow, .3, {opacity: .5})
			.offset(1)
			.call(butterfly.idle)
		}

		/* Interactions
		================================================= */
		function interaction() {
			// click logic goes here
			banner.onclick = function() {
				window.open(window.clickTag);
			};
		}
				/* Helpers
		================================================= */

		function activeHover() {
			banner.addEventListener('mouseenter', function(){
				logo.flip.resume();
			})

			banner.addEventListener('mouseleave', function(){
				logo.flip.resume();
			})
		}


		/* Scrubber
		================================================= */
		function scrubber(tl) {
			if (window.location.origin == "file://" || window.location.protocol == "file:") {
				bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	});
};