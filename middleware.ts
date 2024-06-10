// middleware.js
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    // Check if the request path starts with "/api/"
    //if (request.nextUrl.pathname.startsWith('/api/')) {
        // Respond with an error message
       // return NextResponse.json({ success: false, message: 'Access denied' }, { status: 403 });
    //}
    // If the request is not an API route, allow it to proceed
    return NextResponse.next();
}
