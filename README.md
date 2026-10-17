# Rex Låsefabrik — hjemmeside

REX Låsefabrik ApS' offentlige hjemmeside (rexlaasefabrik.dk). Ren statisk HTML, CSS og JavaScript — ingen build, ingen frameworks, ingen cookies og ingen kald til tredjeparter.

## Filer
| Sti | Indhold |
|---|---|
| `index.html` + `<side>/index.html` | Én mappe pr. side, samme URL'er som før (`/produkter/`, `/om-os/` …) |
| `kode/styles.css` | Al styling; farver, fonte og afstande er variabler i `:root` |
| `kode/site.js` | Menu, hero-slideshow, scroll-til-top, årstal i footer, mailto-kontaktformular |
| `assets/` | Logo, favicon, billeder (webp) og self-hostet font (Poppins — SIL Open Font License) |
| `404.html`, `sitemap.xml`, `robots.txt`, `CNAME` | GitHub Pages |

## Redigering
- Tekst rettes direkte i sidens `index.html`. Header og footer gentages i hver side — ret dem alle sammen.
- Når `styles.css` eller `site.js` ændres, skal `?v=` bumpes i alle sider, så besøgende får den nye fil.
- Åbn en `index.html` i browseren for at se siden; ingen server er nødvendig.

## Hosting
Serveres af GitHub Pages fra grenen `main` (roden). Domænet står i `CNAME`.
