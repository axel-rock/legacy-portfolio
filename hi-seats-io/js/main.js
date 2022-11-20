// If an input has the class .save-preference, it's value is saved and retrieved in localStorage

document.querySelectorAll('.save-preference').forEach((element) => {
	if (localStorage.getItem(element.id || element.name)) element.value = localStorage.getItem(element.id || element.name)
	element.addEventListener('change', () => {
		localStorage.setItem(element.id || element.name, element.value)
	})
})

const highlightLink = document.querySelector('#attaboy-link')

const voiceOver = document.querySelector('audio')

const timeline = gsap
	.timeline({ paused: true })
	.to(document.body, { duration: 1, scrollTo: { y: '#summary', autokill: true } }, 9)
	.to(
		highlightLink,
		{ duration: 5, backgroundPosition: highlightLink.getBoundingClientRect().width + 'px 0', ease: 'sine.inOut' },
		57
	)
	.to(document.body, { duration: 1, scrollTo: { y: '#skills', autokill: true } }, 71.5)
	.call(
		() => {
			document.querySelector('#js').open = false
			document.querySelector('#node').open = true
		},
		null,
		87
	)
	.call(
		() => {
			document.querySelector('#node').open = false
			document.querySelector('#photoshop').open = true
		},
		null,
		106
	)
	.call(
		() => {
			document.querySelector('#photoshop').open = false
			document.querySelector('#observers').open = true
		},
		null,
		120
	)
	.call(
		() => {
			document.querySelector('#observers').open = false
			document.querySelector('#service-worker').open = true
		},
		null,
		136
	)
	.to(document.body, { duration: 1, scrollTo: { y: '#why-seats-dot-io', autokill: true } }, 171)
	.to(document.body, { duration: 1, scrollTo: { y: '#contact', autokill: true } }, 248)

function onUpdate() {
	timeline.time(voiceOver.currentTime)
}

voiceOver.onplay = function () {
	gsap.ticker.add(onUpdate)
}
voiceOver.onpause = function () {
	gsap.ticker.remove(onUpdate)
}
