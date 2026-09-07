import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Filter, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import {
  AVAILABILITIES,
  CATEGORIES,
  CITIES,
  EQUIPMENTS,
  type Availability,
  type CategorySlug,
} from "@/lib/equipment";
import { EquipmentCard } from "@/components/EquipmentCard";
import { Button, Reveal } from "@/components/ui-kit";
import { cn } from "@/lib/utils";

const SORTS = [
  { value: "pertinence", label: "Pertinence" },
  { value: "recent", label: "Les plus récentes" },
  { value: "ancien", label: "Les plus anciennes" },
  { value: "az", label: "Nom (A → Z)" },
  { value: "prix", label: "Prix (espace client)" },
] as const;

type Sort = (typeof SORTS)[number]["value"];

interface Search {
  categorie?: CategorySlug;
  ville?: string;
  dispo?: Availability;
  tri?: Sort;
}

export const Route = createFileRoute("/catalogue/")({
  validateSearch: (search: Record<string, unknown>): Search => {
    const out: Search = {};
    if (CATEGORIES.some((c) => c.slug === search["categorie"]))
      out.categorie = search["categorie"] as CategorySlug;
    if (CITIES.includes(search["ville"] as (typeof CITIES)[number]))
      out.ville = search["ville"] as string;
    if (AVAILABILITIES.includes(search["dispo"] as Availability))
      out.dispo = search["dispo"] as Availability;
    if (SORTS.some((s) => s.value === search["tri"])) out.tri = search["tri"] as Sort;
    return out;
  },
  head: () => ({
    meta: [
      { title: "Catalogue matériel agricole — Center 3D" },
      {
        name: "description",
        content:
          "Catalogue public Center 3D : tracteurs, moissonneuses, semoirs, pulvérisateurs, chargeuses, presses à balles et irrigation, filtrables par ville et disponibilité.",
      },
      { property: "og:title", content: "Catalogue matériel agricole — Center 3D" },
      {
        property: "og:description",
        content: "Parcourez nos machines agricoles disponibles à l'achat et à la location au Maroc.",
      },
    ],
  }),
  component: Catalogue,
});

function Catalogue() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const setFilter = (patch: Record<string, unknown>) =>
    navigate({
      to: "/catalogue",
      search: ((prev: Search) => ({ ...prev, ...patch })) as never,
    });

  const items = useMemo(
    () =>
      EQUIPMENTS.filter(
        (e) =>
          (!search.categorie || e.category === search.categorie) &&
          (!search.ville || e.city === search.ville) &&
          (!search.dispo || e.availability === search.dispo),
      ),
    [search],
  );

  const chips = [
    search.categorie && {
      label: CATEGORIES.find((c) => c.slug === search.categorie)?.label ?? "",
      clear: () => setFilter({ categorie: undefined }),
    },
    search.ville && { label: search.ville, clear: () => setFilter({ ville: undefined }) },
    search.dispo && { label: search.dispo, clear: () => setFilter({ dispo: undefined }) },
  ].filter(Boolean) as { label: string; clear: () => void }[];

  const filters = (
    <div className="space-y-8">
      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Catégorie
        </h3>
        <div className="flex flex-col gap-1">
          <FilterBtn
            active={!search.categorie}
            onClick={() => setFilter({ categorie: undefined })}
            label="Toutes les catégories"
          />
          {CATEGORIES.map((c) => (
            <FilterBtn
              key={c.slug}
              active={search.categorie === c.slug}
              onClick={() => setFilter({ categorie: c.slug })}
              label={c.label}
              count={EQUIPMENTS.filter((e) => e.category === c.slug).length}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Ville
        </h3>
        <select
          value={search.ville ?? ""}
          onChange={(e) => setFilter({ ville: e.target.value || undefined })}
          className="h-11 w-full rounded-xl border border-input bg-card px-3 text-sm text-graphite outline-none transition-colors focus:border-primary"
        >
          <option value="">Toutes les villes</option>
          {CITIES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          Disponibilité
        </h3>
        <div className="flex flex-wrap gap-2">
          {AVAILABILITIES.map((a) => (
            <button
              key={a}
              onClick={() => setFilter({ dispo: search.dispo === a ? undefined : a })}
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
                search.dispo === a
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-graphite-soft hover:border-primary/50",
              )}
            >
              {a}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-background">
      <div className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Catalogue public
          </p>
          <h1 className="mt-3 text-3xl font-bold text-graphite sm:text-4xl">
            Matériel agricole disponible
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Caractéristiques techniques, localisation et disponibilité en accès libre. Les tarifs
            sont réservés aux clients connectés à leur espace.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <p className="mb-6 flex items-center gap-2 font-display text-sm font-semibold text-graphite">
              <SlidersHorizontal className="h-4 w-4 text-primary" /> Filtres
            </p>
            {filters}
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              className="lg:hidden"
              onClick={() => setMobileOpen(true)}
            >
              <Filter className="h-4 w-4" /> Filtres
            </Button>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-graphite">{items.length}</span> machine
              {items.length > 1 ? "s" : ""} correspondant à votre recherche
            </p>
          </div>

          {chips.length > 0 && (
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {chips.map((c) => (
                <button
                  key={c.label}
                  onClick={c.clear}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-secondary px-3 py-1.5 text-xs font-medium text-primary-deep transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  {c.label} <X className="h-3.5 w-3.5" />
                </button>
              ))}
              <button
                onClick={() =>
                  navigate({
                    to: "/catalogue",
                    search: { categorie: undefined, ville: undefined, dispo: undefined } as never,
                  })
                }
                className="text-xs font-medium text-muted-foreground underline-offset-4 hover:underline"
              >
                Tout effacer
              </button>
            </div>
          )}

          {items.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-border bg-card p-14 text-center">
              <p className="font-display text-lg font-semibold text-graphite">
                Aucune machine ne correspond à ces critères
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Élargissez votre recherche en retirant un filtre.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {items.map((item, i) => (
                <Reveal key={item.id} delay={Math.min(i, 6) * 60}>
                  <EquipmentCard item={item} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-60 lg:hidden">
          <div
            className="absolute inset-0 bg-graphite/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="animate-in slide-in-from-bottom absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-3xl bg-background p-6 duration-300">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-display text-lg font-semibold text-graphite">Filtres</p>
              <button
                onClick={() => setMobileOpen(false)}
                aria-label="Fermer"
                className="rounded-full border border-border p-2 text-graphite"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {filters}
            <Button className="mt-8 w-full" onClick={() => setMobileOpen(false)}>
              Afficher {items.length} machine{items.length > 1 ? "s" : ""}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function FilterBtn({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count?: number;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors",
        active
          ? "bg-primary-deep font-medium text-primary-foreground"
          : "text-graphite-soft hover:bg-muted hover:text-primary-deep",
      )}
    >
      {label}
      {count !== undefined && (
        <span className={cn("text-xs", active ? "text-background/70" : "text-muted-foreground")}>
          {count}
        </span>
      )}
    </button>
  );
}
