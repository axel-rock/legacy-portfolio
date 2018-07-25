var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var colors = {
		blue: "#83cbc4",
		white: "#eae4d3",
		red: "#ad3c2a",
		orange: "#f9c973",
	}
	var browser = detectBrowser();
	var version = detectIE();
	var ie9 = version && version < 10;
	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({id: "banner", transformStyle: "preserve-3d", width: width, height: height, backgroundColor: colors.blue, overflow: "hidden", border: "solid 1px #000", boxSizing: "border-box", cursor: "pointer", parent: document.body});
	var tl = new TimelineLite({paused: true});
	var loaded, visible = false;

	var images = [
		"background.jpg",
		"txt_3.png", 
		"txt_2.png", 
		"txt_1.png", 
		"logo.png", 
		"cta_txt.png", 
		"cta_txt_hover.png", 
	];

	function onPolite(){
		bannerboy.preloadImages(images, function(){

			///////////////////////////////
			// C R E A T E  E L E M E N T S

			var drone = new Drone();

			// easy way to move the drone for formats
			// drone.set({x: 15, y: 40, scale: 1.3})

			var txt_3 = bannerboy.createElement({backgroundImage: "txt_3.png", top: 99, retina: true, parent: banner});
			var txt_2 = bannerboy.createElement({backgroundImage: "txt_2.png", top: 35, retina: true, parent: banner});
			var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", top: 35, retina: true, parent: banner});
			var logo = bannerboy.createElement({backgroundImage: "logo.png", top: 77, retina: true, parent: banner});
			var cta = bannerboy.createElement({border: "solid 2px #ad3b29", boxSizing: "border-box", top: 183, width: 121, height: 34, parent: banner});
				var cta_txt = bannerboy.createElement({backgroundImage: "cta_txt.png", retina: true, parent: cta});
				var cta_txt_hover = bannerboy.createElement({backgroundImage: "cta_txt_hover.png", retina: true, opacity: 0, parent: cta});

			txt_1.centerHorizontal();
			txt_2.centerHorizontal();
			txt_3.centerHorizontal();
			logo.centerHorizontal();
			cta.centerHorizontal();
			cta_txt.centerHorizontal();
			cta_txt.centerVertical();
			cta_txt_hover.centerHorizontal();
			cta_txt_hover.centerVertical();

			////////////////////
			// A N I M A T I O N

			tl
			.from(txt_1, .4, {opacity: 0, ease: Power2.easeIn}, "+=.5")
			.to(txt_1, .4, {opacity: 0, ease: Power2.easeOut}, "+=1.5")
			.add(drone.in, "-=.3")
			.from(txt_2, .4, {opacity: 0, ease: Power2.easeIn}, "-=.3")
			.staggerTo([txt_2, drone], .4, {opacity: 0, ease: Power2.easeOut}, .2, "+=2")
			.from(txt_3, .4, {opacity: 0, ease: Power2.easeIn}, "+=0")
			.to(txt_3, .4, {opacity: 0, ease: Power2.easeOut}, "+=2")
			.staggerFrom([logo, cta], .4, {opacity: 0, ease: Power2.easeIn}, 1, "+=0")

			loaded = true;
			if(visible) tl.play();

			////////////////////////
			// I N T E R A C T I O N

			// banner.addEventListener("mouseenter", function(){
			// 	cta.hover.resume();
			// })

			banner.addEventListener("mouseenter", function(){
				cta.to(.5, {backgroundColor: colors.red, ease: Power1.easeInOut})
				cta_txt.to(.5, {opacity: 0, ease: Power1.easeInOut})
				cta_txt_hover.to(.5, {opacity: 1, ease: Power1.easeInOut})
			})

			banner.addEventListener("mouseleave", function(){
				cta.to(.5, {backgroundColor: "transparent", ease: Power1.easeInOut})
				cta_txt.to(.5, {opacity: 1, ease: Power1.easeInOut})
				cta_txt_hover.to(.5, {opacity: 0, ease: Power1.easeInOut})
			})
		})
	}

	function Drone(){
		var propellerConstructor = ie9 ? IE9Propeller : Propeller;
		var propellerConfig = {
			width: 300,
			height: 250,
			perspective: 50000,
			animation: {
				distance: 61,
				speed: 2.5,
			},
			engine: {
				width: 12,
				height: 22,
			},
			blades: {
				width: 24,
				height: 36,
				rotation: {
					x: -65,
					y: 0,
					z: 50, 
				},
				scale: 1.2,
				transformOrigin: "11.5px 37px",
			},
			clip: {
				top: "rect(15px, 112px, 115px, -100px)",
				bottom: "rect(-100px, 112px, 15px, -100px)",
			}
		};
		var drone = bannerboy.createElement({backgroundImage: "background.jpg", retina: true, parent: banner});
			var drawing = bannerboy.createElement({innerHTML: svg.drone, left: 53, top: 94, parent: drone})
			drone.shell = getSVGElements(drone, "shell");
			drone.yellow = getSVGElements(drone, "yellow");
			drone.blue = getSVGElements(drone, "blue");
			drone.red = getSVGElements(drone, "red");
			drone.holes = getSVGElements(drone, "holes");
		var propellers = drone.propellers = [
			new propellerConstructor({left:  61, top: 121, parent: drone}, propellerConfig),
			new propellerConstructor({left: 122, top:  70, parent: drone}, propellerConfig),
			new propellerConstructor({left: 233, top: 116, parent: drone}, propellerConfig),
			new propellerConstructor({left: 181, top: 175, parent: drone}, propellerConfig),
		];

		// Hide the bottom part of the left rear propeller
		propellers[1].screw.set({opacity: 0});
		propellers[1].line_bottom.set({top: 86, display: "none"});

		TweenLite.set(drone.holes, {transformOrigin: "center center", left: 2});

		drone.in = new TimelineLite()
		.timeScale(1.2)
		.staggerFrom(drone.yellow, .5, {drawSVG: "0%", ease: Power0.easeNone}, .1)
		.staggerFrom(drone.blue, .5, {drawSVG: "0%", ease: Power0.easeNone}, .1, "-=.5")
		.staggerFrom(drone.shell, .5, {drawSVG: "0%", ease: Power0.easeNone}, .1, "-=.5")
		.staggerFrom(drone.holes, .5, {scale: 0, ease: Back.easeOut.config(2)}, .1, "-=.5")
		.staggerFrom(drone.red, .5, {drawSVG: "0%", ease: Power0.easeNone}, .1, "-=.5")
		.add([
			propellers[3].tl,
			propellers[2].tl,
			propellers[1].tl,
			propellers[0].tl,
		], 2, "normal", 0.1);

		return drone;
	}

	function Propeller(parameters, config){

		///////////////////////////////
		// C R E A T E  E L E M E N T S

		var _ = this,
		container = this.container = bannerboy.createElement({className: "propeller", y: -config.animation.distance, left: parameters.left, top: parameters.top, perspective: config.perspective + "px", pointerEvents: "none", parent: parameters.parent}),
		crop_bottom = bannerboy.createElement({width: config.engine.width, height: config.engine.height, clip: config.clip.bottom, parent: container}),
		engine = bannerboy.createElement({innerHTML: svg.engine, parent: container}),
		mask = bannerboy.createElement({backgroundImage: "background.jpg", border: "solid 1px " + colors.white, width: config.engine.width - 3, height: config.engine.height * .6, backgroundSize: config.width + "px " + config.height + "px", backgroundPosition: getMaskPosition(parameters, config.animation.distance), parent: container});
		screw = container.screw = bannerboy.createElement({innerHTML: svg.screw, left: -1.5, top: 39, y: 2*config.animation.distance, parent: container}),
		line_top = bannerboy.createElement({width: 1, height: config.animation.distance+5, y: config.animation.distance, left: 5, bottom: -28, overflow: "hidden", parent: container}),
		line_top_wrapper = bannerboy.createElement({width: 1, height: config.animation.distance+5, left: 0, bottom: 0, borderLeft: "dotted 1px #ed5044", parent: line_top}),
		line_bottom = container.line_bottom = bannerboy.createElement({width: 1, height: config.animation.distance+5, y: config.animation.distance, left: 5, top: 40, overflow: "hidden", parent: container}),
		line_bottom_wrapper = bannerboy.createElement({width: 1, height: config.animation.distance+5, left: 0, top: 0, borderLeft: "dotted 1px #ed5044", parent: line_bottom}),
		crop_top = bannerboy.createElement({width: config.engine.width, height: config.engine.height, clip: config.clip.top, parent: container}),
		surface_top = bannerboy.createElement({width: config.blades.width, height: config.blades.height*2, left: -6, top: -21, rotationX: config.blades.rotation.x, rotationY: config.blades.rotation.y, parent: crop_top})
		surface_bottom = bannerboy.createElement({width: config.blades.width, height: config.blades.height*2, left: -6, top: -21, rotationX: config.blades.rotation.x, rotationY: config.blades.rotation.y, parent: crop_bottom})
		blades = this.blades = [
			bannerboy.createElement({innerHTML: svg.blade, transformOrigin: config.blades.transformOrigin, scale: config.blades.scale, rotation: config.blades.rotation.z, parent: surface_top}),
			bannerboy.createElement({innerHTML: svg.blade, transformOrigin: config.blades.transformOrigin, scale: config.blades.scale, rotation: config.blades.rotation.z + 180, parent: surface_top}),
			bannerboy.createElement({innerHTML: svg.blade, transformOrigin: config.blades.transformOrigin, scale: config.blades.scale, rotation: config.blades.rotation.z, parent: surface_bottom}),
			bannerboy.createElement({innerHTML: svg.blade, transformOrigin: config.blades.transformOrigin, scale: config.blades.scale, rotation: config.blades.rotation.z + 180, parent: surface_bottom}),
		];

		// Round mask borders to have a shape close the top of the engine
		mask.style.borderRadius = ((config.engine.width - 3) * .7) + "px/" + (config.engine.height * .7 * .8) + "px";
		mask.style.borderBottomLeftRadius = ((config.engine.width - 3) * .5) + "px";
		mask.style.borderBottomRightRadius = ((config.engine.width - 3) * .5) + "px";

		var drawables = getSVGElements(container);

		////////////////////
		// A N I M A T I O N

		container.tl = new TimelineLite()
		.addLabel("lines")
		.from([line_top, line_bottom], .75, {opacity: 0, height: 0, ease: Power2.easeInOut}, "lines")
		.staggerFrom(drawables, .75, {drawSVG: "0%", ease: Power1.easeInOut}, .15, "-=.3")
		.addLabel("down", "-=1.25")
		.from(mask, .2, {opacity: 0})

		if(browser != "Firefox")
			container.tl.to([container, screw], config.animation.speed, {y: 0, ease: Elastic.easeInOut.config(1, 1)}, "down")
		else {
			container.tl.to(container, config.animation.speed, {top: "+=" + config.animation.distance, ease: Elastic.easeInOut.config(1, 1)}, "down")
			container.tl.to(screw, config.animation.speed, {y: 0, ease: Elastic.easeInOut.config(1, 1)}, "down")
		}

		container.tl
		.to(mask, config.animation.speed, {backgroundPosition: getMaskPosition(parameters, 0), ease: Elastic.easeInOut.config(1, 1)}, "down")
		.to([line_top, line_bottom], config.animation.speed, {height: 7, y: 0, ease: Elastic.easeInOut.config(1, 1)}, "down")
		.addLabel("rotate", "-=.6")
		.to(blades, .4, {rotationZ: "+=480", ease: Power4.easeIn, onComplete: function(){
				TweenLite.ticker.addEventListener("tick", rotate);
		}}, "rotate")

		function rotate(){
			var rotation = 40;
			TweenLite.set(_.blades, {rotation: "+="+rotation});
		}

		return container;
	}

	function IE9Propeller(parameters, config){

		///////////////////////////////
		// C R E A T E  E L E M E N T S

		var transformOrigin = "11.5px 37px",
		container = bannerboy.createElement({className: "propeller", y: -config.animation.distance, left: parameters.left, top: parameters.top, pointerEvents: "none", parent: parameters.parent}),
		placeholder = bannerboy.createElement({innerHTML: svg.ie9, left: -36, top: -3, scale: .5, transformOrigin: "top left", parent: container})
		mask = bannerboy.createElement({backgroundImage: "background.jpg", /*left: 1, top: 1, */border: "solid 1px " + colors.white, width: config.engine.width - 3, height: config.engine.height * .6, backgroundSize: config.width + "px " + config.height + "px", backgroundPosition: getMaskPosition(parameters, config.animation.distance), parent: container});
		screw = container.screw = bannerboy.createElement({innerHTML: svg.screw, left: -1.5, top: 39, y: 2*config.animation.distance, parent: container}),
		line_top = bannerboy.createElement({width: 1, height: config.animation.distance+5, y: config.animation.distance, left: 5, bottom: -28, overflow: "hidden", parent: container}),
		line_top_wrapper = bannerboy.createElement({width: 1, height: config.animation.distance+5, left: 0, bottom: 0, borderLeft: "dotted 1px #ed5044", parent: line_top}),
		line_bottom = container.line_bottom = bannerboy.createElement({width: 1, height: config.animation.distance+5, y: config.animation.distance, left: 5, top: 40, overflow: "hidden", parent: container}),
		line_bottom_wrapper = bannerboy.createElement({width: 1, height: config.animation.distance+5, left: 0, top: 0, borderLeft: "dotted 1px #ed5044", parent: line_bottom}),

		// Round mask borders to have a shape close the top of the engine
		mask.style.borderRadius = ((config.engine.width - 3) * .7) + "px/" + (config.engine.height * .7 * .8) + "px";
		mask.style.borderBottomLeftRadius = ((config.engine.width - 3) * .5) + "px";
		mask.style.borderBottomRightRadius = ((config.engine.width - 3) * .5) + "px";

		var drawables = getSVGElements(container);

		////////////////////
		// A N I M A T I O N

		container.tl = new TimelineLite()
		.addLabel("lines")
		.from([line_top, line_bottom], 1.5, {opacity: 0, height: 0, ease: Power2.easeInOut}, "lines")
		.from(drawables, .01, {opacity: 0})
		.staggerFrom(drawables, .75, {drawSVG: "0%", ease: Power1.easeInOut}, .15, "-=.3")
		.addLabel("down", "-=.5")
		.from(mask, .2, {opacity: 0})
		.to([container, screw], config.animation.speed, {y: 0, ease: Elastic.easeInOut.config(1, 1)}, "down")
		container.tl
		.to(mask, config.animation.speed, {backgroundPosition: getMaskPosition(parameters, 0), ease: Elastic.easeInOut.config(1, 1)}, "down")
		.to([line_top, line_bottom], config.animation.speed, {height: 7, y: 0, ease: Elastic.easeInOut.config(1, 1)}, "down")

		return container;
	}

	function getMaskPosition(position, y){
		var left = - position.left;
		var top = - (position.top - y);
		return left + "px " + top + "px";
	}

	function getSVGElements(parent, id) {
		if(id) parent = parent.querySelectorAll("#" + id)[0];
		return Array.prototype.concat.call(
				parent.getElementsByTagName("path"),
				parent.getElementsByTagName("line"),
				parent.getElementsByTagName("polyline"),
				parent.getElementsByTagName("polygon"),
				parent.getElementsByTagName("rect"),
				parent.getElementsByTagName("ellipse")
			);
	}

	function detectBrowser() {
		var browsers = ["Chrome", "Firefox", "Safari", "Internet", "Opera"];
		var browser;
		for (var i = 0; i < browsers.length; i++) {
			if (navigator.userAgent.search(browsers[i]) > 0) {
				browser = browsers[i];
				break;
			}
		}
		return browser;
	}

	function detectIE() {
		var ua = window.navigator.userAgent;
		var msie = ua.indexOf('MSIE ');
		if (msie > 0) {
			return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
		}
		var trident = ua.indexOf('Trident/');
		if (trident > 0) {
			var rv = ua.indexOf('rv:');
			return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
		}
		var edge = ua.indexOf('Edge/');
		if (edge > 0) {
			return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
		}
		return false;
	}

	function onVisible(){
		visible = true;
		if(loaded) tl.play();
	}

	////////////
	// D E B U G

	// if(window.location.origin == "file://"){
	// 	bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
	// 		if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
	// 	});
	// 	return onPolite(), onVisible();
	// }
	
	// set up DoubleClick listeners
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
}