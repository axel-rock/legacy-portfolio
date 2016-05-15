var cb = function() {
		var h = document.getElementsByTagName('head')[0];
	
		var l = document.createElement('link');
		l.rel = 'stylesheet';
		l.href = 'css/style.css';
		h.parentNode.insertBefore(l, h);
		
		var gfl = document.createElement('link');
		gfl.rel = 'stylesheet';
		gfl.href = 'http://fonts.googleapis.com/css?family=Libre+Baskerville:400,700,400italic';
		h.parentNode.insertBefore(gfl, h);
		
	};
var raf = requestAnimationFrame || mozRequestAnimationFrame || webkitRequestAnimationFrame || msRequestAnimationFrame;
if (raf) raf(cb);
else window.addEventListener('load', cb);

new cbpScroller(document.getElementById('cbp-so-scroller'));
smoothScroll.init();