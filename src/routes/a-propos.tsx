import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe2, Handshake, ShieldCheck, Wrench } from "lucide-react";
import { BRANDS, heroImage } from "@/lib/equipment";
import { Glows } from "@/components/Glows";
import { PresenceGrid } from "@/components/PresenceGrid";
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
    text: "Chaque machine provient de constructeurs internationaux reconnus et fait l'objet d'un contrôle de réception avant mise à disposition : essais moteur et hydrauliques, vérification des sécurités, contrôle des équipements et documentation technique complète.",
  },
  {
    icon: Globe2,
    title: "Présence internationale",
    text: "Un siège à Londres pour le sourcing, la négociation constructeurs et l'importation ; quatre bureaux régionaux au Maroc pour la proximité terrain, la démonstration et la réactivité pendant les pics de campagne.",
  },
  {
    icon: Wrench,
    title: "Accompagnement technique",
    text: "Conseil au choix de la machine, mise en route sur votre parcelle, formation des opérateurs, entretiens programmés et disponibilité des pièces d'usure les plus courantes dans nos bureaux régionaux.",
  },
  {
    icon: Handshake,
    title: "Conseil à l'achat",
    text: "Nous partons de vos surfaces, de votre assolement et de vos fenêtres de chantier avant de recommander un modèle. Un investissement doit rester dimensionné à l'exploitation, pas l'inverse.",
  },
];

const network = [
  {
    title: "Sélection chez le constructeur",
    text: "Nos équipes de Londres évaluent chaque gamme sur la disponibilité des pièces, la simplicité d'entretien et la tenue en climat chaud avant de la référencer.",
  },
  {
    title: "Importation et dédouanement",
    text: "Nous pilotons le transport maritime, les formalités douanières et l'acheminement jusqu'aux plateformes marocaines, avec un suivi communiqué au client.",
  },
  {
    title: "Réception technique au Maroc",
    text: "Chaque machine est remise en configuration de travail, testée et documentée avant d'être proposée à la vente dans le catalogue.",
  },
  {
    title: "Suivi après livraison",
    text: "Mise en route, formation, entretien et approvisionnement en pièces sont assurés depuis Rabat, Tanger, Fès et Agadir.",
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
            documenté, avec des modalités d'achat adaptées à la réalité des campagnes agricoles
            marocaines : disponibilité avant les fenêtres de semis et de récolte, pièces d'usure
            courantes en stock régional, et interlocuteur unique du premier échange jusqu'à la mise
            en route.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            Nous travaillons avec des exploitations familiales, des coopératives et des entreprises
            de travaux agricoles. Le catalogue public reste volontairement ouvert et détaillé —
            caractéristiques, puissance, ville de positionnement, disponibilité — pour que la
            comparaison se fasse en toute transparence avant même le premier contact.
          </p>
          <Link to="/catalogue" className={buttonClass("primary", "md", "mt-8")}>
            Découvrir le catalogue
          </Link>
        </Reveal>

        <Reveal delay={120}>
          <PresenceGrid />
        </Reveal>
      </section>

      <section className="relative isolate overflow-hidden bg-secondary/50 py-20">
        <Glows />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle
              eyebrow="Nos valeurs"
              title="Ce qui guide notre travail"
              subtitle="Quatre principes que nous appliquons à chaque machine importée et à chaque exploitation accompagnée."
              align="center"
            />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="surface-card group h-full rounded-2xl bg-card p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-deep text-primary-foreground transition-transform duration-300 group-hover:scale-110">
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
            eyebrow="Notre chaîne de valeur"
            title="De l'usine du constructeur à votre parcelle"
            subtitle="Quatre maillons pilotés en interne, sans intermédiaire supplémentaire entre le constructeur et l'exploitation."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {network.map((n, i) => (
            <Reveal key={n.title} delay={i * 70}>
              <div className="surface-card h-full rounded-2xl border-t-4 border-t-gold bg-card p-6">
                <span className="font-display text-sm font-bold text-primary">Étape {i + 1}</span>
                <h3 className="mt-2 text-base font-bold text-graphite">{n.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{n.text}</p>
              </div>
            </Reveal>
          ))}
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
