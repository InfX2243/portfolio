export const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, "");
export const withBasePath = (path) => BASE_PATH + path;
