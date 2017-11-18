'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'movie-ease'
};

// pre-cache our key assets
self.toolbox.precache(
  [
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
  ]
);

// dynamically cache any other local assets
// self.toolbox.router.get("/build/*", function(req) {
//   return new Response(req.url)
// })
// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkOnly;
