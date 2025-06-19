/**
 * This file is for future Clerk authentication implementation.
 * Currently, we're handling authentication directly in the ClerkProvider 
 * in the root layout.tsx.
 * 
 * When ready to implement more advanced auth middleware:
 * 1. Import the proper middleware from Clerk
 * 2. Create a middleware function
 * 3. Set up proper route matching
 * 
 * Example implementation is commented out below.
 */

/*
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that don't require authentication
  publicRoutes: [
    "/",
    "/plans",
    "/about",
    "/privacy",
    "/terms",
    "/refund",
    "/thanks",
    "/api/webhook",
    "/api/session"
  ],
  // Routes that can always be accessed, but will redirect if inside an auth state
  ignoredRoutes: [
    "/api/.*"
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
*/
