// var clickTag = "https://www.panerabread.com";
var bannerboy = bannerboy || {};
bannerboy.main = function() {

	var width = 300;
	var height = 600;
	var banner = bannerboy.createElement({width: width, height: height, backgroundColor: "#ffffff", overflow: "hidden", cursor: "pointer", boxSizing: "border-box", border: "solid 1px #ddd", parent: document.body});
	var tl = new TimelineLite({useFrames: true})

	var sprite_config = {
		bag: 10,
		camera: 29,
		dog: 48,
		max: 57,
	}

	banner.onclick = function() {
		// window.open(clickTag);
		servo.clickthrough('exitClick');
	};

	var images = [
		"bg.jpg",
		"logo.png",
		"cta_txt.png",
		"txt_1.png",
		"txt_2.png",
		"txt_3.png",
		"arm.png",
		"grabbed.png",
		"thumb.png",
	]

	for (var i = 1; i <= sprite_config.max; i++) {
		images.push("sequence/sprite_"+i+".png")
	};

	bannerboy.preloadImages(images, function(){


		var bg = bannerboy.createElement({backgroundImage: "bg.jpg", parent: banner})

		var top_bags = bannerboy.createElement({backgroundColor:"none", left:6, top:6, width:width-12, height:132, overflow:"hidden", opacity:1, parent:banner});
			// var bag_1 = bannerboy.createElement({backgroundImage:"sequence/sprite_10.png", left:-117, top:-80, retina:false, parent:top_bags});
			// var bag_2 = bannerboy.createElement({backgroundImage:"sequence/sprite_10.png", left:-8, top:-80, retina:false, parent:top_bags});
			// var bag_3 = bannerboy.createElement({backgroundImage:"sequence/sprite_10.png", left:99, top:-80, retina:false, parent:top_bags});

		var animation_wrapper = bannerboy.createElement({backgroundColor:"none", opacity:1.0, left:0, top:176, width:300, height:250, parent:banner})

		var shadow = bannerboy.createElement({backgroundImage: "shadow.png", left: 175, top: 174, retina: true, zIndex: 0, parent: animation_wrapper});
			// var cropper = bannerboy.createElement({width: width, height: height, /*clip: "rect(10px 288px 222px 10px)",*/ parent: animation_wrapper});
			var cropper = bannerboy.createElement({width: 300, height: 250, clip: "rect(-50px 294px 222px 10px)", parent: animation_wrapper});
		var sprite = new Sprite({id: "sprite", backgroundImage: "sequence/sprite_" + sprite_config.bag + ".png", width: 300, height: 250, zIndex: 2, top: -30, left: 75, parent: cropper})

		// var cta = bannerboy.createElement({backgroundImage: "cta.png", left: 33, top: 131, retina: true, parent: banner});

		var ctaContainer = bannerboy.createElement({left: 26, top: 490, height:31, width:123, parent: banner});
			var cta = bannerboy.createElement({ overflow:"hidden", height:31, width:123, background:"#ffffff", opacity:0.73, parent:ctaContainer});
				var cta_txt = bannerboy.createElement({backgroundImage: "cta_txt.png",left: 26, top: 5, retina:true, force3d:"true", backfaceVisibility: "hidden", rotationZ: 0.0001, autoRound: false, parent:cta});
				banner.addEventListener("mouseenter", function() {cta.to(0.4, {opacity: 1});});
				banner.addEventListener("mouseleave", function() {cta.to(0.3, {opacity:0.73});});
				var ctaGradient = bannerboy.createElement({ left:-300, height:ctaContainer.get("height"), width:ctaContainer.get("width"),
							background: "rgba(255,255,255,0)",
							background: "-moz-linear-gradient(-45deg, rgba(255,255,255,0) 1%, rgba(255,255,255,0.6) 52%, rgba(237,237,237,0) 100%)",
							background: "-webkit-gradient(left top, right bottom, color-stop(1%, rgba(255,255,255,0)), color-stop(52%, rgba(255,255,255,1)), color-stop(100%, rgba(237,237,237,0)))",
							background: "-webkit-linear-gradient(-45deg, rgba(255,255,255,0) 1%, rgba(255,255,255,0.6) 52%, rgba(237,237,237,0) 100%)",
							background: "-o-linear-gradient(-45deg, rgba(255,255,255,0) 1%, rgba(255,255,255,0.6) 52%, rgba(237,237,237,0) 100%)",
							background: "-ms-linear-gradient(-45deg, rgba(255,255,255,0) 1%, rgba(255,255,255,0.6) 52%, rgba(237,237,237,0) 100%)",
							background: "linear-gradient(135deg, rgba(255,255,255,0) 1%, rgba(255,255,255,0.6) 52%, rgba(237,237,237,0) 100%)",
							filter:     "progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ededed', GradientType=1 )"
							 , parent:cta});

		var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", left: 37-10, top: 70, retina: true, parent: animation_wrapper});
		var txt_2 = bannerboy.createElement({backgroundImage: "txt_2.png", left: 37-10, top: 70, retina: true, parent: animation_wrapper});
		var txt_3 = bannerboy.createElement({backgroundImage: "txt_3.png", left: 37-10, top: 69, retina: true, parent: animation_wrapper});

		var logo = bannerboy.createElement({backgroundImage: "logo.png", left: 178, top: 490, retina: true, zIndex: 2, parent: banner});

		// All duration are in frames, not seconds.
		tl
		.set(shadow, {opacity: .3})
		.set(sprite.container, {x: -5, y: 3})
		.call(sprite.set, [sprite_config.bag], sprite)

		// .addLabel("book", "+=25")
		// .call(sprite.to, [sprite_config.bag], sprite, "book")
		// .to(shadow, 7, {scale: .5, opacity: 0}, "book")
		// .to(shadow, 7, {scale: 1, opacity: .3}, "book+=7")
		// .to(sprite.container, 14, {x: 5, y: 6}, "book")

		.addLabel("camera", "+=33")
		.call(sprite.to, [sprite_config.camera], sprite, "camera")
		.to(shadow, 9, {scale: .5, opacity: 0}, "camera")
		.to(shadow, 9, {scale: 1, opacity: .3}, "camera+=9")
		.to(sprite.container, 9, {scale: .8, x: -7, y: 20}, "camera+=9")

		.addLabel("dog", "+=25")
		.call(sprite.to, [sprite_config.dog], sprite, "dog")
		.to(shadow, 9, {scale: .5, opacity: 0}, "dog")
		.to(shadow, 9, {scale: 1, opacity: .3}, "dog+=9")
		.to(sprite.container, 18, {scale: 1, x: -4, y: 5}, "dog")

		// .addLabel("kite", "+=25")
		// .call(sprite.to, [87], sprite, "kite")
		// .to(shadow, 10, {scale: .5, opacity: 0}, "kite")
		// .to(shadow, 10, {scale: .5, opacity: .15}, "kite+=10")
		// .to(sprite.container, 20, {y: 25}, "kite")

		.addLabel("bag", "+=25")
		.call(sprite.to, [sprite_config.bag + sprite_config.max], sprite, "bag")
		.to(sprite.container, 18, {y: 4}, "bag")
		.to(txt_1, 15, {opacity: 0, ease: Power1.easeInOut}, "bag")
		.from(txt_2, 15, {opacity: 0, ease: Power1.easeInOut}, "bag+=15")
		.to(shadow, 9, {scale: .5, opacity: 0}, "bag")
		.to(shadow, 9, {scale: 1, opacity: .3}, "bag+=9")

		.addLabel("frame6", "+=50")
		.call(sprite.grab.resume, null, sprite.grab, "frame6")
		.to(shadow, 5, {/*scale: 0, */opacity: 0}, "frame6+=10")
		.to(txt_2, 15, {opacity: 0, ease: Power1.easeInOut}, "frame6+=10")
		// .staggerFrom([txt_3, ctaContainer, logo], 15, {opacity: 0, ease: Power1.easeInOut}, 3, "frame6+=25")
		.staggerFrom([txt_3], 15, {opacity: 0, ease: Power1.easeInOut}, 3, "frame6+=25")
		.to(ctaGradient, 25, {x:420, ease:Power1.easeNone})


	function Sprite(parameters){
		var container = this.container = bannerboy.createElement(parameters);
		var currentFrame = 1;
		var targetFrame = 1;
		var config = {
			className: "sprite",
			max: sprite_config.max,
		}
		var hand_rotation = 10;

		var wrapper = bannerboy.createElement({width: container.get("width"), height: container.get("height"), parent: container})
		var arm = bannerboy.createElement({backgroundImage: "arm.png", left: 163, top: -40, zIndex: 1, retina: true, parent: wrapper});
		var placeholder = bannerboy.createElement({width: container.get("width"), height: container.get("height"), backgroundImage: "sequence/" + config.className + "_" + sprite_config.bag + ".png", zIndex: 2, parent: wrapper})
		var grabbed = bannerboy.createElement({backgroundImage: "grabbed.png", left: arm.get("left") - 10, top: arm.get("top")+143, zIndex: 3, retina: true, parent: wrapper});
		var thumb = bannerboy.createElement({backgroundImage: "thumb.png", left: arm.get("left"), top: arm.get("top"), zIndex: 4, retina: true, parent: wrapper});
		var hand = [arm, thumb];

		TweenLite.set(hand, {transformOrigin: "18px 150px", rotation: hand_rotation})

		this.to = function(frame){
			targetFrame = frame;
		}

		this.set = function(frame){
			currentFrame = frame;
			targetFrame = frame;
			container.set({backgroundImage: "sequence/" + config.className + "_" + currentFrame + ".png"})
		}

		function update(){
			// Handle looping through the sequence
			if(currentFrame != currentFrame % config.max) {
				currentFrame = currentFrame % config.max;
				targetFrame = targetFrame % config.max;
			}
			if(currentFrame == targetFrame) return;
			var step = 1;
			if(targetFrame < currentFrame)
				step = -1;
			container.set({backgroundImage: "url(sequence/" + config.className + "_" + (currentFrame+=step) + ".png)"})
		}

		this.grab = new TimelineLite({useFrames: false})
			.pause()
			.from(wrapper, .1, {opacity: 0})
			.set(container, {backgroundImage: ""})
			.timeScale(2)
			.from(hand, 1, {y: -75, x: 25, ease: Back.easeOut.config(.8)})
			.addLabel("grab", "-=.5")
			.from(grabbed, .3, {opacity: 0}, "grab")
			.addLabel("lift", "-=.3")
			.to(wrapper, 1, {y: -200, rotation: hand_rotation, ease: Power1.easeIn}, "lift")
			.to(wrapper, .8, {x: 80+55, ease: Power1.easeIn}, "lift+=.1")

		TweenLite.ticker.fps(30);
		TweenLite.delayedCall(.5, function(){
			TweenLite.ticker.addEventListener("tick", update);
		})
	}

	})
}