var dday = new Date("June 7, 2022, 02:00:00").getTime();

setInterval(function () {
	var today = new Date().getTime();
	var gap = dday - today;
	var d = Math.floor(gap / (1000 * 60 * 60 * 24));
	var h = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1);
	var m = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60) - 1);
	var s = Math.ceil((gap % (1000 * 60)) / 1000 - 1);
	if (gap <= 0) {
		document.getElementById("count").innerHTML =
			"iOS 16, iPadOS 16, macOS 13, watchOS 8, tvOS 16";
	} else {
		document.getElementById(
			"count"
		).innerHTML = `<h2>${d} days ${h} hours ${m} minutes ${s} seconds left untill`;
	}
}, 1);
