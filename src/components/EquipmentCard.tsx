import { Link } from "@tanstack/react-router";
import { Lock, MapPin } from "lucide-react";
import { categoryLabel, equipmentImage, type Equipment } from "@/lib/equipment";
import { AvailabilityBadge, buttonClass } from "@/components/ui-kit";

export function EquipmentCard({ item }: { item: Equipment }) {
  return (
    <article className="surface-card group flex flex-col overflow-hidden rounded-2xl">
      <div className="relative aspect-4/3 overflow-hidden bg-muted">
        <img
          src={equipmentImage(item)}
          alt={`${item.brand} ${item.name}`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-3">
          <span className="rounded-full bg-graphite/80 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-background backdrop-blur">
            {categoryLabel(item.category)}
          </span>
          <AvailabilityBadge status={item.availability} className="bg-background/90 backdrop-blur" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
          {item.brand}
        </p>
        <h3 className="mt-1 text-lg font-bold text-graphite">{item.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{item.summary}</p>

        <dl className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm">
          <div className="flex justify-between gap-3">
            <dt className="text-muted-foreground">Puissance</dt>
            <dd className="text-right font-medium text-graphite">{item.power}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="flex items-center gap-1.5 text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> Localisation
            </dt>
            <dd className="font-medium text-graphite">{item.city}</dd>
          </div>
          <div className="flex justify-between gap-3">
            <dt className="text-muted-foreground">Modalité</dt>
            <dd className="font-medium text-graphite">{item.mode}</dd>
          </div>
        </dl>

        <p className="mt-4 flex items-center gap-2 rounded-xl bg-secondary/70 px-3 py-2 text-xs font-medium text-primary-deep">
          <Lock className="h-3.5 w-3.5" /> Connectez-vous pour voir le tarif
        </p>

        <Link
          to="/catalogue/$id"
          params={{ id: item.id }}
          className={buttonClass("secondary", "sm", "mt-4 w-full")}
        >
          Voir la machine
        </Link>
      </div>
    </article>
  );
}
