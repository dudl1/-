

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.DdMGQZZ1.js","_app/immutable/chunks/scheduler.DtGJeGpk.js","_app/immutable/chunks/index.CoN-v6Gj.js"];
export const stylesheets = [];
export const fonts = [];
