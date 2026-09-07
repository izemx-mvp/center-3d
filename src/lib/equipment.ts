import tracteurs from "@/assets/cat-tracteurs.jpg";
import moissonneuses from "@/assets/cat-moissonneuses.jpg";
import semoirs from "@/assets/cat-semoirs.jpg";
import pulverisateurs from "@/assets/cat-pulverisateurs.jpg";
import chargeuses from "@/assets/cat-chargeuses.jpg";
import presses from "@/assets/cat-presses.jpg";
import irrigation from "@/assets/cat-irrigation.jpg";
import hero from "@/assets/hero-tractor.jpg";

export const heroImage = hero;

export type CategorySlug =
  | "tracteurs"
  | "moissonneuses"
  | "semoirs"
  | "pulverisateurs"
  | "chargeuses"
  | "presses-a-balles"
  | "irrigation";

export type Availability = "Disponible" | "Réservée" | "Indisponible" | "Prochainement";

export interface Category {
  slug: CategorySlug;
  label: string;
  image: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    slug: "tracteurs",
    label: "Tracteurs",
    image: tracteurs,
    description: "Tracteurs polyvalents et haute puissance pour grandes cultures et maraîchage.",
  },
  {
    slug: "moissonneuses",
    label: "Moissonneuses",
    image: moissonneuses,
    description: "Moissonneuses-batteuses à haut débit pour céréales et oléagineux.",
  },
  {
    slug: "semoirs",
    label: "Semoirs",
    image: semoirs,
    description: "Semoirs de précision pneumatiques et mécaniques, largeurs 4 à 9 mètres.",
  },
  {
    slug: "pulverisateurs",
    label: "Pulvérisateurs",
    image: pulverisateurs,
    description: "Pulvérisateurs portés et automoteurs, rampes larges et coupures de tronçons.",
  },
  {
    slug: "chargeuses",
    label: "Chargeuses",
    image: chargeuses,
    description: "Chargeuses frontales et télescopiques pour exploitations et coopératives.",
  },
  {
    slug: "presses-a-balles",
    label: "Presses à balles",
    image: presses,
    description: "Presses rondes et cubiques pour paille, foin et fourrage.",
  },
  {
    slug: "irrigation",
    label: "Irrigation",
    image: irrigation,
    description: "Pivots, rampes frontales et systèmes d'irrigation économes en eau.",
  },
];

export const BRANDS = [
  "AgriMech",
  "Terrafort",
  "NordAgri",
  "Valtria",
  "IberFarm",
  "Kensworth",
  "Atlas Agro",
] as const;

export const CITIES = [
  "Rabat",
  "Casablanca",
  "Tanger",
  "Fès",
  "Agadir",
  "Meknès",
  "Marrakech",
  "Oujda",
  "Kénitra",
] as const;

export const AVAILABILITIES: Availability[] = [
  "Disponible",
  "Réservée",
  "Indisponible",
  "Prochainement",
];

export interface Equipment {
  id: string;
  name: string;
  brand: string;
  category: CategorySlug;
  city: string;
  availability: Availability;
  power: string;
  capacity: string;
  dimensions: string;
  weight: string;
  year: number;
  usage: string;
  summary: string;
  featured?: boolean;
}

const img = (c: CategorySlug) => CATEGORIES.find((x) => x.slug === c)!.image;
export const categoryImage = img;
export const categoryLabel = (c: CategorySlug) => CATEGORIES.find((x) => x.slug === c)!.label;

const EQ_PHOTOS = import.meta.glob("../assets/eq/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

/** All distinct photos of one machine, newest angle first. */
export function equipmentGallery(item: { id: string; category: CategorySlug }): string[] {
  const own = Object.keys(EQ_PHOTOS)
    .filter((path) => path.includes(`/${item.id}-`))
    .sort()
    .map((path) => EQ_PHOTOS[path]!);
  const shots = own.length > 0 ? own : [img(item.category)];
  const extra = img(item.category);
  return shots.includes(extra) ? shots : [...shots, extra];
}

export const equipmentImage = (item: { id: string; category: CategorySlug }) =>
  equipmentGallery(item)[0]!;

export const EQUIPMENTS: Equipment[] = [
  {
    id: "agrimech-x180-pro",
    name: "X180 Pro",
    brand: "AgriMech",
    category: "tracteurs",
    city: "Rabat",
    availability: "Disponible",
    power: "180 ch",
    capacity: "Relevage arrière 8 500 kg",
    dimensions: "5,20 × 2,55 × 3,10 m",
    weight: "7 400 kg",
    year: 2024,
    usage: "Grandes cultures, travail du sol profond",
    summary:
      "Tracteur polyvalent à transmission continue, cabine suspendue et hydraulique renforcée pour les chantiers intensifs.",
    featured: true,
  },
  {
    id: "terrafort-t240-vision",
    name: "T240 Vision",
    brand: "Terrafort",
    category: "tracteurs",
    city: "Casablanca",
    availability: "Réservée",
    power: "240 ch",
    capacity: "Relevage arrière 10 200 kg",
    dimensions: "5,65 × 2,75 × 3,25 m",
    weight: "9 100 kg",
    year: 2025,
    usage: "Traction lourde, semis grande largeur",
    summary:
      "Tracteur de forte puissance équipé du guidage GPS intégré et d'un pont avant suspendu pour un confort de conduite optimal.",
    featured: true,
  },
  {
    id: "valtria-r150-compact",
    name: "R150 Compact",
    brand: "Valtria",
    category: "tracteurs",
    city: "Fès",
    availability: "Disponible",
    power: "150 ch",
    capacity: "Relevage arrière 6 800 kg",
    dimensions: "4,80 × 2,30 × 2,90 m",
    weight: "6 200 kg",
    year: 2023,
    usage: "Arboriculture, maraîchage, exploitations mixtes",
    summary:
      "Format compact et grande maniabilité, idéal pour les parcelles étroites et les travaux d'entretien.",
  },
  {
    id: "nordagri-x220-terradrive",
    name: "X220 TerraDrive",
    brand: "NordAgri",
    category: "tracteurs",
    city: "Meknès",
    availability: "Prochainement",
    power: "220 ch",
    capacity: "Relevage arrière 9 400 kg",
    dimensions: "5,50 × 2,65 × 3,20 m",
    weight: "8 600 kg",
    year: 2025,
    usage: "Labour, transport lourd",
    summary:
      "Motorisation sobre et transmission intelligente TerraDrive pour réduire la consommation sur longues journées de chantier.",
  },
  {
    id: "kensworth-harvest-9200",
    name: "Harvest 9200",
    brand: "Kensworth",
    category: "moissonneuses",
    city: "Tanger",
    availability: "Disponible",
    power: "410 ch",
    capacity: "Trémie 12 500 L",
    dimensions: "9,40 × 3,50 × 4,00 m",
    weight: "16 800 kg",
    year: 2024,
    usage: "Céréales, colza, tournesol",
    summary:
      "Moissonneuse-batteuse hybride à haut débit avec coupe 9 m et système de séparation rotatif.",
    featured: true,
  },
  {
    id: "iberfarm-cropmaster-780",
    name: "CropMaster 780",
    brand: "IberFarm",
    category: "moissonneuses",
    city: "Agadir",
    availability: "Réservée",
    power: "340 ch",
    capacity: "Trémie 9 000 L",
    dimensions: "8,60 × 3,30 × 3,90 m",
    weight: "14 200 kg",
    year: 2023,
    usage: "Céréales, légumineuses",
    summary:
      "Machine fiable et économique, conçue pour les campagnes de moisson intensives en climat chaud.",
  },
  {
    id: "atlas-agro-grainline-6400",
    name: "GrainLine 6400",
    brand: "Atlas Agro",
    category: "moissonneuses",
    city: "Kénitra",
    availability: "Indisponible",
    power: "300 ch",
    capacity: "Trémie 8 000 L",
    dimensions: "8,10 × 3,20 × 3,80 m",
    weight: "12 900 kg",
    year: 2022,
    usage: "Exploitations moyennes",
    summary:
      "Moissonneuse à secoueurs, simple d'entretien, avec broyeur de paille intégré.",
  },
  {
    id: "agrimech-seedpro-6m",
    name: "SeedPro 6M",
    brand: "AgriMech",
    category: "semoirs",
    city: "Rabat",
    availability: "Disponible",
    power: "Tracteur 140 ch mini",
    capacity: "Trémie 3 000 L — largeur 6 m",
    dimensions: "6,20 × 3,00 × 2,80 m",
    weight: "3 800 kg",
    year: 2024,
    usage: "Semis céréales et couverts végétaux",
    summary:
      "Semoir pneumatique porté à distribution électrique, modulation de dose parcelle par parcelle.",
    featured: true,
  },
  {
    id: "terrafort-precisiondrill-8",
    name: "PrecisionDrill 8",
    brand: "Terrafort",
    category: "semoirs",
    city: "Marrakech",
    availability: "Prochainement",
    power: "Tracteur 180 ch mini",
    capacity: "Trémie 4 200 L — largeur 8 m",
    dimensions: "8,10 × 3,00 × 3,00 m",
    weight: "5 100 kg",
    year: 2025,
    usage: "Semis direct et techniques culturales simplifiées",
    summary:
      "Semoir de précision traîné avec contrôle individuel des rangs et coupure de sections automatique.",
  },
  {
    id: "nordagri-sowline-4200",
    name: "SowLine 4200",
    brand: "NordAgri",
    category: "semoirs",
    city: "Fès",
    availability: "Disponible",
    power: "Tracteur 110 ch mini",
    capacity: "Trémie 1 800 L — largeur 4,2 m",
    dimensions: "4,40 × 2,60 × 2,40 m",
    weight: "2 300 kg",
    year: 2023,
    usage: "Petites et moyennes surfaces",
    summary: "Semoir mécanique robuste, réglage simple et entretien réduit.",
  },
  {
    id: "valtria-spraytech-3000",
    name: "SprayTech 3000",
    brand: "Valtria",
    category: "pulverisateurs",
    city: "Casablanca",
    availability: "Disponible",
    power: "Tracteur 130 ch mini",
    capacity: "Cuve 3 000 L — rampe 24 m",
    dimensions: "6,80 × 2,55 × 3,40 m",
    weight: "4 100 kg",
    year: 2024,
    usage: "Traitements phytosanitaires grandes cultures",
    summary:
      "Pulvérisateur traîné avec rampe stabilisée, rinçage automatique et coupure GPS par tronçons.",
    featured: true,
  },
  {
    id: "iberfarm-airjet-2400",
    name: "AirJet 2400",
    brand: "IberFarm",
    category: "pulverisateurs",
    city: "Agadir",
    availability: "Réservée",
    power: "Tracteur 100 ch mini",
    capacity: "Cuve 2 400 L — rampe 18 m",
    dimensions: "5,90 × 2,40 × 3,20 m",
    weight: "3 200 kg",
    year: 2023,
    usage: "Arboriculture et cultures maraîchères",
    summary:
      "Assistance d'air pour une pénétration homogène du produit et une dérive réduite.",
  },
  {
    id: "kensworth-fieldguard-5000",
    name: "FieldGuard 5000",
    brand: "Kensworth",
    category: "pulverisateurs",
    city: "Oujda",
    availability: "Prochainement",
    power: "Automoteur 210 ch",
    capacity: "Cuve 5 000 L — rampe 36 m",
    dimensions: "8,20 × 2,80 × 3,90 m",
    weight: "10 400 kg",
    year: 2025,
    usage: "Très grandes surfaces, débit de chantier élevé",
    summary:
      "Pulvérisateur automoteur à garde au sol variable et pilotage numérique complet de la rampe.",
  },
  {
    id: "atlas-agro-loadx-320",
    name: "LoadX 320",
    brand: "Atlas Agro",
    category: "chargeuses",
    city: "Tanger",
    availability: "Disponible",
    power: "125 ch",
    capacity: "Charge utile 3,2 t — hauteur 5,4 m",
    dimensions: "5,10 × 2,25 × 2,50 m",
    weight: "6 900 kg",
    year: 2024,
    usage: "Manutention de fourrage, silos, chargement de bennes",
    summary:
      "Chargeuse télescopique compacte, très maniable dans les bâtiments d'élevage.",
  },
  {
    id: "agrimech-frontmax-210",
    name: "FrontMax 210",
    brand: "AgriMech",
    category: "chargeuses",
    city: "Meknès",
    availability: "Disponible",
    power: "95 ch",
    capacity: "Charge utile 2,1 t — hauteur 4,2 m",
    dimensions: "4,60 × 2,10 × 2,45 m",
    weight: "5 200 kg",
    year: 2023,
    usage: "Cours de ferme, coopératives",
    summary: "Chargeuse frontale polyvalente avec attache rapide et godet multi-usages.",
  },
  {
    id: "terrafort-agrilift-480",
    name: "AgriLift 480",
    brand: "Terrafort",
    category: "chargeuses",
    city: "Kénitra",
    availability: "Indisponible",
    power: "156 ch",
    capacity: "Charge utile 4,8 t — hauteur 7,0 m",
    dimensions: "5,80 × 2,45 × 2,60 m",
    weight: "9 600 kg",
    year: 2024,
    usage: "Manutention lourde et logistique agricole",
    summary: "Télescopique de forte capacité avec stabilisateurs et cabine climatisée.",
  },
  {
    id: "nordagri-baleround-550",
    name: "BaleRound 550",
    brand: "NordAgri",
    category: "presses-a-balles",
    city: "Fès",
    availability: "Disponible",
    power: "Tracteur 120 ch mini",
    capacity: "Balles Ø 1,50 m",
    dimensions: "4,50 × 2,60 × 2,70 m",
    weight: "3 600 kg",
    year: 2024,
    usage: "Paille, foin, enrubannage",
    summary:
      "Presse à chambre variable avec liage filet rapide et rotor de coupe 15 couteaux.",
    featured: true,
  },
  {
    id: "iberfarm-compactbale-300",
    name: "CompactBale 300",
    brand: "IberFarm",
    category: "presses-a-balles",
    city: "Marrakech",
    availability: "Réservée",
    power: "Tracteur 90 ch mini",
    capacity: "Balles Ø 1,20 m",
    dimensions: "3,90 × 2,40 × 2,50 m",
    weight: "2 700 kg",
    year: 2022,
    usage: "Exploitations de taille moyenne",
    summary: "Presse compacte à chambre fixe, entretien simple et coût d'usage maîtrisé.",
  },
  {
    id: "kensworth-balemaster-720",
    name: "BaleMaster 720",
    brand: "Kensworth",
    category: "presses-a-balles",
    city: "Casablanca",
    availability: "Prochainement",
    power: "Tracteur 200 ch mini",
    capacity: "Balles cubiques 120 × 90 cm",
    dimensions: "7,20 × 2,90 × 3,10 m",
    weight: "9 800 kg",
    year: 2025,
    usage: "Chantiers d'entreprise, très gros volumes",
    summary:
      "Presse haute densité pour balles cubiques, densité de pressage pilotée électroniquement.",
  },
  {
    id: "valtria-pivotflow-400",
    name: "PivotFlow 400",
    brand: "Valtria",
    category: "irrigation",
    city: "Agadir",
    availability: "Disponible",
    power: "Motorisation 7,5 kW",
    capacity: "Couverture 40 ha — 400 m de portée",
    dimensions: "400 m de travées",
    weight: "12 000 kg",
    year: 2024,
    usage: "Irrigation de grandes parcelles céréalières",
    summary:
      "Pivot d'irrigation galvanisé à pilotage à distance et gestion précise des doses d'eau.",
    featured: true,
  },
  {
    id: "atlas-agro-aqualine-250",
    name: "AquaLine 250",
    brand: "Atlas Agro",
    category: "irrigation",
    city: "Oujda",
    availability: "Disponible",
    power: "Motorisation 5,5 kW",
    capacity: "Couverture 18 ha — 250 m de portée",
    dimensions: "250 m de travées",
    weight: "7 300 kg",
    year: 2023,
    usage: "Maraîchage et cultures fourragères",
    summary: "Rampe frontale économe en eau, montage rapide et maintenance réduite.",
  },
  {
    id: "terrafort-pivotflow-620",
    name: "PivotFlow 620",
    brand: "Terrafort",
    category: "irrigation",
    city: "Rabat",
    availability: "Prochainement",
    power: "Motorisation 11 kW",
    capacity: "Couverture 95 ha — 620 m de portée",
    dimensions: "620 m de travées",
    weight: "19 500 kg",
    year: 2025,
    usage: "Très grandes exploitations irriguées",
    summary:
      "Pivot longue portée avec sondes d'humidité connectées et programmation par secteur.",
  },
];

export const ESPACE_CLIENT_URL = "https://agrimach.izemxlab.com/login/client";

export const availabilityStyles: Record<Availability, { dot: string; badge: string }> = {
  Disponible: {
    dot: "bg-primary",
    badge: "bg-primary/10 text-primary-deep border-primary/25",
  },
  Réservée: {
    dot: "bg-gold",
    badge: "bg-gold/15 text-[oklch(0.5_0.13_70)] border-gold/35",
  },
  Indisponible: {
    dot: "bg-destructive",
    badge: "bg-destructive/10 text-destructive border-destructive/25",
  },
  Prochainement: {
    dot: "bg-info",
    badge: "bg-info/10 text-info border-info/25",
  },
};
