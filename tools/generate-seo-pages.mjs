import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://mia-reinigung.de";
const phone = "+49 1521 2975639";
const phoneHref = "tel:+4915212975639";
const email = "miareinigung.info@gmail.com";
const address = "Hochheimer Straße 72, 55246 Mainz-Kostheim";

const navServices = [
  ["Büroreinigung Mainz", "/leistungen/bueroreinigung-mainz.html"],
  ["Unterhaltsreinigung Mainz", "/leistungen/unterhaltsreinigung-mainz.html"],
  ["Treppenhausreinigung Mainz", "/leistungen/treppenhausreinigung-mainz.html"],
  ["Praxisreinigung Mainz", "/leistungen/praxisreinigung-mainz.html"],
  ["Fensterreinigung Mainz", "/leistungen/fensterreinigung-mainz.html"],
];

const navCities = [
  ["Gebäudereinigung Wiesbaden", "/wiesbaden/gebaeudereinigung-wiesbaden.html"],
  ["Büroreinigung Wiesbaden", "/wiesbaden/bueroreinigung-wiesbaden.html"],
  ["Treppenhausreinigung Wiesbaden", "/wiesbaden/treppenhausreinigung-wiesbaden.html"],
];

const pages = [
  {
    path: "index.html",
    title: "Gebäudereinigung Mainz | Reinigungsfirma MIA",
    description: "Gebäudereinigung Mainz von Reinigungsfirma MIA: Büroreinigung, Unterhaltsreinigung, Treppenhausreinigung, Praxisreinigung und Fensterreinigung in Mainz und Wiesbaden.",
    h1: "Gebäudereinigung Mainz",
    eyebrow: "Reinigungsfirma MIA",
    lead: "Professionelle Gebäudereinigung in Mainz für Büros, Praxen, Treppenhäuser und Gewerbeflächen. Wir reinigen gründlich, zuverlässig und mit klaren Absprachen.",
    image: "assets/img/vitaly-gariev-xWTTSE3ejzI-unsplash.jpg",
    city: "Mainz",
    primary: true,
    sections: [
      {
        label: "Leistungen",
        title: "Reinigungsleistungen für Mainz",
        text: "Unsere Leistungen werden individuell auf Objektart, Reinigungsintervall und Hygieneanforderungen abgestimmt. Der Schwerpunkt liegt auf planbarer Unterhaltsreinigung für Gewerbe, Verwaltungen und medizinische Einrichtungen.",
        cards: [
          ["Büroreinigung Mainz", "Regelmäßige Reinigung von Arbeitsplätzen, Böden, Teeküchen und Sanitärbereichen.", "/leistungen/bueroreinigung-mainz.html", "kate-sade-2zZp12ChxhU-unsplash.jpg"],
          ["Unterhaltsreinigung Mainz", "Laufende Objektpflege nach festem Reinigungsplan und klaren Qualitätsstandards.", "/leistungen/unterhaltsreinigung-mainz.html", "Buerroreinigung-768x432.jpg"],
          ["Treppenhausreinigung Mainz", "Gepflegte Eingangsbereiche, Treppen, Geländer und Gemeinschaftsflächen.", "/leistungen/treppenhausreinigung-mainz.html", "nilotpal-maity-4lM_LKYpiZU-unsplash.jpg"],
          ["Praxisreinigung Mainz", "Hygienische Reinigung für Behandlungsräume, Wartebereiche und Sanitärzonen.", "/leistungen/praxisreinigung-mainz.html", "toon-lambrechts-TpNA_02AzXY-unsplash.jpg"],
          ["Fensterreinigung Mainz", "Streifenfreie Glas- und Rahmenreinigung für Büros, Praxen und Gewerbe.", "/leistungen/fensterreinigung-mainz.html", "priscilla-du-preez-BuDD1HGco-4-unsplash.jpg"],
          ["Gebäudereinigung Wiesbaden", "Unsere Gebäudereinigung ist auch in Wiesbaden und Umgebung verfügbar.", "/wiesbaden/gebaeudereinigung-wiesbaden.html", "gebaeudereinigung-header-01.jpg"],
        ],
      },
    ],
  },
  {
    path: "leistungen/bueroreinigung-mainz.html",
    title: "Büroreinigung Mainz | Reinigungsfirma MIA",
    description: "Büroreinigung Mainz: zuverlässige Reinigung von Büroräumen, Arbeitsplätzen, Sanitärbereichen und Teeküchen durch Reinigungsfirma MIA.",
    h1: "Büroreinigung Mainz",
    eyebrow: "Büro & Gewerbe",
    lead: "Saubere Büros schaffen Vertrauen bei Mitarbeitenden, Kunden und Besuchern. Reinigungsfirma MIA übernimmt Ihre Büroreinigung in Mainz regelmäßig, diskret und passend zu Ihren Arbeitszeiten.",
    image: "kate-sade-2zZp12ChxhU-unsplash.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Büroreinigung",
        title: "Was wir in Mainzer Büros reinigen",
        text: "Wir erstellen einen festen Reinigungsplan für Arbeitsplätze, Besprechungsräume, Flure, Teeküchen und Sanitärbereiche. Reinigungen sind frühmorgens, abends oder nach individueller Absprache möglich.",
        bullets: ["Schreibtische, Oberflächen und Griffbereiche", "Bodenreinigung je nach Belag", "Sanitärreinigung und Verbrauchsmaterial-Kontrolle", "Papierkörbe, Küchenbereiche und Eingangsbereiche"],
      },
    ],
    related: ["/leistungen/unterhaltsreinigung-mainz.html", "/leistungen/fensterreinigung-mainz.html", "/wiesbaden/bueroreinigung-wiesbaden.html"],
  },
  {
    path: "leistungen/unterhaltsreinigung-mainz.html",
    title: "Unterhaltsreinigung Mainz | Reinigungsfirma MIA",
    description: "Unterhaltsreinigung Mainz für Büros, Praxen, Treppenhäuser und Gewerbeobjekte: regelmäßige Reinigung nach Plan.",
    h1: "Unterhaltsreinigung Mainz",
    eyebrow: "Regelmäßige Objektpflege",
    lead: "Mit einer professionellen Unterhaltsreinigung bleibt Ihr Objekt in Mainz dauerhaft gepflegt. Wir reinigen nach festen Intervallen und transparent abgestimmten Leistungslisten.",
    image: "Buerroreinigung-768x432.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Unterhaltsreinigung",
        title: "Planbare Sauberkeit für Ihr Objekt",
        text: "Ob täglich, wöchentlich oder mehrmals pro Woche: Wir stimmen Umfang, Zeiten und Prioritäten mit Ihnen ab und dokumentieren die vereinbarten Abläufe.",
        bullets: ["Regelmäßige Reinigung von Böden und Oberflächen", "Sanitär- und Küchenbereiche", "Treppenhäuser, Flure und Empfang", "Qualitätskontrollen und feste Ansprechpartner"],
      },
    ],
    related: ["/leistungen/bueroreinigung-mainz.html", "/leistungen/treppenhausreinigung-mainz.html", "/wiesbaden/gebaeudereinigung-wiesbaden.html"],
  },
  {
    path: "leistungen/treppenhausreinigung-mainz.html",
    title: "Treppenhausreinigung Mainz | Reinigungsfirma MIA",
    description: "Treppenhausreinigung Mainz für Mehrfamilienhäuser, Hausverwaltungen und Gewerbeobjekte: zuverlässig, gründlich und regelmäßig.",
    h1: "Treppenhausreinigung Mainz",
    eyebrow: "Hausverwaltung & Objektpflege",
    lead: "Ein gepflegtes Treppenhaus ist die Visitenkarte eines Gebäudes. Wir reinigen Treppenhäuser in Mainz für Hausverwaltungen, Eigentümergemeinschaften und Gewerbeobjekte.",
    image: "nilotpal-maity-4lM_LKYpiZU-unsplash.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Treppenhausreinigung",
        title: "Für gepflegte Eingangsbereiche",
        text: "Wir übernehmen die regelmäßige Reinigung von Treppen, Podesten, Geländern, Hauseingängen, Briefkastenbereichen und weiteren Gemeinschaftsflächen.",
        bullets: ["Kehren und Wischen von Treppen und Podesten", "Reinigung von Geländern, Fensterbänken und Griffbereichen", "Eingangsbereiche und Gemeinschaftsflächen", "Reinigungsintervalle passend zum Objekt"],
      },
    ],
    related: ["/leistungen/unterhaltsreinigung-mainz.html", "/wiesbaden/treppenhausreinigung-wiesbaden.html", "/referenzen.html"],
  },
  {
    path: "leistungen/praxisreinigung-mainz.html",
    title: "Praxisreinigung Mainz | Reinigungsfirma MIA",
    description: "Praxisreinigung Mainz für Arztpraxen, Therapiepraxen und Behandlungsräume: hygienisch, zuverlässig und diskret.",
    h1: "Praxisreinigung Mainz",
    eyebrow: "Praxis & Medizin",
    lead: "In medizinischen und therapeutischen Einrichtungen zählt hygienische Sauberkeit besonders. Reinigungsfirma MIA reinigt Praxen in Mainz nach abgestimmten Hygieneanforderungen.",
    image: "toon-lambrechts-TpNA_02AzXY-unsplash.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Praxisreinigung",
        title: "Reinigung sensibler Bereiche",
        text: "Wir reinigen Wartezimmer, Behandlungsräume, Sanitärbereiche und Personalzonen sorgfältig und diskret. Die Abläufe richten sich nach Ihren Praxiszeiten und Hygieneplänen.",
        bullets: ["Behandlungs- und Wartebereiche", "Sanitär- und Personalräume", "Reinigung häufig berührter Kontaktflächen", "Diskrete Durchführung außerhalb der Sprechzeiten"],
      },
    ],
    related: ["/leistungen/unterhaltsreinigung-mainz.html", "/leistungen/fensterreinigung-mainz.html", "/kontakt.html"],
  },
  {
    path: "leistungen/fensterreinigung-mainz.html",
    title: "Fensterreinigung Mainz | Reinigungsfirma MIA",
    description: "Fensterreinigung Mainz: streifenfreie Glasreinigung, Rahmenreinigung, Schaufenster und Glasflächen für Gewerbe und Privatkunden.",
    h1: "Fensterreinigung Mainz",
    eyebrow: "Glas & Rahmen",
    lead: "Klare Fenster und gepflegte Glasflächen verbessern den ersten Eindruck Ihres Objekts. Wir übernehmen Fensterreinigung in Mainz für Büros, Praxen, Schaufenster und Wohnobjekte.",
    image: "priscilla-du-preez-BuDD1HGco-4-unsplash.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Fensterreinigung",
        title: "Streifenfreie Glasreinigung",
        text: "Je nach Objekt reinigen wir Fenster innen und außen, Rahmen, Falze, Glasfronten und Schaufenster. Die Termine lassen sich einzeln oder regelmäßig planen.",
        bullets: ["Fenster innen und außen", "Rahmen- und Falzreinigung", "Schaufenster und Glasfronten", "Regelmäßige oder einmalige Glasreinigung"],
      },
    ],
    related: ["/leistungen/bueroreinigung-mainz.html", "/leistungen/praxisreinigung-mainz.html", "/kontakt.html"],
  },
  {
    path: "wiesbaden/gebaeudereinigung-wiesbaden.html",
    title: "Gebäudereinigung Wiesbaden | Reinigungsfirma MIA",
    description: "Gebäudereinigung Wiesbaden von Reinigungsfirma MIA: Büroreinigung, Treppenhausreinigung und Objektpflege in Wiesbaden.",
    h1: "Gebäudereinigung Wiesbaden",
    eyebrow: "Reinigung in Wiesbaden",
    lead: "Reinigungsfirma MIA betreut Objekte in Wiesbaden mit professioneller Gebäudereinigung, Büroreinigung und Treppenhausreinigung. Ideal für Unternehmen, Praxen und Hausverwaltungen.",
    image: "gebaeudereinigung-header-01.jpg",
    city: "Wiesbaden",
    sections: [
      {
        label: "Wiesbaden",
        title: "Gebäudereinigung für Wiesbaden und Umgebung",
        text: "Von Mainz-Kostheim aus sind wir schnell in Wiesbaden und stimmen Einsätze flexibel auf Objektgröße, Lage und gewünschte Reinigungsintervalle ab.",
        bullets: ["Büroreinigung und Unterhaltsreinigung", "Treppenhausreinigung für Hausverwaltungen", "Fenster- und Glasreinigung nach Bedarf", "Direkte Ansprechpartner und transparente Angebote"],
      },
    ],
    related: ["/wiesbaden/bueroreinigung-wiesbaden.html", "/wiesbaden/treppenhausreinigung-wiesbaden.html", "/leistungen/unterhaltsreinigung-mainz.html"],
  },
  {
    path: "wiesbaden/bueroreinigung-wiesbaden.html",
    title: "Büroreinigung Wiesbaden | Reinigungsfirma MIA",
    description: "Büroreinigung Wiesbaden: regelmäßige Reinigung von Büros, Sanitärbereichen, Teeküchen und Gewerbeflächen.",
    h1: "Büroreinigung Wiesbaden",
    eyebrow: "Büro & Gewerbe",
    lead: "Für Unternehmen in Wiesbaden übernimmt Reinigungsfirma MIA die laufende Büroreinigung zuverlässig und zu passenden Zeiten.",
    image: "kate-sade-2zZp12ChxhU-unsplash.jpg",
    city: "Wiesbaden",
    sections: [
      {
        label: "Büroreinigung",
        title: "Saubere Arbeitsplätze in Wiesbaden",
        text: "Wir reinigen Büroräume, Besprechungsräume, Küchen und Sanitärbereiche mit festen Abläufen. So bleibt Ihr Unternehmen dauerhaft repräsentativ.",
        bullets: ["Reinigung außerhalb Ihrer Kernarbeitszeiten", "Arbeitsplätze, Böden und Oberflächen", "Sanitär- und Küchenbereiche", "Individuelle Reinigungspläne"],
      },
    ],
    related: ["/wiesbaden/gebaeudereinigung-wiesbaden.html", "/leistungen/bueroreinigung-mainz.html", "/kontakt.html"],
  },
  {
    path: "wiesbaden/treppenhausreinigung-wiesbaden.html",
    title: "Treppenhausreinigung Wiesbaden | Reinigungsfirma MIA",
    description: "Treppenhausreinigung Wiesbaden für Hausverwaltungen, Mehrfamilienhäuser und Gewerbeobjekte.",
    h1: "Treppenhausreinigung Wiesbaden",
    eyebrow: "Hausverwaltung & Objektpflege",
    lead: "Wir reinigen Treppenhäuser in Wiesbaden regelmäßig und gründlich, damit Eingänge, Podeste und Gemeinschaftsflächen gepflegt bleiben.",
    image: "nilotpal-maity-4lM_LKYpiZU-unsplash.jpg",
    city: "Wiesbaden",
    sections: [
      {
        label: "Treppenhausreinigung",
        title: "Objektpflege für Wiesbadener Immobilien",
        text: "Die Treppenhausreinigung wird passend zum Objekt geplant: wöchentlich, mehrmals pro Woche oder nach individueller Vereinbarung.",
        bullets: ["Treppen, Podeste und Eingangsbereiche", "Geländer, Briefkastenbereiche und Fensterbänke", "Regelmäßige Sichtkontrolle", "Feste Ansprechpartner für Verwaltungen"],
      },
    ],
    related: ["/wiesbaden/gebaeudereinigung-wiesbaden.html", "/leistungen/treppenhausreinigung-mainz.html", "/referenzen.html"],
  },
  {
    path: "ueber-uns.html",
    title: "Über uns | Reinigungsfirma MIA",
    description: "Über Reinigungsfirma MIA: Ihr regionaler Reinigungspartner für Mainz, Wiesbaden und Umgebung.",
    h1: "Über Reinigungsfirma MIA",
    eyebrow: "Über uns",
    lead: "Wir stehen für gründliche Reinigung, klare Absprachen und persönliche Erreichbarkeit. Unser Schwerpunkt liegt auf Gebäudereinigung in Mainz, Wiesbaden und Umgebung.",
    image: "Vorteile-scaled-e1741901039197.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Arbeitsweise",
        title: "Zuverlässig, gründlich und fair",
        text: "Unsere Kunden erhalten feste Ansprechpartner, transparente Angebote und Reinigungsteams, die nach abgestimmten Checklisten arbeiten.",
        bullets: ["Geschultes Reinigungspersonal", "Moderne Reinigungsmittel und Geräte", "Dokumentierte Abläufe", "Flexible Einsätze außerhalb Ihrer Öffnungszeiten"],
      },
    ],
    related: ["/referenzen.html", "/kontakt.html", "/karriere.html"],
  },
  {
    path: "referenzen.html",
    title: "Referenzen | Reinigungsfirma MIA",
    description: "Referenzen und Kundenstimmen von Reinigungsfirma MIA aus Gebäudereinigung, Büroreinigung und Treppenhausreinigung.",
    h1: "Referenzen",
    eyebrow: "Kundenstimmen",
    lead: "Viele Kunden vertrauen uns bei Büroreinigung, Treppenhausreinigung und Bauendreinigung. Hier finden Sie typische Einsatzbereiche und Stimmen aus der Zusammenarbeit.",
    image: "gebaeudereinigung-header-02.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Erfahrung",
        title: "Typische Kunden und Objekte",
        text: "Wir betreuen kleine Unternehmen, Hausverwaltungen, Praxen und private Auftraggeber in Mainz, Wiesbaden und Umgebung.",
        bullets: ["Büroräume und Gewerbeflächen", "Mehrfamilienhäuser und Treppenhäuser", "Arzt- und Therapiepraxen", "Bau- und Grundreinigungen nach Renovierung"],
      },
    ],
    related: ["/leistungen/bueroreinigung-mainz.html", "/leistungen/treppenhausreinigung-mainz.html", "/kontakt.html"],
  },
  {
    path: "kontakt.html",
    title: "Kontakt | Reinigungsfirma MIA Mainz & Wiesbaden",
    description: "Kontakt zu Reinigungsfirma MIA: Angebot für Gebäudereinigung, Büroreinigung oder Treppenhausreinigung in Mainz und Wiesbaden anfragen.",
    h1: "Kontakt",
    eyebrow: "Angebot anfragen",
    lead: "Beschreiben Sie kurz Ihr Objekt und den gewünschten Leistungsumfang. Wir melden uns zügig mit Rückfragen oder einem passenden Angebot.",
    image: "gebaeudereinigung-header-01.jpg",
    city: "Mainz",
    contactOnly: true,
    sections: [],
    related: ["/leistungen/bueroreinigung-mainz.html", "/wiesbaden/gebaeudereinigung-wiesbaden.html", "/ueber-uns.html"],
  },
  {
    path: "karriere.html",
    title: "Karriere | Reinigungskraft Jobs Mainz & Wiesbaden",
    description: "Karriere bei Reinigungsfirma MIA: Reinigungskraft Jobs in Mainz, Wiesbaden und Umgebung.",
    h1: "Karriere",
    eyebrow: "Jobs in der Reinigung",
    lead: "Sie arbeiten sorgfältig, zuverlässig und gerne im Team? Reinigungsfirma MIA sucht Unterstützung für Reinigungsaufträge in Mainz, Wiesbaden und Umgebung.",
    image: "carl-tronders-a4_Z0lMAO8Y-unsplash.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Stellenprofil",
        title: "Reinigungskraft für Mainz und Wiesbaden",
        text: "Wir suchen zuverlässige Mitarbeitende für Büroreinigung, Treppenhausreinigung und Objektpflege. Erfahrung ist hilfreich, wichtiger sind Sorgfalt, Pünktlichkeit und Verantwortungsbewusstsein.",
        bullets: ["Flexible Einsatzzeiten nach Absprache", "Einarbeitung in Objekt und Reinigungsplan", "Faire Kommunikation und klare Aufgaben", "Bewerbung direkt per Telefon, E-Mail oder WhatsApp"],
      },
    ],
    related: ["/kontakt.html", "/ueber-uns.html", "/leistungen/unterhaltsreinigung-mainz.html"],
  },
  {
    path: "ratgeber/index.html",
    title: "Ratgeber Reinigung | Reinigungsfirma MIA",
    description: "Ratgeber von Reinigungsfirma MIA: Tipps rund um Gebäudereinigung, Büroreinigung, Treppenhausreinigung und Hygiene.",
    h1: "Ratgeber",
    eyebrow: "Wissen & Tipps",
    lead: "Im Ratgeber sammeln wir praktische Hinweise rund um Gebäudereinigung, Büroreinigung, Treppenhausreinigung und Hygiene für Unternehmen, Praxen und Hausverwaltungen.",
    image: "fruehjahrsputz.jpg",
    city: "Mainz",
    sections: [
      {
        label: "Ratgeber",
        title: "Themen für Kunden in Mainz und Wiesbaden",
        text: "Diese Kategorie ist für zukünftige SEO-Artikel vorbereitet. Sinnvolle Themen sind Reinigungsintervalle, Kostenfaktoren, Hygienepläne und Checklisten für Hausverwaltungen.",
        bullets: ["Wie oft sollte ein Büro gereinigt werden?", "Was gehört zu einer Treppenhausreinigung?", "Unterhaltsreinigung: Leistungen und Kostenfaktoren", "Hygiene in Praxen richtig organisieren"],
      },
    ],
    related: ["/leistungen/unterhaltsreinigung-mainz.html", "/leistungen/praxisreinigung-mainz.html", "/kontakt.html"],
  },
  {
    path: "sitemap.html",
    title: "Sitemap | Reinigungsfirma MIA",
    description: "Sitemap der Reinigungsfirma MIA Website mit allen SEO-Seiten für Mainz und Wiesbaden.",
    h1: "Sitemap",
    eyebrow: "Website-Struktur",
    lead: "Alle wichtigen Seiten der Reinigungsfirma MIA Website auf einen Blick.",
    image: "gebaeudereinigung-header-02.jpg",
    city: "Mainz",
    sitemapPage: true,
    sections: [],
  },
];

const pageByPath = new Map(pages.map((page) => ["/" + page.path, page]));

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(path.join(root, filePath)), { recursive: true });
}

function asset(src) {
  if (src.startsWith("assets/")) return "/" + src;
  return "/" + src;
}

function navHtml(currentPath) {
  const serviceLinks = navServices.map(([label, href]) => `<li><a class="dropdown-item" href="${href}">${label}</a></li>`).join("");
  const cityLinks = navCities.map(([label, href]) => `<li><a class="dropdown-item" href="${href}">${label}</a></li>`).join("");
  return `
<nav class="navbar navbar-expand-lg navbar-light sticky-top shadow-sm">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2" href="/">
      <img src="/LOGO_ORIG_123.png" alt="MIA Reinigung Gebäudereinigung Mainz" width="70" height="70" decoding="async">
      <span class="fw-semibold">MIA Reinigung</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Navigation öffnen">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
        <li class="nav-item"><a class="nav-link${currentPath === "/" ? " active" : ""}" href="/">Gebäudereinigung Mainz</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Leistungen</a>
          <ul class="dropdown-menu">${serviceLinks}</ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Wiesbaden</a>
          <ul class="dropdown-menu">${cityLinks}</ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="/ueber-uns.html">Über uns</a></li>
        <li class="nav-item"><a class="nav-link" href="/referenzen.html">Referenzen</a></li>
        <li class="nav-item"><a class="nav-link" href="/ratgeber/">Ratgeber</a></li>
        <li class="nav-item"><a class="btn btn-accent ms-lg-2" href="/kontakt.html"><i class="bi bi-calendar-check me-1"></i> Angebot anfragen</a></li>
      </ul>
    </div>
  </div>
</nav>`;
}

function head(page, currentPath) {
  const canonical = `${siteUrl}${currentPath === "/" ? "/" : currentPath}`;
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${page.title}</title>
  <meta name="description" content="${page.description}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${page.title}">
  <meta property="og:description" content="${page.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteUrl}/LOGO_ORIG_123.png?v=2">
  <meta property="og:image:alt" content="Reinigungsfirma MIA Logo">
  <link rel="icon" type="image/png" sizes="48x48" href="/LOGO_ORIG_123_48.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/LOGO_ORIG_123_192.png">
  <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
  <script type="application/ld+json">
${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Reinigungsfirma MIA",
    url: siteUrl + "/",
    logo: siteUrl + "/LOGO_ORIG_123.png?v=2",
    image: siteUrl + "/LOGO_ORIG_123.png?v=2",
    telephone: phone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hochheimer Straße 72",
      postalCode: "55246",
      addressLocality: "Mainz-Kostheim",
      addressCountry: "DE",
    },
    areaServed: ["Mainz", "Wiesbaden", "Mainz-Kostheim"],
    priceRange: "$$",
  }, null, 2)}
  </script>
  <style>
    :root { --accent:#0f7bff; --accent-soft:rgba(15,123,255,.08); --dark:#111827; --muted:#6b7280; }
    * { scroll-behavior:smooth; }
    body { font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:#111827; background:#f9fafb; }
    .navbar { padding-top:.75rem; padding-bottom:.75rem; background:rgba(255,255,255,.96)!important; backdrop-filter:blur(10px); }
    .navbar-brand span { font-size:1.15rem; letter-spacing:.03em; }
    .nav-link { font-weight:500; color:#4b5563!important; }
    .nav-link:hover,.nav-link.active { color:var(--accent)!important; }
    .btn-accent { background:var(--accent); border-color:var(--accent); color:#fff; font-weight:600; border-radius:999px; padding-inline:1.2rem; }
    .btn-accent:hover { background:#0c62cc; border-color:#0c62cc; color:#fff; }
    .hero { position:relative; min-height:76vh; display:flex; align-items:center; color:#fff; overflow:hidden; }
    .hero-bg { position:absolute; inset:0; background-size:cover; background-position:center; filter:brightness(.78); transform:scale(1.03); }
    .hero-overlay { position:absolute; inset:0; background:radial-gradient(circle at top left,rgba(15,123,255,.25),transparent 55%),linear-gradient(120deg,rgba(15,123,255,.18),rgba(15,123,255,0)); mix-blend-mode:multiply; }
    .hero-inner { position:relative; z-index:2; }
    .hero-badge { display:inline-flex; align-items:center; gap:.5rem; background:rgba(15,123,255,.14); border-radius:999px; padding:.35rem .9rem; font-size:.8rem; font-weight:600; letter-spacing:.04em; text-transform:uppercase; }
    .hero h1 { font-weight:700; letter-spacing:-.03em; }
    .hero-lead { font-size:1.1rem; max-width:42rem; }
    .hero-meta { font-size:.9rem; opacity:.92; }
    .hero-card,.contact-card { background:#fff; border:1px solid #e5e7eb; border-radius:1rem; padding:1.5rem; box-shadow:0 18px 40px rgba(15,23,42,.08); }
    .hero-card { background:rgba(17,24,39,.84); border-color:rgba(255,255,255,.08); color:#fff; box-shadow:0 20px 50px rgba(15,23,42,.55); }
    .hero-card .small { color:#d1d5db; }
    .hero-check { color:#a7f3d0; }
    .section { padding-block:4.5rem; }
    .section-label { text-transform:uppercase; letter-spacing:.17em; font-size:.75rem; font-weight:700; color:var(--accent); }
    .section-title { font-weight:700; letter-spacing:-.02em; }
    .section-text { color:var(--muted); max-width:44rem; margin-inline:auto; }
    .lift { transition:transform .18s ease, box-shadow .18s ease; }
    .lift:hover { transform:translateY(-4px); box-shadow:0 20px 40px rgba(15,23,42,.12); }
    .card-service { border-radius:1rem; border:1px solid #e5e7eb; overflow:hidden; background:#fff; height:100%; }
    .card-service img { height:190px; object-fit:cover; }
    .chip { display:inline-flex; align-items:center; gap:.4rem; padding:.25rem .7rem; border-radius:999px; font-size:.75rem; background:#f3f4f6; color:#4b5563; }
    .feature-icon { width:2.75rem; height:2.75rem; border-radius:999px; display:inline-flex; align-items:center; justify-content:center; background:var(--accent-soft); color:var(--accent); margin-bottom:.75rem; }
    .step { position:relative; padding-left:2.75rem; }
    .step-number { position:absolute; left:0; top:0; width:2rem; height:2rem; border-radius:999px; background:var(--accent-soft); color:var(--accent); display:flex; align-items:center; justify-content:center; font-weight:600; font-size:.9rem; }
    .step + .step { margin-top:1.5rem; }
    .testimonial { border-radius:1rem; padding:1.5rem; background:#fff; border:1px solid #e5e7eb; height:100%; }
    .testimonial .name { font-weight:600; }
    .testimonial .role { font-size:.85rem; color:var(--muted); }
    .contact-meta i { font-size:1.1rem; width:1.5rem; color:var(--accent); }
    footer { background:#020617; color:#9ca3af; padding-block:2.75rem; font-size:.9rem; }
    footer a { color:#e5e7eb; text-decoration:none; }
    footer a:hover { color:#fff; text-decoration:underline; }
    @media (max-width:991.98px) { .hero { min-height:auto; padding-block:3.5rem; } }
  </style>
</head>`;
}

function hero(page) {
  return `<header class="hero">
  <div class="hero-bg" style="background-image:url('${asset(page.image)}')"></div>
  <div class="hero-overlay"></div>
  <div class="container hero-inner py-5">
    <div class="row g-4 align-items-center">
      <div class="col-lg-7">
        <div class="hero-badge mb-3"><i class="bi bi-stars"></i><span>${page.eyebrow}</span></div>
        <h1 class="display-5 mb-3">${page.h1}</h1>
        <p class="hero-lead mb-3">${page.lead}</p>
        <p class="hero-meta mb-4"><i class="bi bi-geo-alt me-1"></i> Regional für Mainz, Wiesbaden & Umgebung &nbsp;•&nbsp; Flexible Termine &nbsp;•&nbsp; Festpreise nach Besichtigung</p>
        <div class="d-flex flex-wrap gap-3">
          <a href="/kontakt.html" class="btn btn-accent btn-lg"><i class="bi bi-calendar-week me-2"></i> Unverbindliche Anfrage</a>
          <a href="${phoneHref}" class="btn btn-outline-light btn-lg"><i class="bi bi-telephone-outbound me-2"></i> Direkt anrufen</a>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="hero-card mt-4 mt-lg-0">
          <h2 class="h5 mb-1">Jetzt Reinigung anfragen</h2>
          <p class="small mb-3">In wenigen Schritten zu Ihrem individuellen Angebot.</p>
          <ul class="list-unstyled mb-3">
            <li class="d-flex gap-2 mb-2"><span class="hero-check"><i class="bi bi-check-circle-fill"></i></span><span>Kurzbeschreibung Ihrer Räumlichkeiten</span></li>
            <li class="d-flex gap-2 mb-2"><span class="hero-check"><i class="bi bi-check-circle-fill"></i></span><span>Wunschtermine und Reinigungsintervalle festlegen</span></li>
            <li class="d-flex gap-2 mb-2"><span class="hero-check"><i class="bi bi-check-circle-fill"></i></span><span>Transparentes Angebot ohne versteckte Kosten</span></li>
          </ul>
          <a href="/kontakt.html" class="btn btn-accent w-100"><i class="bi bi-envelope-open me-2"></i> Anfrageformular öffnen</a>
        </div>
      </div>
    </div>
  </div>
</header>`;
}

function sectionHtml(section) {
  if (section.cards) {
    return `<section class="section">
  <div class="container">
    <div class="text-center mb-5">
      <div class="section-label mb-2">${section.label}</div>
      <h2 class="section-title mb-2">${section.title}</h2>
      <p class="section-text">${section.text}</p>
    </div>
    <div class="row g-4">
      ${section.cards.map(([title, text, href, img]) => `<div class="col-md-6 col-lg-4">
        <a class="text-decoration-none text-reset" href="${href}">
          <div class="card card-service lift">
            <img src="${asset(img)}" class="card-img-top" alt="${title}">
            <div class="card-body">
              <span class="chip mb-2"><i class="bi bi-stars"></i> Reinigungsservice</span>
              <h3 class="h5 card-title">${title}</h3>
              <p class="card-text text-muted">${text}</p>
            </div>
          </div>
        </a>
      </div>`).join("")}
    </div>
  </div>
</section>`;
  }
  return `<section class="section bg-white">
  <div class="container">
    <div class="row g-5 align-items-center">
      <div class="col-lg-5">
        <div class="section-label mb-2">${section.label}</div>
        <h2 class="section-title mb-3">${section.title}</h2>
        <p class="text-muted mb-0">${section.text}</p>
      </div>
      <div class="col-lg-7">
        <div class="row g-3">
          ${section.bullets.map((bullet, index) => `<div class="col-sm-6">
            <div class="p-3 p-md-4 bg-white border rounded-4 lift h-100">
              <div class="feature-icon"><i class="bi ${["bi-shield-check", "bi-stars", "bi-arrow-repeat", "bi-emoji-smile"][index % 4]}"></i></div>
              <h3 class="h6">${bullet}</h3>
              <p class="text-muted small mb-0">Teil des abgestimmten Reinigungsplans für Ihr Objekt in ${section.city || "Mainz und Wiesbaden"}.</p>
            </div>
          </div>`).join("")}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function processSection() {
  return `<section class="section">
  <div class="container">
    <div class="text-center mb-5">
      <div class="section-label mb-2">Ablauf</div>
      <h2 class="section-title mb-2">So einfach funktioniert die Zusammenarbeit</h2>
      <p class="section-text">Von der ersten Anfrage bis zur laufenden Reinigung führen wir Sie transparent durch alle Schritte.</p>
    </div>
    <div class="row g-5">
      <div class="col-lg-6">
        <div class="step"><div class="step-number">1</div><h3 class="h5">Kontakt & erste Einschätzung</h3><p class="text-muted small mb-0">Sie senden uns Angaben zu Objektart, Größe und gewünschtem Leistungsumfang.</p></div>
        <div class="step"><div class="step-number">2</div><h3 class="h5">Besichtigung & Angebot</h3><p class="text-muted small mb-0">Wir klären Details vor Ort oder telefonisch und erstellen ein transparentes Angebot.</p></div>
        <div class="step"><div class="step-number">3</div><h3 class="h5">Start der Reinigung</h3><p class="text-muted small mb-0">Nach Ihrer Zusage starten wir zum vereinbarten Termin und passen Leistungen bei Bedarf an.</p></div>
      </div>
      <div class="col-lg-6">${contactBox()}</div>
    </div>
  </div>
</section>`;
}

function testimonials() {
  return `<section class="section bg-white">
  <div class="container">
    <div class="text-center mb-4">
      <div class="section-label mb-2">Kundenstimmen</div>
      <h2 class="section-title mb-2">Was unsere Kunden sagen</h2>
      <p class="section-text">Kunden vertrauen uns bei Büroreinigung, Treppenhausreinigung und Bauendreinigung.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-4"><div class="testimonial lift"><p class="mb-3">„Unsere Büroräume werden seit Monaten zuverlässig, gründlich und termingerecht gereinigt.“</p><div class="name">B. Schneider</div><div class="role">Büroleitung, kleines Unternehmen</div></div></div>
      <div class="col-md-4"><div class="testimonial lift"><p class="mb-3">„Die regelmäßige Treppenhausreinigung hat unser Objekt sichtbar aufgewertet.“</p><div class="name">Hausverwaltung M.</div><div class="role">Mehrfamilienhaus</div></div></div>
      <div class="col-md-4"><div class="testimonial lift"><p class="mb-3">„Nach der Renovierung lief die Bauendreinigung schnell, ordentlich und wie abgesprochen.“</p><div class="name">Familie K.</div><div class="role">Privathaushalt</div></div></div>
    </div>
  </div>
</section>`;
}

function faqSection() {
  return `<section class="section">
  <div class="container">
    <div class="text-center mb-4">
      <div class="section-label mb-2">FAQ</div>
      <h2 class="section-title mb-2">Häufige Fragen zur Gebäudereinigung</h2>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <div class="accordion" id="faqAccordion">
          ${[
            ["Reinigen Sie gewerbliche und private Objekte?", "Ja. Wir betreuen Büros, Gewerbeflächen, Treppenhäuser, Praxen sowie private Wohnungen und Häuser."],
            ["Bringen Sie Reinigungsmittel und Equipment mit?", "In der Regel bringen wir alle benötigten Reinigungsmittel und Geräte mit. Spezielle Produktwünsche stimmen wir vorher ab."],
            ["Wie berechnen Sie den Preis?", "Der Preis hängt von Objektgröße, Verschmutzungsgrad, Leistungsumfang und Intervall ab. Nach der Abstimmung erhalten Sie ein transparentes Angebot."],
            ["Sind Termine außerhalb der Öffnungszeiten möglich?", "Ja. Viele Reinigungen erfolgen frühmorgens oder abends, damit Ihr Betrieb nicht gestört wird."],
          ].map(([q, a], i) => `<div class="accordion-item">
            <h3 class="accordion-header" id="q${i}"><button class="accordion-button ${i ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#a${i}">${q}</button></h3>
            <div id="a${i}" class="accordion-collapse collapse ${i ? "" : "show"}" data-bs-parent="#faqAccordion"><div class="accordion-body">${a}</div></div>
          </div>`).join("")}
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function contactBox() {
  return `<div class="contact-card lift">
  <h3 class="h5 mb-3"><i class="bi bi-telephone-outbound me-2"></i>Direkt Kontakt aufnehmen</h3>
  <div class="contact-meta mb-2 d-flex align-items-start gap-2"><i class="bi bi-telephone"></i><div><div class="small text-muted">Telefon</div><a href="${phoneHref}">${phone}</a></div></div>
  <div class="contact-meta mb-2 d-flex align-items-start gap-2"><i class="bi bi-envelope"></i><div><div class="small text-muted">E-Mail</div><a href="mailto:${email}">${email}</a></div></div>
  <div class="contact-meta mb-3 d-flex align-items-start gap-2"><i class="bi bi-geo-alt"></i><div><div class="small text-muted">Adresse</div><span>Hochheimer Straße 72<br>55246 Mainz-Kostheim</span></div></div>
  <a href="/kontakt.html" class="btn btn-accent w-100"><i class="bi bi-calendar-plus me-2"></i> Anfrage starten</a>
</div>`;
}

function contactSection() {
  return `<section class="section" id="kontakt">
  <div class="container">
    <div class="row g-5 align-items-start">
      <div class="col-lg-5">
        <div class="section-label mb-2">Kontakt</div>
        <h2 class="section-title mb-2">Jetzt unverbindliches Angebot anfragen</h2>
        <p class="text-muted mb-3">Beschreiben Sie kurz Ihr Objekt und den gewünschten Leistungsumfang. Wir melden uns mit Rückfragen oder direkt mit einem Angebot.</p>
        <div class="contact-meta mb-2 d-flex align-items-start gap-2"><i class="bi bi-telephone"></i><div><div class="small text-muted">Telefon</div><a href="${phoneHref}">${phone}</a></div></div>
        <div class="contact-meta mb-2 d-flex align-items-start gap-2"><i class="bi bi-envelope"></i><div><div class="small text-muted">E-Mail</div><a href="mailto:${email}">${email}</a></div></div>
        <div class="contact-meta mb-3 d-flex align-items-start gap-2"><i class="bi bi-whatsapp"></i><div><div class="small text-muted">WhatsApp</div><a href="https://wa.me/4915212975639" target="_blank" rel="noopener" class="btn btn-success mt-2"><i class="bi bi-whatsapp me-2"></i> WhatsApp schreiben</a></div></div>
        <div class="contact-meta mb-3 d-flex align-items-start gap-2"><i class="bi bi-geo-alt"></i><div><div class="small text-muted">Adresse</div><span>Hochheimer Straße 72<br>55246 Mainz-Kostheim</span></div></div>
        <div class="small text-muted">Einsatzgebiet: Mainz, Wiesbaden, Mainz-Kostheim und Umgebung.</div>
      </div>
      <div class="col-lg-7">
        <div class="contact-card lift">
          <form>
            <div class="row g-3">
              <div class="col-md-6"><label class="form-label">Name*</label><input type="text" class="form-control" placeholder="Ihr Name" required></div>
              <div class="col-md-6"><label class="form-label">E-Mail*</label><input type="email" class="form-control" placeholder="Ihre E-Mail-Adresse" required></div>
              <div class="col-md-6"><label class="form-label">Telefon</label><input type="tel" class="form-control" placeholder="Für Rückfragen (optional)"></div>
              <div class="col-md-6"><label class="form-label">Objektart</label><select class="form-select"><option selected>Bitte auswählen</option><option>Büro / Gewerbe</option><option>Treppenhaus / Objektverwaltung</option><option>Praxis</option><option>Wohnung / Haus</option><option>Sonstiges</option></select></div>
              <div class="col-12"><label class="form-label">Nachricht / Beschreibung*</label><textarea class="form-control" rows="4" placeholder="Kurzbeschreibung der Räumlichkeiten und gewünschten Leistung" required></textarea></div>
              <div class="col-12"><label class="form-label">Wunschtermine</label><input type="text" class="form-control" placeholder="z. B. ab nächstem Monat, einmal pro Woche"></div>
              <div class="col-12 d-flex align-items-center gap-2"><input type="checkbox" class="form-check-input" id="datenschutz"><label for="datenschutz" class="form-check-label small">Ich habe die <a href="/datenschutz.html">Datenschutzhinweise</a> gelesen und akzeptiere sie.*</label></div>
              <div class="col-12"><button type="submit" class="btn btn-accent w-100"><i class="bi bi-send me-2"></i> Anfrage absenden</button></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>`;
}

function relatedSection(page) {
  const related = page.related || ["/leistungen/bueroreinigung-mainz.html", "/leistungen/unterhaltsreinigung-mainz.html", "/kontakt.html"];
  return `<section class="section bg-white">
  <div class="container">
    <div class="text-center mb-4">
      <div class="section-label mb-2">Weitere Seiten</div>
      <h2 class="section-title mb-2">Passende Informationen</h2>
    </div>
    <div class="row g-3 justify-content-center">
      ${related.map((href) => {
        const p = pageByPath.get(href);
        return `<div class="col-md-4"><a class="text-decoration-none text-reset" href="${href}"><div class="p-4 bg-white border rounded-4 lift h-100"><h3 class="h6 mb-2">${p?.h1 || "Kontakt"}</h3><p class="small text-muted mb-0">${p?.description || "Nehmen Sie Kontakt mit uns auf."}</p></div></a></div>`;
      }).join("")}
    </div>
  </div>
</section>`;
}

function sitemapContent() {
  const groups = [
    ["Home", [["Gebäudereinigung Mainz", "/"]]],
    ["Service Pages", navServices],
    ["City Pages", navCities],
    ["Additional SEO Pages", [["Über uns", "/ueber-uns.html"], ["Referenzen", "/referenzen.html"], ["Kontakt", "/kontakt.html"], ["Karriere", "/karriere.html"]]],
    ["Blog Category", [["Ratgeber", "/ratgeber/"]]],
    ["Rechtliches", [["Impressum", "/impressum.html"], ["Datenschutz", "/datenschutz.html"]]],
  ];
  return `<section class="section bg-white">
  <div class="container">
    <div class="row g-4">
      ${groups.map(([title, links]) => `<div class="col-md-6 col-lg-4">
        <div class="p-4 bg-white border rounded-4 h-100">
          <h2 class="h5">${title}</h2>
          <ul class="mb-0">
            ${links.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("")}
          </ul>
        </div>
      </div>`).join("")}
    </div>
  </div>
</section>`;
}

function footer() {
  return `<footer>
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <h2 class="h6 text-white">Reinigungsfirma MIA</h2>
        <p class="mb-2">Gebäudereinigung Mainz, Wiesbaden und Umgebung.</p>
        <p class="mb-0">${address}<br><a href="${phoneHref}">${phone}</a><br><a href="mailto:${email}">${email}</a></p>
      </div>
      <div class="col-6 col-lg-2">
        <h2 class="h6 text-white">Mainz</h2>
        <ul class="list-unstyled mb-0">
          ${navServices.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("")}
        </ul>
      </div>
      <div class="col-6 col-lg-2">
        <h2 class="h6 text-white">Wiesbaden</h2>
        <ul class="list-unstyled mb-0">
          ${navCities.map(([label, href]) => `<li><a href="${href}">${label}</a></li>`).join("")}
        </ul>
      </div>
      <div class="col-6 col-lg-2">
        <h2 class="h6 text-white">Unternehmen</h2>
        <ul class="list-unstyled mb-0">
          <li><a href="/ueber-uns.html">Über uns</a></li>
          <li><a href="/referenzen.html">Referenzen</a></li>
          <li><a href="/karriere.html">Karriere</a></li>
          <li><a href="/kontakt.html">Kontakt</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2">
        <h2 class="h6 text-white">SEO</h2>
        <ul class="list-unstyled mb-0">
          <li><a href="/ratgeber/">Ratgeber</a></li>
          <li><a href="/sitemap.html">Sitemap</a></li>
          <li><a href="/impressum.html">Impressum</a></li>
          <li><a href="/datenschutz.html">Datenschutz</a></li>
        </ul>
      </div>
    </div>
    <hr class="border-secondary my-4">
    <div class="small">&copy; <span id="year"></span> Reinigungsfirma MIA - Gebäudereinigung. Alle Rechte vorbehalten.</div>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script>document.getElementById('year').textContent = new Date().getFullYear();</script>
</body>
</html>`;
}

function render(page) {
  const currentPath = page.path === "index.html" ? "/" : "/" + page.path.replace(/index\.html$/, "");
  let body = `${head(page, currentPath)}
<body>
${navHtml(currentPath)}
${hero(page)}`;

  if (page.sitemapPage) {
    body += sitemapContent();
  } else {
    body += page.sections.map(sectionHtml).join("");
    if (!page.contactOnly) {
      body += processSection();
      body += testimonials();
      body += faqSection();
      body += relatedSection(page);
    }
    body += contactSection();
  }

  body += footer();
  return body;
}

for (const page of pages) {
  ensureDir(page.path);
  fs.writeFileSync(path.join(root, page.path), render(page));
}

const xmlUrls = [
  "/",
  ...pages.filter((p) => p.path !== "index.html").map((p) => "/" + p.path.replace(/index\.html$/, "")),
  "/impressum.html",
  "/datenschutz.html",
];

fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls.map((url) => `  <url><loc>${siteUrl}${url}</loc><lastmod>2026-06-12</lastmod><changefreq>monthly</changefreq><priority>${url === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>
`);

fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *
Allow: /
Sitemap: ${siteUrl}/sitemap.xml
`);
