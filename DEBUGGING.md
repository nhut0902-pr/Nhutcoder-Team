# Troubleshooting & Debugging

This guide addresses common deployment and configuration issues encountered in this project.

## 1. Database Connection Issues (ENOTFOUND base)

If you see an error like `getaddrinfo ENOTFOUND base`, it is a specific error from the `pg-connection-string` library.

### Why this happens:
- **Empty or Missing URL**: The library uses `postgres://base` as an internal fallback when the `DATABASE_URL` you provided is empty, missing, or cannot be parsed as a valid URL.
- **Malformed URL**: If you forgot the `postgres://` or `postgresql://` prefix, the parser fails and reverts to the "base" dummy host.

### How to fix it:
1. Go to your **Vercel Project Settings > Environment Variables**.
2. Verify that `DATABASE_URL` exists and is NOT empty.
3. Ensure it starts with `postgresql://` or `postgres://`.
4. Ensure there are no leading/trailing spaces or quotes in the value.

## 2. PostgreSQL SSL Mode Warning

**Warning**: `SECURITY WARNING: The SSL modes 'prefer', 'require', and 'verify-ca' are treated as aliases for 'verify-full'`.

### The Fix:
The code in `src/lib/db.ts` now explicitly sets `rejectUnauthorized: true`.
To fully resolve this and prepare for future updates, update your `DATABASE_URL` in Vercel to use `sslmode=verify-full`.

**Correct Example**:
`postgresql://neondb_owner:password@ep-host.aws.neon.tech/neondb?sslmode=verify-full`

## 3. Verifying Environment Variables on Vercel

If you are unsure if Vercel is reading your variables:
1. Check the **Deployment Logs** in Vercel.
2. Look for the "Environment Variables" section in the build logs to see if they were injected.
3. You can use a temporary debug route to check `typeof process.env.DATABASE_URL`, but **never log the value itself**.
