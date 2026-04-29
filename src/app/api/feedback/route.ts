import { NextResponse } from 'next/server';
import pool, { validateDbConfig } from '../../../lib/db';

export async function POST(request: Request) {
  try {
    // Validate config at runtime
    validateDbConfig();

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const query = 'INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, message];

    const result = await pool.query(query, values);

    return NextResponse.json({ success: true, feedback: result.rows[0] }, { status: 201 });
  } catch (error: any) {
    // Log the full error for server-side debugging
    console.error('Feedback Submission Error:', error);

    // Provide more helpful error responses for configuration issues
    if (error.code === 'ENOTFOUND') {
       return NextResponse.json({
         error: 'Database connection failed: Hostname not found. Check your DATABASE_URL configuration.',
         details: error.hostname === 'base' ? 'The hostname "base" is invalid.' : undefined
       }, { status: 503 });
    }

    if (error.message?.includes('DATABASE_URL')) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
