# Random Quote Generator

A clean, minimal quote generator app built with an iOS-style glassmorphism UI. Displays a random quote on load, with a "New Quote" button to fetch a new one anytime.

## Features

- Displays a random quote every time the app is opened
- "New Quote" button generates a different quote on each click
- Each quote clearly shows the quote text and author name
- Clean, minimal, iOS-inspired glass UI with frosted blur effects
- Background gradient smoothly shifts with each new quote
- Like (heart) button to favorite a quote
- Smooth fade transition animation between quotes
- Fully responsive — works on mobile and desktop
- Installable as a home-screen app (PWA) on iOS and Android

## Files

| File | Description |
|---|---|
| `quote-generator.jsx` | React component version of the app |
| `Stride-Quotes.html` | Standalone HTML/CSS/JS version — works offline, installable as a mobile app with no build tools required |

## How to Run

### Option 1: HTML version (easiest)
1. Download `Stride-Quotes.html`
2. Open it directly in any browser (double-click the file)
3. That's it — no installation, no dependencies

**Install as a mobile app:**
- **iPhone:** Open the file in Safari → tap Share → "Add to Home Screen"
- **Android:** Open the file in Chrome → tap ⋮ menu → "Add to Home screen"

### Option 2: React version
1. Make sure you have a React project set up (e.g. via Vite)
2. Place `quote-generator.jsx` in your `src` components folder
3. Import and render the `QuoteApp` component in your app
4. Run `npm run dev`

## Tech Stack

- HTML, CSS, JavaScript (standalone version)
- React (component version)
- No external APIs — quotes are stored locally in the app

## Author

Built as an internship assignment project.
