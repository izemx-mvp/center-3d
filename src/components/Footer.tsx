import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/center-3d-logo.png";
import { CATEGORIES, ESPACE_CLIENT_URL } from "@/lib/equipment";
import { Glows } from "@/components/Glows";

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-graphite text-background/75">
      <div className="grid-texture absolute inset-0 opacity-30" />
      <Glows tone="dark" />
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-8 sm:p-10">
            <div className="absolute -right-12 -top-12 h-52 w-52 animate-float-soft rounded-full bg-gold/20 blur-3xl" />
            <div className="relative flex flex-wrap items-center justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold text-background sm:text-3xl">
                  Un projet d'équipement pour la prochaine campagne ?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-background/75">
                  Nos conseillers de Rabat, Tanger, Fès et Agadir vous répondent avec une
                  recommandation adaptée à vos surfaces et à vos délais.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-gold px-7 text-sm font-semibold text-graphite transition-all duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                Parler à un conseiller <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-xl bg-background/95 px-4 py-3">
            <img src={logo} alt="Center 3D" className="h-8 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Importateur et distributeur international de matériel agricole. Vente de
            machines pour les exploitations et coopératives.
          </p>
          <a
            href={ESPACE_CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
          >
            Accéder à l'espace client →
          </a>
        </div>


        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
            Catégories
          </h3>
          <ul className="space-y-2.5 text-sm">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/catalogue"
                  search={{ categorie: c.slug }}
                  className="transition-colors hover:text-gold"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
            Société
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link to="/a-propos" className="transition-colors hover:text-gold">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/catalogue" className="transition-colors hover:text-gold">
                Catalogue public
              </Link>
            </li>
            <li>
              <Link to="/contact" className="transition-colors hover:text-gold">
                Contact
              </Link>
            </li>
            <li>
              <a
                href={ESPACE_CLIENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-gold"
              >
                Espace client
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-background">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3">
              <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                <span className="font-semibold text-background">Siège — Londres, Royaume-Uni</span>
                <br />
                Adresse complète à venir
              </span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-bright" />
              <span>
                <span className="font-semibold text-background">Bureaux régionaux — Maroc</span>
                <br />
                Rabat · Tanger · Fès · Agadir
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Téléphone à communiquer</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>contact@center3d.example</span>
            </li>
          </ul>
        </div>
      </div>

        <div className="border-t border-background/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>© {new Date().getFullYear()} Center 3D. Tous droits réservés.</p>
            <p>Les tarifs sont consultables uniquement dans l'espace client.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

