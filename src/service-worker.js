'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'movie-ease'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    './build/*.js$',
    './build/main.css',
    'index.html',
    'manifest.json'
  ]
);

// dynamically cache any other local assets
// self.toolbox.router.get("/build/*", function(req) {
//   return new Response(req.url)
// })
// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
