import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, Globe2, Handshake, MapPin, ShieldCheck, Wrench } from "lucide-react";
import { BRANDS, heroImage } from "@/lib/equipment";
import { buttonClass, Reveal, SectionTitle } from "@/components/ui-kit";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Center 3D, importateur de matériel agricole" },
      {
        name: "description",
        content:
          "Center 3D est un importateur et distributeur international de matériel agricole, dont le siège est à Londres, avec des équipes à Rabat, Tanger, Fès et Agadir.",
      },
      { property: "og:title", content: "À propos de Center 3D" },
      {
        property: "og:description",
        content:
          "Importateur international de machines agricoles, siège à Londres et opérations au Maroc.",
      },
    ],
  }),
  component: About,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Qualité du matériel importé",
    text: "Chaque machine provient de constructeurs internationaux reconnus et fait l'objet d'un contrôle avant mise à disposition.",
  },
  {
    icon: Globe2,
    title: "Présence internationale",
    text: "Un siège à Londres pour le sourcing et l'importation, des équipes marocaines pour la proximité terrain.",
  },
  {
    icon: Wrench,
    title: "Accompagnement technique",
    text: "Conseil au choix de la machine, mise en route, formation des opérateurs et service après-vente.",
  },
  {
    icon: Handshake,
    title: "Conseil à l'achat",
    text: "Un accompagnement adapté à chaque exploitation pour un investissement durable et maîtrisé.",
  },
];

function About() {
  return (
    <div className="bg-background">
      <section className="relative isolate overflow-hidden bg-hero-gradient">
        <img
          src={heroImage}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="grid-texture absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              À propos de Center 3D
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-background sm:text-5xl">
              Un importateur international de matériel agricole, engagé au Maroc
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/80">
              Center 3D importe et distribue des machines agricoles de constructeurs internationaux.
              Notre siège est établi à Londres, et nos équipes opérationnelles accompagnent
              quotidiennement les exploitations marocaines depuis Rabat, Tanger, Fès et Agadir.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionTitle
            eyebrow="Notre mission"
            title="Rendre accessible un matériel fiable, du semis à la récolte"
            subtitle="Nous couvrons l'ensemble du cycle cultural : préparation du sol, semis, protection des cultures, irrigation, récolte et fourrage. Notre rôle est de sélectionner les machines pertinentes chez nos constructeurs partenaires, de les importer dans les meilleures conditions et d'en assurer le suivi technique sur le terrain."
          />
          <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
            Cette organisation internationale nous permet de proposer un matériel homogène et
            documenté, avec des modalités d'achat adaptées à la réalité des
            campagnes agricoles marocaines.
          </p>
          <Link to="/catalogue" className={buttonClass("primary", "md", "mt-8")}>
            Découvrir le catalogue
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="surface-card rounded-2xl p-6 sm:col-span-2">
              <Building2 className="h-6 w-6 text-primary" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary">
                Siège social
              </p>
              <p className="mt-1 text-xl font-bold text-graphite">Londres, Royaume-Uni</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Relations constructeurs, importation, coordination groupe et qualité.
              </p>
            </div>
            {["Rabat", "Tanger", "Fès", "Agadir"].map((v) => (
              <div key={v} className="surface-card flex items-center gap-3 rounded-2xl p-5">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <div className="min-w-0">
                  <p className="truncate font-semibold text-graphite">{v}</p>
                  <p className="text-xs text-muted-foreground">Équipe commerciale & technique</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle eyebrow="Nos valeurs" title="Ce qui guide notre travail" align="center" />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="surface-card h-full rounded-2xl bg-card p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-deep text-primary-foreground">
                    <v.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-graphite">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <Reveal>
          <SectionTitle
            eyebrow="Réseau constructeurs"
            title="Nous travaillons avec plusieurs fabricants internationaux"
            subtitle="Notre catalogue rassemble le matériel de constructeurs complémentaires, ce qui nous permet de proposer la machine la mieux adaptée plutôt qu'une gamme unique."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
          {BRANDS.map((b, i) => (
            <Reveal key={b} delay={i * 50}>
              <div className="flex h-24 items-center justify-center rounded-2xl border border-border bg-card px-3 text-center font-display text-sm font-bold tracking-tight text-graphite transition-colors hover:border-primary/50 hover:text-primary-deep">
                {b}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
