chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// TODO: Use local storage to store this on form submit
		d_rut.value = '16.357.057-2'

		// Take focus to password fill
		d_pin.focus()

	}
	}, 10);
});
