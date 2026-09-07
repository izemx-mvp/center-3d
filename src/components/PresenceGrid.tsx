import { Building2, MapPin, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const OFFICES = [
  { city: "Rabat", role: "Direction commerciale Maroc" },
  { city: "Tanger", role: "Logistique & réception import" },
  { city: "Fès", role: "Service après-vente & pièces" },
  { city: "Agadir", role: "Maraîchage & irrigation" },
];

export function PresenceGrid({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl p-6 transition-transform duration-500 hover:-translate-y-1 sm:col-span-2",
          dark ? "border border-gold/35 bg-gold/10" : "border border-gold/45 bg-gold/10",
        )}
      >
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/25 blur-2xl" />
        <div className="relative flex items-start justify-between gap-4">
          <Building2 className={cn("h-6 w-6", dark ? "text-gold" : "text-gold")} />
          <span className="inline-flex items-center gap-1.5 rounded-full bg-gold px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-graphite">
            <Star className="h-3 w-3" /> Siège social
          </span>
        </div>
        <p className={cn("relative mt-4 text-xl font-bold", dark ? "text-background" : "text-graphite")}>
          Londres, Royaume-Uni
        </p>
        <p className={cn("relative mt-2 text-sm", dark ? "text-background/70" : "text-muted-foreground")}>
          Sourcing constructeurs, contrats d'importation, contrôle qualité et coordination du groupe.
        </p>
      </div>

      {OFFICES.map((o) => (
        <div
          key={o.city}
          className={cn(
            "flex items-start gap-3 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1",
            dark
              ? "border border-background/12 bg-background/5 hover:border-primary-bright/40"
              : "border border-border bg-card hover:border-primary/45",
          )}
        >
          <MapPin
            className={cn("mt-0.5 h-5 w-5 shrink-0", dark ? "text-primary-bright" : "text-primary")}
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className={cn("font-semibold", dark ? "text-background" : "text-graphite")}>
                {o.city}
              </p>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider",
                  dark
                    ? "bg-background/10 text-background/70"
                    : "bg-secondary text-primary-deep",
                )}
              >
                Bureau régional
              </span>
            </div>
            <p className={cn("mt-1 text-xs", dark ? "text-background/60" : "text-muted-foreground")}>
              {o.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
