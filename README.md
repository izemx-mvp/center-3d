# Center 3D Launch

Build a full multi-page public marketing/institutional website (not a single-page scroller) for Center 3D, an international company — headquartered in London, with active operations and teams in Morocco (Rabat, Tanger, Fès, Agadir) — that imports, sells, and rents agricultural machinery and equipment: tractors, combine harvesters, seed drills, sprayers, loaders, baling presses, and irrigation systems.

IMPORTANT SCOPE NOTE

This is the PUBLIC marketing site only. Center 3D already has a separate "Espace Client" application (login, full catalogue with prices, order/quote/invoice management, AI assistant) hosted at a different URL, and a separate "Espace Commercial" admin platform. Do NOT build any login system, user dashboard, prices-visible catalogue, or account management — the "Se connecter" button on this site must be a plain external link to https://center-3d-bo.izemxlab.com/login/client, opening that separate app. This site's own catalogue is public and must NEVER show prices. Someone clicking "Se connecter" and landing in the real Espace Client should feel visual continuity with this site, not a jarring style change — so the design system, data, and imagery conventions below matter.

BRAND IDENTITY

- Logo: three isometric 3D cubes arranged in a triangular cluster — two green cubes (one medium green, one darker forest green) and one gold/amber cube, with a stylized golden wheat leaf motif on the top cube's front face. Wordmark "CENTER" in dark forest green bold uppercase + "3D" in gold/amber uppercase.

- The logo files will be uploaded separately — use placeholder logo slots in navbar/footer, do NOT generate or recreate the logo

- Color palette: deep agricultural green + modern green + touches of bright/luminous green (#1F5C34 to #2D7D46 to #6BC48A range) for structure, headings, and primary CTAs; graphite (dark charcoal gray, not pure black) for secondary text and dark surfaces; off-white (not pure white) for backgrounds; earth tones used sparingly; gold/amber accent (#E8A73B to #F0B94A range) used sparingly for highlights and badges, matching the logo's wheat motif. Do NOT overuse green — balance it with graphite and off-white so the result feels premium and B2B, not like a generic "eco" or agricultural template.

- Typography: bold, confident geometric sans-serif for headings, clean readable sans for body text, with a clear hierarchy (display, H1-H3, body, caption, labels)

- All non-logo imagery must be AI-generated but must look like real, high-quality agricultural machinery photography — realistic tractors, harvesters, seed drills, sprayers, loaders, baling presses, irrigation equipment. Each category needs visually distinct imagery — do not reuse the same image across categories, and do not use generic stock-placeholder-looking images.

EXPLICITLY AVOID

Generic SaaS look, generic purple/violet gradients, plain flat white cards with no depth, default Bootstrap-style tables/forms, generic unstyled buttons, Lorem Ipsum text, empty-feeling pages, stock placeholder imagery, any design that could belong to any random template site rather than one built specifically for agriculture + B2B equipment commerce.

LANGUAGE: French, professional and trustworthy tone — speaking to farmers and agricultural business owners making significant equipment purchases/rentals, with an international-company credibility layer (this isn't a small local shop, it's an equipment importer with UK HQ and multi-city Moroccan operations).

DATA CONSISTENCY (this site's placeholder catalogue must match the real Espace Client's data conventions)

- Brands to use across all placeholder equipment: AgriMech, Terrafort, NordAgri, Valtria, IberFarm, Kensworth, Atlas Agro

- Model naming per category (reuse these, generate a few more in the same style if needed):

  Tracteurs: X180 Pro, T240 Vision, R150 Compact, X220 TerraDrive, T310 Titan

  Moissonneuses: Harvest 9200, CropMaster 780, GrainLine 6400, Harvest 7100

  Semoirs: SeedPro 6M, PrecisionDrill 8, SowLine 4200, SeedPro 9M

  Pulvérisateurs: SprayTech 3000, AirJet 2400, FieldGuard 5000, SprayTech 4200

  Chargeuses: LoadX 320, FrontMax 210, AgriLift 480, LoadX 560

  Presses à balles: BaleRound 550, CompactBale 300, BaleMaster 720

  Irrigation: PivotFlow 400, AquaLine 250, PivotFlow 620

- Cities: Rabat, Casablanca, Tanger, Fès, Agadir, Meknès, Marrakech, Oujda, Kénitra

- Availability statuses, with matching visual language: Disponible (green), Réservée (amber/orange), Indisponible (red), Prochainement (blue) — small colored dot + label badge, consistent across catalogue and detail pages

SITE STRUCTURE — separate routed pages, shared Navbar + Footer

1. HOME (/)

- Hero: strong positioning as a trusted international agricultural equipment importer/distributor (sale + rental) with Moroccan operations — dual CTA "Voir le catalogue" / "Nous contacter". Should create a genuine visual "wow" moment: large agricultural machinery imagery, elegant gradients, subtle depth effects, very light floating particles or geometric shapes, discrete technological grid texture, smooth entrance animations — not a plain gradient background.

- Category grid (7 categories: Tracteurs, Moissonneuses, Semoirs, Pulvérisateurs, Chargeuses, Presses à balles, Irrigation), each linking to a filtered public catalogue view

- Featured equipment preview (generated realistic images, name, brand, category — NO price shown, just "Voir les détails")

- "Pourquoi Center 3D" trust section: matériel de qualité importé, présence internationale (siège Londres, équipes Maroc), service après-vente, options achat et location, accompagnement technique

- International presence section/strip: brief visual nod to London HQ + Rabat/Tanger/Fès/Agadir teams

- CTA band: "Consultez notre catalogue complet" + "Connectez-vous à votre espace client pour voir les tarifs et gérer vos commandes" linking externally to https://center-3d-bo.izemxlab.com/login/client

2. CATALOGUE PUBLIC (/catalogue)

- Category filter sidebar/tabs (the 7 categories), plus filters for ville and disponibilité (using the real statuses above) — filters should actually function against the placeholder data

- Active filters shown as removable chips

- Grid of equipment cards: realistic generated image, name, brand, category, key spec line (puissance, localisation, disponibilité badge) — explicitly NO price field anywhere

- Each card shows: "Connectez-vous pour voir le tarif" note + "Voir la machine" button

- No cart, no purchase flow — informational only

3. ÉQUIPEMENT DETAIL (/catalogue/:id)

- Large image gallery (generated realistic images)

- Name, brand, category, full technical specifications table (puissance, capacité, dimensions, poids, année, utilisation recommandée), localisation, disponibilité badge

- NO price shown. Clear callout instead: "Tarifs et disponibilité en temps réel visibles dans votre espace client" with external link button to https://center-3d-bo.izemxlab.com/login/client

- Secondary CTA: "Demander plus d'informations" (static form, see behavior below)

- Related equipment in the same category

4. À PROPOS (/a-propos)

- Company story/mission: international agricultural equipment importer and distributor, headquartered in London, with active teams and operations in Rabat, Tanger, Fès, and Agadir — positioning as a serious, established international player expanding its presence in Morocco. Do not invent a founding year or additional false history beyond what's given here.

- Values section (qualité du matériel importé, présence internationale, accompagnement technique, flexibilité achat/location)

- Brands/network positioning (works with multiple international equipment manufacturers — AgriMech, Terrafort, NordAgri, Valtria, IberFarm, Kensworth, Atlas Agro)

5. CONTACT (/contact)

- Contact form (nom, société/exploitation, e-mail, téléphone, sujet, message)

- Company contact info block (placeholder — real address/phone to be added later; can reference both a UK and Morocco presence generically)

- FAQ accordion (délais de livraison, options de location, zones couvertes, comment accéder à l'espace client, présence internationale)

NAVBAR (all pages)

- Logo placeholder, links: Accueil, Catalogue, À propos, Contact

- "Se connecter" button — plain external link (not an internal route) to https://center-3d-bo.izemxlab.com/login/client, styled as the primary CTA

FOOTER (all pages)

- Logo placeholder, category links (to filtered public catalogue), company info placeholder, contact placeholder, "Se connecter" link to the same external URL

- Graphite/deep green background, gold accent links/hovers

CHATBOT (all pages, floating widget)

- Floating chat bubble bottom-right, opens a chat panel

- NOT connected to any real AI backend — implement as a scripted/rule-based assistant using keyword or intent matching against a predefined local set of Q&A pairs, no API calls

- Cover: catégories de matériel disponibles, différence achat/location, comment accéder à l'espace client et voir les prix, délais de livraison, comment nous contacter, zones couvertes, présence internationale

- Fallback message directing to the contact form if no match found

- 3-4 suggested quick-reply buttons for common questions

- Style to match the brand (green/gold/graphite, rounded modern chat UI, subtle entrance animation)

FORM BEHAVIOR (static, no backend)

- Every form (contact, "demander plus d'informations") shows a static success confirmation on submit (checkmark icon + message) — no backend, no persistence

- Success states match brand style

VISUAL/INTERACTION DETAIL

- Buttons need real variants: primary, secondary, ghost — with hover/active/loading states, not flat default styling

- Cards need real depth: subtle shadow, border, hover lift — vary card treatment by context rather than using identical rounded white boxes everywhere

- Add tasteful micro-interactions: hover states, smooth section transitions, staggered fade-in on scroll for cards/sections, animated number count-up if any stats are shown

- Respect prefers-reduced-motion

- Fully responsive: mobile-first, filters collapse into a usable mobile pattern (drawer/bottom sheet), no horizontal overflow on tables/grids

TECHNICAL

- React + TypeScript + Tailwind CSS + routing for multi-page navigation

- Fully responsive, mobile-first

- Shared Navbar/Footer components, one component/page per route as listed above

- Placeholder/generated equipment data (minimum 10-12 items across the 7 categories) using the brand/model/city conventions above, reused consistently across catalogue, detail, and home preview — no prices anywhere in this public-facing data

- Icon set: lucide-react, agricultural/technical themed (tractor, wheat, wrench, truck, map-pin, etc.)

- No backend, no auth, no payment — the only "connected system" references are the external links to the existing Espace Client app

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c3f8339e-bf5d-4eda-abb9-bc9f8574a220).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
