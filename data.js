/* ============================================================
   data.js — HIER pflegst du deine Inhalte.

   Pfade stehen hier nicht drin, nur Dateinamen. Wo eine Datei
   liegt, ergibt sich aus der Struktur:

     Banner  ->  media/hero/<datei>
     Filme   ->  media/films/<file>.mp4
                 media/films/<file>-preview.mp4
                 media/films/<file>-poster.jpg
     Fotos   ->  media/photos/full/<Tag>/<datei>
                 media/photos/thumbs/<Tag>/<datei>   (gleicher Name!)

   Ein neues Foto: in den passenden Tag-Ordner legen (beide
   Auflösungen) und hier eine Zeile "Tag/dateiname" ergänzen.
   Die Kategorie liest die Seite aus dem Ordnernamen — sie kann
   also nie im Widerspruch zum Ablageort stehen.
   ============================================================ */

const SITE = {

  /* ---------- Kopf / Kontakt ---------- */
  name:      "Max Behr",
  role:      "Automotive, watch & travel filmmaker — based in Germany, shooting across Europe",
  headline:  'How curiosity<br>brings you <em>further.</em>',
  intro:     "Films and stills for automotive, events, brands and travel. Let's make your vision reality.",
  email:     "maxbehrbusiness@gmail.com",
  instagram: "https://www.instagram.com/maxbehrfoto/",
  linkedin:  "https://www.linkedin.com/in/max-behr-267695304/",

  /* ---------- Banner ---------- */
  heroVideo:  "hero.mp4",
  heroPoster: "hero-poster.jpg",

  /* ---------- Laufband: Orte, an denen du gedreht hast ---------- */
  marquee: [
    "Frankfurt",
    "New York",
    "Paris",
    "Côte d'Azur",
    "St. Moritz",
    "Berlin",
    "Stuttgart",
    "Hamburg",
    "Lago di Como",
    "Les Baux-de-Provence",
    "Rimini",
    "Denmark",
    "Greece"
  ],

  /* ---------- Über mich ---------- */
  aboutTitle: "Behind the camera",
  aboutText: [
    "I started in 2018, cutting clips of gaming sessions for friends. Then I bought a camera — a Sony \u03b16400 — and pointed it at their cars. Motorcycles came next, then the trips, and eventually the brands that wanted the same thing.",
    "What I care about is technical precision. Colour and camera movement above everything else: if a shot doesn't hold up on that level, it doesn't go out.",
    "I work alone, which keeps the day light on set and the look consistent across everything you get back. After an event you have the stills within 24 hours and the first cut within 48."
  ],
  aboutImage: "portrait.jpg",          /* liegt in media/about/ */

  stats: [
    { big: "2018", label: "Shooting since" },
    { big: "24 h", label: "Stills after an event" },
    { big: "48 h", label: "First cut" }
  ],

  /* ---------- Auftraggeber und Veroeffentlichungen ----------
     Nur Namen, keine Logos. Neue Zeile hinzufuegen = Komma nicht vergessen. */
  credits: [
    { label: "Selected clients",
      names: ["Mercedes-Benz", "Mercedes-Benz Museum", "Nassauische Sparkasse",
              "Justus-Liebig-Universit\u00e4t Gie\u00dfen"] },
    { label: "Published in",
      names: ["Auto Bild", "Stuttgarter Zeitung", "Sindelfinger Zeitung", "GV-Praxis"] }
  ],
  /* ---------- Leistungen ---------- */
  services: [
    { title: "Commercials",
      text: "Brand films for products, cars and the people behind them \u2014 concept, shoot, edit and grade." },
    { title: "Documentaries",
      text: "Longer form, for a story that needs more room than thirty seconds." },
    { title: "Event coverage",
      text: "On location, stills and motion from the same day. Photos within 24 hours, the first cut within 48." }
  ],
  /* ---------- FILME ----------
     size: "wide" (7 von 12 Spalten) | "half" (5) | "third" (4)
           Pro Zeile sollte die Summe 12 ergeben.
     link: Wohin der Klick führt — Projektseite oder YouTube.
           null = kein Link, dann öffnet der Klick den Film selbst. */
  films: [
    { file: "yamaha",        title: "Yamaha",            tag: "Brand Film",    size: "wide",     link: "https://youtu.be/dXot1uMNhaE" },
    { file: "anna",          title: "Powered By Anna",   tag: "Commercial",      size: "half",     link: "https://www.powered-by-anna.de/" },
    { file: "scuderia-mensa", title: "Scuderia Mensa",    tag: "Motorsport",    size: "half",     link: "https://scuderia-mensa.de/" },
    { file: "como",          title: "Lake Como",         tag: "Travel",        size: "wide",     link: "https://www.fuoriconcorso.org/" },
    { file: "st-moritz",     title: "St. Moritz",        tag: "Winter",        size: "third",    link: "https://www.youtube.com/watch?v=Ro43zP41ol0" },
    { file: "rimini",        title: "Rimini",            tag: "Travel",        size: "third",    link: "https://youtu.be/ZWruihi-DpU" },
    { file: "les-baux",      title: "Les Baux",          tag: "Travel",        size: "third",    link: null }
  ],

  /* ---------- FOTOS ----------
     "Tag/dateiname" — der Tag ist zugleich der Ordner und der Filter. */
  photoFilters: ["Automotive", "Watches", "Travel", "Cities"],

  photos: [
    { file: "Automotive/img4-2.jpeg" },
    { file: "Automotive/img5-1.jpeg" },
    { file: "Automotive/img5-2.jpeg" },
    { file: "Automotive/img5-3.jpeg" },
    { file: "Automotive/img6-2.jpeg" },
    { file: "Automotive/img6-3.jpeg" },
    { file: "Automotive/img7-1.jpeg" },
    { file: "Automotive/img7-2.jpeg" },
    { file: "Automotive/img7-3.jpeg" },
    { file: "Automotive/img9-2.jpeg" },
    { file: "Automotive/img9-3.jpeg" },
    { file: "Automotive/img10-1.jpeg" },
    { file: "Automotive/img10-3.jpeg" },
    { file: "Automotive/img11-1.jpeg" },
    { file: "Automotive/img11-2.jpeg" },
    { file: "Automotive/img11-3.jpeg" },

    { file: "Watches/img12-1.jpeg" },
    { file: "Watches/img12-2.jpeg" },
    { file: "Watches/img12-3.jpeg" },

    { file: "Travel/img4-1.jpeg" },
    { file: "Travel/img4-3.jpeg" },
    { file: "Travel/img6-1.jpeg" },
    { file: "Travel/img8-1.jpeg" },
    { file: "Travel/img8-2.jpeg" },
    { file: "Travel/img8-3.jpeg" },
    { file: "Travel/img9-1.jpeg" },
    { file: "Travel/img10-2.jpeg" },

    { file: "Cities/img1-1.jpeg" },
    { file: "Cities/img1-2.jpeg" },
    { file: "Cities/img1-3.jpeg" },
    { file: "Cities/img2-1.jpeg" },
    { file: "Cities/img2-2.jpeg" },
    { file: "Cities/img2-3.jpeg" },
    { file: "Cities/img3-1.jpeg" },
    { file: "Cities/img3-2.jpeg" },
    { file: "Cities/img3-3.jpeg" }
  ]
};
