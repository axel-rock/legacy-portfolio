'use strict'

function init() {
  Helper.onReady()
  var width = Helper.getDimensions().width,
  height = Helper.getDimensions().height,
  border = Helper.createElement({id: 'border', width: width, height: height, backgroundColor: '#e1daf9', border: 'solid 1px #ccc', overflow: 'hidden', parent: document.body}),
  banner = Helper.createElement({id: 'banner', width: width, height: height, left: -1, top: -1, padding: 0, cursor: 'pointer', position: 'absolute', parent: border}),
  tl = new TimelineMax(),
  images = [
    'bird.png',
    'bridge_front.png',
    'character_boy.png',
    'character_girl.png',
    'city.jpg',
    'cloud_1.png',
    'cloud_2.png',
    'logo.png',
    'product_end.jpg',
    'product.jpg',
    'txt_1.png',
  ]

  Helper.preloadImages(images, function() {
    var product_end = Helper.createElement({image: 'product_end.jpg', parent: banner})
    var logo_end = Helper.createElement({image: 'logo.png', parent: banner})
    var txt_1 = Helper.createElement({image: 'txt_1.png', parent: banner})

    var scene = Helper.createElement({width: width, height: height, parent: banner})
      var city = Helper.createElement({image: 'city.jpg', parent: scene})
      var character_girl = Helper.createElement({image: 'character_girl.png', transformOrigin: '50% 100%', parent: scene})
      var character_boy = Helper.createElement({image: 'character_boy.png', transformOrigin: '50% 100%', parent: scene})
      var bridge_front = Helper.createElement({image: 'bridge_front.png', parent: scene})

    var clouds = Helper.createElement({width: width, height: height, parent: banner})
      var product = Helper.createElement({image: 'product.jpg', parent: clouds})
      var logo = Helper.createElement({image: 'logo.png', parent: clouds})
      var cloud_2 = Helper.createElement({image: 'cloud_2.png', bottom: 0, left: width, retina: false, parent: clouds})
      var bird = Helper.createElement({image: 'bird.png', transformOrigin: '50% 100%', parent: clouds})
      var cloud_1 = Helper.createElement({image: 'cloud_1.png', bottom: 0, right: width, retina: false, parent: clouds})

    tl
      .to(product, 3.5, {scale: 1.2, ease: Power0.easeNone})

      .to(cloud_1, 2.8, {x: 630, ease: Power0.easeNone}, 0.7)
      .to(cloud_2, 3, {x: -1000, ease: Power0.easeNone}, 0.5)
      .fromTo(bird, 2, {rotation: 35}, {rotation: -25, ease: Power0.easeNone}, 1.5)

      .from(scene, 0.2, {opacity: 0, ease: Power0.easeNone}, 3)
      .to(clouds, 0.3, {opacity: 0, ease: Power0.easeNone}, 3)

      // .to(product, 0.5, {opacity: 0, ease: Power0.easeNone}, 3)
      .to(scene, 3, {scale: 1.2, ease: Power1.easeIn}, 2.8)
      .fromTo(character_girl, 2.4, {rotation: -5}, {rotation: 1, ease: Power0.easeNone}, 2.8)
      .fromTo(character_boy, 2.4, {rotation: 5}, {rotation: -1, ease: Power0.easeNone}, 2.8)

      .to(scene, 0.6, {opacity: 0, ease: Power0.easeNone}, 4.5)
      .from(product_end, 1, {opacity: 0, ease: Power0.easeNone}, 4.5)
      .from(logo_end, 0.8, {opacity: 0, ease: Power0.easeNone}, 5.8)
      .from(txt_1, 0.8, {opacity: 0, ease: Power0.easeNone}, 5.8);

    banner.addEventListener('mouseenter', function() {
    })

    banner.addEventListener('mouseleave', function() {
    })

    banner.addEventListener('click', function(e) {
      Helper.onClick()
    })
  })
}
