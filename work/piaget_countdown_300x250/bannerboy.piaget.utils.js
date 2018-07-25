bannerboy.createText = function(parameters) {
	parameters.type = parameters.type || "p";
	parameters.width = parameters.width || "auto";
	parameters.className = parameters.className || parameters.font || "gotham";
	parameters.fontSize = parameters.fontSize || 10;
	parameters.textAlign = parameters.textAlign || "center";
	parameters.innerHTML = parameters.innerHTML || parameters.text;
	return bannerboy.createElement(parameters);
};

bannerboy.createButton = function(text, parent){
	var container = bannerboy.createElement({width: 110, height: 35, margin: 10, overflow: "hidden", position: "relative", display: "inline-block", borderRadius: "3px 3px", border: "solid 1px #d0b778", cursor: "pointer", parent: parent});
	var background = bannerboy.createElement({width: 110, height: 35, backgroundColor: "#d0b778", parent: container});
	var text = bannerboy.createElement({top: 1, innerHTML: text, width: 110, textAlign: "center", lineHeight: "35px", className: "gotham button", fontSize: 10, parent: container});
	
	// Add event listeners
	container.addEventListener("mouseenter", function(){
		background.to(.3, {x: 110, ease: Power1.easeInOut});
	});
	container.addEventListener("mouseleave", function(){
		background.to(.3, {x: 0, ease: Power1.easeInOut});
	});
	
	return container;
}

bannerboy.createTicker = function(parameters) {
	var container = bannerboy.createElement(parameters);
	// var newYearsEve = new Date(Date.UTC(2016, 0));
	var newYearsEve = new Date();
		newYearsEve.setDate(newYearsEve.getDate() + 7)
	var flips = [];
	
	for(var i = 0; i < 8; i++) {
		var left = 31*i;
		var textAlign = "left";
		if (i%2 == 0) {
			left += 4;
			textAlign = "right";
		}
		flips.push(bannerboy.createFlip({left: left, textAlign: textAlign, parent: container}))
	}
	container.set({ height: 50, width: 248 });

	var update = function(speed) {
		var remaining = getRemainingTimeBefore(newYearsEve);
		for(var i = 0; i < remaining.chars.length; i++){
			// flips[i].change(remaining.chars[i], speed);
			TweenLite.delayedCall(
				.1 * (remaining.chars.length - i),
				flips[i].change,
				[remaining.chars[i], speed],
				flips[i]
			)
		}
		TweenLite.delayedCall(1, update, [1])
	}

	update(0);

	return container;
}

bannerboy.createFlip = function(parameters) {
	var container = bannerboy.createElement(parameters);
	var inner     = bannerboy.createElement({/*perspective: 50, */width: 27, height: 50, parent: container});
	var top       = bannerboy.createElement({/*perspective: 50, */width: 27, height: 25, overflowY: "hidden", overflowX: "visible", parent: inner});
	var bottom    = bannerboy.createElement({/*perspective: 50, */width: 27, height: 25, overflowY: "hidden", overflowX: "visible", top: 25, parent: inner});
	var currentNumber = -1;

	top.current     = bannerboy.createNumber({parent: top})
	top.next        = bannerboy.createNumber({parent: top})
	bottom.current  = bannerboy.createNumber({parent: bottom, top: -25})
	bottom.next     = bannerboy.createNumber({parent: bottom, top: -25})
	
	var shade = bannerboy.createElement({backgroundImage: "img/ticker_shadow.png", width: 27, height: 50, parent: inner})

	container.change = function(number, speed){
		if(currentNumber < 0)
			currentNumber = 0;
		else if(currentNumber == number) 
			return; 

		// Set initial state
		top.next.className = bottom.next.className = 1 == number ? "gotham flip padded" : "gotham flip";
		top.current.className = bottom.current.className = 1 == currentNumber ? "gotham flip padded" : "gotham flip";
		top.next.innerHTML = bottom.next.innerHTML = number.toString();
		top.current.innerHTML = bottom.current.innerHTML = currentNumber.toString();
		TweenLite.set(top.next, {zIndex: -1, rotation: .1, color: "#DDD"})
		TweenLite.set(top.current, {rotationX: -.1, color: "#DDD"})
		TweenLite.set(bottom.next, {rotationX: 179.9, backgroundColor: "#999"})
		TweenLite.set(bottom.current, {rotationX: -.1})

		// Animate
		TweenLite.to(top.current, speed*.9, {ease: Power3.easeIn, rotationX: -180, color: "rgba(0,0,0,0)"})
		TweenLite.to(bottom.next, speed*.9, {ease: Power3.easeIn, rotationX: .1, backgroundColor: "#000"})
		
		currentNumber = number;
	}

	return container;
}

bannerboy.createNumber = function(parameters){
	var _parameters = {width: 27, height: 50, fontSize: 34, backfaceVisibility: "hidden", className: "gotham flip"};
	for(var key in parameters)
		_parameters[key] = parameters[key];
	return bannerboy.createElement(_parameters);
}

bannerboy.createRing = function(parent){
	var current = 0;
	var container = bannerboy.createElement({className: "still ring_0041", top: 60, scaleX: .7, scaleY: .7, parent: parent});
	var sprite = bannerboy.createElement({className: "ring", parent: container});
	
	function update(){
		current = (current + 1) % 59
		sprite.className = "ring ring_00"+(59 - current);
		TweenLite.delayedCall(1/20, update)
	}
	TweenLite.delayedCall(2, update)
	
// 	TweenLite.ticker.addEventListener("tick", update);
	
	return container;
}

function getRemainingTimeBefore(date) {
	var timestamp = date.getTime()/1000 - new Date().getTime()/1000;
	var delta = timestamp;
	var days = Math.floor(delta / 86400);
	delta -= days * 86400;
	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;
	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;
	var seconds = delta % 60;
	// ~~ == Math.floor
	var chars = [
		~~(days / 10), days % 10, 
		~~(hours / 10), hours % 10, 
		~~(minutes / 10), minutes % 10, 
		~~(seconds / 10), ~~seconds % 10
	];

	return {
		timestamp: ~~timestamp,
		days: days,
		hours: hours,
		minutes: minutes,
		seconds: ~~seconds,
		chars: chars
	}
}