var bannerboy = bannerboy || {};
bannerboy.main = function() {
	var width = 970, height = 250, polite = false, visible = true;

	var banner = bannerboy.createElement({width: width, height: height, backgroundColor: "#f2f3f5", overflow: "hidden", border: "solid 1px #b4b4b4", boxSizing: "border-box", cursor: "pointer", alpha: 0, parent: document.body});

	onPolite()

	function onPolite(){

		var images = [
			"img/cta.png",
			"img/droid_body.svg",
			"img/droid_arm.svg",
			"img/droid_legs.svg",
			"img/droid_fingers.svg",
			"img/txt_1.png",
			"img/txt_2.png",
			"img/phone_3_logo.png",
			"img/phone_2_logo.png",
			"img/phone_1_logo.png",
			"img/phone_1_ui.png",
			"img/scroll_mark.png",
			"img/picture_2.jpg",
			"img/picture_1.jpg",
			"img/album.jpg",
			"img/phone_1.png",
			"img/phone_2.jpg",
			"img/phone_3.jpg",
		];
		head = "characters/head.svg",
		eyes = "characters/eyes.svg",
		torso = "characters/torso.svg",
		arm_l = "characters/arm.svg",
		arm_r = "characters/arm.svg",
		leg_l = "characters/leg.svg",
		leg_r = "characters/leg.svg";
		eyes_lid = "characters/eyes_lid.svg";

		images.push(head, eyes, eyes_lid, torso, arm_l, leg_l);

		bannerboy.preloadImages(images, function() {

			droid = bannerboy.createElement({id: "droid", left: 663, top: 165, width: 46, height: 47, parent: banner, transformOrigin: "bottom center"});
			droid_leg_l = bannerboy.createElement({backgroundImage: "img/droid_legs.svg", left: 18, top: 30, width: 16, height: 17, transformOrigin: "top center", parent: droid});
			droid_leg_r = bannerboy.createElement({backgroundImage: "img/droid_legs.svg", left: 27, top: 30, width: 16, height: 17, transformOrigin: "top center", parent: droid});
			droid_body = bannerboy.createElement({backgroundImage: "img/droid_body.svg", left: 12, width: 34, height: 37, parent: droid});
			droid_arm_l = bannerboy.createElement({backgroundImage: "img/droid_arm.svg", top: 5, width: 12, height: 13, transformOrigin: "80% 93%", parent: droid});
			droid_arm_r = bannerboy.createElement({backgroundImage: "img/droid_arm.svg", top: 5, right: 0, width: 12, height: 13, transformOrigin: "76% 95%", rotation: -148, parent: droid});
			droid_fingers = bannerboy.createElement({backgroundImage: "img/droid_fingers.svg", top: -3, width: 4, height: 4, parent: droid_arm_l});
			txt_1 = bannerboy.createElement({id: "txt_1", backgroundImage: "img/txt_1.png", left: 672, top: 25, parent: banner});
			txt_2 = bannerboy.createElement({id: "txt_2", backgroundImage: "img/txt_2.png", left: 804, top: 103, parent: banner});
			phone_1_container = bannerboy.createElement({id:"phone_1_container", width: width, height: height, transformOrigin: "bottom center", zIndex: 2, parent: banner});
			phone_3_logo = bannerboy.createElement({id: "phone_3_logo", backgroundImage: "img/phone_3_logo.png", left: 503, top: 32, parent: banner});
			phone_2_logo = bannerboy.createElement({id: "phone_2_logo", backgroundImage: "img/phone_2_logo.png", left: 129, top: 32, parent: banner});
			phone_1_logo = bannerboy.createElement({id: "phone_1_logo", backgroundImage: "img/phone_1_logo.png", left: 288, top: 25, parent: banner});
			phone_1_screen = bannerboy.createElement({id: "phone_1_screen", backgroundColor: "#000", left: 267, top: 93, width: 177, height: 177, backgroundSize: "cover", overflow: "hidden", parent: phone_1_container});
			album = bannerboy.createElement({backgroundImage: "img/album.jpg", width: 177, height: 1950, y: -10, parent: phone_1_screen});
			scroll_mark = bannerboy.createElement({id: "scroll_mark", backgroundImage: "img/scroll_mark.png", left: 162, top: 51, parent: phone_1_screen});
			picture_2 = bannerboy.createElement({backgroundImage: "img/picture_2.jpg", parent: phone_1_screen});
			picture_1 = bannerboy.createElement({
				backgroundImage: "img/picture_1.jpg",
				width: 	phone_1_screen.get("height"),
				height: phone_1_screen.get("height"),
				bottom: phone_1_screen.get("height") + 210 - album.get("height"),
				scale: 57/phone_1_screen.get("height"),
				right: 0,
				transformOrigin: "bottom right",
				parent: phone_1_screen
			});
			phone_1_ui = bannerboy.createElement({id: "phone_1_ui", backgroundImage: "img/phone_1_ui.png", parent: phone_1_screen});
			phone_1 = bannerboy.createElement({id: "phone_1", backgroundImage: "img/phone_1.png", left: 257, top: 50, parent: phone_1_container, zIndex: 2});
			phone_2 = bannerboy.createElement({id: "phone_2", backgroundImage: "img/phone_2.jpg", left: 103, top: 67, parent: banner});
			phone_3 = bannerboy.createElement({id: "phone_3", backgroundImage: "img/phone_3.jpg", left: 467, top: 67, parent: banner});
			cta = bannerboy.createElement({id: "cta", left: 727, top: 171, width: 220, height: 41, borderRadius: 6, backgroundColor: "#79C158", parent: banner});
			cta_txt = bannerboy.createElement({backgroundImage: "img/cta.png", parent: cta});

			//////////////////
			// C H A R A C T E R
			character_container = bannerboy.createElement({id:"character_container", width: 300, height: 250, bottom: -11, left: 360, transformOrigin: "bottom center", parent: banner, scale: .55});
			character = bannerboy.createElement({id:"character", width: 300, height: 250, transformOrigin: "bottom center", parent: character_container});
			head = bannerboy.createElement({id: "head", backgroundImage: head, left: 106, top: -12, width: 94, height: 86});
			eyes_lid = bannerboy.createElement({id: "eyes_lid", backgroundImage: eyes_lid, left: 0, top: 4, y: 5, width: 35, height: 9});
			eyes = bannerboy.createElement({id: "eyes", backgroundImage: eyes, left: 0, top: 0, width: 35, height: 35});
			var eyes_container = bannerboy.createElement({left: 132, top: 45, width: eyes.get("width"), height: eyes.get("height")});
			eyes_container.style.overflow = "hidden";
			eyes_container.appendChild(eyes);
			eyes_container.eyes = eyes;
			eyes_container.appendChild(eyes_lid);
			eyes_container.eyes_lid = eyes_lid;
			torso = bannerboy.createElement({id: "torso", backgroundImage: torso, left: 111, top: 76, width: 78, height: 91});
			arm_l = bannerboy.createElement({id: "arm_l", backgroundImage: arm_l, left:  86, top: 77, width: 20, height: 94});
			arm_r = bannerboy.createElement({id: "arm_r", backgroundImage: arm_r, left: 194, top: 76, width: 20, height: 94}); TweenLite.set(arm_r, {scaleX: -1});
			leg_l = bannerboy.createElement({id: "leg_l", backgroundImage: leg_l, left: 104, top: 123, width: 40, height: 107});
			leg_r = bannerboy.createElement({id: "leg_r", backgroundImage: leg_r, left: 156, top: 123, width: 40, height: 107}); TweenLite.set(leg_r, {scaleX: -1});

			//////////////////
			// S K E L E T O N
			joint_base 		= createJoint(null,  "base",  0, 0);
			joint_leg_l 	= createJoint(leg_l, "leg_l", leg_l.get("width"), 0);
			joint_leg_r		= createJoint(leg_r, "leg_r", 0, 0);
			joint_torso 	= createJoint(torso, "torso", torso.get("width") / 2, torso.get("height") * 3/4);
			joint_head 		= createJoint(head,  "head",  head.get("width") / 2, head.get("height"));
			joint_eyes 		= createJoint(eyes_container,  "eyes",  eyes_container.get("width") / 2, eyes_container.get("height") / 2, 0);
			joint_arm_l 	= createJoint(arm_l, "arm_l", arm_l.get("width") / 2, 0);
			joint_arm_r 	= createJoint(arm_r, "arm_r", arm_r.get("width") / 2, 0);

			joints = [ joint_base ];
			addJoint(joint_leg_l,	joint_base);
			addJoint(joint_leg_r,	joint_base);
			addJoint(joint_torso,	joint_base);
			addJoint(joint_arm_l,	joint_torso);
			addJoint(joint_arm_r,	joint_torso);
			addJoint(joint_head,	joint_torso);
			addJoint(joint_eyes,	joint_head);

			update();

			polite = true;
			if(visible)
				onVisible();
		})
	}

	function onVisible(){

		var simple_bounce_tl = new TimelineLite()
		for (var i=0; i<7; i++)
			simple_bounce_tl
			.to(character, .1, {scaleY: .98, scaleX: 1.02})
			.to(character, .1, {scaleY: 1, scaleX: 1})

		tl = new TimelineLite()
		.to(banner, .3, {alpha: 1})
		.addLabel("jump")
		.add([
			TweenLite.from(character, .4, {x: -250}),
			TweenLite.fromTo(joint_head, .5, {_angle: -10}, {_angle: 10}),
			TweenLite.to(eyes_lid, .1, {y: 0}),
			TweenLite.to(character, .25, {y: -75}),
			TweenLite.to(character, .25, {y: 0, delay: .25, ease: Back.easeOut.config(1)}),
			TweenLite.to(joint_leg_l, .2, {_angle: 25}),
			TweenLite.to(joint_leg_l, .2, {_angle: 0, delay: .2}),
			TweenLite.to(joint_leg_r, .2, {_angle: -25}),
			TweenLite.to(joint_leg_r, .2, {_angle: 0, delay: .2}),
			TweenLite.to(joint_arm_l, .2, {_angle: 80}),
			TweenLite.to(joint_arm_l, .2, {_angle: 0, delay: .2}),
			TweenLite.to(joint_arm_r, .2, {_angle: -60}),
			TweenLite.to(joint_arm_r, .2, {_angle: 0, delay: .2}),
		], "+=0")
		.addLabel("scroll")
		.set(character_container, {zIndex: 3})
		.add([
			TweenLite.to(eyes_lid, .2, {y: 5}),
			TweenLite.to(eyes_lid, .2, {y: 0, delay: .2}),
			TweenLite.to(eyes_lid, .2, {y: 5, delay: .6}),
			TweenLite.to(eyes_lid, .2, {y: -3, delay: .8}),
			TweenLite.to(eyes_lid, .2, {y: 5, delay: 1}),
			TweenLite.to(joint_arm_l, .5, {_angle: 180}),
			TweenLite.to(joint_arm_l, .5, {_angle: 0, delay: .6}),
			TweenLite.to(joint_arm_r, .25, {_angle: 30}),
			TweenLite.to(joint_arm_r, .5, {_angle: -20, delay: .3}),
			TweenLite.to(joint_arm_r, .3, {_angle: -5, delay: .9}),
			TweenLite.to(joint_torso, .25, {_angle: -30}),
			TweenLite.to(joint_torso, .35, {_angle: 10, delay: .25}),
			TweenLite.to(character, .35, {scaleY: .95, scaleX: 1.05, delay: .25}),
			TweenLite.to(joint_torso, .15, {_angle: 5, delay: .6}),
			TweenLite.to(character, .15, {scaleY: 1, scaleX: 1, delay: .6}),
			TweenLite.to(joint_head, .5, {_angle: -10}),
			TweenLite.to(joint_head, .25, {_angle:  15, delay: .5}),
			TweenLite.to(joint_head, .25, {_angle:  5, delay: .75}),
			TweenLite.to([album, picture_1], 1, {y: -800, ease: Power2.easeInOut, delay: .15}),
			TweenLite.to(scroll_mark, 1, {y: 25, ease: Power1.easeInOut, delay: .15}),
		])
		.addLabel("scroll again")
		.add([
			TweenLite.to(character, .25, {scaleY: .95, scaleX: 1.05}),
			TweenLite.to(character, .15, {scaleY: 1, scaleX: 1, delay: .5}),
			TweenLite.to(eyes_lid, .2, {y: -3}),
			TweenLite.to(eyes_lid, .2, {y: 5, delay: .2}),
			TweenLite.to(eyes_lid, .2, {y: -3, delay: .4}),
			TweenLite.to(joint_torso, .25, {_angle: -45}),
			TweenLite.to(joint_head, .25, {_angle:  -10, delay: .12}),
			TweenLite.to(joint_head, .25, {_angle:  8, delay: .4}),
			TweenLite.to(joint_head, .25, {_angle:  -7, delay: .7}),
			TweenLite.to(joint_arm_l, .25, {_angle: 38}),
			TweenLite.to(joint_arm_r, .25, {_angle: -51}),
			TweenLite.to(joint_torso, .25, {_angle: 15, delay: .25}),
			TweenLite.to(joint_arm_l, .25, {_angle: 170, delay: .25}),
			TweenLite.to(joint_arm_r, .25, {_angle: 20, delay: .25}),
			TweenLite.to(joint_arm_l, .25, {_angle: 0, delay: .5}),
			TweenLite.to(joint_arm_r, .25, {_angle: -30, delay: .5}),
			TweenLite.to(eyes_lid, .2, {y: 5, delay:.8}),
			TweenLite.to([album, picture_1], 1, {y: -1632, ease: Power2.easeInOut, delay: .2}),
			TweenLite.to(scroll_mark, 1, {y: 50, ease: Power1.easeInOut, delay: .2}),
		])
		.addLabel("tap")
		.add([
			TweenLite.to(character, .25, {scaleY: .95, scaleX: 1.05}),
			TweenLite.to(character, .25, {scaleY: 1.05, scaleX: .95, delay: .25}),
			TweenLite.to(eyes_lid, .2, {y: 0, delay: .25}),
			TweenLite.to(joint_torso, .5, {_angle: -20}),
			TweenLite.to(joint_head, .5, {_angle:  10}),
			TweenLite.to(joint_arm_r, .5, {_angle: 0}),
		], "+=.2")
		.add([
			TweenLite.to(character, .5, {scaleY: 1, scaleX: 1}),
			TweenLite.to(joint_torso, .5, {_angle: 0}),
			TweenLite.to(joint_arm_l, .5, {_angle: 80}),
		])
		.add([
			TweenLite.from(picture_1, .1, {alpha: 0}),
			TweenLite.to(picture_1, .5, {scale: 1, y: 0, top: 0, x: (phone_1_screen.get("height") - phone_1_screen.get("width")) /2, ease: Power2.easeInOut}),
			TweenLite.to(character, .25, {scaleY: .95, scaleX: 1.05}),
			TweenLite.to(character, .25, {scaleY: 1.05, scaleX: .95, delay: .25}),
			TweenLite.to(joint_torso, .5, {_angle: 25}),
			TweenLite.to(joint_head, .25, {_angle:  -10, delay: .1}),
			TweenLite.to(joint_head, .25, {_angle:  8, delay: .35}),
			TweenLite.to(joint_head, .25, {_angle:  -2, delay: .6}),
			TweenLite.to(joint_arm_l, .5, {_angle: 0}),
			TweenLite.to(eyes_lid, .2, {y: 5, delay:.6}),
			TweenLite.from(phone_1_ui, .4, {alpha: 0, delay: .4}),
		])
		.addLabel("swipe")
		.add([
			TweenLite.to(album, .1, {alpha: 0}),
			TweenLite.to(eyes_lid, .2, {y: 0, delay:.2}),
			TweenLite.to(character, .2, {scaleY: .95, scaleX: 1.05}),
			TweenLite.to(character, .2, {scaleY: 1.05, scaleX: .95, delay: .2}),
			TweenLite.to(joint_arm_l, .25, {_angle: 170}),
			TweenLite.to(joint_arm_r, .25, {_angle: -20}),
			TweenLite.to(joint_torso, .2, {_angle: -15, delay: .05}),
			TweenLite.to(joint_head, .25, {_angle:  15, delay: .1}),
		], "+=.3")
		.add([
			TweenLite.from(picture_2, .5, {x: 177, ease: Power3.easeInOut}),
			TweenLite.to(picture_1, .5, {x: -177, ease: Power3.easeInOut}),
			TweenLite.to(character, .25, {scaleY: 1, scaleX: 1}),
			TweenLite.to(joint_torso, .25, {_angle: 0}),
			TweenLite.to(joint_arm_l, .25, {_angle: 0}),
			TweenLite.to(joint_arm_r, .25, {_angle: 0}),
			TweenLite.to(joint_head, .20, {_angle: 0, delay: .1}),
			TweenLite.to(eyes_lid, .2, {y: 5, delay:.2}),
		])
		.addLabel("laugh")
		.set(character_container, {zIndex: 1})
		.add([
			TweenLite.to(joint_arm_l, .25, {_angle: -102, _x: -20}),
			TweenLite.to(eyes_lid, .2, {y: 0, delay:.2}),
		], "+=.3")
		.add(simple_bounce_tl, "-=.1")
		.addLabel("walk away")
		.add([
			TweenLite.to(eyes, .4, {x: -4}),
			TweenLite.to(joint_head, .4, {_angle: 8}),
			TweenLite.to(eyes_lid, .2, {y: 5}),
			TweenLite.to(leg_r, .01, {scaleX: 1, x: -25}),
			TweenLite.to(character, 1, {x:  -250, ease: Power1.easeIn}),
			TweenLite.to(joint_arm_l, .35, {_angle:  30, _x: 0}),
			TweenLite.to(joint_arm_r, .35, {_angle: -40}),
			TweenLite.to(joint_leg_l, .35, {_angle:  20}),
			TweenLite.to(joint_leg_r, .35, {_angle: -20}),
			TweenLite.to(joint_arm_l, .35, {_angle: -30, delay: .35}),
			TweenLite.to(joint_arm_r, .35, {_angle:  40, delay: .35}),
			TweenLite.to(joint_leg_l, .35, {_angle: -20, delay: .35}),
			TweenLite.to(joint_leg_r, .35, {_angle:  20, delay: .35}),
			TweenLite.to(joint_arm_l, .35, {_angle:  30, delay: .7}),
			TweenLite.to(joint_arm_r, .35, {_angle: -40, delay: .7}),
			TweenLite.to(joint_leg_l, .35, {_angle:  20, delay: .7}),
			TweenLite.to(joint_leg_r, .35, {_angle: -20, delay: .7}),
		])
		.to([phone_1_container], .5, {scale: .87, x: -10, y: -12}, "-=.5")
		.from(phone_1_logo, .5, {x: -6, y: -15}, "-=.5")
		.to([character_container], 0, {alpha: 0})
		.from(phone_2, .3, {y: height}, "-=.2")
		.from(phone_2_logo, .3, {y: height}, "-=.2")
		.from(phone_3, .3, {y: height}, "-=.2")
		.from(phone_3_logo, .3, {y: height}, "-=.2")
		.from(cta, .6, {alpha: 0}, "-=.5")
		.from(droid, .6, {x: 100, scale: .9, alpha: 0})
		.from(droid_arm_l, .3, {rotation: -148, scale: 1.15})
		.from(droid_body, .3, {rotation: -10}, "-=.3")
		.from(droid_fingers, .3, {x: 5, y: 10}, "-=.2")

		banner.addEventListener("mouseenter", mouseenter)
		banner.addEventListener("mouseleave", mouseleave)
	}

	function mouseenter(){
		TweenLite.to(cta, .3, {backgroundColor: "#7b7c7c"});
	}
	function mouseleave(){
		TweenLite.to(cta, .3, {backgroundColor: "#79C158"});
	}

	function createJoint(div, name, left, top, delay) {
		var joint = bannerboy.createElement({id: name+"-joint", left: left, top: top});
		joint.name = name;

		// tween target values set by gui
		joint._x = 0;
		joint._y = 0;
		joint._angle = 0;

		joint.a = 0;
		joint.rot_speed = 0;
		joint.rot_amount = 0;

		joint.delay = delay == undefined ? 0.3 : delay;

		joint._children = [];

		if(div) {
			joint.set({left: div.get("left") + left});
			joint.set({top: div.get("top") + top});
			div.set({left: -left, top: -top});
			joint.div = div;
			joint.appendChild(div);
		}

		if(name == "eyes") {
			joint.blink = 0;
		}
		character.appendChild(joint);
		return joint;
	}

	function addJoint(joint, parent) {
		if(joints[joints.length - 1] == parent) joints.push(joint);
		else joints.splice(joints.indexOf(parent) + 1, 0, joint);

		joint.boneLength = bannerboy.utils.dist(joint.get("left"), joint.get("top"), parent.get("left"), parent.get("top"));
		joint.boneAngle = Math.atan2(joint.get("top") - parent.get("top"), joint.get("left") - parent.get("left"));
		joint.dx = joint.get("left") - parent.get("left");
		joint.dy = joint.get("top") - parent.get("top");
		joint.parent = parent;

		parent._children.push(joint);
	}

	function update() {

		for(var i = 0; i < joints.length; ++i) {
			var joint = joints[i];

			var angle = joint._angle + Math.sin(joint.a += joint.rot_speed) * joint.rot_amount;
			var x = joint._x;
			var y = joint._y;

			if(joint.parent && joint.parent._gsTransform) {
				var parent_rot = joint.parent._gsTransform.rotation;
				angle += parent_rot;
				var radians = joint.boneAngle + bannerboy.utils.toRadians(parent_rot);
				x += joint.parent._gsTransform.x + Math.cos(radians) * joint.boneLength - joint.dx;
				y += joint.parent._gsTransform.y + Math.sin(radians) * joint.boneLength - joint.dy;
			}

			TweenLite.to(joint, joint.delay, {rotation: angle, force3D: true});
			TweenLite.to(joint, joint.delay / 3, {x: x, y: y});

			if(joint.name == "eyes") {
				var height = joint.div.eyes.get("height");
				//TweenLite.set(joint.div, {});
				TweenLite.set(joint.div, {height: (1 - joint.blink) * (height / 1), y: (1 - joint.blink) * -(height / 2) + height / 2});
				TweenLite.set(joint.div.eyes, {y: joint.blink * -(height / 2)});
			}

		}

		TweenLite.ticker.addEventListener("tick", update);
	}

}
