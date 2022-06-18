module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,png,css,js,xml,ico,json,md,txt}'
	],
	swDest: 'serviceworker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};