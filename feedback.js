function subFeedback() {
	const title = document.getElementById("title").value;
	const message = document.getElementById("message").value;

	const link = `https://github.com/Jonathan0827/noserviceworker/discussions/new?body=${message}&title=${title}`;
	window.open(link);
	console.log(link);
}
