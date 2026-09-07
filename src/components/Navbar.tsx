import { Link } from "@tanstack/react-router";
import { Home, Info, LogIn, Mail, Menu, Tractor, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/center-3d-logo.png";
import { ESPACE_CLIENT_URL } from "@/lib/equipment";
import { buttonClass } from "@/components/ui-kit";

const links = [
  { to: "/", label: "Accueil", icon: Home },
  { to: "/catalogue", label: "Catalogue", icon: Tractor },
  { to: "/a-propos", label: "À propos", icon: Info },
  { to: "/contact", label: "Contact", icon: Mail },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center" onClick={() => setOpen(false)}>
          <img src={logo} alt="Center 3D" className="h-9 w-auto sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary-deep bg-secondary" }}
              inactiveProps={{ className: "text-graphite-soft" }}
              className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary-deep"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={ESPACE_CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("primary", "sm", "hidden sm:inline-flex")}
          >
            <LogIn className="h-4 w-4" />
            Se connecter
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-graphite md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background px-4 pb-5 pt-3 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary-deep bg-secondary" }}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-graphite-soft transition-colors hover:bg-muted hover:text-primary-deep"
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-secondary text-primary-deep">
                  <l.icon className="h-4 w-4" />
                </span>
                {l.label}
              </Link>
            ))}
          </nav>

          <a
            href={ESPACE_CLIENT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClass("primary", "md", "mt-3 w-full")}
          >
            <LogIn className="h-4 w-4" /> Se connecter
          </a>
        </div>
      )}
    </header>
  );
}
