// Require bannerboy.js || bannerboy.min.js
var PixieDust = function(){

	// Parameters 

	var _ = this;
	this.config = {
		delay: 12,
		repeat: false,
		width: null,
		height: null,
		particle: {
			amount: 10,
			path: "pixiedust/",
			name: "particle_",
			range: [1, 4],
			images: [],
		}
	};

	this.progress = 0;
	this.particles = []
	this.parent = null;
	this.dust = {
		canvas: null,
		context: null,
		
	}
	this.reveal = {
		image: null,
		radius: 50,
		canvas: null,
		context: null
	}
	this.curve = {
		values: null,
		curviness: 2,
	}
	this.position = {
		x: 0,
		y: 0
	}
	this.buffer = [];

	// Core functions

	this.create = function(parent){
		console.group("PixieDust:create");
		console.time("time to create");

		this.parent = parent;
		this.parent.id = this.parent.id || "PixieDust";
		this.config.width = this.config.width || this.parent.get("width");
		this.config.height = this.config.height || this.parent.get("height");
		this.prepareImage();
		this.prepareCanvas();
		this.prepareParticles();

		console.timeEnd("time to create");
		console.groupEnd();
		return this;
	}

	this.prepareImage = function(){
		if(!this.reveal.image){
			return console.error("reveal image is not defined")
		}
		if(typeof this.reveal.image === "string"){
			var src = this.reveal.image;
			this.reveal.image = new Image();
			this.reveal.image.src = src;
		}
		return this;
	}

	this.prepareCanvas = function(){
		this.dust.canvas = bannerboy.createElement({type: "canvas", id: "dust", width: this.config.width, height: this.config.height, parent: this.parent, zIndex: 2});
		this.dust.context = this.dust.canvas.getContext("2d");

		this.reveal.canvas = bannerboy.createElement({type: "canvas", id: "reveal", width: this.config.width, height: this.config.height, parent: this.parent, zIndex: 1});
		this.reveal.context = this.reveal.canvas.getContext("2d");

		return this;
	}

	this.prepareParticles = function(){
		for (var i = this.config.particle.range[0]; i <= this.config.particle.range[1]; i++) {
			var image = new Image();
			image.src = this.config.particle.path + this.config.particle.name + i + ".png";
			this.config.particle.images.push(image)
		}

		for (var i = 0; i < this.config.particle.amount; i++) {
			var image = this.config.particle.images[i%this.config.particle.images.length];
			var particle = new PixieDustParticle(image);
			particle.spawn = this.position;
			this.particles.push(particle);
		}
		return this;
	}

	this.update = function(){
		this.buffer.push({
			x: this.position.x,
			y: this.position.y
		});

		this.renderReveal();
		this.renderParticles();
		return this;
	}

	this.renderParticles = function(){

		// if(this.particles.idle.length > 0) {
		// 	this.particles.push(this.particles.idle.pop().reset());
		// }

		var ctx = this.dust.context;
		ctx.clearRect(0, 0, this.config.width, this.config.height);
		for (var i = 0; i < this.particles.length; i++) {
			var particle = this.particles[i];
			var image = particle.image;
			particle.spawn = this.position;
			ctx.save();
			ctx.translate(particle.x, particle.y);
			ctx.rotate(particle.rotation);
			ctx.scale(particle.scale*.5, particle.scale*.5)
			ctx.globalAlpha = particle.opacity;
			ctx.drawImage(image, -image.width/2, -image.height/2, image.width, image.height);
			ctx.restore();
		};

		return this;
	}

	this.renderReveal = function(){

		var ctx = this.reveal.context, x = this.position.x, y = this.position.y, w = this.reveal.radius, image = this.reveal.image, width = image.width, height = image.height;

		if(this.buffer.length < this.config.delay) return;

		var pos = this.buffer.shift();
		x = pos.x;
		y = pos.y;

		for (var i = 0; i < 3; i++) {
			var offsetX = x + w * i - w;
			var radius = w / (1 + i); 

			gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
		    gradient.addColorStop(0, 'rgba(237, 237, 237, 1)');
		    gradient.addColorStop(.5, 'rgba(237, 237, 237, .5)');
		    gradient.addColorStop(1, 'rgba(237, 237, 237, 0)');

			ctx.beginPath();
			ctx.arc(offsetX, y, radius, 0, 2 * Math.PI);
			ctx.closePath();
		    ctx.fillStyle = gradient;
			ctx.fill();
		};

		// console.log(this.reveal.image.height);

		ctx.save();
		ctx.globalCompositeOperation = "source-atop";
		ctx.drawImage(image, 0, 0, width, height, 0, 0, width, height);
		ctx.restore();

		return this;
	}

	this.start = function(duration, ease){
		TweenLite.from(this.reveal, .5, {radius: 0})
		TweenLite.to(this.position, duration, {bezier:this.curve, ease:ease || Power1.easeInOut, onCompleteScope: this, onComplete: this.ended});
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].start();
		};
		TweenLite.ticker.addEventListener("tick", this.update, this);
		return this;
	}

	this.ended = function(){
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].stop();
		};
		if(this.config.repeat)
			this.start(2);
		return this;
	}

	// Getter and Setter

	this.setRevealImage = function(image) { this.reveal.image = image; return this; };
	this.setCurveValues = function(values) { 
		this.position = values[0];
		this.curve.values = values; 
		return this; 
	};
	this.setCurveCurviness = function(curviness) { this.curve.curviness = curviness; return this; };
	this.setCurve = function(curve) { this.setCurveValues(curve.values); this.setCurveCurviness(curve.curviness); return this; }

	// Particle object

	var PixieDustParticle = function(image){
		this.x = 0;
		this.y = 0;
		this.spawn = {
			x: 0,
			y: 0
		};
		this.vx = 0;
		this.vy = 0;
		this.speed = 0;
		this.heading = 0;
		this.scale = 0;
		this.rotation = 0;
		this.friction = .99;
		this.image = image;
		this.opacity = .75;
		this.active = false;
		this.lifetime = 1;

		this.reset = function(){

			this.heading = bannerboy.utils.randomRange(0, 2*Math.PI);
			this.speed = bannerboy.utils.randomRange(1.2, 1.8);
			this.x = this.spawn.x;
			this.y = this.spawn.y;
			this.vx = Math.cos(this.heading) * this.speed;
			this.vy = Math.sin(this.heading) * this.speed;
			this.rotation = bannerboy.utils.randomRange(0, 360);
			this.scale = 0;
			this.opacity = 1;
			var duration = Math.random()*this.lifetime;
			TweenLite.to(this, duration*.5, {scale: bannerboy.utils.randomRange(.75, 1), ease: Power1.easeOut});
			TweenLite.to(this, duration*.5, {scale: 0, delay: duration*.5, ease: Power1.easeOut});
			TweenLite.to(this, duration*.25, {opacity: 0, delay: duration*.75, ease: Power1.easeIn});

			return this;
		}

		this.update = function(){
			if(this.opacity == 0 && this.active) this.reset();

			if(Math.random() > 0.5) {
				this.heading += bannerboy.utils.randomRange(-Math.PI/4, Math.PI/4); // Change the angle
				this.vx = Math.cos(this.heading) * this.speed;
				this.vy = Math.sin(this.heading) * this.speed;
			}

			// friction and random move can't work together right now
			// this.vx *= this.friction;
			// this.vy *= this.friction;

			this.x += this.vx;
			this.y += this.vy;
			return this;
		}

		this.start = function(){
			this.active = true;
			this.reset();
			TweenLite.ticker.addEventListener("tick", this.update, this);
		}

		this.stop = function(){
			this.active = false;
		}
	}
}