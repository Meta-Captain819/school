import { NextResponse } from "next/server";

const protectedRoutes = ["/admin", "/dashboard", "/profile"];

export function middleware(req) {
  const token = req.cookies.get("token")?.value; // Get token from cookies
  const { pathname } = req.nextUrl;

  // If user is not authenticated, redirect to login
  if (protectedRoutes.includes(pathname) && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next(); // Allow access if authenticated
}

// Apply middleware to specific routes
export const config = {
  matcher: ["/admin", "/dashboard", "/profile"],
};
