import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Info, Lock, MapPin } from "lucide-react";
import { useState } from "react";
import {
  categoryImage,
  categoryLabel,
  EQUIPMENTS,
  ESPACE_CLIENT_URL,
  heroImage,
} from "@/lib/equipment";
import { EquipmentCard } from "@/components/EquipmentCard";
import { AvailabilityBadge, Button, buttonClass, Reveal } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/catalogue/$id")({
  loader: ({ params }) => {
    const item = EQUIPMENTS.find((e) => e.id === params.id);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Machine introuvable — Center 3D" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    const title = `${item.brand} ${item.name} — ${categoryLabel(item.category)} | Center 3D`;
    return {
      meta: [
        { title },
        { name: "description", content: item.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: item.summary },
      ],
    };
  },
  component: Detail,
});

function Detail() {
  const { item } = Route.useLoaderData();
  const gallery = [categoryImage(item.category), heroImage, categoryImage(item.category)];
  const [active, setActive] = useState(0);
  const [sent, setSent] = useState(false);

  const related = EQUIPMENTS.filter((e) => e.category === item.category && e.id !== item.id).slice(
    0,
    3,
  );

  const specs: [string, string][] = [
    ["Marque", item.brand],
    ["Modèle", item.name],
    ["Catégorie", categoryLabel(item.category)],
    ["Puissance", item.power],
    ["Capacité", item.capacity],
    ["Dimensions", item.dimensions],
    ["Poids", item.weight],
    ["Année", String(item.year)],
    ["Utilisation recommandée", item.usage],
    ["Modalité", item.mode],
    ["Localisation", item.city],
  ];

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6">
        <Link
          to="/catalogue"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary-deep"
        >
          <ArrowLeft className="h-4 w-4" /> Retour au catalogue
        </Link>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2">
        <div>
          <div className="overflow-hidden rounded-3xl border border-border bg-muted shadow-[var(--shadow-card)]">
            <img
              src={gallery[active]}
              alt={`${item.brand} ${item.name}`}
              width={1024}
              height={768}
              className="aspect-4/3 w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={cn(
                  "overflow-hidden rounded-xl border-2 transition-colors",
                  active === i ? "border-primary" : "border-transparent hover:border-primary/40",
                )}
              >
                <img
                  src={g}
                  alt=""
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium uppercase tracking-wide text-primary-deep">
              {categoryLabel(item.category)}
            </span>
            <AvailabilityBadge status={item.availability} />
          </div>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            {item.brand}
          </p>
          <h1 className="mt-1 text-4xl font-bold text-graphite">{item.name}</h1>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.summary}</p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-graphite-soft">
            <MapPin className="h-4 w-4 text-primary" /> Disponible depuis {item.city}
          </p>

          <div className="mt-8 rounded-2xl border border-gold/35 bg-gold/10 p-6">
            <p className="flex items-center gap-2 font-display text-base font-semibold text-graphite">
              <Lock className="h-4 w-4 text-gold" /> Tarifs et disponibilité en temps réel visibles
              dans votre espace client
            </p>
            <p className="mt-2 text-sm text-graphite-soft">
              Connectez-vous pour consulter le tarif d'achat ou de location, vérifier le stock et
              générer un devis.
            </p>
            <a
              href={ESPACE_CLIENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("primary", "md", "mt-5")}
            >
              Accéder à l'espace client
            </a>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <p className="border-b border-border bg-secondary/50 px-5 py-3 font-display text-sm font-semibold text-graphite">
              Spécifications techniques
            </p>
            <dl className="divide-y divide-border">
              {specs.map(([k, v]) => (
                <div key={k} className="grid grid-cols-1 gap-1 px-5 py-3 sm:grid-cols-2">
                  <dt className="text-sm text-muted-foreground">{k}</dt>
                  <dd className="text-sm font-medium text-graphite sm:text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-lg font-bold text-graphite">
              Demander plus d'informations
            </h2>
            {sent ? (
              <div className="mt-5 flex items-start gap-3 rounded-xl border border-primary/25 bg-secondary p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <p className="font-semibold text-primary-deep">Demande envoyée</p>
                  <p className="mt-1 text-sm text-graphite-soft">
                    Merci, un conseiller Center 3D revient vers vous avec les détails de cette
                    machine.
                  </p>
                </div>
              </div>
            ) : (
              <form
                className="mt-5 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <Field label="Nom" name="nom" required />
                <Field label="E-mail" name="email" type="email" required />
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-sm font-medium text-graphite">Message</label>
                  <textarea
                    required
                    rows={3}
                    defaultValue={`Bonjour, je souhaite plus d'informations sur le ${item.brand} ${item.name}.`}
                    className="w-full rounded-xl border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                  />
                </div>
                <Button type="submit" className="sm:col-span-2">
                  Envoyer la demande
                </Button>
              </form>
            )}
            <p className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" /> Aucun tarif n'est communiqué sur le
              site public : les prix sont exclusivement accessibles dans l'espace client.
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="bg-secondary/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-graphite">
              Autres {categoryLabel(item.category).toLowerCase()}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.id} delay={i * 70}>
                  <EquipmentCard item={r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-graphite">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
