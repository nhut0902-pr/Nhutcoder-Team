import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    const adminUsername = process.env.ADMIN_USERNAME;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (username === adminUsername && password === adminPassword) {
      const response = NextResponse.json({ success: true });
      // Simple cookie for auth (not secure for production, but fits requirement)
      response.cookies.set('admin_session', 'authenticated_nhutcoder', {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 // 1 day
      });
      return response;
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
