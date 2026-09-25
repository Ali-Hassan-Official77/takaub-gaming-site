# TAKAGHUB

Premium game discovery frontend built with Next.js 14, React, Framer Motion and RAWG.

## Setup

1. Install dependencies:
   `npm install`
2. Create `.env.local` in the project root:
   `RAWG_API_KEY=your_real_rawg_api_key`
3. Start:
   `npm run dev`
4. Production:
   `npm run build && npm start`

## Included

- Live RAWG-powered trending hero carousel with automatic rotation
- Search, genre filtering and sorting
- Game detail pages with real metadata and screenshots
- Server-side RAWG proxy routes, including `/api/games/[id]/screenshots`
- Dark/light mode with readable text in both modes
- Favorites stored locally in the browser
- Toast feedback for user actions
- Responsive premium gaming UI
- Loading skeletons for catalog and page transitions
- TAKAGHUB logo and favicon
- No fabricated game metadata: catalog content comes from RAWG

## RAWG

Game data and imagery are supplied by RAWG. Keep your API key server-side in `.env.local`; never prefix it with `NEXT_PUBLIC_`.
