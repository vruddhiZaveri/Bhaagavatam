# Bhaagavatam — Artwork Production Manifest

## Already included
- `public/branding/bhaagavatam-logo-full.webp`: exact supplied full logo, converted to WebP.
- `public/branding/bhaagavatam-wordmark.webp`: cropped from supplied logo for sidebar, not redrawn.
- `public/art/*.webp`: 13 low-resolution reference-derived images; replace with original production artwork.

## P0 — Home and core story journey (create first)
| ID | File under public/art/ | Content | Ratio | Minimum size |
|---|---|---|---|---|
| 01 | home-hero.webp | Krishna and cosmic Vishnu / celestial narrative with clear dark left negative space | 16:9 | 2400×1350 |
| 02 | gita-feature.webp | Krishna guiding Arjuna on Kurukshetra chariot | 16:9 | 2000×1125 |
| 03 | mahabharata-card.webp | Epic Kurukshetra scene | 3:4 | 900×1200 |
| 04 | ramayana-card.webp | Rama, Sita and Lakshmana in forest | 3:4 | 900×1200 |
| 05 | krishna-card.webp | Krishna playing flute at Vrindavan | 3:4 | 900×1200 |
| 06 | shiva-card.webp | Shiva meditating at Kailash | 3:4 | 900×1200 |
| 07 | reader-gita.webp | Manuscript and Krishna-Arjuna illustration | 16:9 | 1600×900 |
| 08 | journey-tree.webp | Celestial golden wisdom tree on near-black background | 4:5 | 1200×1500 |
| 09 | audio-gita.webp | Circular-friendly Gita illustration / Krishna portrait | 1:1 | 1200×1200 |
| 10 | character-krishna.webp | Krishna portrait | 3:4 | 900×1200 |
| 11 | character-arjuna.webp | Arjuna portrait | 3:4 | 900×1200 |

## P1 — Explore, Universe, Learn
| ID | File | Content | Ratio | Minimum size |
|---|---|---|---|---|
| 12 | cosmos-banner.webp | Vishnu, cosmic creation and celestial ocean | 16:9 | 2000×1125 |
| 13 | puranas-card.webp | Ancient Puranic manuscripts and temple relief | 3:4 | 900×1200 |
| 14 | devi-card.webp | Devi Durga / Devi Mahatmya | 3:4 | 900×1200 |
| 15 | heritage-card.webp | Indian temple architecture, atmospheric | 3:4 | 900×1200 |
| 16 | meditation-card.webp | Meditating sage, warm illumination | 3:4 | 900×1200 |
| 17 | universe-background.webp | Subtle dark celestial map, no labels | 16:9 | 2000×1125 |
| 18 | character-draupadi.webp | Draupadi portrait | 3:4 | 900×1200 |
| 19 | character-bhishma.webp | Bhishma portrait | 3:4 | 900×1200 |
| 20 | learning-banner.webp | Illuminated manuscript / knowledge motif | 16:9 | 1800×1013 |
| 21 | achievement-medallion.webp | Gold 3D wisdom medallion, isolated | 1:1 | 1024×1024 |
| 22 | onboarding-world.webp | Celestial Indian storytelling universe | 16:9 | 2000×1125 |

## P2 — Motion / 3D production
- `mandala-3d.glb`: optimized rotating celestial mandala; 3D geometry, not an image.
- `wisdom-tree-layers/`: separate transparent foreground, trunk and particle PNG/WebP layers for parallax.
- `hero-layers/`: transparent foreground figure, midground temples, background stars for layered parallax.
- `ambient-gold-particles.webp`: subtle tileable particle texture, optional.

## Production requirements
- Do not place titles, buttons, UI, logos or watermarks in generated artwork.
- Use authentic Indian artistic cues, respectful iconography, warm gold/amber lighting and charcoal edges; vibrant colors may appear inside art.
- Preserve negative space for text. Export at listed minimum resolution, optimize WebP/AVIF, provide alt text.
- Do not reuse low-resolution UI screenshots as final artwork.
- Current code still refers to original `public/art/*.webp` filenames; update references after replacing assets or map new files in the content manifest.
