var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var colors = {
		blue: "#87c9c4",
		white: "#dad7c1",
		red: "#ad3c2a",
		orange: "#f9c973",
	}
	// var browser = detectBrowser();
	// var version = detectIE();
	// var ie9 = version && version < 10;
	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({id: "banner", transformStyle: "preserve-3d", width: width, height: height, backgroundColor: colors.white, overflow: "hidden", border: "solid 1px #000", boxSizing: "border-box", parent: document.body});
	var tl = new TimelineLite({paused: true});
	var loaded, visible = false;

	var images = [
		"umbrella.jpg",
		"umbrella_mask.png", 
		"drop.png", 
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

			var umbrella = new Umbrella({id: "umbrella", width: 300, height: 250, backgroundImage: "umbrella.jpg", retina: true, parent: banner});

			// easy way to move the umbrella for formats
			// umbrella.set({y: 40, x: 120, scale: .66})

			var txt_3 = bannerboy.createElement({backgroundImage: "txt_3.png", top: 99, retina: true, parent: banner});
			var txt_2 = bannerboy.createElement({backgroundImage: "txt_2.png", top: 25, retina: true, parent: banner});
			var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", top: 25, retina: true, parent: banner});
			var logo = bannerboy.createElement({backgroundImage: "logo.png", top: 77, retina: true, parent: banner});
			var cta = bannerboy.createElement({border: "solid 2px " + colors.red, top: 183, width: 121, height: 34, parent: banner});
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
			.from(umbrella, .4, {opacity: 0, ease: Power2.easeIn})
			.from(txt_1, .4, {opacity: 0, ease: Power2.easeIn}, "+=1")
			.add(umbrella.tl, "+=1")
			.to(txt_1, .4, {opacity: 0, ease: Power2.easeOut}, "-=2")
			.from(txt_2, .4, {opacity: 0, ease: Power2.easeIn}, "-=.3")
			.staggerTo([txt_2, umbrella], .4, {opacity: 0, ease: Power2.easeOut}, .2, "+=2")
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

	function Umbrella(parameters){
		var umbrella = bannerboy.createElement(parameters);
		var rain = new Rain({id: "rain", left: 71, top: 67, width: 154, height: 36, parent: umbrella});
		var water = bannerboy.createElement({id: "water", left: 129, top: 146, width: 34, height: 51, parent: umbrella});
			var fill_mask = bannerboy.createElement({width: 34, height: 48, top: 3, parent: water, clip: "rect(0px 34px 48px 0px)"});
			var fill = bannerboy.createElement({innerHTML: svg.water.fill, width: 34, height: 48, parent: fill_mask});
			var surface = bannerboy.createElement({innerHTML: svg.water.surface, left: 1, top: -7, width: 32, height: 7, parent: water});

		var pipes = bannerboy.createElement({id: "pipes", left: 55, top: 79, width: 184, height: 119, parent: umbrella});
			var background = bannerboy.createElement({innerHTML: svg.pipes.background, left: 9, top: 24, width: 163, height: 95, parent: pipes});
			var umbrella_mask = bannerboy.createElement({backgroundImage: "umbrella_mask.png", retina: true, parent: pipes});
			var foreground = bannerboy.createElement({innerHTML: svg.pipes.foreground, left: 50, top: 15, width: 83, height: 26, parent: pipes});

		// Fix some display issue at the end of the drawing by replacing the pipes
		var pipes_copy = pipes.cloneNode(true);
		umbrella.appendChild(pipes_copy);

		water.set({opacity: .75})

		var drawables = getSVGElements(pipes);

		umbrella.tl = new TimelineLite()
		.from(drawables, .01, {opacity: 0})
		.staggerFromTo(drawables, 1.75, {drawSVG: "100% 100%", ease: Power3.easeOut}, {drawSVG: "0% 100%", ease: Power3.easeOut}, .2, 0)
		.from(pipes_copy, .5, {opacity: 0}, "-=2.25")
		.addLabel("fill", "-=2")
		.from(water, .3, {opacity: 0}, "fill-=.3")
		.from(fill_mask, 2, {clip: "rect(30px 34px 48px 0px)", ease: Power2.easeInOut}, "fill")
		.from(surface, 2, {y: 30, ease: Power2.easeInOut}, "fill")

		return umbrella;
	}

	function Rain(parameters){

		var canvas = document.createElement("canvas");
		var config = {
			drops: {
				rows: 15, // number of columns of drop. Change this value according to the banner's size
				cols: 5,
				left: 5,
				right: 168,
				distance: 100,
				speeds: [.103, .31, .12, .157, .204, .305, .1, .2]
			}
		}
		var drops = [];
		canvas.style.position = "absolute";
		canvas.style.left = -parameters.left*2 + "px";
		canvas.style.top = -parameters.top*2 + "px";
		var ctx = canvas.getContext("2d");
		var width = canvas.width = banner.get("width") * 2;
		var height = canvas.height = banner.get("height") * 2;
		var rain = bannerboy.createElement(parameters);
		rain.set({transformOrigin: "top left", scale: .5})
		var image = new Image();
		image.onload = function(){ TweenLite.ticker.addEventListener("tick", update); }
		image.src = "drop.png";
		rain.appendChild(canvas);

		for (var i = 0; i < config.drops.rows * config.drops.cols; i++) {
			drops[i] = new Drop(config.drops, i)
		};

		function Drop(config, index){
			var width = config.right - config.left;
			var step = Math.floor(width / config.cols);
			var row = Math.floor(index / config.cols);
			var col = index % config.cols;
			this.index = index;
			this.left = config.left + col * step + bannerboy.utils.randomRange(-step/4, step/4);
			// this.left = bannerboy.utils.randomRange(0 + 10, width - 10);
			this.top = 50;
			this.y = config.distance + 65 * (row + 1);
			// this.y = 100 ;
			this.speed = .75 + config.speeds[col % config.speeds.length] * 2;
			// this.speed = bannerboy.utils.randomRange(1.5, 1.75);
		}

		function update(){
			ctx.clearRect(0, 0, width, height);
			for (var i = 0; i < drops.length; i++) {
				var drop = drops[i];
				ctx.save();
				ctx.translate(parameters.left*2, parameters.top*2);
				ctx.drawImage(image, drop.left * 2, (drop.top - drop.y) * 2, image.width, image.height)
				ctx.restore();
				drop.y -= drop.speed;
			};

			// remove unnecessary drops
			drops = drops.filter(function(drop){
				return drop.y > 0;
			})
		}
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