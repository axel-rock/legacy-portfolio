function Butterfly(parameters){
	parameters.width = 114;
	parameters.height = 73;
	parameters.transformStyle = "preserve-3d";
	parameters.transformPerspective = 500;
	parameters.z = 10;
	parameters.overflow = "hidden";
	var butterfly = bannerboy.createElement(parameters);
		var wrapper = butterfly.wrapper = bannerboy.createElement({width: butterfly.get("width"), height: butterfly.get("height"), rotationY: 330, rotationX: 20, transformStyle: "preserve-3d", parent: butterfly});
			var body = bannerboy.createElement({backgroundImage: "butterfly.png", rotationY: 90, parent: wrapper});
			var shadow = butterfly.shadow = bannerboy.createElement({backgroundImage: "butterfly_shadow.png", opacity: 0, z: -15, parent: wrapper});

			var wing_left_1  = bannerboy.createElement({width: butterfly.get("width"), height: butterfly.get("height"), transformStyle: "preserve-3d", overflow: "hidden", parent: wrapper});
				wing_left_1.shadow  = bannerboy.createElement({backgroundImage: "butterfly_1_shadow.png", parent: wing_left_1});
				wing_left_1.light = bannerboy.createElement({backgroundImage: "butterfly_1.png", backfaceVisibility: "hidden", z: 1, parent: wing_left_1});

			var wing_left_2 = bannerboy.createElement({width: butterfly.get("width"), height: butterfly.get("height"), transformStyle: "preserve-3d", overflow: "hidden", parent: wrapper});
				wing_left_2.shadow = bannerboy.createElement({backgroundImage: "butterfly_2_shadow.png", parent: wing_left_2});
				wing_left_2.light = bannerboy.createElement({backgroundImage: "butterfly_2.png", backfaceVisibility: "hidden", z: 1, parent: wing_left_2});

			var wing_right_1 = bannerboy.createElement({width: butterfly.get("width"), height: butterfly.get("height"), transformStyle: "preserve-3d", overflow: "hidden", scaleX: -1, parent: wrapper});
				wing_right_1.shadow = bannerboy.createElement({backgroundImage: "butterfly_1_shadow.png", parent: wing_right_1});
				wing_right_1.light = bannerboy.createElement({backgroundImage: "butterfly_1.png", backfaceVisibility: "hidden", z: 1, parent: wing_right_1});

			var wing_right_2 = bannerboy.createElement({width: butterfly.get("width"), height: butterfly.get("height"), transformStyle: "preserve-3d", overflow: "hidden", scaleX: -1, parent: wrapper});
				wing_right_2.shadow = bannerboy.createElement({backgroundImage: "butterfly_2_shadow.png", parent: wing_right_2});
				wing_right_2.light = bannerboy.createElement({backgroundImage: "butterfly_2.png", backfaceVisibility: "hidden", z: 1, parent: wing_right_2});

	// TweenLite.set([wing_left_2, wing_left_1, wing_right_2], {opacity: 0, pointerEvents: "none"})

	butterfly.last = {x: butterfly.get('x'), y: butterfly.get('y')};
	butterfly.time = 0;
	butterfly.stopped = true;

	function wings() {
		var speed = .25;
		var max = 30;
		var acceleration = 1.5;
		var current = {x: butterfly.get('x'), y: butterfly.get('y')};

		// Distance with previous frame
		var distance = { x: butterfly.last.x - current.x, y: butterfly.last.y - current.y}
		distance.total = Math.sqrt( distance.x * distance.x + distance.y * distance.y ).toFixed(3);

		if(distance.total > 0) {
			speed *= bannerboy.utils.map(Math.abs(distance.total), 0, 100, 1, 1/acceleration, true);
		} else if(Math.random() > .7) {
			speed *= bannerboy.utils.map(Math.random(), 0, 1, 1.5, .7, true);
		}

		wing_left_1.to( speed / 2, {rotationY:  60 - max * Math.PI, ease: Power3.easeInOut});
		wing_right_1.to(speed / 2, {rotationY: -60 + max * Math.PI, ease: Power3.easeInOut});
		wing_left_2.to( speed / 2, {rotationY:  45 - max * .75 * Math.PI, ease: Power3.easeInOut});
		wing_right_2.to(speed / 2, {rotationY: -45 + max * .75 * Math.PI, ease: Power3.easeInOut});
		
		if(!butterfly.stopped) {
			wing_left_1.to( speed / 2, {rotationY:  60, delay: speed / 2});
			wing_right_1.to(speed / 2, {rotationY: -60, delay: speed / 2});
			wing_left_2.to( speed / 2, {rotationY:  45, delay: speed / 2});
			wing_right_2.to(speed / 2, {rotationY: -45, delay: speed / 2});
		
			butterfly.last = {x: current.x.toFixed(1), y: current.y.toFixed(1)};
			TweenLite.delayedCall(speed, wings, [], this);
		} else {
			wing_left_1.to( speed * 2, {rotationY:  15, delay: speed / 2});
			wing_right_1.to(speed * 2, {rotationY: -15, delay: speed / 2});
			wing_left_2.to( speed * 2, {rotationY:  10, delay: speed / 2});
			wing_right_2.to(speed * 2, {rotationY: -10, delay: speed / 2});
		}
	}

		
	butterfly.start = function(){
		TweenLite.killDelayedCallsTo(butterfly.idle);
		butterfly.stopped = false;
		wings();
	}
	butterfly.stop = function(){
		TweenLite.killDelayedCallsTo(butterfly.idle);
		butterfly.stopped = true;
	}

	butterfly.idle = function(){
		butterfly.stopped = true;
		var speed = 1.5 + Math.random();

		wing_left_1.to( speed * .3, {rotationY:  30, delay: speed});
		wing_right_1.to(speed * .3, {rotationY: -30, delay: speed});
		wing_left_2.to( speed * .3, {rotationY:  25, delay: speed});
		wing_right_2.to(speed * .3, {rotationY: -25, delay: speed});
		wing_left_1.to( speed * .7, {rotationY:  15, delay: speed * 1.3});
		wing_right_1.to(speed * .7, {rotationY: -15, delay: speed * 1.3});
		wing_left_2.to( speed * .7, {rotationY:  10, delay: speed * 1.3});
		wing_right_2.to(speed * .7, {rotationY: -10, delay: speed * 1.3});

		TweenLite.delayedCall(speed + Math.random() * speed, butterfly.idle, [], this);
	}

	return butterfly;
}