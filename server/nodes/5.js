import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.B4J_yPcr.js","_app/immutable/chunks/scheduler.DtGJeGpk.js","_app/immutable/chunks/index.CoN-v6Gj.js"];
export const stylesheets = [];
export const fonts = [];
