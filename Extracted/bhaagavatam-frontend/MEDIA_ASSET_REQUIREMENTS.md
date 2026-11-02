# Bhaagavatam — media asset requirements

The supplied new gold logo is installed at `/branding/bhaagavatam-logo-new.webp`; standalone B monogram at `/branding/bhaagavatam-monogram-new.webp`. These are sourced directly from the user-provided PNGs.

## Required video assets (not included yet)

| Priority | Filename | Use | Format / ratio |
|---|---|---|---|
| P0 | gita-trailer.mp4 | Home featured trailer | MP4 H.264 1080p 16:9 |
| P0 | gita-episode-01.mp4 | Watch episode 1 | MP4 H.264 1080p 16:9 |
| P0 | gita-episode-01.vtt | English captions | WebVTT |
| P0 | gita-trailer-poster.webp | Hero and player poster | WebP 1920×1080 |
| P1 | ramayana-trailer.mp4 | Series trailer | MP4 16:9 |
| P1 | krishna-trailer.mp4 | Series trailer | MP4 16:9 |
| P1 | shiva-trailer.mp4 | Series trailer | MP4 16:9 |
| P1 | ramayana-episode-01.mp4 | First episode | MP4 16:9 |
| P2 | intro-brand.mp4 | Optional intro animation | MP4 16:9, 4–8 seconds |

## Required audio assets (not included yet)

| Priority | Filename | Use | Format |
|---|---|---|---|
| P0 | gita-chapter-01.mp3 | First narrated chapter | MP3 128–192 kbps |
| P0 | gita-chapter-01-cover.webp | Audio player cover | 1200×1200 |
| P1 | ramayana-chapter-01.mp3 | First Ramayana narration | MP3 |
| P1 | krishna-chapter-01.mp3 | Krishna narration | MP3 |
| P2 | ambience-forest.mp3 | Optional ambient layer | Loopable MP3 |

## Illustration & thumbnail requirements

| Priority | Filename | Subject | Size |
|---|---|---|---|
| P0 | home-hero.webp | Krishna/Vishnu cinematic hero, subject to right | 2560×1440 |
| P0 | gita-landscape.webp | Krishna and Arjuna on Kurukshetra chariot | 1920×1080 |
| P0 | gita-poster.webp | Gita vertical series poster | 1200×1800 |
| P0 | gita-ep01-thumb.webp | Episode 1 key art, no lettering | 1280×720 |
| P0 | ramayana-poster.webp | Rama, Sita, Lakshmana in forest | 1200×1800 |
| P0 | krishna-poster.webp | Krishna in Vrindavan | 1200×1800 |
| P0 | shiva-poster.webp | Shiva at Kailash | 1200×1800 |
| P1 | ramayana-ep01-thumb.webp | Ramayana episode key art | 1280×720 |
| P1 | krishna-ep01-thumb.webp | Krishna episode key art | 1280×720 |
| P1 | cosmic-origins.webp | Vishnu and cosmic creation | 1920×1080 |
| P1 | devi-mahatmya.webp | Devi Durga epic art | 1200×1800 |
| P1 | manuscript-reader.webp | Ancient illuminated manuscript | 1920×1080 |
| P1 | wisdom-tree.webp | Luminous golden tree on charcoal | 1200×1600 |
| P1 | character-krishna.webp | Krishna portrait | 1000×1400 |
| P1 | character-arjuna.webp | Arjuna portrait | 1000×1400 |
| P1 | character-draupadi.webp | Draupadi portrait | 1000×1400 |
| P1 | character-bhishma.webp | Bhishma portrait | 1000×1400 |
| P2 | philosophy.webp | Sage in meditation | 1200×1800 |
| P2 | heritage.webp | Indian temple architecture | 1200×1800 |
| P2 | celestial-mandala.webp | Mandala art for optional 3D effect | 1200×1200 |
| P2 | achievement-medallion.webp | Golden medal transparent background | 1024×1024 |

## Delivery conventions
- All illustration artwork should be text-free, without watermarks, and visually consistent: black-charcoal atmosphere, warm gold lighting, rich Indian epic painting details.
- Deliver videos and audio with appropriate rights, captions/transcripts, duration, language and episode metadata.
- A static poster is **not** a playable video; no synthetic duration or progress should be presented as actual playback.
- If real media is later supplied, implement HTML5 `<video>` and `<audio>` players with controls, accessible captions, and actual progress persistence.
