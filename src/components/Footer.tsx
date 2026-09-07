import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/center-3d-logo.png.asset.json";
import { CATEGORIES, ESPACE_CLIENT_URL } from "@/lib/equipment";

export function Footer() {
  return (
    <footer className="bg-graphite text-background/75">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="inline-flex rounded-xl bg-background/95 px-4 py-3">
            <img src={logo.url} alt="Center 3D" className="h-8 w-auto" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed">
            Importateur et distributeur international de matériel agricole. Vente et location de
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
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Siège : Londres, Royaume-Uni — adresse complète à venir</span>
            </li>
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>Maroc : Rabat · Tanger · Fès · Agadir</span>
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
    </footer>
  );
}
