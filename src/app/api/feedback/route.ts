import { NextResponse } from 'next/server';
import pool from '../../../lib/db';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const query = 'INSERT INTO feedback (name, email, message) VALUES ($1, $2, $3) RETURNING *';
    const values = [name, email, message];

    const result = await pool.query(query, values);

    return NextResponse.json({ success: true, feedback: result.rows[0] }, { status: 201 });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
