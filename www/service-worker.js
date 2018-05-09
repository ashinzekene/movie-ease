<<<<<<< HEAD
/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


=======
>>>>>>> 51baf99698d7c5c0486158bc8b215786f7effd45
'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
<<<<<<< HEAD
  name: 'ionic-cache'
=======
  name: 'movie-ease'
>>>>>>> 51baf99698d7c5c0486158bc8b215786f7effd45
};

// pre-cache our key assets
self.toolbox.precache(
  [
<<<<<<< HEAD
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    'index.html',
    'manifest.json'
=======
    'index.html',
    'manifest.json',
    './build/main.js',
    './build/main.css',
    './build/polyfills.js',
    './build/0.main.js',
    './build/1.main.js',
    './build/2.main.js',
    './build/3.main.js',
    './build/4.main.js',
    './build/5.main.js',
    './build/6.main.js',
    './build/7.main.js',
    './build/8.main.js'
>>>>>>> 51baf99698d7c5c0486158bc8b215786f7effd45
  ]
);

// dynamically cache any other local assets
<<<<<<< HEAD
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
=======
// self.toolbox.router.get("/build/*", function(req) {
//   return new Response(req.url)
// })
// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkOnly;
>>>>>>> 51baf99698d7c5c0486158bc8b215786f7effd45
