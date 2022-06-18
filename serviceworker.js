if (!self.define) {
	let e,
		i = {};
	const c = (c, n) => (
		(c = new URL(c + ".js", n).href),
		i[c] ||
			new Promise((i) => {
				if ("document" in self) {
					const e = document.createElement("script");
					(e.src = c), (e.onload = i), document.head.appendChild(e);
				} else (e = c), importScripts(c), i();
			}).then(() => {
				let e = i[c];
				if (!e)
					throw new Error(`Module ${c} didn’t register its module`);
				return e;
			})
	);
	self.define = (n, a) => {
		const d =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href;
		if (i[d]) return;
		let r = {};
		const o = (e) => c(e, d),
			f = { module: { uri: d }, exports: r, require: o };
		i[d] = Promise.all(n.map((e) => f[e] || o(e))).then(
			(e) => (a(...e), r)
		);
	};
}
define(["./workbox-e8bc0738"], function (e) {
	"use strict";
	self.addEventListener("message", (e) => {
		e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
	}),
		e.precacheAndRoute(
			[
				{
					url: "about.html",
					revision: "8f2c58cdabf42323ac7b1c2046593750",
				},
				{
					url: "android-icon-144x144.png",
					revision: "d36b14edfc1a678d9678235407839b86",
				},
				{
					url: "android-icon-192x192.png",
					revision: "a42907ec3fed74d499515446d6ec5306",
				},
				{
					url: "android-icon-36x36.png",
					revision: "9f1c8f37d2470d8199320e48dc220c38",
				},
				{
					url: "android-icon-48x48.png",
					revision: "a4c92de1caeb686b1f03606ceca12b91",
				},
				{
					url: "android-icon-72x72.png",
					revision: "9299a2fff72bf2eb56f2db29203960ec",
				},
				{
					url: "android-icon-96x96.png",
					revision: "4415aaa9f8d6d676f08930fa9e24c9ad",
				},
				{
					url: "aos.css",
					revision: "697b9b8dc154db3743d590d1b0c9f5b4",
				},
				{ url: "aos.js", revision: "348b394ae05b79fc21652c836311fc2c" },
				{
					url: "apple-icon-114x114.png",
					revision: "6139d62a8a28aa1e5ec983e3c3b0ea81",
				},
				{
					url: "apple-icon-120x120.png",
					revision: "5dd494a30e812e7f86a72023712bd0dc",
				},
				{
					url: "apple-icon-144x144.png",
					revision: "d36b14edfc1a678d9678235407839b86",
				},
				{
					url: "apple-icon-152x152.png",
					revision: "42be7fd457cce8f06bd56615e19ae6ee",
				},
				{
					url: "apple-icon-180x180.png",
					revision: "8506c3c3c4f10a852425621140c025b0",
				},
				{
					url: "apple-icon-57x57.png",
					revision: "6fe2b9d4f1951a7ff270d6468aac0730",
				},
				{
					url: "apple-icon-60x60.png",
					revision: "605236c73ac1a89928969108a0976c4b",
				},
				{
					url: "apple-icon-72x72.png",
					revision: "9299a2fff72bf2eb56f2db29203960ec",
				},
				{
					url: "apple-icon-76x76.png",
					revision: "3568420d231928d762634c8ccb5f85b4",
				},
				{
					url: "apple-icon-precomposed.png",
					revision: "58a16f4bfb5118b72c9e52ebf77d95fa",
				},
				{
					url: "apple-icon.png",
					revision: "58a16f4bfb5118b72c9e52ebf77d95fa",
				},
				{
					url: "browserconfig.xml",
					revision: "653d077300a12f09a69caeea7a8947f8",
				},
				{
					url: "dday.html",
					revision: "6c69a303219edcfd05a51e2fa09bd0b8",
				},
				{
					url: "dday.js",
					revision: "4801cb34f895a077d2f0d22b4426ae90",
				},
				{
					url: "favicon-16x16.png",
					revision: "f666c9436de3ceb7cd8b83512fb5acb5",
				},
				{
					url: "favicon-32x32.png",
					revision: "2a49659429fb1b3f7b3156ad1d2ee666",
				},
				{
					url: "favicon-96x96.png",
					revision: "4415aaa9f8d6d676f08930fa9e24c9ad",
				},
				{
					url: "favicon.ico",
					revision: "566f125b5e58e66bf64ebe2cb57d7990",
				},
				{
					url: "feedback.js",
					revision: "4ad57af54f312e8d20daadf515c91105",
				},
				{
					url: "icon.png",
					revision: "08472375810aaf0ac79de758d94b8244",
				},
				{
					url: "index.html",
					revision: "8fbf7a18393dc6e25c876c11fbdaa355",
				},
				{
					url: "main.js",
					revision: "4422455d7ede008df76d742a86405c9e",
				},
				{
					url: "manifest.json",
					revision: "6ee056a244bf018360fcfd83e18e4b55",
				},
				{
					url: "ms-icon-144x144.png",
					revision: "d36b14edfc1a678d9678235407839b86",
				},
				{
					url: "ms-icon-150x150.png",
					revision: "7f9447793fde805d4bb9fe1f23203645",
				},
				{
					url: "ms-icon-310x310.png",
					revision: "5285baee37f28bbd68df5a9e70c201ef",
				},
				{
					url: "ms-icon-70x70.png",
					revision: "49783ced2708d9a79dd1ad235561a645",
				},
				{
					url: "naverac298d57519703dd220d80c5d75e2204.html",
					revision: "0a68241980e0130a44774fabff2a3699",
				},
				{
					url: "package-lock.json",
					revision: "2f3096f4d7406228c959c4ff9ccbdc31",
				},
				{
					url: "package.json",
					revision: "88b08d23d8afcf21d0efb1e49e313140",
				},
				{
					url: "README.md",
					revision: "c9cf7d798ad69d3619210b849813238a",
				},
				{
					url: "sitemap.txt",
					revision: "1ea3969c88c0d30015cf6044a1f32961",
				},
				{
					url: "style.css",
					revision: "4acd1a708c47c82bab650c05c37af50d",
				},
			],
			{ ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
		);
});
//# sourceMappingURL=serviceworker.js.map
