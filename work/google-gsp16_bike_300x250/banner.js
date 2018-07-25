var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var colors = {
		blue: "#87c9c4",
		white: "#d9d6c3",
		red: "#ad3c2a",
		orange: "#f9c973",
	}
	// var browser = detectBrowser();
	var version = detectIE();
	var ie9 = version && version < 10;
	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({id: "banner", transformStyle: "preserve-3d", width: width, height: height, backgroundColor: colors.white, overflow: "hidden", border: "solid 1px #000", boxSizing: "border-box", parent: document.body});
	var tl = new TimelineLite({paused: true});
	var loaded, visible = false;

	var images = [
		"bike.jpg", 
		"bike.png", 
		"wheel_shadow.png", 
		"cooler.jpg", 
		"wheel.png", 
		"pedal.png", 
		"pedal_2.png", 
		"pedal_part.png", 
		"pedal_part_2.png", 
		"cta_txt.png", 
		"cta_txt_hover.png", 
		"logo.png", 
		"txt_3.png", 
		"txt_2.png", 
		"txt_1.png", 
	];

	function onPolite(){
		bannerboy.preloadImages(images, function(){

			///////////////////////////////
			// C R E A T E  E L E M E N T S

			var bike = new Bike({id: "bike", left: -38, top: -11, width: 449, height: 289, parent: banner}, {});
			
			var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", left: 23, top: 31, retina: true, parent: banner});
			var txt_2 = bannerboy.createElement({backgroundImage: "txt_2.png", left: 71, top: 30, retina: true, parent: banner});
			var txt_3 = bannerboy.createElement({backgroundImage: "txt_3.png", left: 45, top: 99, retina: true, parent: banner});
			var logo = bannerboy.createElement({backgroundImage: "logo.png", left: 76, top: 77, retina: true, parent: banner});
			var cta = bannerboy.createElement({border: "solid 2px #ad3b29", left: 89, top: 183, width: 121, height: 34, parent: banner});
				var cta_txt = bannerboy.createElement({backgroundImage: "cta_txt.png", left: 24, top: 12, retina: true, parent: cta});
				var cta_txt_hover = bannerboy.createElement({backgroundImage: "cta_txt_hover.png", left: 24, top: 12, retina: true, opacity: 0, parent: cta});
			
			cta.set({left: "-=2", top: "-=2"});

			////////////////////
			// A N I M A T I O N

			tl
			.from(txt_1, .6, {opacity: 0, ease: Power2.easeIn}, "+=.5")
			.add(bike.tl, "+=.5")
			.to(txt_1, .6, {opacity: 0, ease: Power2.easeOut}, "-=4")
			.from(txt_2, .4, {opacity: 0, ease: Power2.easeIn}, "-=2")
			.staggerTo([txt_2, bike], .4, {opacity: 0, ease: Power2.easeOut}, .2, "+=1.5")
			.from(txt_3, .4, {opacity: 0, ease: Power2.easeIn}, "+=0")
			.to(txt_3, .4, {opacity: 0, ease: Power2.easeOut}, "+=2")
			.staggerFrom([logo, cta], .4, {opacity: 0, ease: Power2.easeIn}, 1, "+=0")

			loaded = true;
			if(visible) tl.play();

			////////////////////////
			// I N T E R A C T I O N

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

	
	function Bike(parameters, zoom){
		var container = bannerboy.createElement(parameters);
			var bike = bannerboy.createElement({backgroundImage: "bike.jpg", transformOrigin: "top left", scale: .5, retina: true, z: -1000, parent: container});

			var pedal_back_container = bannerboy.createElement({left: 272, top: 156, height: 80, width: 80, zIndex: 10, z: -500, rotationY: -45, rotationX: -6, opacity: ie9 ? 0 : 1, borderRadius: "50%", border: "solid 0px blue", parent: container})
				var pedal_back_part_1 = bannerboy.createElement({width: 6, height: 30, top: 40, left: 37, transformOrigin: "50% 3px", rotation: 180, /*backgroundColor: "#383631", */parent: pedal_back_container})
				var pedal_back_part_2 = bannerboy.createElement({backgroundImage: "pedal_2.png", scaleX: 1.1, scaleY: .8, width: 25, height: 11, left: -15, top: 23, zIndex: 0, transformOrigin: "72% 45%", rotationY: 0, parent: pedal_back_part_1})
				var pedal_back_part_1_mask = bannerboy.createElement({backgroundImage: "pedal_part_2.png", width: 6, height: 30, zIndex: 10, parent: pedal_back_part_1})

			var rim_container = bannerboy.createElement({left: 202, top: 132, perspective: 100, width: 95, height: 95, zIndex: 20, z: 0, rotationY: -35, rotationX: -6, opacity: ie9 ? 0 : 1, parent: container});
			var rim = bannerboy.createElement({backgroundImage: "wheel.png", width: 95, height: 95, parent: rim_container});

			var bike_mask = bannerboy.createElement({backgroundImage: "bike.png", transformOrigin: "top left", scale: .5, retina: true, zIndex: 30, z: 500, parent: container});

			var pedal_front_container = bannerboy.createElement({left: 262, top: 155, height: 80, width: 80, zIndex: 40, z: 1000, rotationY: -45, rotationX: -6, opacity: ie9 ? 0 : 1, borderRadius: "50%", border: "solid 0px blue", parent: container})
				var pedal_front_part_1 = bannerboy.createElement({backgroundImage: "pedal_part.png", width: 6, height: 30, top: 40, left: 37, transformOrigin: "50% 3px", /*backgroundColor: "#383631", */parent: pedal_front_container})
				var pedal_front_part_2 = bannerboy.createElement({backgroundImage: "pedal.png", scaleX: 1.25, scaleY: .8, width: 25, height: 11, left: -15, top: 25, transformOrigin: "70% 55%", rotationY: 0, parent: pedal_front_part_1})

			var svg_container = bannerboy.createElement({zIndex: 50, z: 1500, parent: container});
			var wheel_shadow = bannerboy.createElement({backgroundImage: "wheel_shadow.png", left: 97, top: 223, retina: true, parent: svg_container});
			var cooler = bannerboy.createElement({backgroundImage: "cooler.jpg", left: 122, top: 143, width: 56, height: 61, parent: svg_container});

			var vaccines = bannerboy.createElement({innerHTML: svg.cooler, left: 9, top: -40, width: 45, height: 54, parent: cooler});
			var gearing = bannerboy.createElement({innerHTML: svg.gearing, left: 184, top: 158, width: 69, height: 39, parent: svg_container});
			var spin = bannerboy.createElement({innerHTML: svg.spin, left: 156, top: 158, width: 96, height: 39, zIndex: 2, parent: svg_container});
			var power = bannerboy.createElement({innerHTML: svg.power, left: 143, top: 166, width: 53, height: 37, zIndex: 3, parent: svg_container});
			var board = bannerboy.createElement({innerHTML: svg.board, left: 98, top: 191, width: 116, height: 28, parent: svg_container});
			var wheel = bannerboy.createElement({innerHTML: svg.wheel, left: 87, top: 185, width: 68, height: 56, parent: svg_container});


		// container.set({perspective: 1000});
		spin.set({perspective: 100});
		var spinner_container = bannerboy.createElement({left: 66, top: 6, /*border: "solid 1px red", */width: 30, height: 30, rotationX: 0, rotationY: -58, opacity: ie9 ? 0 : 1, parent: spin})
		var spinner = bannerboy.createElement({/*border: "solid 1px blue", borderRadius: "50%", */innerHTML: svg.spinning, left: 5, top: 5, opacity: 1, width: 25, height: 25, parent: spinner_container})

		if(!zoom.ease)
			zoom.ease = Power2.easeInOut;

		container.spinTimeScale = 0;
		container.spin_tl = new TimelineLite({paused: false, onComplete: function(){ container.spin_tl.play(0); }})
		.timeScale(container.spinTimeScale)
		.set("#reflect_1", {drawSVG: "0%"})
		.set("#flux", {drawSVG: "0%"})
		// .fromTo("#reflect_1", .6, {drawSVG: "0% 12%", ease: Power0.easeNone}, {drawSVG: "88% 112%", ease: Power0.easeNone}, 0)
		.fromTo("#reflect_3", .4, {drawSVG: "0% 15%", ease: Power0.easeNone}, {drawSVG: "100% 115%", ease: Power0.easeNone}, 0)
		.to(spinner, .6, {rotation: "+=360", ease: Power0.easeNone}, 0)
		.to(rim, .6, {rotation: "+=280", ease: Power0.easeNone}, 0)
		.to([spinner, rim], .6, {rotation: "+=720", ease: Power0.easeNone}, 0)
		.to([pedal_front_part_1, pedal_back_part_1], .6, {rotation: "+=360", ease: Power0.easeNone}, 0)
		.to([pedal_front_part_2, pedal_back_part_2], .6, {rotation: "-=360", ease: Power0.easeNone}, 0)


		var tl = container.tl = new TimelineLite()
		// .from(container, 1, zoom, "+=1")
		.add(createTimeline(gearing), "-=.5")
		.add(createTimeline(power), "-=2.5")
		.add(createTimeline(board), "-=2.5")
		.add(createTimeline(wheel), "-=2.5")
		.from(spin, 1, {opacity: 0}, "-=3")
		.from(wheel_shadow, .5, {opacity: 0}, "-=2.5")
		.from(cooler, 1, {opacity: 0, y: -25, ease: Power2.easeOut}, "-=3")
		.add(createTimeline(vaccines), "-=3")
		.call(function(){
			if(container.spinTimeScale == .5) return;
			TweenLite.ticker.addEventListener("tick", updateTimeScale, this)
			TweenLite.to(container, 1.75, {spinTimeScale: .5, ease: Power1.easeInOut, onComplete: function(){
				TweenLite.ticker.removeEventListener("tick", updateTimeScale)
			}})
		}, null, container, "-=2.5")

		function updateTimeScale(){
			this.spin_tl.timeScale(this.spinTimeScale);
		}

		return container;
	}

	function createTimeline(container) {
		// create Timeline for SVG sets
		var elements = getSVGElements(container);
		var copy = container.cloneNode(true);
		container.parentNode.appendChild(copy)
		var tl = new TimelineLite()
		.from(container, .3, {opacity: 0})
		.staggerFromTo(elements, 1.5, {drawSVG: "0% 0%"}, {drawSVG: "0% 100%", ease: Power2.easeOut}, .1, "-=.3")
		.from(copy, 1, {opacity: 0, ease: Power3.easeOut}, "-=0")
		.to(container, 1, {opacity: 0, ease: Power3.easeIn}, "-=.9")

		return tl;
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

	function onVisible(){
		visible = true;
		if(loaded) tl.play();
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

	////////////
	// D E B U G

	// if(window.location.origin == "file://" || window.location.protocol == "file:"){
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