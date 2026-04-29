import { NextResponse } from 'next/server';
import pool, { validateDbConfig } from '../../../../lib/db';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Validate config at runtime
    validateDbConfig();

    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');

    if (!session || session.value !== 'authenticated_nhutcoder') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const result = await pool.query('SELECT * FROM feedback ORDER BY created_at DESC');
    return NextResponse.json(result.rows);
  } catch (error: any) {
    console.error('Error fetching feedback:', error);

    if (error.message?.includes('DATABASE_URL')) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
