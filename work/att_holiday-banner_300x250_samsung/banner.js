var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, backgroundColor: "#ededed", overflow: "hidden", cursor: "pointer", parent: document.getElementById("banner"), boxSizing: "border-box", border: "solid 1px #dedede"});
	var tl = new TimelineLite();

	TweenLite.set("#clickTag", {width: width, height: height, zIndex: 100});

	var images = [
		"pixiedust/particle_1.png",
		"pixiedust/particle_2.png",
		"pixiedust/particle_3.png",
		"pixiedust/particle_4.png",
		"img/shimmer_2.png", 
		"img/shimmer.png", 
		"img/bg.png", 
		"img/cta_txt.png", 
		"img/tablet.png", 
		"img/phone.png", 
		"img/txt_legal_link.png", 
		"img/txt_terms.png", 
		"img/txt_3_2.png", 
		"img/txt_3_3.png", 
		"img/txt_3_1.png", 
		"img/txt_2.png", 
		"img/txt_1_3.png", 
		"img/txt_1_2.png", 
		"img/txt_1_1.png", 
		"img/logo_samsung.png", 
		"img/logo_att.png", 
		"img/legal.png", 
	]

	bannerboy.preloadImages(images, function(){

		//////////////////////////////
		// C R E A T E   E L E M E N T

		var container = bannerboy.createElement({id: "container", width: width, height: height, zIndex: 10, parent: banner})
		var cta = bannerboy.createElement({left: 14, top: 158, width: 103, height: 30, parent: container});
			var cta_shape = bannerboy.createElement({backgroundColor: "#ee6e00", borderRadius: 8, width: 103, height: 30, parent: cta});
			var cta_txt = bannerboy.createElement({backgroundImage: "img/cta_txt.png", left: 17, top: 10, retina: true, parent: cta});
		var tablet = bannerboy.createElement({backgroundImage: "img/tablet.png", left: 160, top: 55+12, retina: true, parent: container});
		var phone = bannerboy.createElement({backgroundImage: "img/phone.png", left: 124, top: 117+12, retina: true, parent: container});
		var txt_legal_link = bannerboy.createElement({backgroundImage: "img/txt_legal_link.png", left: 18, top: 231, retina: true, parent: container});
		var txt_terms = bannerboy.createElement({backgroundImage: "img/txt_terms.png", left: 112, top: 226, retina: true, parent: container});
		var txt_3_3 = bannerboy.createElement({backgroundImage: "img/txt_3_2.png", left: 15, top: 109+4, retina: true, parent: container});
		var txt_3_2 = bannerboy.createElement({backgroundImage: "img/txt_3_3.png", left: 15, top: 66+2, retina: true, parent: container});
		var txt_3_1 = bannerboy.createElement({backgroundImage: "img/txt_3_1.png", left: 16, top: 16, retina: true, parent: container});
		var txt_2 = bannerboy.createElement({backgroundImage: "img/txt_2.png", left: 24, top: 16, retina: true, parent: container});
		var txt_1_3 = bannerboy.createElement({backgroundImage: "img/txt_1_3.png", left: 111, top: 138, retina: true, parent: container});
		var txt_1_2 = bannerboy.createElement({backgroundImage: "img/txt_1_2.png", left: 55, top: 113, retina: true, parent: container});
		var txt_1_1 = bannerboy.createElement({backgroundImage: "img/txt_1_1.png", left: 42, top: 87, retina: true, parent: container});
		var logo_samsung = bannerboy.createElement({backgroundImage: "img/logo_samsung.png", left: 12, top: 205, retina: true, parent: container});
		var logo_att = bannerboy.createElement({backgroundImage: "img/logo_att.png", left: 247, top: 200, retina: true, parent: container});
		var legal = bannerboy.createElement({backgroundImage: "img/legal.png", left: -1, top: -10, retina: true, parent: container});
		var canvas = bannerboy.createElement({id: "container", width: width*2, height: height*2, zIndex: 0, scale: .5, transformOrigin: "top left", parent: banner})

		var txt_1 = [txt_1_1, txt_1_2, txt_1_3];
		var txt_3 = [txt_3_1, txt_3_2, txt_3_3];

		var shimmer_curve = [{x: -67, y: 179}, {x: 34, y: 119}, {x: 104, y: 121}, {x: 137, y: 153}, {x: 85, y: 201}, {x: -18, y: 258}, {x: -52, y: 327}, {x: 15, y: 354}, {x: 122, y: 341}, {x: 353, y: 254}, {x: 768, y: 125}];
		var shimmer_mask = [{x: -67, y: 179}, {x: 34, y: 119}, {x: 104, y: 121}, {x: 137, y: 153}, {x: 85, y: 201}, {x: -18, y: 258}, {x: -52, y: 327}, {x: 15, y: 354}, {x: 122, y: 341}, {x: 353, y: 254}, {x: 768, y: 125}];
		var shimmer_2_curve = [{x: -166, y: 253}, {x: 117, y: 334}, {x: 393, y: 286}, {x: 786, y: 426}];
		var shimmer_2_mask = [{x: -166, y: 253}, {x: 117, y: 334}, {x: 393, y: 286}, {x: 786, y: 426}];

		var pixiedust = new PixieDust();
		pixiedust.setRevealImage("img/shimmer.png");
		pixiedust.setCurve({
			values: shimmer_curve,
			curviness: 1.3
		})
		pixiedust.config.particle.amount = 66;
		pixiedust.reveal.radius = 120;
		pixiedust.create(canvas);
		pixiedust.config.delay = 9;

		var pixiedust_mask = new PixieDust();
		pixiedust_mask.setRevealImage("img/bg.png");
		pixiedust_mask.setCurve({
			values: shimmer_mask,
			curviness: 1.3
		})
		pixiedust_mask.config.particle.amount = 66;
		pixiedust_mask.reveal.radius = 150;
		pixiedust_mask.create(canvas);
		pixiedust_mask.config.delay = 9;

		var pixiedust_2 = new PixieDust();
		pixiedust_2.setRevealImage("img/shimmer_2.png");
		pixiedust_2.setCurve({
			values: shimmer_2_curve,
			curviness: 1.3
		})
		pixiedust_2.config.particle.amount = 66;
		pixiedust_2.reveal.radius = 120;
		pixiedust_2.create(canvas);
		pixiedust_2.config.delay = 9;

		var pixiedust_2_mask = new PixieDust();
		pixiedust_2_mask.setRevealImage("img/bg.png");
		pixiedust_2_mask.setCurve({
			values: shimmer_2_mask,
			curviness: 1.3
		})
		pixiedust_2_mask.config.particle.amount = 66;
		pixiedust_2_mask.reveal.radius = 175;
		pixiedust_2_mask.create(canvas);
		pixiedust_2_mask.config.delay = 9;

		////////////////////
		// A N I M A T I O N

		tl
		.set(legal, {opacity: 0, pointerEvents: "none"})
		.addLabel("frame_1")
		.from(logo_att, .3, {opacity: 0, ease: Power1.easeInOut})
		.staggerFrom(txt_1, .6, {opacity: 0, ease: Power1.easeInOut}, .25)
		.call(pixiedust.start, [2, Power2.easeInOut], pixiedust, "+=1.0") // Duration on txt_1
		.call(pixiedust_mask.start, [1.75, Power2.easeInOut], pixiedust_mask, "+=1.0")
		.staggerTo(txt_1, .5, {opacity: 0}, .2, "+=.5")
		.addLabel("frame_2", "+=.1")
		.call(pixiedust_2.start, [2], pixiedust_2, "+=.2")
		.call(pixiedust_2_mask.start, [2], pixiedust_2_mask, "frame2+=1.5")
		.from(phone, .6, {x: -10, opacity: 0, ease: Power1.easeInOut}, "frame_2")
		.from(tablet, .7, {x: 10, opacity: 0, ease: Power1.easeInOut}, "frame_2")
		.from(txt_2, .5, {opacity: 0, ease: Power1.easeInOut}, "frame_2")
		.to(txt_2, .5, {opacity: 0}, "+=1.75") // Duration on txt_2
		.addLabel("frame_3")
		.from([txt_3_1, txt_terms], .5, {opacity: 0})
		.from([txt_3_2, txt_3_3, cta, logo_samsung, txt_legal_link], .8, {opacity: 0}, "+=1")

		////////////////////////
		// I N T E R A C T I O N

		txt_legal_link.addEventListener("click", function(e){
			e.preventDefault();
			legal.to(.3, {opacity: 1, pointerEvents: "auto"})
		}, false)
		legal.addEventListener("click", function(e){
			e.preventDefault();
			legal.to(.3, {opacity: 0, pointerEvents: "none"})
		})
		banner.addEventListener('mouseenter', function(e) {
			var speed = .15;
			TweenLite.to(cta_shape, speed*2, {backgroundColor: "#666666"})
			TweenLite.to(txt_3_1, speed, {scale: 1.02, delay:.5+speed*0})
			TweenLite.to(txt_3_1, speed, {scale: 1.00, delay:.5+speed*1})
			TweenLite.to(txt_3_1, speed, {scale: 1.02, delay:.5+speed*2})
			TweenLite.to(txt_3_1, speed, {scale: 1.00, delay:.5+speed*3})
		});
		banner.addEventListener('mouseleave', function(e) {
			TweenLite.to(cta_shape, .3, {backgroundColor: "#ee6e00"})
		});
	})
}