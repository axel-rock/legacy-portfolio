Helper.createTextElement = function(args) {
	var default_options = {
		display: 'inline-block',
		textAlign: 'center',
		className: 'text',
		letterSpacing: '-0px',
		whiteSpace: 'nowrap',
	}

	if (args.height) {
		var fontFactor = 0.7
		args.fontSize = ~~(args.height / fontFactor)
		args.lineHeight = fontFactor
		// args.height = args.height + 'px'
	}

	args.text = args.text.replace(/atp_1000_purple/g, '<img src="atp_1000_purple.png" class="inline"/>')
	args.text = args.text.replace(/atp_1000_white/g, '<img src="atp_1000_white.png" class="inline"/>')

	for (var i in default_options) {
		if (!args[i])
			args[i] = default_options[i]
	}

	var txt = Helper.createElement(args)

	return txt
}
