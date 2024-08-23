export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cr3Up6S7.js","app":"_app/immutable/entry/app.g7bKAOJE.js","imports":["_app/immutable/entry/start.Cr3Up6S7.js","_app/immutable/chunks/scheduler.DtGJeGpk.js","_app/immutable/entry/app.g7bKAOJE.js","_app/immutable/chunks/scheduler.DtGJeGpk.js","_app/immutable/chunks/index.CoN-v6Gj.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./server/nodes/0.js')),
			__memo(() => import('./server/nodes/1.js')),
			__memo(() => import('./server/nodes/2.js')),
			__memo(() => import('./server/nodes/4.js')),
			__memo(() => import('./server/nodes/5.js'))
		],
		routes: [
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,,], errors: [1,2,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

export const prerendered = new Set(["/"]);
