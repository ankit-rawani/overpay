import { NextResponse, NextRequest } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
    const { pathname } = req.nextUrl;
    const url = req.nextUrl.clone();
    url.pathname = '/signin';

    if(pathname === '/') {
        return NextResponse.redirect(url);
    }

    // session management code to be written
    // if(pathname === '/profile') {
    //     if(!signedIn()) return NextResponse.redirect('/signin');
    // }

    return NextResponse.next();
}