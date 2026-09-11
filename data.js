/* ============================================================
   data.js — HIER pflegst du deine Inhalte.
   Nichts anderes musst du anfassen, um Fotos oder Filme
   hinzuzufügen. Kommas am Zeilenende nicht vergessen.
   ============================================================ */

const SITE = {

  /* ---------- Kopf / Kontakt ---------- */
  name:      "Max Behr",
  role:      "Automotive, watch & travel filmmaker — based in Germany, shooting across Europe",
  headline:  'Cars, watches,<br>and the <em>roads<br>between them.</em>',
  intro:     "Films and stills for automotive, watch and travel brands. One person, two cameras, from the first idea to the final grade. Commissions open for 2026.",
  email:     "maxbehrbusiness@gmail.com",
  instagram: "https://www.instagram.com/maxbehrfoto/",
  linkedin:  "https://www.linkedin.com/in/max-behr-267695304/",

  /* ---------- Hero ----------
     WICHTIG: hero.mp4 sollte unter 2 MB sein (6–8 Sek. Loop, ohne Ton).
     Wie du das komprimierst, steht in der README.
     heroPoster ist das Standbild, das sofort erscheint. */
  heroVideo:  "assets/videos/hero.mp4",
  heroPoster: "pictures/thumbnails/img10-3.jpeg",

  /* ---------- Laufband unter dem Hero ---------- */
  marquee: ["Automotive", "Watches", "New York", "Lago di Como", "St. Moritz", "The Alps", "Rimini", "Les Baux"],

  /* ---------- Über mich ---------- */
  aboutTitle: "Behind the camera",
  aboutText: [
    "I am Max — photographer and filmmaker. It started with a camera at car meets and on hikes through the Alps, and it never really stopped. Today most of my work is automotive, watches and travel: the same obsession with surfaces, reflections and light.",
    "I work small and fast. One person, two cameras, stills and motion from the same set of eyes — which keeps the day light on set and the look consistent across everything you get back."
  ],
  aboutImage: "pictures/thumbnails/img7-2.jpeg",
  stats: [
    { big: "10+", label: "Films released" },
    { big: "6",   label: "Countries shot" },
    { big: "1:1", label: "You work with me" }
  ],

  /* ---------- Leistungen ---------- */
  services: [
    { title: "Automotive",            text: "Static, rolling and track. A finished film plus a full gallery of stills from the same two days." },
    { title: "Watches & product",     text: "Macro, motion and controlled light for pieces that have to look as expensive as they are." },
    { title: "Travel & brand stories",text: "Multi-day coverage on location, cut for web, reels and paid — delivered in every ratio you need." }
  ],

  /* ---------- FILME ----------
     size: "wide" (7/12 breit) | "half" (5/12) | "third" (4/12)
     poster: am besten ein echtes Standbild aus dem Film,
             abgelegt unter pictures/posters/ (siehe README). */
  films: [
    { title: "Yamaha",          tag: "Brand Film", video: "assets/videos/Yamaha.mp4",         poster: "pictures/thumbnails/img11-1.jpeg", size: "wide"  },
    { title: "Powered By Anna", tag: "Portrait",   video: "assets/videos/Anna.mp4",           poster: "pictures/thumbnails/img9-1.jpeg",  size: "half"  },
    { title: "Scuderia Mensa",  tag: "Motorsport", video: "assets/videos/ScuderiaMensa.mp4",  poster: "pictures/thumbnails/img5-3.jpeg",  size: "half"  },
    { title: "Lake Como",       tag: "Travel",     video: "assets/videos/Como.mp4",           poster: "pictures/thumbnails/img6-1.jpeg",  size: "wide"  },
    { title: "St. Moritz",      tag: "Winter",     video: "assets/videos/StMoritz.mp4",       poster: "pictures/thumbnails/img10-1.jpeg", size: "third" },
    { title: "Rimini",          tag: "Travel",     video: "assets/videos/Rimini.mp4",         poster: "pictures/thumbnails/img4-3.jpeg",  size: "third" },
    { title: "Les Baux",        tag: "Travel",     video: "assets/videos/Le Baux.mp4",        poster: "pictures/thumbnails/img4-1.jpeg",  size: "third" }
  ],

  /* ---------- FOTOS ----------
     Reihenfolge auf der Seite = Reihenfolge hier.
     cat muss einer der Namen aus photoFilters sein.
     thumb = kleines Bild fürs Raster, full = großes fürs Lightbox. */
  photoFilters: ["Automotive", "Watches", "Travel", "Cities"],

  photos: [
    { cat: "Automotive", thumb: "pictures/thumbnails/img4-2.jpeg",  full: "pictures/img4-2.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img5-1.jpeg",  full: "pictures/img5-1.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img5-2.jpeg",  full: "pictures/img5-2.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img5-3.jpeg",  full: "pictures/img5-3.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img6-2.jpeg",  full: "pictures/img6-2.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img6-3.jpeg",  full: "pictures/img6-3.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img7-1.jpeg",  full: "pictures/img7-1.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img7-2.jpeg",  full: "pictures/img7-2.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img7-3.jpeg",  full: "pictures/img7-3.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img9-2.jpeg",  full: "pictures/img9-2.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img9-3.jpeg",  full: "pictures/img9-3.jpeg"  },
    { cat: "Automotive", thumb: "pictures/thumbnails/img10-1.jpeg", full: "pictures/img10-1.jpeg" },
    { cat: "Automotive", thumb: "pictures/thumbnails/img10-3.jpeg", full: "pictures/img10-3.jpeg" },
    { cat: "Automotive", thumb: "pictures/thumbnails/img11-1.jpeg", full: "pictures/img11-1.jpeg" },
    { cat: "Automotive", thumb: "pictures/thumbnails/img11-2.jpeg", full: "pictures/img11-2.jpeg" },
    { cat: "Automotive", thumb: "pictures/thumbnails/img11-3.jpeg", full: "pictures/img11-3.jpeg" },

    { cat: "Watches",    thumb: "pictures/thumbnails/img12-1.jpeg", full: "pictures/img12-1.jpeg" },
    { cat: "Watches",    thumb: "pictures/thumbnails/img12-2.jpeg", full: "pictures/img12-2.jpeg" },
    { cat: "Watches",    thumb: "pictures/thumbnails/img12-3.jpeg", full: "pictures/img12-3.jpeg" },

    { cat: "Travel",     thumb: "pictures/thumbnails/img4-1.jpeg",  full: "pictures/img4-1.jpeg"  },
    { cat: "Travel",     thumb: "pictures/thumbnails/img4-3.jpeg",  full: "pictures/img4-3.jpeg"  },
    { cat: "Travel",     thumb: "pictures/thumbnails/img6-1.jpeg",  full: "pictures/img6-1.jpeg"  },
    { cat: "Travel",     thumb: "pictures/thumbnails/img8-1.jpeg",  full: "pictures/img8-1.jpeg"  },
    { cat: "Travel",     thumb: "pictures/thumbnails/img8-2.jpeg",  full: "pictures/img8-2.jpeg"  },
    { cat: "Travel",     thumb: "pictures/thumbnails/img8-3.jpeg",  full: "pictures/img8-3.jpeg"  },
    { cat: "Travel",     thumb: "pictures/thumbnails/img9-1.jpeg",  full: "pictures/img9-1.jpeg"  },
    { cat: "Travel",     thumb: "pictures/thumbnails/img10-2.jpeg", full: "pictures/img10-2.jpeg" },

    { cat: "Cities",     thumb: "pictures/thumbnails/img1-1.jpeg",  full: "pictures/img1-1.jpeg"  },
    { cat: "Cities",     thumb: "pictures/thumbnails/img1-2.jpeg",  full: "pictures/img1-2.jpeg"  },
    { cat: "Cities",     thumb: "pictures/thumbnails/img1-3.jpeg",  full: "pictures/img1-3.jpeg"  },
    { cat: "Cities",     thumb: "pictures/thumbnails/img2-1.jpeg",  full: "pictures/img2-1.jpeg"  },
    { cat: "Cities",     thumb: "pictures/thumbnails/img2-2.jpeg",  full: "pictures/img2-2.jpeg"  },
    { cat: "Cities",     thumb: "pictures/thumbnails/img2-3.jpeg",  full: "pictures/img2-3.jpeg"  },
    { cat: "Cities",     thumb: "pictures/thumbnails/img3-1.jpeg",  full: "pictures/img3-1.jpeg"  },
    { cat: "Cities",     thumb: "pictures/thumbnails/img3-2.jpeg",  full: "pictures/img3-2.jpeg"  },
    { cat: "Cities",     thumb: "pictures/thumbnails/img3-3.jpeg",  full: "pictures/img3-3.jpeg"  }
  ]
};
