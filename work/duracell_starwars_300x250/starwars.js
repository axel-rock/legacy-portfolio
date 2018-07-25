/*
 * A Star Wars animation toolkit
 * 
 * author: axel.rock@bannerboy.com
 **/

var starwars_images = [
	// Death Star
	'death_star.jpg',
	'death_star_lense.png',
	'death_star_light.png',

	// Walker
	'gun_right.png',
	'gin_right_rotation_point.png',
	'walker_head.png',
	'gun_left_shadow.png',
	'gun_left_rotation_point.png',
	'laser_beam.png',
	'laser_base.png',

	// Fighter
	'tie_fighter_cockpit.png',
	'tie_fighter_window.png',
	'tie_fighter_wing.png',
]

function DeathStar(parameters) {
	var container = bannerboy.createElement(parameters),
	wrapper = bannerboy.createElement({width: 280, height: 257, borderRadius: '50%', backgroundColor: 'black', overflow: 'hidden', parent: container}),
	star = bannerboy.createElement({backgroundImage: 'death_star.jpg', borderRadius: '50%', overflow: 'hidden', parent: wrapper}),
	star_mask = new Mask(star, 1),
	lense = bannerboy.createElement({backgroundImage: 'death_star_lense.png', left: 161, top: 47, parent: wrapper}),
	lense_mask_wrapper = bannerboy.createElement({width: lense.get('width'), height: lense.get('height'), borderRadius: '50%', overflow: 'hidden', rotationX: 21, rotationY: 30, scaleX: 1.1, x: 2, parent: lense}),
	light = bannerboy.createElement({backgroundImage: 'death_star_light.png', left: 2, top: 9, parent: wrapper})
		
	lense_mask = new Mask(lense_mask_wrapper, -1)
	lense_mask.reveal = .075
	lense_mask.render()

	// lense_mask_wrapper.set({border: 'solid 1px #33bbff', boxSizing: 'border-box'}) // debug

	this.tl = new BBTimeline()
		.from(wrapper, 8, {x: -20, /*scale: .9, */ease: Power1.easeOut})
		.from(wrapper, 2, {backgroundColor: 'rgba(0, 0, 0, 0)', ease: Power2.easeIn})
		.from([light, lense, star], 2, {opacity: 0, ease: Power2.easeIn})
		.chain()
		.to(star_mask, 4, {reveal: 1, onUpdate: star_mask.render, onUpdateScope: star_mask, ease: Power3.easeInOut})
		.to(light, 3, {opacity: 0, ease: Power2.easeIn})
		.offset(.5)
		.to(lense_mask, 3, {reveal: 1, onUpdate: lense_mask.render, onUpdateScope: lense_mask, ease: Power3.easeInOut})

	function Mask(parent, direction) {
		var width = parent.get('width'),
		height = parent.get('height'),
		canvas = this.canvas = bannerboy.createElement({type: 'canvas', width: width, height: height, top: 0, left: 0, parent: parent}),
		context = canvas.getContext('2d')

		canvas.reveal = 0

		canvas.render = function() {
			context.clearRect(0, 0, width, height)

			context.globalAlpha = bannerboy.utils.map(canvas.reveal, .3, 1, 1, 0, true)
			var offset = canvas.reveal * width * 3
			var gradient = context.createRadialGradient(width/2 - (offset * .9 * direction), height/2, 0, width/2 - (offset * .9 * direction), height/2, width/2 * 1.1 + offset / 2)
			gradient.addColorStop(0, '#000')
			gradient.addColorStop(.9, '#000')
			gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

			context.fillStyle = gradient
			context.fillRect(0, 0, width, height)

			context.globalAlpha = bannerboy.utils.map(canvas.reveal, 1, .3, 1, 0, true)
			offset =  (1 - canvas.reveal) * width * 3
			gradient = context.createRadialGradient(width/2 + (offset * .9 * direction), height/2, 0, width/2 + (offset * .9 * direction), height/2, width/2 * 1.1 + offset / 2)
			gradient.addColorStop(0, 'rgba(0, 0, 0, 0)')
			gradient.addColorStop(.9, 'rgba(0, 0, 0, 0)')
			gradient.addColorStop(1, '#000')

			context.fillStyle = gradient
			context.fillRect(0, 0, width, height)
		}

		canvas.render()

		return canvas
	}

}

function Walker(parameters, parent) {
	var container = bannerboy.createElement(parameters),
	wrapper = bannerboy.createElement({left: 1, width: 156, height: 100, transformOrigin: '-20% 40%', parent: container}),
	gun_right = bannerboy.createElement({left: 92, top: 12, width: 64, height: 26, parent: wrapper}),
		gun_right = bannerboy.createElement({backgroundImage: 'gun_right.png', left: 23, parent: gun_right}),
		gun_right_rotation_point = bannerboy.createElement({backgroundImage: 'gin_right_rotation_point.png', left: 0, top: 12, retina: true, parent: gun_right}),
	walker_head = bannerboy.createElement({backgroundImage: 'walker_head.png', parent: wrapper}),
	gun_left = bannerboy.createElement({left: 33, top: 11, width: 60, height: 24, parent: wrapper}),
		gun_left_shadow = bannerboy.createElement({backgroundImage: 'gun_left_shadow.png', left: 24, parent: gun_left}),
		gun_left_rotation_point = bannerboy.createElement({backgroundImage: 'gun_left_rotation_point.png', left: 10, top: 20, retina: true, parent: gun_left}),

	laser_left = new Laser({left: 46, top: -4, rotation: -28, parent: gun_left}),
	laser_right = new Laser({left: 26, top: -2, rotation: -28, parent: gun_right}),

	shooting = false

	function Laser(parameters) {
		var laser = bannerboy.createElement(parameters)
			laser.base = bannerboy.createElement({backgroundImage: 'laser_base.png', scale: 0, parent: laser})
			laser.beam = bannerboy.createElement({backgroundImage: 'laser_beam.png', scale: 0, transformOrigin: 'center left', parent: laser})

		this.shoot = function() {
			return new BBTimeline()
				.fromTo(laser.base, .05, {scale: 0}, {scale: 1})
				.fromTo(laser.beam, .1, {scale: 0}, {scale: 1.5, ease: Power2.easeIn})
				.fromTo(laser.beam, .4, {x: 0}, {x: 2000, ease: Power2.easeIn})
				.offset(.05)
				.to(laser.base, .2, {scale: 0})
		}
	}

	gun_right.set({transformOrigin: gun_right_rotation_point.get('left') + 'px ' + gun_right_rotation_point.get('top') + 'px'})
	gun_left.set({transformOrigin: gun_left_rotation_point.get('left') + 'px ' + gun_left_rotation_point.get('top') + 'px'})

	parent.addEventListener('mousemove', function(event) {
		var rotation = bannerboy.utils.map(event.pageY, 0, parent.get('height'), -10, 40, true)
		TweenMax.to([gun_left, gun_right], 1, {rotation: rotation, ease: Power0.easeNone})
		TweenMax.to(wrapper, 1, {rotation: rotation/4, ease: Power0.easeNone})
	})

	this.shoot = function() {
		return new BBTimeline()
			.add(laser_left.shoot())
			.offset(bannerboy.utils.randomRange(.05, .1))
			.add(laser_right.shoot())
	}
}

function Fighter(parameters) {
	if (isInternetExplorer(12)) return new FlatFighter(parameters)
	var width = 116, height = 168,
	container = bannerboy.createElement(bannerboy.combineObjects({width: width, height: height, transformStyle: 'preserve-3d'}, parameters)),
	cockpit = bannerboy.createElement({backgroundImage: 'tie_fighter_cockpit.png', centerY: true, parent: container}),
	front_window = bannerboy.createElement({backgroundImage: 'tie_fighter_window.png', center: true, z: 10, x: -1, parent: container}),
	wing_left = bannerboy.createElement({backgroundImage: 'tie_fighter_wing.png', left: -74, rotationY: 90, parent: container}),
	wing_right = bannerboy.createElement({backgroundImage: 'tie_fighter_wing.png', left: 40, rotationY: -90, parent: container})

	return container
}

// Fighter without 3d for IE
function FlatFighter(parameters) {
	var width = 116, height = 168,
	container = bannerboy.createElement(bannerboy.combineObjects({width: width, height: height, scaleX: .9}, parameters)),
	wing_right = bannerboy.createElement({backgroundImage: 'tie_fighter_wing.png', left: 40, scaleX: .65, rotation: 5, parent: container}),
	cockpit = bannerboy.createElement({backgroundImage: 'tie_fighter_cockpit.png', centerY: true, parent: container}),
	front_window = bannerboy.createElement({backgroundImage: 'tie_fighter_window.png', center: true, parent: container}),
	wing_left = bannerboy.createElement({backgroundImage: 'tie_fighter_wing.png', left: -74, scaleX: .55, rotation: 5, parent: container})

	return container
}

// Helper functions

function isInternetExplorer(version) {
	var ie = -1;
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp('MSIE ([0-9]{1,}[\.0-9]{0,})');
		if (re.exec(ua) != null)
			ie = parseFloat( RegExp.$1 );
	}
	else if (navigator.appName == 'Netscape'){
		var ua = navigator.userAgent;
		var re  = new RegExp('Trident/.*rv:([0-9]{1,}[\.0-9]{0,})');
		if (re.exec(ua) != null)
			ie = parseFloat( RegExp.$1 );
	}
	ie = ie < 0 ? false : ie;
	if (version)
		return ie && ie < version
	else
		return ie
}












