let cacheName = 'restaurantsCache';

self.addEventListener('install', function(event) {

	console.log('Service Worker install event fired.');

	event.waitUntil(

		caches.open(cacheName)
		.then(function(cache) {
			console.log('Cache opened.');
			
			return cache.addAll([
	          './index.html',
	          './restaurant.html',
	          './js/main.js',
	          './js/restaurant_info.js',
	          './js/dbhelper.js',
	          './css/styles.css',
	          './img/1.jpg',
	          './img/2.jpg',
	          './img/3.jpg',
	          './img/4.jpg',
	          './img/5.jpg',
	          './img/6.jpg',
	          './img/7.jpg',
	          './img/8.jpg',
	          './img/9.jpg',
	          './img/10.jpg'
			]);
		})
		.catch(function(err) {
			console.log('There was an error opening the cache.');
			console.log(err);	
		})			
	);
});


self.addEventListener('fetch', function(event){
	event.respondWith(
		caches.match(event.request)
		.then(function(response) {
			return response || fetch(event.request);
		})
	);
});