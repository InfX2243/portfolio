import { SITE_BASE_PATH } from "../config/site";

export const BASE_PATH = SITE_BASE_PATH.replace(/\/$/, "");

export function normalizePath(pathname) {
  if (!BASE_PATH) return pathname.replace(/\/+$/, "") || "/";
  const basePrefix = BASE_PATH + "/";
  const withoutBase = pathname === BASE_PATH
    ? "/"
    : pathname.startsWith(basePrefix)
      ? pathname.slice(BASE_PATH.length)
      : pathname;
  return withoutBase.replace(/\/+$/, "") || "/";
}

export const withBasePath = (path) => BASE_PATH + path;
