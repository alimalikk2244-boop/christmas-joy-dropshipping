# Christmas Joy Dropshipping Store (PayPal + CJ Sandbox)

This is a Next.js starter project (frontend + simple backend API routes) prepared for PayPal sandbox checkout and CJdropshipping sandbox order forwarding.

## Quick start (local)

1. Copy repository and create a `.env.local` file in project root (based on `.env.example`).
2. Fill in your CJ and PayPal sandbox keys.
3. Install dependencies:
   ```
   npm install
   ```
4. Run dev server:
   ```
   npm run dev
   ```
5. Open http://localhost:3000 and test checkout using PayPal sandbox buyer account.

## Notes
- This project uses in-memory order storage (for demo). For production use a real database.
- Webhook verification uses PayPal webhook ID. Configure PayPal sandbox webhook to point to `/api/webhook`.
- Replace CJ helper with real API details and ensure you follow CJ authentication docs.
