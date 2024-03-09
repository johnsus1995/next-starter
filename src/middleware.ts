// import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside

export function middleware() {
  // return NextResponse.redirect(new URL('/', request.url));
  return NextResponse.next();
}

export const config = {
  matcher: ['/login/:path*'],
};
