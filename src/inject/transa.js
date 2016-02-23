function extendedClickMenu(level, opt) {

	if (level === 0 && opt === 'SCW') {
		originalClickMenu(0, 'SCW');
		parent.queueClickMenu(1, 'SLC');
	} else {
		originalClickMenu(level, opt);
	}
}

function queueClickMenu(level, opt) {
	var action = function() {
		var readyStateCheckInterval = setInterval(function() {
			if (frame2.document.readyState === "complete") {
				clearInterval(readyStateCheckInterval);
				frame2.clickMenu.call(frame2, level, opt);
			}
		}, 10);
	}

	setTimeout(function() {
		action();
	}, 1000);
}

if(window.clickMenu) {
	window.originalClickMenu = window.clickMenu;
	window.clickMenu = window.extendedClickMenu;
}
