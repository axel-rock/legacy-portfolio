var bannerboy = bannerboy || {};
bannerboy.main = function() {

	// banner settings
	var width = 300;
	var height = 250;
	var polite = false, visible = true, loop = 1, tl = new BBTimeline({paused: true});

	// create main container
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, backgroundColor: "#000000", overflow: "hidden", parent: document.body});

	var images = [
		"cta_txt.png", 
		"cta_arrow.png", 
		"delimiter.png", 
		"logo.png", 
		"txt_1_2.png", 
		"txt_1_1.png", 

		"shoe_dark.jpg", 
		"shoe_light.jpg", 

		"shine_1.png", 
		"shine_2.png", 
		"shine_3.png", 
		"shine_4.png", 
		"shine_5.png", 
		"shine_6.png", 
		"shine_7.png", 
		"shine_8.png", 
		"shine_9.png", 
		"shine_10.png", 
		"shine_11.png", 
		"shine_12.png", 
		"shine_13.png", 
		"shine_14.png", 
		"shine_15.png", 

		"glow_1.png", 
		"glow_2.png", 
		"glow_3.png", 

	];

	function onPolite(){
		bannerboy.preloadImages(images, function() {

			///////////////////////
			// C R E A T E  D I V S

			var converse = new Converse({parent: banner});

			var cta = bannerboy.createElement({left: 166, top: 216, width: 85, height: 11, parent: banner});
				var cta = bannerboy.createElement({width: 85, height: 11, parent: cta});
					var cta_txt = bannerboy.createElement({backgroundImage: "cta_txt.png", retina: true, parent: cta});
					var cta_arrow = bannerboy.createElement({backgroundImage: "cta_arrow.png", left: 82, top: 3, retina: true, parent: cta});
			var delimiter = bannerboy.createElement({backgroundImage: "delimiter.png", left: 150, top: 211, retina: true, parent: banner});
			var logo = bannerboy.createElement({backgroundImage: "logo.png", left: 38, top: 215, retina: true, parent: banner});
			var txt_1_2 = bannerboy.createElement({backgroundImage: "txt_1_2.png", left: 77, top: 35, retina: true, parent: banner});
			var txt_1_1 = bannerboy.createElement({backgroundImage: "txt_1_1.png", left: 32, top: 17, retina: true, parent: banner});

			////////////////
			// A N I M A T E

			tl
			.add(converse.tl)
			.chain(0)
			.from(txt_1_1, .75, {opacity: 0})
			.chain(-.25)
			.from(txt_1_2, .75, {opacity: 0})
			.chain(1)
			.from(logo, .75, {opacity: 0})
			.delay(.15)
			.from(delimiter, .75, {opacity: 0, x: -10, scaleY: 0})
			.delay(.15)
			.from(cta, .75, {opacity: 0})
			.delay(0)
			.from(cta_arrow, .75, {opacity: 0, x: -30, ease: Power3.easeOut})
			// loopStop
			.chain(3)
			.call(function(){
				if(loop--<=0)
					tl.pause()
			})
			.chain()
			.staggerTo([txt_1_1, txt_1_2, logo, delimiter, cta, converse], .75, {opacity: 0, ease: Power2.easeIn}, .1)
			.chain()
			.call(function(){
				tl.play(0)
			})

			polite = true;
			if(visible)
				tl.resume();
		});
	}

	function Converse(parameters){
		parameters.width = 300;
		parameters.height = 250;
		var container = bannerboy.createElement(parameters)
		var shoe_dark = bannerboy.createElement({backgroundImage: "shoe_dark.jpg", retina: true, parent: container});
		var shoe_light = bannerboy.createElement({backgroundImage: "shoe_light.jpg", retina: true, parent: container});

		var shine = container.shine = [
			bannerboy.createElement({backgroundImage: "shine_1.png", left: 249, top: 151, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_2.png", left: 221, top: 150, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_3.png", left: 189, top: 145, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_4.png", left: 192, top: 160, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_5.png", left: 174, top: 134, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_6.png", left: 153, top: 153, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_7.png", left: 133, top: 161, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_8.png", left: 106, top: 117, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_9.png", left: 150, top: 103, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_10.png", left: 82, top: 151, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_11.png", left: 104, top: 79, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_12.png", left: 91, top: 127, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_13.png", left: 50, top: 107, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_14.png", left: 61, top: 87, retina: true, parent: container}),
			bannerboy.createElement({backgroundImage: "shine_15.png", left: 39, top: 129, retina: true, parent: container}),
		]

		var glow = [
			bannerboy.createElement({backgroundImage: "glow_1.png", left: 166, top: 118, parent: container}),
			bannerboy.createElement({backgroundImage: "glow_2.png", left: 78, top: 50, parent: container}),
			bannerboy.createElement({backgroundImage: "glow_3.png", left: 4, top: 56, parent: container}),
		]

		TweenLite.set(shine, {opacity: .75})
		TweenLite.set(glow, {opacity: .5})

		////////////////
		// A N I M A T E

		shine.tl = new BBTimeline()
		.staggerFrom(shine, .5, {opacity: 0, ease: Power2.easeOut}, .1)
		.chain(-.5)
		.staggerTo(shine, .5, {opacity: 0, ease: Power2.easeOut}, .05)

		glow.tl = new BBTimeline()
		.staggerFrom(glow, 1, {opacity: 0, ease: Power2.easeOut}, .5)
		.chain(-.5)
		.staggerTo(glow, .8, {opacity: 0, ease: Power2.easeOut}, .3)

		container.tl = new BBTimeline()
		.timeScale(1.25)
		.from(shoe_dark, 3.5, {opacity: 0, ease: Power1.easeIn})
		.chain(-.5)
		.add(shine.tl)
		.add(glow.tl)
		.from(shoe_light, 2, {opacity: 0, ease: Power1.easeInOut})

		return container;
	}

	////////////
	// D E B U G

	if(window.location.origin == "file://" || window.location.protocol == "file:"){
		bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
			if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
		});
		return onPolite(), onVisible();
	} else if(window.location.hostname == "clients.bannerboy.com") {
		return onPolite(), onVisible();
	}

	////////////////////////
	// D O U B L E C L I C K

	bannerboy.dc.init({
		onInit: function() {
			banner.set({cursor: "pointer"});
			banner.onclick = function() {
				Enabler.exit("exit");
			};
		},
		onPolite: onPolite,
		onVisible: onVisible
	});		

	function onVisible(){
		visible = true;
		if(polite)
			tl.resume();
	}		
}