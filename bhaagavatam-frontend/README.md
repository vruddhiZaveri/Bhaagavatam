# Bhaagavatam — Cinematic Frontend

A runnable React + Vite frontend prototype inspired by the approved charcoal-and-antique-gold Bhaagavatam visual direction.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build

```bash
npm run build
```

## Included screens

Home, Explore, Story Detail, Reader, Listen, Knowledge Universe, Learn, Knowledge Check, My Journey, My Library, Profile.

## Functional prototype interactions

Navigation, searching and filtering stories, story selection, saving/removing stories in the library (in-memory), chapter selection and progression, audio-player UI controls (no audio track), interactive character spotlight, quiz answers and feedback, responsive sidebar.

## Visual assets

The `public/art` images are drawn from the provided Bhaagavatam reference kit and supplied artwork. Cropped images are **prototype assets**, not original full-resolution production illustrations. Replace with dedicated commissioned/generated illustrations before release. Original reference artwork may have embedded UI artifacts from crops.

## Current scope and limitations

Frontend-only prototype. No backend, accounts, persistent storage, actual audio narration, verified scripture translations, real-time progress sync, or full 3D engine yet. The hero has layered motion and atmospheric orbit effects; true React Three Fiber scenes are a future implementation milestone. Chapter prose is explicitly demonstration content, not scriptural quotation. No external image CDN is required. Google Fonts are used when online, with system fallbacks.
