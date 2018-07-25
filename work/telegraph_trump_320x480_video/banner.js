var bannerboy = bannerboy || {};
bannerboy.main = function() {
	var width = 320
	var height = 480
	var border = bannerboy.createElement({width: width, height: height, border: 'solid 1px #d5d5d5', boxSizing: 'border-box', overflow: "hidden", parent: document.body})
	var banner = bannerboy.createElement({id: "banner", width: width, height: height, left: -border.get("borderWidth"), top: -border.get("borderWidth"), backgroundColor: "#e42285", cursor: "pointer", parent: border})

	var images = [
		"txt_3.png",
		"icon.png",
		"logo.png",
		"txt_2.png",
		"txt_1.png",
	];

	bannerboy.preloadImages(images, function() {

		/* Create elements
		================================================= */

		var sequence_container = bannerboy.createElement({top: 73, width: 320, height: 320, parent: banner});
		var footer = bannerboy.createElement({bottom: 0, width: 320, height: 88, parent: banner});
			var footer_shape = bannerboy.createElement({backgroundColor: "#ffffff", bottom: 0, width: 320, height: 88, parent: footer});
			var txt_3 = bannerboy.createElement({backgroundImage: "txt_3.png", left: 86, bottom: 28, retina: true, parent: footer});
			var icon = bannerboy.createElement({backgroundImage: "icon.png", left: 30, bottom: 20, retina: true, parent: footer});
		var logo = bannerboy.createElement({backgroundImage: "logo.png", left: 30, top: 30, retina: true, parent: banner});
		var txt_2 = bannerboy.createElement({backgroundImage: "txt_2.png", left: 31, top: 57, retina: true, parent: banner});
		var txt_1 = bannerboy.createElement({backgroundImage: "txt_1.png", left: 30, top: 31, retina: true, parent: banner});

		/* Initiate
		================================================= */

		var map = {}

		for (var i = 29; i <= 38; i++) map[i] = i - 9
		for (var i = 74; i <= 84; i++) map[i] = 73
		for (var i = 90; i <= 100; i++) map[i] = 89

		var imageSequence = new ImageSequence({
			basename: 'sequence/img_',
			range: [0, 105],
			// autoplay: true,
			// loop: true,
			reverse: true,
			map: map,
			parent: sequence_container
		})

		// mask the edge of the image sequence
		var gradient = bannerboy.createElement({width: '100%', height: 10, top: -5, className: 'gradient', parent: sequence_container})

		/* Animations
		================================================= */

		var tl = new BBTimeline()
			.absolute(.5)
			.staggerFrom([txt_1, txt_2], 1, {opacity: 0, ease: Power1.easeInOut}, .5)
			.chain(1)
			.call(imageSequence.play)
			.chain(5)
			.to([txt_1, txt_2], 1, {opacity: 0, ease: Power1.easeInOut})
			.chain()
			.from(logo, 1, {opacity: 0, ease: Power1.easeInOut})

		/* Interactions
		================================================= */

		/* Helpers
		================================================= */

		/* Scrubber
		================================================= */
		function scrubber(tl) {
			if (window.location.origin == "file://") {
				bannerboy.include(["../bannerboy_scrubber.min.js"], function() {
					if (bannerboy.scrubberController) bannerboy.scrubberController.create({"main timeline": tl});
				});
			}
		}
	});
};