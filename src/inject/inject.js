chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		var script = document.createElement('script');
		script.src = chrome.extension.getURL('src/inject/transa.js');
		(document.head || document.documentElement).appendChild(script);
	}
	}, 10);
});
