# Sellaris Web App

Sellaris is a premium Ad Intelligence application for tracking winning digital products.

## Project Setup

### 1. Install Dependencies
> **Important:** The initial installation might have failed due to disk space or naming issues. Please run:

```bash
npm install
```

If that fails, try installing packages individually:
```bash
npm install lucide-react clsx tailwind-merge recharts framer-motion
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- **`/app`**: Next.js App Router pages.
  - `(main)`: Usage of the Main Layout (Feed, Product, Connect).
- **`/components/ui`**: Reusable premium UI components (GlassCard, Button, Badge).
- **`/lib/services`**: `ad-intelligence.ts` containing the Mock Data Service.
- **`tailwind.config.ts`**: Contains the "Midnight Blue" & "Electric Teal" design system.

## API Integration

To connect to real Facebook/TikTok Ads APIs:
1. Go to `lib/services/ad-intelligence.ts`.
2. Replace `getFeed` with a real `fetch` call to your backend or the Graph API.
3. Add your `NEXT_PUBLIC_FACEBOOK_APP_ID` to `.env.local`.
