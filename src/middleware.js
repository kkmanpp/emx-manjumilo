import { NextRequest, NextResponse } from "next/server";

let locales = ["cht", "chs"];
let defaultLocale = "cht";

function getLocale(request) {
	return defaultLocale;
}

export function middleware(request) {
	const { pathname } = request.nextUrl;
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}`) || pathname === `/${locale}`
	);

	if (pathnameHasLocale) return;
	if (pathname.match(/\./)) return;
	// Redirect if there is no locale
	const locale = getLocale(request);
	request.nextUrl.pathname = `/${locale}${pathname}`;

	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: [
		// Skip all internal paths (_next)
		"/((?!_next).*)",
		// Optional: only run on root (/) URL
		// '/'
	],
};
