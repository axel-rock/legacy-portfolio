/*!
 * @author: Axel, bannerboy.com
 **/
var clickTag = "http://piaget.com";
var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 250;
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, backgroundColor: "#eef1f5", overflow: "hidden", parent: document.body, boxSizing: "border-box", userSelect: "none", cursor: "pointer", perspective: 5000});
	var tl = new TimelineLite();

	var text = {
		units : {
			days: "days",
			hours: "hours",
			minutes: "min",
			seconds: "sec",
		},
		txt_1: "<b>Time left to New year’s eve</b>",
		txt_2_1: "<b>Make this New year’s eve<br/>one to remember</b>",
		txt_2_2: "with the Pink Gold Possession Ring",
		cta: "shop now",
	}
	
	var images = [
		"img/bg.jpg",
		"img/bg_1.png",
		"img/bg_2.png",
		"img/hanging_1.png",
		"img/hanging_2.png",
		"img/hanging_3.png",
		"img/hanging_4.png",
		"img/spinning.png",
		"img/ticker_shadow.png",
		"img/star.png",
		"img/logo.svg",
		"img/spritesheet.png",
		"img/product.png"
	];
	
	
	bannerboy.preloadImages(images, function(){

		///////////////////////
		// C R E A T E  E L E M E N T S
		
		// Global elements
		var bg_container = bannerboy.createElement({height: height, width: width, overflow: "hidden", parent: banner})
		var bg = bannerboy.createElement({backgroundImage: "img/bg.jpg", z: -1, parent: bg_container});
		
		var star_container = bannerboy.createElement({rotation: 30, z: 1, parent: bg});
		var star = bannerboy.createElement({backgroundImage: "img/star.png", opacity: .75, retina: true, parent: star_container});
		
		var bg_1_container = bannerboy.createElement({z: 2, parent: banner});
		var bg_2_container = bannerboy.createElement({z: 2, parent: banner});
		var bg_1 = bannerboy.createElement({backgroundImage: "img/bg_1.png", left: -120, top: 157, retina: true, parent: bg_1_container});
		var bg_2 = bannerboy.createElement({backgroundImage: "img/bg_2.png", left: -150, top: 185, retina: true, parent: bg_2_container});
		
		var sky = bannerboy.createElement({z: 10, parent: banner})
		var spinning = bannerboy.createElement({backgroundImage: "img/spinning.png", left: 430, top: 23, retina: true, parent: sky});
		var hanging_1 = bannerboy.createElement({backgroundImage: "img/hanging_1.png", left: 40, top: -45, retina: true, parent: sky});
		var hanging_2 = bannerboy.createElement({backgroundImage: "img/hanging_2.png", left: 231, top: -45, retina: true, parent: sky});
		var hanging_3 = bannerboy.createElement({backgroundImage: "img/hanging_3.png", left: 264, top: -2, retina: true, parent: sky});
		var hanging_4 = bannerboy.createElement({backgroundImage: "img/hanging_4.png", left: 405, top: -14, retina: true, parent: sky});

		var logo = bannerboy.createElement({backgroundImage: "img/logo.svg", width: 64, height: 25, top: 21, parent: banner}).centerHorizontal();
		
		var txt_1 = bannerboy.createText({text: text.txt_1, z: 10, className: "garamond", fontSize: 16, top: 80, parent: banner})
			.centerHorizontal();
		var ticker = bannerboy.createTicker({id: "ticker", top: 110, z: 10, scale: .85, parent: banner})
			.centerHorizontal();
		var units = bannerboy.createElement({id: "units", z: 10, width: ticker.get("width"), top: 155, scale: .85, parent: banner})
			.centerHorizontal();
		for (var unit in text.units) {
			units[unit] = bannerboy.createText({innerHTML: text.units[unit], position: "relative", width: ticker.get("width")/4, display: "inline-block", opacity: .75, parent: units})
		};

		var product_container = bannerboy.createElement({id: "product_container", top: 40, scale: .8, height: height, width: width, parent: banner})
		var product = bannerboy.createRing(product_container).centerHorizontal();

		var txt_2_1 = bannerboy.createText({innerHTML: text.txt_2_1, z: 10, fontSize: 16, className: "garamond", top: 65, parent: banner})
			.centerHorizontal();
		var txt_2_2 = bannerboy.createText({innerHTML: text.txt_2_2, z: 10, fontSize: 10, className: "garamond", top: 108, parent: banner})
			.centerHorizontal();

		var cta_container = bannerboy.createElement({width: width, textAlign: "center", height: 35, z: 12, top: 180, parent: banner})
		var cta = bannerboy.createButton(text.cta, cta_container);

		////////////////////
		// A N I M A T I O N
		
		// Main animation
		tl
		.from(bg_1, 1.2, {y: 100, x:-50, ease: Power1.easeInOut}, 0)
		.from(bg_2, 1.2, {y: 100, x: 50, ease: Power1.easeInOut}, 0)
		.from(sky, 1.2, {y: -125, ease: Power1.easeInOut}, 0)
		.from(logo, .6, {opacity: 0, ease: Power1.easeInOut}, .5)
		.to(bg_container, 1.2, {height: 222, ease: Power1.easeInOut}, 0)

		.addLabel("frame1")
		.staggerFrom([txt_1, ticker, units], 1.2, {opacity: 0, ease: Power1.easeInOut}, .1, "frame1")

		.addLabel("frame2", "+=3")
		.to([txt_1, ticker, units], 1, {x:-width/2, opacity: 0, ease: Power1.easeIn}, "frame2")
		.to(bg_1, 1.7, {x: -50, ease: Power1.easeInOut}, "frame2")
		.to(bg_2, 1.7, {x: -75, ease: Power1.easeInOut}, "frame2")
		.to(bg, 1.7, {x: -150, ease: Power1.easeInOut}, "frame2")
		.to(sky, 1.7, {x: -180, ease: Power1.easeInOut}, "frame2")
		.from([product, txt_2_1, txt_2_2], 1, {x: width/2, opacity: 0, ease: Power1.easeOut}, "frame2+=.8")

		.addLabel("frame3", "+=4")
		.to([product, txt_2_1, txt_2_2], 1, {x: width/2, opacity: 0, ease: Power1.easeIn}, "frame3")
		.to(bg_1, 1.7, {x: -100, y: 25, ease: Power1.easeInOut}, "frame3")
		.to(bg_2, 1.7, {x: 0, y: 25, ease: Power1.easeInOut}, "frame3")
		.to(bg, 1.7, {x: 0, ease: Power1.easeInOut}, "frame3")
		.to(sky, 1.7, {x: 0, ease: Power1.easeInOut}, "frame3")
		.to(bg_container, 1.7, {height: 250, ease: Power1.easeInOut}, "frame3")
		.to([txt_1, ticker, units], 1, {x:0, opacity: 1, ease: Power1.easeOut}, "frame3+=.7")
		.from(cta, 1, {x:-50, opacity: 0, ease: Power1.easeOut}, "frame3+=.7")

		// Spinning element animation
		var overlay_tl = new TimelineLite({onComplete: function(){overlay_tl.play(0)}})
		.to(hanging_1, 20, {rotationY: 360 * 6, ease: Power0.easeNone}, 0)
		.to(hanging_2, 20, {rotationY: 360 *-5, ease: Power0.easeNone}, 0)
		.to(hanging_3, 20, {rotationY: 360 * 7, ease: Power0.easeNone}, 0)
		.to(hanging_4, 20, {rotationY: 360 * 6, ease: Power0.easeNone}, 0)
		.to( spinning, 20, {rotation: "+=360", ease: Power0.easeNone}, 0);
		
		// Shooting stars animation
		var star_pos = [[50, 25], [120, 15], [100, 30]];
		var star_pos_index = 0;
		var star_tl = new TimelineLite({onComplete: function(){star_tl.play(0)}})
		.timeScale(.6)
		.to(star, 1, {x: 200, ease: Power2.easeInOut})
		.from(star, .5, {opacity: 0, scaleX: 0, ease: Power1.easeIn}, 0)
		.to(star, .5, {opacity: 0, scaleX: 0, ease: Power1.easeOut}, .5)
		.call(function(){
			var pos = star_pos[star_pos_index++ % 3]
			star_container.set({x: pos[0], y: pos[1]})
		}, null, null, "+=2");


		////////////////////////
		// I N T E R A C T I O N
		
		// Add event listeners
		
		banner.onclick = function(){
// 			window.open(clickTag)
			EB.clickthrough("myClickInteraction", clickTag);
		}
		
		// mouse motion effect
		banner.addEventListener('mousemove', function(e) {
			var rect = banner.getBoundingClientRect();
			var pageX = Math.min(Math.max(rect.left, e.pageX), rect.width);
			var pageY = Math.min(Math.max(rect.top, e.pageY), rect.height);
			motion(pageX - width / 2, pageY - height / 2);
		});
		banner.addEventListener('mouseout', function(e) {
			motion(0, 0);
		});
		function motion(x, y) {
			x /= 100;
			y /= 100;
			TweenLite.to(bg_1_container, 1, { y: y, x: x });
			TweenLite.to(bg_2_container, 1, { y: y*2, x: x*2 });
			TweenLite.to([hanging_1, hanging_2, hanging_3, hanging_4], 1, { y: y*2, x: x*2 });
		}
	})
}