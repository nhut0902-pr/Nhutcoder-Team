# Troubleshooting & Debugging

This guide addresses common deployment and configuration issues encountered in this project.

## 1. Database Connection Issues (ENOTFOUND)

If you see an error like `getaddrinfo ENOTFOUND base`, it means the application is trying to connect to a hostname named "base", which doesn't exist.

### Why this happens:
- **Misconfigured `.env`**: You might have a line like `DATABASE_URL=base` or a malformed URL.
- **Vercel Settings**: Ensure your `DATABASE_URL` is correctly pasted into the Vercel Dashboard without trailing spaces or quotes.

### Correct `DATABASE_URL` structure:
`postgresql://[user]:[password]@[hostname]:[port]/[database]?sslmode=verify-full`

## 2. Debugging Environment Variables

### Local Development
- Check `.env.local` (ensure it's in `.gitignore`).
- Restart the dev server after any changes: `npm run dev`.

### Production (Vercel)
- Go to **Project Settings > Environment Variables**.
- Check for typos in keys (e.g., `DATA_BASE_URL` instead of `DATABASE_URL`).
- Use `console.log(process.env.NODE_ENV)` in an API route to verify the environment, but **NEVER** log the actual `DATABASE_URL` value as it contains secrets.

## 3. PostgreSQL SSL Warning

**Warning**: `SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'`.

### The Fix:
We have updated `src/lib/db.ts` to explicitly set:
```typescript
ssl: {
  rejectUnauthorized: true,
}
```
This ensures the client correctly validates the server's certificate. For Neon DB, make sure your connection string uses `sslmode=verify-full`.
