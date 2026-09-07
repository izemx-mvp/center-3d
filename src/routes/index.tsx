import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Globe2,
  Handshake,
  LogIn,
  MapPin,
  ShieldCheck,
  Sprout,
  Truck,
  Wrench,
} from "lucide-react";
import {
  CATEGORIES,
  EQUIPMENTS,
  ESPACE_CLIENT_URL,
  heroImage,
} from "@/lib/equipment";
import { EquipmentCard } from "@/components/EquipmentCard";
import { buttonClass, CountUp, Reveal, SectionTitle } from "@/components/ui-kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Center 3D — Importateur de matériel agricole (vente & location)" },
      {
        name: "description",
        content:
          "Importateur international de matériel agricole : tracteurs, moissonneuses, semoirs, pulvérisateurs, chargeuses, presses à balles et irrigation. Siège à Londres, équipes au Maroc.",
      },
      { property: "og:title", content: "Center 3D — Matériel agricole importé, vente & location" },
      {
        property: "og:description",
        content:
          "Machines agricoles de constructeurs internationaux, disponibles à l'achat et à la location partout au Maroc.",
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
    text: "Des machines sélectionnées chez des constructeurs internationaux, contrôlées avant mise à disposition.",
  },
  {
    icon: Globe2,
    title: "Présence internationale",
    text: "Un siège à Londres et des équipes opérationnelles à Rabat, Tanger, Fès et Agadir.",
  },
  {
    icon: Wrench,
    title: "Service après-vente",
    text: "Mise en route, entretien et suivi des pièces d'usure assurés par nos techniciens.",
  },
  {
    icon: Handshake,
    title: "Achat ou location",
    text: "Une flexibilité totale selon vos campagnes : investissement durable ou location saisonnière.",
  },
  {
    icon: Sprout,
    title: "Accompagnement technique",
    text: "Un conseil adapté à votre exploitation : puissance, largeur de travail, conditions de sol.",
  },
  {
    icon: Truck,
    title: "Logistique maîtrisée",
    text: "Importation, transport et livraison coordonnés jusqu'à votre exploitation.",
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
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="grid-texture absolute inset-0 opacity-60" />
        <div className="absolute -left-24 top-20 h-72 w-72 animate-float-soft rounded-full bg-primary-bright/20 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 animate-float-soft rounded-full bg-gold/15 blur-3xl [animation-delay:3s]" />
        <div className="absolute inset-0 bg-gradient-to-t from-graphite/70 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:py-32">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-background/25 bg-background/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-background/90 backdrop-blur">
              <Globe2 className="h-3.5 w-3.5 text-gold" /> Londres · Rabat · Tanger · Fès · Agadir
            </span>
          </Reveal>
          <Reveal delay={90}>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-[1.08] text-background sm:text-5xl lg:text-6xl">
              Le matériel agricole importé,{" "}
              <span className="text-gradient-gold">à l'achat comme à la location</span>
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
      <section className="bg-secondary/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item, i) => (
              <Reveal key={item.id} delay={i * 70}>
                <EquipmentCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-24">
        <Reveal>
          <SectionTitle
            eyebrow="Pourquoi Center 3D"
            title="Un partenaire d'équipement, pas un simple revendeur"
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map((t, i) => (
            <Reveal key={t.title} delay={i * 60}>
              <div className="surface-card h-full rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary-deep">
                  <t.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-graphite">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTERNATIONAL STRIP */}
      <section className="bg-graphite py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <SectionTitle
              tone="dark"
              eyebrow="Présence internationale"
              title="Un siège britannique, des équipes marocaines"
              subtitle="Center 3D pilote depuis Londres ses relations avec les constructeurs et sa logistique d'importation, tandis que ses équipes marocaines assurent la proximité terrain, la démonstration et le suivi technique."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gold/30 bg-gold/10 p-6">
                <Building2 className="h-6 w-6 text-gold" />
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-gold">
                  Siège
                </p>
                <p className="mt-1 text-xl font-bold text-background">Londres, Royaume-Uni</p>
                <p className="mt-2 text-sm text-background/65">
                  Sourcing constructeurs, importation et coordination groupe.
                </p>
              </div>
              {["Rabat", "Tanger", "Fès", "Agadir"].map((v) => (
                <div
                  key={v}
                  className="flex items-center gap-3 rounded-2xl border border-background/12 bg-background/5 p-5"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary-bright" />
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-background">{v}</p>
                    <p className="text-xs text-background/60">Équipe commerciale & technique</p>
                  </div>
                </div>
              ))}
            </div>
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
