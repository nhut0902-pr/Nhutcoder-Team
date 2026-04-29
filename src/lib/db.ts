import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

// Helper for runtime validation
export const validateDbConfig = () => {
  if (!connectionString || connectionString.trim() === '') {
    throw new Error(
      'DATABASE_URL is missing or empty. Please set it in your Vercel Environment Variables.'
    );
  }

  // Detection for misconfigured or malformed URLs
  // The hostname "base" is a fallback from the 'pg-connection-string' library when parsing fails.
  if (connectionString.includes('@base') || connectionString === 'base' || connectionString.startsWith('base')) {
    throw new Error(
      'DATABASE_URL is malformed. The library encountered an internal "base" fallback. Check for missing protocol (postgres://) or malformed credentials.'
    );
  }
};

// Recommended structure for Neon/PostgreSQL on Vercel
const pool = new Pool({
  connectionString: connectionString || undefined,
  ssl: {
    // This resolves the SSL security warning and ensures the most secure connection (verify-full).
    // If your connection string already has sslmode=verify-full, this is redundant but safe.
    rejectUnauthorized: true,
  },
  // Serverless optimizations
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
});

export default pool;
