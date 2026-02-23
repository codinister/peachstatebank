import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export function middleware(req: any) {
  const { nextUrl } = req;
  const { searchParams } = nextUrl;

   const logout = searchParams.get('logout')

  if (logout === '1') {
    return NextResponse.redirect(new URL('/', req.url));
  }
}

// Matcher to control which paths middleware runs on
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
