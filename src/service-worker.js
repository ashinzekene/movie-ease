/**
 * Check out https://googlechromelabs.github.io/sw-toolbox/ for
 * more info on how to use sw-toolbox to custom configure your service worker.
 */


'use strict';
importScripts('./build/sw-toolbox.js');

self.toolbox.options.cache = {
  name: 'ionic-cache'
};

// pre-cache our key assets
self.toolbox.precache(
  [
    'index.html',
    'manifest.json',
    './build/main.js',
    './build/vendor.js',
    './build/main.css',
    './build/polyfills.js',
    './build/0.js',
    './build/1.js',
    './build/2.js',
    './build/3.js',
    './build/4.js',
    './build/5.js',
    './build/6.js',
    './build/7.js',
    './build/8.js'
  ]
);

// dynamically cache any other local assets
self.toolbox.router.any('/*', self.toolbox.fastest);

// for any other requests go to the network, cache,
// and then only use that cached resource if your user goes offline
self.toolbox.router.default = self.toolbox.networkFirst;
