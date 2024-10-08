import * as universal from '../entries/pages/_page.js';
import * as server from '../entries/pages/_page.server.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.C020IpKd.js","_app/immutable/chunks/scheduler.DtGJeGpk.js","_app/immutable/chunks/index.CoN-v6Gj.js"];
export const stylesheets = [];
export const fonts = [];
