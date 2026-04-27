import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

// Structure for Neon/PostgreSQL on Vercel
const pool = new Pool({
  connectionString: connectionString || 'postgresql://placeholder:placeholder@localhost:5432/placeholder',
  ssl: connectionString ? {
    // resolve SSL mode warning and ensure stable serverless connection
    rejectUnauthorized: true,
  } : false,
  // Optimize for serverless: close idle clients quickly
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

// Helper for runtime validation
export const validateDbConfig = () => {
  if (!connectionString) {
    throw new Error(
      'DATABASE_URL is missing. Please set it in your environment variables (e.g., Vercel Dashboard or .env.local).'
    );
  }
  if (connectionString.includes('@base') || connectionString === 'base') {
    throw new Error(
      'DATABASE_URL appears to be misconfigured with a "base" hostname. Please check your connection string format.'
    );
  }
};

export default pool;
