

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.Ck5JmwDz.js","_app/immutable/chunks/scheduler.DtGJeGpk.js","_app/immutable/chunks/index.CoN-v6Gj.js"];
export const stylesheets = [];
export const fonts = [];
