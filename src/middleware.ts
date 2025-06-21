import { NextResponse, NextRequest } from 'next/server';

/**
 * SEO middleware to handle redirects and URL normalization
 * This middleware focuses solely on SEO-related URL handling
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  
  // Force HTTPS (for production)
  if (process.env.NODE_ENV === 'production' && url.protocol === 'http:') {
    url.protocol = 'https:';
    return NextResponse.redirect(url);
  }

  // Remove trailing slashes for better SEO
  if (url.pathname.endsWith('/') && url.pathname.length > 1) {
    url.pathname = url.pathname.slice(0, -1);
    return NextResponse.redirect(url);
  }

  // Handle www to non-www redirect for consistency
  const hostname = request.headers.get('host') || '';
  if (hostname.startsWith('www.')) {
    url.host = hostname.replace(/^www\./, '');
    return NextResponse.redirect(url);
  }
  // Redirect common search terms and old URLs to relevant pages
  const redirects = new Map([
    ['/hosting', '/plans'],
    ['/minecraft', '/minecraft-servers'],
    ['/minecraft-server-hosting', '/minecraft-servers'],
    ['/java-edition', '/minecraft-java'],
    ['/java-servers', '/minecraft-java'],
    ['/forge', '/forge-hosting'],
    ['/modded', '/forge-hosting'],
    ['/modded-minecraft', '/forge-hosting'],
    ['/minecraft-java-edition', '/minecraft-java'],
    ['/server-hosting', '/minecraft-servers'],
    ['/contact-us', '/about#contact'],
  ]);

  if (redirects.has(url.pathname)) {
    url.pathname = redirects.get(url.pathname) as string;
    return NextResponse.redirect(url, 301); // 301 Permanent redirect
  }  // Continue to next middleware
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}