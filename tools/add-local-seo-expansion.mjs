import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const siteUrl = "https://mia-reinigung.de";
const email = "miareinigung.info@gmail.com";
const phone = "+49 1521 2975639";

const districts = [
  ["altstadt", "Altstadt"],
  ["neustadt", "Neustadt"],
  ["gonsenheim", "Gonsenheim"],
  ["bretzenheim", "Bretzenheim"],
  ["hechtsheim", "Hechtsheim"],
  ["mombach", "Mombach"],
  ["finthen", "Finthen"],
];

function write(file, content) {
  fs.mkdirSync(path.dirname(path.join(root, file)), { recursive: true });
  fs.writeFileSync(path.join(root, file), content);
}

function nav(prefix = "") {
  return `<nav class="navbar navbar-expand-lg navbar-light sticky-top shadow-sm">
  <div class="container">
    <a class="navbar-brand d-flex align-items-center gap-2" href="${prefix}index.html">
      <img src="${prefix}LOGO_ORIG_123.png" alt="MIA Reinigung Gebäudereinigung Mainz" width="54" height="54" decoding="async">
      <span class="fw-semibold">MIA Reinigung</span>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Navigation öffnen">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="nav">
      <ul class="navbar-nav ms-auto align-items-lg-center gap-lg-2">
        <li class="nav-item"><a class="nav-link" href="${prefix}index.html">Gebäudereinigung Mainz</a></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Leistungen</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="${prefix}leistungen/bueroreinigung-mainz.html">Büroreinigung Mainz</a></li>
            <li><a class="dropdown-item" href="${prefix}leistungen/unterhaltsreinigung-mainz.html">Unterhaltsreinigung Mainz</a></li>
            <li><a class="dropdown-item" href="${prefix}leistungen/treppenhausreinigung-mainz.html">Treppenhausreinigung Mainz</a></li>
            <li><a class="dropdown-item" href="${prefix}leistungen/praxisreinigung-mainz.html">Praxisreinigung Mainz</a></li>
            <li><a class="dropdown-item" href="${prefix}leistungen/fensterreinigung-mainz.html">Fensterreinigung Mainz</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Stadtteile</a>
          <ul class="dropdown-menu">
            ${districts.map(([slug, name]) => `<li><a class="dropdown-item" href="${prefix}stadtteile/gebaeudereinigung-mainz-${slug}.html">Mainz ${name}</a></li>`).join("")}
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="${prefix}preise.html">Preise</a></li>
        <li class="nav-item"><a class="nav-link" href="${prefix}referenzen.html">Referenzen</a></li>
        <li class="nav-item"><a class="btn btn-accent ms-lg-2" href="${prefix}kontakt.html"><i class="bi bi-calendar-check me-1"></i> Angebot anfragen</a></li>
      </ul>
    </div>
  </div>
</nav>`;
}

function head({ title, description, canonical, prefix = "" }) {
  return `<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteUrl}/LOGO_ORIG_123.png?v=2">
  <meta property="og:image:alt" content="MIA Reinigung Logo">
  <link rel="icon" type="image/png" sizes="48x48" href="${prefix}LOGO_ORIG_123_48.png">
  <link rel="icon" type="image/png" sizes="192x192" href="${prefix}LOGO_ORIG_123_192.png">
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
    name: "MIA Reinigung",
    url: siteUrl + "/",
    telephone: phone,
    email,
    logo: siteUrl + "/LOGO_ORIG_123.png?v=2",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hochheimer Straße 72",
      postalCode: "55246",
      addressLocality: "Mainz-Kostheim",
      addressCountry: "DE",
    },
    areaServed: ["Mainz", "Wiesbaden"],
    priceRange: "$$",
  }, null, 2)}
  </script>
  <style>
    :root { --accent:#0f7bff; --accent-soft:rgba(15,123,255,.08); --muted:#6b7280; }
    body { font-family:"Inter",system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; color:#111827; background:#f9fafb; }
    .navbar { padding-top:.35rem; padding-bottom:.35rem; background:rgba(255,255,255,.96)!important; backdrop-filter:blur(10px); }
    .nav-link { font-weight:500; color:#4b5563!important; }
    .nav-link:hover,.nav-link.active { color:var(--accent)!important; }
    .btn-accent { background:var(--accent); border-color:var(--accent); color:#fff; font-weight:600; border-radius:999px; padding-inline:1.2rem; }
    .btn-accent:hover { background:#0c62cc; border-color:#0c62cc; color:#fff; }
    .hero { position:relative; min-height:62vh; display:flex; align-items:center; color:#fff; overflow:hidden; }
    .hero-bg { position:absolute; inset:0; background-size:cover; background-position:center; filter:brightness(.72); transform:scale(1.03); }
    .hero-overlay { position:absolute; inset:0; background:linear-gradient(120deg,rgba(15,23,42,.72),rgba(15,123,255,.16)); }
    .hero-inner { position:relative; z-index:2; }
    .hero-badge { display:inline-flex; align-items:center; gap:.5rem; background:rgba(15,123,255,.18); border-radius:999px; padding:.35rem .9rem; font-size:.8rem; font-weight:700; letter-spacing:.04em; text-transform:uppercase; }
    .hero h1 { font-weight:700; letter-spacing:-.03em; }
    .hero-lead { font-size:1.1rem; max-width:46rem; }
    .section { padding-block:4.5rem; }
    .section-label { text-transform:uppercase; letter-spacing:.17em; font-size:.75rem; font-weight:700; color:var(--accent); }
    .section-title { font-weight:700; letter-spacing:-.02em; }
    .section-text { color:var(--muted); max-width:44rem; margin-inline:auto; }
    .feature-icon { width:2.75rem; height:2.75rem; border-radius:999px; display:inline-flex; align-items:center; justify-content:center; background:var(--accent-soft); color:var(--accent); margin-bottom:.75rem; }
    .lift { transition:transform .18s ease, box-shadow .18s ease; }
    .lift:hover { transform:translateY(-4px); box-shadow:0 20px 40px rgba(15,23,42,.12); }
    .contact-card { background:#fff; border:1px solid #e5e7eb; border-radius:1rem; padding:1.5rem; box-shadow:0 18px 40px rgba(15,23,42,.08); }
    footer { background:#020617; color:#9ca3af; padding-block:2.75rem; font-size:.9rem; }
    footer a { color:#e5e7eb; text-decoration:none; }
    footer a:hover { color:#fff; text-decoration:underline; }
  </style>
</head>`;
}

function footer(prefix = "") {
  return `<footer>
  <div class="container">
    <div class="row g-4">
      <div class="col-lg-4">
        <h2 class="h6 text-white">MIA Reinigung</h2>
        <p class="mb-2">Gebäudereinigung Mainz, Wiesbaden und Umgebung.</p>
        <p class="mb-0">Hochheimer Straße 72, 55246 Mainz-Kostheim<br><a href="tel:+4915212975639">${phone}</a><br><a href="mailto:${email}">${email}</a></p>
      </div>
      <div class="col-6 col-lg-2">
        <h2 class="h6 text-white">SEO-Seiten</h2>
        <ul class="list-unstyled mb-0">
          <li><a href="${prefix}preise.html">Preise</a></li>
          <li><a href="${prefix}referenzen.html">Referenzen</a></li>
          <li><a href="${prefix}kontakt.html">Kontakt</a></li>
          <li><a href="${prefix}ratgeber/">Ratgeber</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-3">
        <h2 class="h6 text-white">Stadtteile Mainz</h2>
        <ul class="list-unstyled mb-0">
          ${districts.slice(0, 4).map(([slug, name]) => `<li><a href="${prefix}stadtteile/gebaeudereinigung-mainz-${slug}.html">Gebäudereinigung Mainz ${name}</a></li>`).join("")}
        </ul>
      </div>
      <div class="col-6 col-lg-3">
        <h2 class="h6 text-white">Weitere Stadtteile</h2>
        <ul class="list-unstyled mb-0">
          ${districts.slice(4).map(([slug, name]) => `<li><a href="${prefix}stadtteile/gebaeudereinigung-mainz-${slug}.html">Gebäudereinigung Mainz ${name}</a></li>`).join("")}
          <li><a href="${prefix}impressum.html">Impressum</a></li>
          <li><a href="${prefix}datenschutz.html">Datenschutz</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`;
}

function cta(prefix = "") {
  return `<section class="section bg-white">
  <div class="container">
    <div class="contact-card text-center">
      <div class="section-label mb-2">Angebot</div>
      <h2 class="section-title mb-2">Gebäudereinigung in Mainz anfragen</h2>
      <p class="text-muted mx-auto" style="max-width:46rem">Senden Sie uns Objektart, Fläche, Stadtteil und gewünschte Leistung. Wir melden uns mit einer realistischen Einschätzung und einem passenden Angebot.</p>
      <a href="${prefix}kontakt.html" class="btn btn-accent btn-lg"><i class="bi bi-send me-2"></i> Unverbindliches Angebot anfragen</a>
    </div>
  </div>
</section>`;
}

function pricePage() {
  return `${head({
    title: "Gebäudereinigung Mainz Kosten & Preise | MIA Reinigung",
    description: "Was kostet Gebäudereinigung in Mainz? Preisfaktoren, Beispielpreise und Kostenrechner für Büroreinigung, Fensterreinigung und Treppenhausreinigung.",
    canonical: siteUrl + "/preise.html",
  })}
<body>
${nav()}
<header class="hero">
  <div class="hero-bg" style="background-image:url('assets/img/optimized/gebaeudereinigung-mainz-hero.webp')"></div>
  <div class="hero-overlay"></div>
  <div class="container hero-inner py-5">
    <div class="hero-badge mb-3"><i class="bi bi-calculator"></i><span>Preise & Kosten</span></div>
    <h1 class="display-5 mb-3">Was kostet eine Gebäudereinigung in Mainz?</h1>
    <p class="hero-lead mb-4">Die Kosten für Gebäudereinigung in Mainz hängen von Fläche, Nutzung, Reinigungsintervall, Verschmutzungsgrad und gewünschten Zusatzleistungen ab. Hier finden Sie Orientierung und einen einfachen Kostenrechner.</p>
    <a href="#rechner" class="btn btn-accent btn-lg">Kosten grob berechnen</a>
  </div>
</header>
<section class="section">
  <div class="container">
    <div class="text-center mb-5">
      <div class="section-label mb-2">Preisübersicht</div>
      <h2 class="section-title mb-2">Beispielpreise für Reinigung in Mainz</h2>
      <p class="section-text">Die folgenden Werte sind Orientierungen. Ein verbindliches Angebot erstellen wir nach Abstimmung oder Besichtigung.</p>
    </div>
    <div class="table-responsive bg-white border rounded-4">
      <table class="table align-middle mb-0">
        <thead><tr><th>Leistung</th><th>Typischer Einsatz</th><th>Orientierung</th></tr></thead>
        <tbody>
          <tr><td>Büroreinigung Mainz</td><td>Arbeitsplätze, Böden, Küche, Sanitär</td><td>ab 2,20 EUR pro m²</td></tr>
          <tr><td>Unterhaltsreinigung Mainz</td><td>Regelmäßige Objektpflege</td><td>ab 2,00 EUR pro m²</td></tr>
          <tr><td>Treppenhausreinigung Mainz</td><td>Treppen, Podeste, Geländer, Eingang</td><td>ab 35 EUR pro Einsatz</td></tr>
          <tr><td>Praxisreinigung Mainz</td><td>Wartezimmer, Behandlung, Sanitär</td><td>ab 2,80 EUR pro m²</td></tr>
          <tr><td>Fensterreinigung Mainz</td><td>Glas und Rahmen</td><td>ab 4,50 EUR pro m² Glasfläche</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
<section class="section bg-white" id="rechner">
  <div class="container">
    <div class="row g-5 align-items-start">
      <div class="col-lg-5">
        <div class="section-label mb-2">Kostenrechner</div>
        <h2 class="section-title mb-3">Reinigungskosten grob kalkulieren</h2>
        <p class="text-muted">Der Rechner ersetzt kein Angebot, hilft aber bei der ersten Einschätzung. Für Praxen, stark verschmutzte Flächen, Sonderreinigungen oder genaue Leistungsverzeichnisse ist eine persönliche Abstimmung sinnvoll.</p>
      </div>
      <div class="col-lg-7">
        <div class="contact-card">
          <div class="row g-3">
            <div class="col-md-6"><label class="form-label">Fläche in m²</label><input id="sqm" class="form-control" type="number" value="120" min="20"></div>
            <div class="col-md-6"><label class="form-label">Objektart</label><select id="type" class="form-select"><option value="2.2">Büro</option><option value="2">Unterhalt</option><option value="2.8">Praxis</option><option value="1.6">Treppenhaus</option></select></div>
            <div class="col-md-6"><label class="form-label">Einsätze pro Woche</label><input id="freq" class="form-control" type="number" value="2" min="1" max="7"></div>
            <div class="col-md-6"><label class="form-label">Zusatz</label><select id="extra" class="form-select"><option value="0">Keine Zusatzleistung</option><option value="35">Fenster/Glas anteilig</option><option value="50">Erhöhter Hygieneaufwand</option></select></div>
          </div>
          <hr>
          <div class="d-flex flex-wrap justify-content-between align-items-center gap-3">
            <div><div class="small text-muted">Grobe Monatsschätzung</div><div id="estimate" class="h3 mb-0">-</div></div>
            <a href="kontakt.html" class="btn btn-accent">Exaktes Angebot anfragen</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
${cta()}
${footer()}
<script>
  const fields = ['sqm', 'type', 'freq', 'extra'].map((id) => document.getElementById(id));
  const estimate = document.getElementById('estimate');
  function updateEstimate() {
    const sqm = Number(document.getElementById('sqm').value || 0);
    const rate = Number(document.getElementById('type').value || 0);
    const freq = Number(document.getElementById('freq').value || 1);
    const extra = Number(document.getElementById('extra').value || 0);
    const monthly = Math.max(0, Math.round(((sqm * rate) + extra) * freq * 4.33));
    estimate.textContent = monthly.toLocaleString('de-DE') + ' EUR';
  }
  fields.forEach((field) => field.addEventListener('input', updateEstimate));
  fields.forEach((field) => field.addEventListener('change', updateEstimate));
  updateEstimate();
</script>
</body>
</html>`;
}

function districtPage(slug, district) {
  const title = `Gebäudereinigung Mainz ${district} | MIA Reinigung`;
  const description = `Gebäudereinigung Mainz ${district}: Büroreinigung, Treppenhausreinigung, Praxisreinigung, Fensterreinigung und Unterhaltsreinigung lokal anfragen.`;
  return `${head({ title, description, canonical: `${siteUrl}/stadtteile/gebaeudereinigung-mainz-${slug}.html`, prefix: "../" })}
<body>
${nav("../")}
<header class="hero">
  <div class="hero-bg" style="background-image:url('../assets/img/optimized/gebaeudereinigung-mainz-hero.webp')"></div>
  <div class="hero-overlay"></div>
  <div class="container hero-inner py-5">
    <div class="hero-badge mb-3"><i class="bi bi-geo-alt"></i><span>Mainz ${district}</span></div>
    <h1 class="display-5 mb-3">Gebäudereinigung Mainz ${district}</h1>
    <p class="hero-lead mb-4">MIA Reinigung übernimmt professionelle Gebäudereinigung in Mainz ${district}: Büroreinigung, Unterhaltsreinigung, Treppenhausreinigung, Praxisreinigung und Fensterreinigung für Unternehmen, Praxen, Immobilien und Hausverwaltungen.</p>
    <a href="../kontakt.html" class="btn btn-accent btn-lg">Angebot für Mainz ${district} anfragen</a>
  </div>
</header>
<section class="section">
  <div class="container">
    <div class="row g-5 align-items-start">
      <div class="col-lg-5">
        <div class="section-label mb-2">Lokal im Stadtteil</div>
        <h2 class="section-title mb-3">Reinigungsfirma für Mainz ${district}</h2>
        <p class="text-muted">Wer eine Reinigungsfirma in Mainz ${district} sucht, braucht kurze Wege, klare Absprachen und zuverlässige Ausführung. MIA Reinigung plant jeden Einsatz passend zum Objekt: Fläche, Nutzung, Reinigungsintervall und besondere Anforderungen werden vorab abgestimmt.</p>
        <p class="text-muted mb-0">Besonders gefragt sind regelmäßige Büroreinigung, Treppenhausreinigung für Mehrfamilienhäuser, Praxisreinigung und Fensterreinigung. Für jedes Objekt erstellen wir einen nachvollziehbaren Reinigungsplan.</p>
      </div>
      <div class="col-lg-7">
        <div class="row g-3">
          ${["Büroreinigung", "Treppenhausreinigung", "Praxisreinigung", "Fensterreinigung"].map((service, index) => `<div class="col-sm-6"><div class="p-4 bg-white border rounded-4 lift h-100"><div class="feature-icon"><i class="bi ${["bi-building", "bi-stairs", "bi-heart-pulse", "bi-window"][index]}"></i></div><h3 class="h6">${service} Mainz ${district}</h3><p class="small text-muted mb-0">Sorgfältig geplant für Objekte in Mainz ${district} und Umgebung.</p></div></div>`).join("")}
        </div>
      </div>
    </div>
  </div>
</section>
<section class="section bg-white">
  <div class="container">
    <div class="text-center mb-5">
      <div class="section-label mb-2">Vorteile</div>
      <h2 class="section-title mb-2">Warum lokale Gebäudereinigung im Stadtteil sinnvoll ist</h2>
      <p class="section-text">Für Mainz ${district} sind schnelle Abstimmung, realistische Einsatzplanung und direkte Erreichbarkeit wichtig. Das reduziert Wartezeiten und erleichtert regelmäßige Qualitätskontrollen.</p>
    </div>
    <div class="row g-4">
      <div class="col-md-4"><div class="contact-card h-100"><h3 class="h5">Kurze Wege</h3><p class="text-muted mb-0">Einsätze in Mainz und Wiesbaden lassen sich flexibel planen.</p></div></div>
      <div class="col-md-4"><div class="contact-card h-100"><h3 class="h5">Klare Intervalle</h3><p class="text-muted mb-0">Täglich, wöchentlich oder nach individuellem Bedarf.</p></div></div>
      <div class="col-md-4"><div class="contact-card h-100"><h3 class="h5">Transparente Preise</h3><p class="text-muted mb-0">Angebote richten sich nach Fläche, Objektart und Leistung.</p></div></div>
    </div>
  </div>
</section>
${cta("../")}
${footer("../")}
</body>
</html>`;
}

write("preise.html", pricePage());
for (const [slug, district] of districts) {
  write(`stadtteile/gebaeudereinigung-mainz-${slug}.html`, districtPage(slug, district));
}
