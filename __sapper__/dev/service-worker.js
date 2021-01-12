(function () {
	'use strict';

	// This file is generated by Sapper — do not edit it!
	const timestamp = 1610478185291;

	const files = [
		"service-worker-index.html",
		"2x1.svg",
		"appetizer.jpg",
		"bar.jpg",
		"beef.jpg",
		"beer-solid.svg",
		"beer.svg",
		"beer0.jpg",
		"beerrr.jpg",
		"ber12.jpg",
		"beret.jpg",
		"bert.jpg",
		"bowl.jpg",
		"bp.png",
		"burble.svg",
		"burrito.jpg",
		"data.json",
		"disc.jpg",
		"drink.jpg",
		"eggs.jpg",
		"face.svg",
		"facebook-24px.svg",
		"favicon.png",
		"fried.jpg",
		"github.png",
		"global.css",
		"hamburger.jpg",
		"icon.svg",
		"instagram.svg",
		"locura.svg",
		"logo.svg",
		"manifest.json",
		"meat.jpg",
		"prism.css",
		"producciones.svg",
		"share-solid.svg",
		"share.svg",
		"steak.jpg",
		"tavern1.jpg",
		"twitter.svg",
		"wsp.svg",
		"wsp1.svg"
	];

	const shell = [
		"client/client.405f2f7e.js",
		"client/index.718892e6.js",
		"client/MiniHero.36c819f0.js",
		"client/Share.3139f869.js",
		"client/bebidas.ce0e2aae.js",
		"client/platos.98d20112.js",
		"client/press.fa7ddae9.js",
		"client/promo.2ce07e5d.js",
		"client/shop.52d7f6cc.js",
		"client/sapper-dev-client.4cd68457.js",
		"client/client.f50466f7.js"
	];

	const ASSETS = `cache${timestamp}`;

	// `shell` is an array of all the files generated by the bundler,
	// `files` is an array of everything in the `static` directory
	const to_cache = shell.concat(files);
	const cached = new Set(to_cache);

	self.addEventListener("install", event => {
	  event.waitUntil(
	    caches
	      .open(ASSETS)
	      .then(cache => cache.addAll(to_cache))
	      .then(() => {
	        self.skipWaiting();
	      })
	  );
	});

	self.addEventListener("activate", event => {
	  event.waitUntil(
	    caches.keys().then(async keys => {
	      // delete old caches
	      for (const key of keys) {
	        if (key !== ASSETS) await caches.delete(key);
	      }

	      self.clients.claim();
	    })
	  );
	});

	self.addEventListener("fetch", event => {
	  if (event.request.method !== "GET" || event.request.headers.has("range"))
	    return;

	  const url = new URL(event.request.url);

	  // don't try to handle e.g. data: URIs
	  if (!url.protocol.startsWith("http")) return;

	  // ignore dev server requests
	  if (
	    url.hostname === self.location.hostname &&
	    url.port !== self.location.port
	  )
	    return;

	  // always serve static files and bundler-generated assets from cache
	  if (url.host === self.location.host && cached.has(url.pathname)) {
	    event.respondWith(caches.match(event.request));
	    return;
	  }

	  // for pages, you might want to serve a shell `service-worker-index.html` file,
	  // which Sapper has generated for you. It's not right for every
	  // app, but if it's right for yours then uncomment this section
	  /*
	  if (
	    url.origin === self.origin &&
	    routes.find(route => route.pattern.test(url.pathname))
	  ) {
	    event.respondWith(caches.match("/service-worker-index.html"));
	    return;
	  }
	  */

	  if (event.request.cache === "only-if-cached") return;

	  // for everything else, try the network first, falling back to
	  // cache if the user is offline. (If the pages never change, you
	  // might prefer a cache-first approach to a network-first one.)
	  event.respondWith(
	    caches.open(`offline${timestamp}`).then(async cache => {
	      try {
	        const response = await fetch(event.request);
	        cache.put(event.request, response.clone());
	        return response;
	      } catch (err) {
	        const response = await cache.match(event.request);
	        if (response) return response;

	        throw err;
	      }
	    })
	  );
	});

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS13b3JrZXIuanMiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2aWNlLXdvcmtlci5qcyIsIi4uLy4uL3NyYy9zZXJ2aWNlLXdvcmtlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5leHBvcnQgY29uc3QgdGltZXN0YW1wID0gMTYxMDQ3ODE4NTI5MTtcblxuZXhwb3J0IGNvbnN0IGZpbGVzID0gW1xuXHRcInNlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIixcblx0XCIyeDEuc3ZnXCIsXG5cdFwiYXBwZXRpemVyLmpwZ1wiLFxuXHRcImJhci5qcGdcIixcblx0XCJiZWVmLmpwZ1wiLFxuXHRcImJlZXItc29saWQuc3ZnXCIsXG5cdFwiYmVlci5zdmdcIixcblx0XCJiZWVyMC5qcGdcIixcblx0XCJiZWVycnIuanBnXCIsXG5cdFwiYmVyMTIuanBnXCIsXG5cdFwiYmVyZXQuanBnXCIsXG5cdFwiYmVydC5qcGdcIixcblx0XCJib3dsLmpwZ1wiLFxuXHRcImJwLnBuZ1wiLFxuXHRcImJ1cmJsZS5zdmdcIixcblx0XCJidXJyaXRvLmpwZ1wiLFxuXHRcImRhdGEuanNvblwiLFxuXHRcImRpc2MuanBnXCIsXG5cdFwiZHJpbmsuanBnXCIsXG5cdFwiZWdncy5qcGdcIixcblx0XCJmYWNlLnN2Z1wiLFxuXHRcImZhY2Vib29rLTI0cHguc3ZnXCIsXG5cdFwiZmF2aWNvbi5wbmdcIixcblx0XCJmcmllZC5qcGdcIixcblx0XCJnaXRodWIucG5nXCIsXG5cdFwiZ2xvYmFsLmNzc1wiLFxuXHRcImhhbWJ1cmdlci5qcGdcIixcblx0XCJpY29uLnN2Z1wiLFxuXHRcImluc3RhZ3JhbS5zdmdcIixcblx0XCJsb2N1cmEuc3ZnXCIsXG5cdFwibG9nby5zdmdcIixcblx0XCJtYW5pZmVzdC5qc29uXCIsXG5cdFwibWVhdC5qcGdcIixcblx0XCJwcmlzbS5jc3NcIixcblx0XCJwcm9kdWNjaW9uZXMuc3ZnXCIsXG5cdFwic2hhcmUtc29saWQuc3ZnXCIsXG5cdFwic2hhcmUuc3ZnXCIsXG5cdFwic3RlYWsuanBnXCIsXG5cdFwidGF2ZXJuMS5qcGdcIixcblx0XCJ0d2l0dGVyLnN2Z1wiLFxuXHRcIndzcC5zdmdcIixcblx0XCJ3c3AxLnN2Z1wiXG5dO1xuZXhwb3J0IHsgZmlsZXMgYXMgYXNzZXRzIH07IC8vIGxlZ2FjeVxuXG5leHBvcnQgY29uc3Qgc2hlbGwgPSBbXG5cdFwiY2xpZW50L2NsaWVudC40MDVmMmY3ZS5qc1wiLFxuXHRcImNsaWVudC9pbmRleC43MTg4OTJlNi5qc1wiLFxuXHRcImNsaWVudC9NaW5pSGVyby4zNmM4MTlmMC5qc1wiLFxuXHRcImNsaWVudC9TaGFyZS4zMTM5Zjg2OS5qc1wiLFxuXHRcImNsaWVudC9iZWJpZGFzLmNlMGUyYWFlLmpzXCIsXG5cdFwiY2xpZW50L3BsYXRvcy45OGQyMDExMi5qc1wiLFxuXHRcImNsaWVudC9wcmVzcy5mYTdkZGFlOS5qc1wiLFxuXHRcImNsaWVudC9wcm9tby4yY2UwN2U1ZC5qc1wiLFxuXHRcImNsaWVudC9zaG9wLjUyZDdmNmNjLmpzXCIsXG5cdFwiY2xpZW50L3NhcHBlci1kZXYtY2xpZW50LjRjZDY4NDU3LmpzXCIsXG5cdFwiY2xpZW50L2NsaWVudC5mNTA0NjZmNy5qc1wiXG5dO1xuXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xuXHR7IHBhdHRlcm46IC9eXFwvJC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL2JlYmlkYXNcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3BsYXRvc1xcLz8kLyB9LFxuXHR7IHBhdHRlcm46IC9eXFwvcHJlc3NcXC8/JC8gfSxcblx0eyBwYXR0ZXJuOiAvXlxcL3Byb21vXFwvPyQvIH0sXG5cdHsgcGF0dGVybjogL15cXC9zaG9wXFwvPyQvIH1cbl07IiwiaW1wb3J0IHsgdGltZXN0YW1wLCBmaWxlcywgc2hlbGwgfSBmcm9tIFwiQHNhcHBlci9zZXJ2aWNlLXdvcmtlclwiO1xuXG5jb25zdCBBU1NFVFMgPSBgY2FjaGUke3RpbWVzdGFtcH1gO1xuXG4vLyBgc2hlbGxgIGlzIGFuIGFycmF5IG9mIGFsbCB0aGUgZmlsZXMgZ2VuZXJhdGVkIGJ5IHRoZSBidW5kbGVyLFxuLy8gYGZpbGVzYCBpcyBhbiBhcnJheSBvZiBldmVyeXRoaW5nIGluIHRoZSBgc3RhdGljYCBkaXJlY3RvcnlcbmNvbnN0IHRvX2NhY2hlID0gc2hlbGwuY29uY2F0KGZpbGVzKTtcbmNvbnN0IGNhY2hlZCA9IG5ldyBTZXQodG9fY2FjaGUpO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnN0YWxsXCIsIGV2ZW50ID0+IHtcbiAgZXZlbnQud2FpdFVudGlsKFxuICAgIGNhY2hlc1xuICAgICAgLm9wZW4oQVNTRVRTKVxuICAgICAgLnRoZW4oY2FjaGUgPT4gY2FjaGUuYWRkQWxsKHRvX2NhY2hlKSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgc2VsZi5za2lwV2FpdGluZygpO1xuICAgICAgfSlcbiAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJhY3RpdmF0ZVwiLCBldmVudCA9PiB7XG4gIGV2ZW50LndhaXRVbnRpbChcbiAgICBjYWNoZXMua2V5cygpLnRoZW4oYXN5bmMga2V5cyA9PiB7XG4gICAgICAvLyBkZWxldGUgb2xkIGNhY2hlc1xuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICBpZiAoa2V5ICE9PSBBU1NFVFMpIGF3YWl0IGNhY2hlcy5kZWxldGUoa2V5KTtcbiAgICAgIH1cblxuICAgICAgc2VsZi5jbGllbnRzLmNsYWltKCk7XG4gICAgfSlcbiAgKTtcbn0pO1xuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJmZXRjaFwiLCBldmVudCA9PiB7XG4gIGlmIChldmVudC5yZXF1ZXN0Lm1ldGhvZCAhPT0gXCJHRVRcIiB8fCBldmVudC5yZXF1ZXN0LmhlYWRlcnMuaGFzKFwicmFuZ2VcIikpXG4gICAgcmV0dXJuO1xuXG4gIGNvbnN0IHVybCA9IG5ldyBVUkwoZXZlbnQucmVxdWVzdC51cmwpO1xuXG4gIC8vIGRvbid0IHRyeSB0byBoYW5kbGUgZS5nLiBkYXRhOiBVUklzXG4gIGlmICghdXJsLnByb3RvY29sLnN0YXJ0c1dpdGgoXCJodHRwXCIpKSByZXR1cm47XG5cbiAgLy8gaWdub3JlIGRldiBzZXJ2ZXIgcmVxdWVzdHNcbiAgaWYgKFxuICAgIHVybC5ob3N0bmFtZSA9PT0gc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJlxuICAgIHVybC5wb3J0ICE9PSBzZWxmLmxvY2F0aW9uLnBvcnRcbiAgKVxuICAgIHJldHVybjtcblxuICAvLyBhbHdheXMgc2VydmUgc3RhdGljIGZpbGVzIGFuZCBidW5kbGVyLWdlbmVyYXRlZCBhc3NldHMgZnJvbSBjYWNoZVxuICBpZiAodXJsLmhvc3QgPT09IHNlbGYubG9jYXRpb24uaG9zdCAmJiBjYWNoZWQuaGFzKHVybC5wYXRobmFtZSkpIHtcbiAgICBldmVudC5yZXNwb25kV2l0aChjYWNoZXMubWF0Y2goZXZlbnQucmVxdWVzdCkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIGZvciBwYWdlcywgeW91IG1pZ2h0IHdhbnQgdG8gc2VydmUgYSBzaGVsbCBgc2VydmljZS13b3JrZXItaW5kZXguaHRtbGAgZmlsZSxcbiAgLy8gd2hpY2ggU2FwcGVyIGhhcyBnZW5lcmF0ZWQgZm9yIHlvdS4gSXQncyBub3QgcmlnaHQgZm9yIGV2ZXJ5XG4gIC8vIGFwcCwgYnV0IGlmIGl0J3MgcmlnaHQgZm9yIHlvdXJzIHRoZW4gdW5jb21tZW50IHRoaXMgc2VjdGlvblxuICAvKlxuICBpZiAoXG4gICAgdXJsLm9yaWdpbiA9PT0gc2VsZi5vcmlnaW4gJiZcbiAgICByb3V0ZXMuZmluZChyb3V0ZSA9PiByb3V0ZS5wYXR0ZXJuLnRlc3QodXJsLnBhdGhuYW1lKSlcbiAgKSB7XG4gICAgZXZlbnQucmVzcG9uZFdpdGgoY2FjaGVzLm1hdGNoKFwiL3NlcnZpY2Utd29ya2VyLWluZGV4Lmh0bWxcIikpO1xuICAgIHJldHVybjtcbiAgfVxuICAqL1xuXG4gIGlmIChldmVudC5yZXF1ZXN0LmNhY2hlID09PSBcIm9ubHktaWYtY2FjaGVkXCIpIHJldHVybjtcblxuICAvLyBmb3IgZXZlcnl0aGluZyBlbHNlLCB0cnkgdGhlIG5ldHdvcmsgZmlyc3QsIGZhbGxpbmcgYmFjayB0b1xuICAvLyBjYWNoZSBpZiB0aGUgdXNlciBpcyBvZmZsaW5lLiAoSWYgdGhlIHBhZ2VzIG5ldmVyIGNoYW5nZSwgeW91XG4gIC8vIG1pZ2h0IHByZWZlciBhIGNhY2hlLWZpcnN0IGFwcHJvYWNoIHRvIGEgbmV0d29yay1maXJzdCBvbmUuKVxuICBldmVudC5yZXNwb25kV2l0aChcbiAgICBjYWNoZXMub3Blbihgb2ZmbGluZSR7dGltZXN0YW1wfWApLnRoZW4oYXN5bmMgY2FjaGUgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgY2FjaGUucHV0KGV2ZW50LnJlcXVlc3QsIHJlc3BvbnNlLmNsb25lKCkpO1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjYWNoZS5tYXRjaChldmVudC5yZXF1ZXN0KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlKSByZXR1cm4gcmVzcG9uc2U7XG5cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG59KTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Q0FBQTtDQUNPLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQztBQUN2QztDQUNPLE1BQU0sS0FBSyxHQUFHO0NBQ3JCLENBQUMsMkJBQTJCO0NBQzVCLENBQUMsU0FBUztDQUNWLENBQUMsZUFBZTtDQUNoQixDQUFDLFNBQVM7Q0FDVixDQUFDLFVBQVU7Q0FDWCxDQUFD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
