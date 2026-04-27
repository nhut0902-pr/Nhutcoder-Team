import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

// Handle Neon DB SSL requirements and the pg security warning
const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: true, // Recommended for security
  }
});

export default pool;
