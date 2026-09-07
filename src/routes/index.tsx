import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ClipboardCheck,
  Globe2,
  Handshake,
  LogIn,
  PackageCheck,
  Search,
  ShieldCheck,
  Sprout,
  Truck,
  Wrench,
} from "lucide-react";
import {
  CATEGORIES,
  EQUIPMENTS,
  ESPACE_CLIENT_URL,
  equipmentImage,
  heroImage,
} from "@/lib/equipment";
import { EquipmentCard } from "@/components/EquipmentCard";
import { Glows } from "@/components/Glows";
import { PresenceGrid } from "@/components/PresenceGrid";
import { AvailabilityBadge, buttonClass, CountUp, Reveal, SectionTitle } from "@/components/ui-kit";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Center 3D — Importateur de matériel agricole" },
      {
        name: "description",
        content:
          "Importateur international de matériel agricole : tracteurs, moissonneuses, semoirs, pulvérisateurs, chargeuses, presses à balles et irrigation. Siège à Londres, équipes au Maroc.",
      },
      { property: "og:title", content: "Center 3D — Matériel agricole importé" },
      {
        property: "og:description",
        content:
          "Machines agricoles de constructeurs internationaux, disponibles à la vente partout au Maroc.",
      },
    ],
  }),
  component: Home,
});

const featured = EQUIPMENTS.filter((e) => e.featured).slice(0, 6);

const trust = [
  {
    icon: ShieldCheck,
    title: "Matériel de qualité importé",
    text: "Chaque machine provient de constructeurs internationaux référencés par notre siège de Londres. Avant mise à disposition, elle passe un contrôle de réception : conformité des organes hydrauliques, essais moteur et vérification de la documentation technique en français.",
  },
  {
    icon: Globe2,
    title: "Présence internationale",
    text: "Un siège britannique pour le sourcing et l'importation, quatre bureaux marocains à Rabat, Tanger, Fès et Agadir, et du matériel positionné dans neuf villes du Royaume pour réduire les délais.",
  },
  {
    icon: Wrench,
    title: "Service après-vente",
    text: "Mise en route sur votre parcelle, formation des opérateurs, entretien programmé et suivi des pièces d'usure les plus demandées, gérés par nos techniciens marocains.",
  },
  {
    icon: Handshake,
    title: "Conseil à l'achat",
    text: "Nos conseillers analysent votre assolement, vos surfaces et vos fenêtres de chantier avant de recommander une machine, quitte à orienter vers un modèle moins cher s'il suffit.",
  },
  {
    icon: Sprout,
    title: "Adapté aux conditions marocaines",
    text: "Filtration renforcée, refroidissement adapté aux fortes chaleurs, pneumatiques et lestage choisis pour les sols argileux comme pour les terres sableuses du Souss.",
  },
  {
    icon: Truck,
    title: "Logistique maîtrisée",
    text: "Importation, dédouanement, transport porte-engins et livraison sur site sont coordonnés par une seule équipe, avec un interlocuteur unique jusqu'à la réception.",
  },
];

const process = [
  {
    icon: Search,
    title: "1. Explorez le catalogue public",
    text: "Parcourez librement les fiches machines : caractéristiques, puissance, ville de positionnement et disponibilité, sans création de compte.",
  },
  {
    icon: Handshake,
    title: "2. Échangez avec un conseiller",
    text: "Envoyez votre demande depuis la fiche ou la page contact. Un conseiller régional valide l'adéquation de la machine avec votre exploitation.",
  },
  {
    icon: ClipboardCheck,
    title: "3. Recevez votre devis dans l'espace client",
    text: "Tarifs, options, délais et conditions de paiement sont regroupés dans votre espace client, où vous validez la commande en ligne.",
  },
  {
    icon: PackageCheck,
    title: "4. Livraison et mise en route",
    text: "Nous organisons le transport jusqu'à votre exploitation, la mise en route et la formation des opérateurs, puis le suivi après-vente.",
  },
];


function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-hero-gradient">
        <img
          src={heroImage}
          alt="Tracteur agricole au travail dans un champ au coucher du soleil"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="grid-texture absolute inset-0 opacity-60" />
        <div className="absolute -left-24 top-20 h-72 w-72 animate-float-soft rounded-full bg-primary-bright/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 animate-float-soft rounded-full bg-gold/15 blur-3xl [animation-delay:3s]" />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-graphite/30" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-background/90 backdrop-blur">
              <Globe2 className="h-3.5 w-3.5 text-gold" /> Londres · Rabat · Tanger · Fès · Agadir
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-background sm:text-5xl lg:text-6xl">
              Le matériel agricole importé,{" "}
              <span className="text-gradient-gold">disponible à la vente au Maroc</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-background/80">
              Center 3D importe et distribue des machines agricoles de constructeurs internationaux
              pour les exploitations, coopératives et entreprises de travaux agricoles au Maroc.
            </p>
          </Reveal>
          <Reveal delay={230}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/catalogue" className={buttonClass("gold", "lg")}>
                Voir le catalogue <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className={buttonClass(
                  "secondary",
                  "lg",
                  "border-background/30 bg-background/10 text-background backdrop-blur hover:bg-background/20 hover:border-background/50",
                )}
              >
                Nous contacter
              </Link>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-6 border-t border-background/15 pt-8 sm:grid-cols-4">
              {[
                { v: 7, s: "", l: "Familles de matériel" },
                { v: 7, s: "", l: "Marques distribuées" },
                { v: 9, s: "", l: "Villes couvertes" },
                { v: 4, s: "", l: "Équipes au Maroc" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-bold text-gold">
                    <CountUp value={s.v} suffix={s.s} />
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-background/60">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal>
          <SectionTitle
            eyebrow="Nos familles de matériel"
            title="Sept catégories, une seule exigence de fiabilité"
            subtitle="Explorez le catalogue public par type de machine. Caractéristiques techniques, localisation et disponibilité y sont accessibles librement."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <Link
                to="/catalogue"
                search={{ categorie: c.slug }}
                className="group relative block h-56 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[var(--shadow-lift)]"
              >
                <img
                  src={c.image}
                  alt={c.label}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/45 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-xl font-bold text-background">{c.label}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-background/70">{c.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    Explorer <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal delay={420}>
            <Link
              to="/catalogue"
              className="group flex h-56 flex-col justify-between rounded-2xl border border-primary/25 bg-secondary p-6 transition-all duration-500 hover:border-primary/60 hover:shadow-[var(--shadow-lift)]"
            >
              <Sprout className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold text-primary-deep">Tout le catalogue</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Filtrez par catégorie, ville et disponibilité.
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Consulter <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="relative isolate overflow-hidden bg-secondary/50 py-20 lg:py-24">
        <Glows />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionTitle
                eyebrow="Sélection du moment"
                title="Machines mises en avant"
                subtitle="Un aperçu du matériel disponible. Les tarifs restent consultables dans votre espace client."
              />
              <Link to="/catalogue" className={buttonClass("secondary", "md")}>
                Tout le catalogue <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featured[0] && (
              <Reveal className="lg:col-span-2">
                <Link
                  to="/catalogue/$id"
                  params={{ id: featured[0].id }}
                  className="group relative block h-full min-h-[22rem] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
                >
                  <img
                    src={equipmentImage(featured[0])}
                    alt={`${featured[0].brand} ${featured[0].name}`}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/55 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-graphite">
                        Coup de projecteur
                      </span>
                      <AvailabilityBadge
                        status={featured[0].availability}
                        className="bg-background/90 backdrop-blur"
                      />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      {featured[0].brand}
                    </p>
                    <h3 className="mt-1 text-3xl font-bold text-background sm:text-4xl">
                      {featured[0].name}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-background/75">
                      {featured[0].summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                      Voir la machine
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )}
            {featured.slice(1, 3).map((item, i) => (
              <Reveal key={item.id} delay={(i + 1) * 70}>
                <EquipmentCard item={item} />
              </Reveal>
            ))}
            {featured.slice(3).map((item, i) => (
              <Reveal key={item.id} delay={(i + 3) * 70}>
                <EquipmentCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHOTO BREAK */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Machines agricoles Center 3D en conditions réelles"
          loading="lazy"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-graphite via-graphite/75 to-graphite/25" />
        <div className="grid-texture absolute inset-0 opacity-40" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Du champ au chantier
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-background sm:text-4xl">
              Des machines choisies pour tenir la cadence des campagnes marocaines
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-background/75">
              Préparation du sol, semis, protection des cultures, irrigation, récolte et fourrage :
              notre catalogue couvre le cycle cultural complet, avec un matériel éprouvé sous
              fortes chaleurs et sur sols exigeants.
            </p>
            <Link to="/catalogue" className={buttonClass("gold", "lg", "mt-8")}>
              Parcourir les machines <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="relative isolate overflow-hidden px-4 py-20 sm:px-6 lg:py-24">
        <Glows />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <SectionTitle
              eyebrow="Pourquoi Center 3D"
              title="Un partenaire d'équipement, pas un simple revendeur"
              subtitle="Nous ne nous arrêtons pas à la vente : sélection chez le constructeur, importation, réception technique, mise en route et suivi des pièces font partie du même engagement."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trust.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <div className="surface-card group h-full rounded-2xl p-6">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary-deep transition-all duration-300 group-hover:bg-primary-deep group-hover:text-primary-foreground">
                    <t.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-graphite">{t.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-y border-border bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Comment ça marche"
              title="Du catalogue public à la machine livrée, en quatre étapes"
              subtitle="Le catalogue est ouvert à tous ; les tarifs et la commande passent par l'espace client. Voici le parcours complet."
              align="center"
            />
          </Reveal>
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <li className="surface-card relative h-full list-none rounded-2xl bg-card p-6">
                  <span className="absolute right-5 top-4 font-display text-4xl font-bold text-primary/10">
                    0{i + 1}
                  </span>
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-deep text-primary-foreground">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-graphite">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* INTERNATIONAL STRIP */}
      <section className="relative isolate overflow-hidden bg-graphite py-20 lg:py-24">
        <Glows tone="dark" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle
              tone="dark"
              eyebrow="Présence internationale"
              title="Un siège britannique, des équipes marocaines"
              subtitle="Center 3D pilote depuis Londres ses relations avec les constructeurs et sa logistique d'importation, tandis que ses bureaux régionaux marocains assurent la proximité terrain, la démonstration et le suivi technique."
            />
          </Reveal>
          <Reveal delay={120}>
            <PresenceGrid tone="dark" />
          </Reveal>
        </div>
      </section>


      {/* CTA BAND */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 sm:p-14">
            <div className="grid-texture absolute inset-0 opacity-50" />
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-bold text-background sm:text-4xl">
                Consultez notre catalogue complet
              </h2>
              <p className="mt-4 text-base leading-relaxed text-background/80">
                Connectez-vous à votre espace client pour voir les tarifs, la disponibilité en temps
                réel et gérer vos commandes, devis et factures.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/catalogue" className={buttonClass("gold", "lg")}>
                  Voir le catalogue
                </Link>
                <a
                  href={ESPACE_CLIENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonClass(
                    "secondary",
                    "lg",
                    "border-background/30 bg-background/10 text-background backdrop-blur hover:bg-background/20 hover:border-background/50",
                  )}
                >
                  <LogIn className="h-4 w-4" /> Espace client
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
