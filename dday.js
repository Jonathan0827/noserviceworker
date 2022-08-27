var dday = new Date("September 8, 2022, 02:00:00").getTime();
setInterval(function () {
	var today = new Date();
	const utc = 
      today.getTime() + 
      (today.getTimezoneOffset() * 60 * 1000);
	  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
const kr_curr = 
      new Date(utc + (KR_TIME_DIFF));
	var gap = dday - kr_curr;
	var d = Math.floor(gap / (1000 * 60 * 60 * 24));
	var h = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) - 1);
	var m = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60) - 1);
	var s = Math.ceil((gap % (1000 * 60)) / 1000 - 1);
	if (gap <= 0) {
		document.getElementById("count").innerHTML = "<h2>No D-day to view.";
	} else {
		document.getElementById(
			"count"
		).innerHTML = `<h2>${d} days ${h} hours ${m} minutes ${s} seconds left untill <a href="https://www.apple.com/apple-events/">Apple Far Out</a> event.`;
	}
}, 1);
