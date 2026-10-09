/* ============================================================
   data.js — HIER pflegst du deine Inhalte.

   Pfade stehen hier NICHT mehr drin, nur noch Dateinamen.
   Wo die Datei liegt, ergibt sich aus der Struktur:

     hero     -> media/hero/<datei>
     films    -> media/films/<file>.mp4  +  media/films/<file>-poster.jpg
     photos   -> media/photos/thumbs/<file>  +  media/photos/full/<file>

   Ein Film braucht also zwei Dateien mit demselben Namen, ein Foto
   zwei Dateien mit demselben Namen in verschiedenen Ordnern.
   Kommas am Zeilenende nicht vergessen.
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

  /* ---------- Banner ----------
     Beide Dateien liegen in media/hero/.
     Das Poster sollte das erste Bild des Loops sein. */
  heroVideo:  "hero.mp4",
  heroPoster: "hero-poster.jpg",

  /* ---------- Laufband unter dem Banner ---------- */
  marquee: ["Automotive", "Watches", "New York", "Lago di Como", "St. Moritz", "The Alps", "Rimini", "Les Baux"],

  /* ---------- Über mich ---------- */
  aboutTitle: "Behind the camera",
  aboutText: [
    "I am Max — photographer and filmmaker. It started with a camera at car meets and on hikes through the Alps, and it never really stopped. Today most of my work is automotive, watches and travel: the same obsession with surfaces, reflections and light.",
    "I work small and fast. One person, two cameras, stills and motion from the same set of eyes — which keeps the day light on set and the look consistent across everything you get back."
  ],
  aboutImage: "img7-2.jpeg",          /* aus media/photos/full/ */
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
     file: Dateiname OHNE Endung. Es müssen zwei Dateien existieren:
           media/films/<file>.mp4  und  media/films/<file>-poster.jpg
     size: "wide" (7 von 12 Spalten) | "half" (5) | "third" (4)
           Pro Zeile sollte die Summe 12 ergeben. */
  films: [
    { file: "yamaha",         title: "Yamaha",          tag: "Brand Film", size: "wide"  },
    { file: "anna",           title: "Powered By Anna", tag: "Portrait",   size: "half"  },
    { file: "scuderia-mensa", title: "Scuderia Mensa",  tag: "Motorsport", size: "half"  },
    { file: "como",           title: "Lake Como",       tag: "Travel",     size: "wide"  },
    { file: "st-moritz",      title: "St. Moritz",      tag: "Winter",     size: "third" },
    { file: "rimini",         title: "Rimini",          tag: "Travel",     size: "third" },
    { file: "les-baux",       title: "Les Baux",        tag: "Travel",     size: "third" }
  ],

  /* ---------- FOTOS ----------
     file: derselbe Dateiname in media/photos/thumbs/ und media/photos/full/
     cat:  einer der Namen aus photoFilters
     Reihenfolge hier = Reihenfolge auf der Seite. */
  photoFilters: ["Automotive", "Watches", "Travel", "Cities"],

  photos: [
    { file: "img4-2.jpeg",  cat: "Automotive" },
    { file: "img5-1.jpeg",  cat: "Automotive" },
    { file: "img5-2.jpeg",  cat: "Automotive" },
    { file: "img5-3.jpeg",  cat: "Automotive" },
    { file: "img6-2.jpeg",  cat: "Automotive" },
    { file: "img6-3.jpeg",  cat: "Automotive" },
    { file: "img7-1.jpeg",  cat: "Automotive" },
    { file: "img7-2.jpeg",  cat: "Automotive" },
    { file: "img7-3.jpeg",  cat: "Automotive" },
    { file: "img9-2.jpeg",  cat: "Automotive" },
    { file: "img9-3.jpeg",  cat: "Automotive" },
    { file: "img10-1.jpeg", cat: "Automotive" },
    { file: "img10-3.jpeg", cat: "Automotive" },
    { file: "img11-1.jpeg", cat: "Automotive" },
    { file: "img11-2.jpeg", cat: "Automotive" },
    { file: "img11-3.jpeg", cat: "Automotive" },

    { file: "img12-1.jpeg", cat: "Watches" },
    { file: "img12-2.jpeg", cat: "Watches" },
    { file: "img12-3.jpeg", cat: "Watches" },

    { file: "img4-1.jpeg",  cat: "Travel" },
    { file: "img4-3.jpeg",  cat: "Travel" },
    { file: "img6-1.jpeg",  cat: "Travel" },
    { file: "img8-1.jpeg",  cat: "Travel" },
    { file: "img8-2.jpeg",  cat: "Travel" },
    { file: "img8-3.jpeg",  cat: "Travel" },
    { file: "img9-1.jpeg",  cat: "Travel" },
    { file: "img10-2.jpeg", cat: "Travel" },

    { file: "img1-1.jpeg",  cat: "Cities" },
    { file: "img1-2.jpeg",  cat: "Cities" },
    { file: "img1-3.jpeg",  cat: "Cities" },
    { file: "img2-1.jpeg",  cat: "Cities" },
    { file: "img2-2.jpeg",  cat: "Cities" },
    { file: "img2-3.jpeg",  cat: "Cities" },
    { file: "img3-1.jpeg",  cat: "Cities" },
    { file: "img3-2.jpeg",  cat: "Cities" },
    { file: "img3-3.jpeg",  cat: "Cities" }
  ]
};
