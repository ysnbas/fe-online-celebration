import { NextResponse } from "next/server";

function redirectForNonAuthUser(reqUrl, defaultUrl, pathname) {
  const navigationUrl = new URL(defaultUrl, reqUrl);
  const response = NextResponse.redirect(navigationUrl);
  if (pathname !== "/404") response.cookies.set("previousUrl", pathname);
  return response;
}

export function middleware(req) {
  const verify = req.cookies.get("accessToken");
  const pathname = req.nextUrl.pathname;
  const url = req.url;

  const unAuthPaths = ["/homepage"];

  for (let path of unAuthPaths) {
    if (!verify && pathname.includes(path)) {
      return redirectForNonAuthUser(url, "/accounts/login", pathname);
    }
  }

  if (!verify && pathname === "/") {
    return redirectForNonAuthUser(url, "/accounts/login", pathname);
  }

  if (verify && pathname === "/") {
    return redirectForNonAuthUser(url, "/homepage", pathname);
  }
}

export const config = {
  matcher: ["/", "/homepage"],
};
