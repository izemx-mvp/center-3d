import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ChevronDown, Globe2, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { ESPACE_CLIENT_URL } from "@/lib/equipment";
import { Button, Reveal, SectionTitle } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Center 3D matériel agricole" },
      {
        name: "description",
        content:
          "Contactez les équipes Center 3D pour un conseil sur l'achat de matériel agricole au Maroc. Réponses aux questions fréquentes incluses.",
      },
      { property: "og:title", content: "Contact — Center 3D" },
      {
        property: "og:description",
        content: "Écrivez-nous pour un conseil sur l'achat de machines agricoles.",
      },
    ],
  }),
  component: Contact,
});

const FAQ = [
  {
    q: "Quels sont les délais de livraison ?",
    a: "Le matériel déjà positionné au Maroc est généralement livré sous quelques jours ouvrés. Pour un équipement importé sur commande, le délai dépend du constructeur et du transport ; il vous est confirmé précisément lors de la prise de commande.",
  },
  {
    q: "Proposez-vous de la location de matériel ?",
    a: "Non. Center 3D est exclusivement un vendeur de matériel agricole neuf importé de constructeurs internationaux. Nos équipes vous accompagnent dans le choix et l'achat de la machine adaptée à votre exploitation.",
  },
  {
    q: "Quelles zones sont couvertes ?",
    a: "Nos équipes sont basées à Rabat, Tanger, Fès et Agadir, et nous positionnons également du matériel à Casablanca, Meknès, Marrakech, Oujda et Kénitra. Nous intervenons sur l'ensemble du territoire marocain.",
  },
  {
    q: "Comment accéder à l'espace client et voir les tarifs ?",
    a: "Les tarifs, la disponibilité en temps réel, les devis, commandes et factures sont regroupés dans l'espace client Center 3D. Cliquez sur « Se connecter » en haut de page pour y accéder. Si vous n'avez pas encore de compte, demandez-le via ce formulaire.",
  },
  {
    q: "Center 3D est-elle une société internationale ?",
    a: "Oui. Le siège de Center 3D est situé à Londres, au Royaume-Uni, et pilote les relations avec les constructeurs et la logistique d'importation. Les bureaux régionaux marocains de Rabat, Tanger, Fès et Agadir assurent la présence terrain, la démonstration et le service après-vente.",
  },
  {
    q: "Pourquoi les prix ne sont-ils pas affichés sur le site public ?",
    a: "Le prix d'une machine dépend de la configuration retenue, des options, du volume commandé et des conditions de livraison. Nous préférons vous transmettre un tarif juste et complet dans votre espace client plutôt qu'un montant indicatif trompeur.",
  },
  {
    q: "Puis-je voir la machine avant de l'acheter ?",
    a: "Oui. Selon la disponibilité et la ville de positionnement, nous organisons une visite du matériel ou une démonstration en conditions réelles avec l'un de nos techniciens régionaux.",
  },
  {
    q: "Assurez-vous l'entretien et les pièces détachées ?",
    a: "Nos techniciens réalisent la mise en route, la formation des opérateurs et les entretiens programmés. Les pièces d'usure les plus courantes sont approvisionnées via nos bureaux régionaux ; les pièces spécifiques sont commandées directement auprès du constructeur.",
  },
  {
    q: "Travaillez-vous avec les coopératives et les entreprises de travaux agricoles ?",
    a: "Oui. Nous accompagnons aussi bien les exploitations familiales que les coopératives et les entreprises de travaux agricoles, avec des configurations et des volumes adaptés à chaque usage.",
  },
];


function Contact() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-background">
      <div className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
          <h1 className="mt-3 text-3xl font-bold text-graphite sm:text-4xl">
            Parlons de votre projet d'équipement
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Décrivez votre besoin : type de machine, surface, période d'utilisation. Un conseiller
            Center 3D vous répond avec une recommandation adaptée.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-[var(--shadow-card)] sm:p-9">
            {sent ? (
              <div className="flex flex-col items-center py-14 text-center">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-secondary">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-graphite">Message envoyé</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  Merci pour votre message. Nos équipes reviennent vers vous rapidement avec les
                  informations demandées.
                </p>
                <Button variant="secondary" className="mt-8" onClick={() => setSent(false)}>
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form
                className="grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label="Nom et prénom" required />
                <Field label="Société / exploitation" />
                <Field label="E-mail" type="email" required />
                <Field label="Téléphone" type="tel" />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-graphite">Sujet</label>
                  <select className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm text-graphite outline-none transition-colors focus:border-primary">
                    <option>Demande d'information sur une machine</option>
                    
                    <option>Demande d'achat</option>
                    <option>Service après-vente</option>
                    <option>Création d'un accès espace client</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-graphite">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre besoin : type de matériel, surface, période…"
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-3 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <Button type="submit" size="lg" className="sm:col-span-2">
                  Envoyer le message
                </Button>
              </form>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="space-y-4">
            <div className="relative isolate overflow-hidden rounded-2xl bg-graphite p-7 text-background">
              <div className="absolute -right-10 -top-10 h-40 w-40 animate-float-soft rounded-full bg-gold/15 blur-3xl" />
              <h2 className="relative font-display text-lg font-bold">Nos coordonnées</h2>
              <ul className="relative mt-5 space-y-4 text-sm text-background/75">
                <li className="flex gap-3">
                  <Globe2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="inline-flex rounded-full bg-gold px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-graphite">
                      Siège social
                    </span>
                    <br />
                    Londres, Royaume-Uni — adresse complète communiquée sur demande
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-bright" />
                  <span>
                    <span className="inline-flex rounded-full bg-background/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-background/80">
                      Bureaux régionaux
                    </span>
                    <br />
                    Rabat, Tanger, Fès et Agadir
                  </span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>Téléphone : à communiquer</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>contact@center3d.example</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gold/35 bg-gold/10 p-7">
              <p className="font-display font-semibold text-graphite">Déjà client ?</p>
              <p className="mt-2 text-sm text-graphite-soft">
                Tarifs, disponibilités et commandes sont gérés dans votre espace client.
              </p>
              <a
                href={ESPACE_CLIENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-semibold text-primary-deep underline-offset-4 hover:underline"
              >
                Accéder à l'espace client →
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal>
            <SectionTitle eyebrow="FAQ" title="Questions fréquentes" align="center" />
          </Reveal>
          <div className="mt-10 space-y-3">
            {FAQ.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-base font-semibold text-graphite">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-300",
                        open === i && "rotate-180",
                      )}
                    />
                  </button>
                  {open === i && (
                    <p className="border-t border-border px-6 py-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  type = "text",
  required,
}: {
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-graphite">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        type={type}
        required={required}
        className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
