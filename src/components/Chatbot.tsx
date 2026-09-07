import { useEffect, useRef, useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";
import picto from "@/assets/center-3d-picto.png.asset.json";
import { ESPACE_CLIENT_URL } from "@/lib/equipment";
import { cn } from "@/lib/utils";

interface Msg {
  from: "bot" | "user";
  text: string;
  quick?: string[];
}

const QUICK = [
  "Quelles catégories de matériel ?",
  "Achat ou location ?",
  "Comment voir les prix ?",
  "Quels délais de livraison ?",
];

const WELCOME =
  "Bonjour et bienvenue chez Center 3D ! 👋 Je suis votre assistant : je peux vous renseigner sur les catégories de matériel, la différence entre achat et location, l'accès à l'espace client, les délais de livraison et les zones couvertes. Que souhaitez-vous savoir ?";

const FALLBACK =
  "Je n'ai pas bien compris, mais voici ce que je peux vous aider à trouver :";

const GREETINGS = [
  "bonjour",
  "salut",
  "hello",
  "hi",
  "coucou",
  "bonsoir",
  "hey",
];

const RULES: { keys: string[]; answer: string }[] = [
  {
    keys: ["catégor", "categor", "matériel", "materiel", "machine", "produit", "catalogue"],
    answer:
      "Nous proposons 7 familles de matériel : tracteurs, moissonneuses, semoirs, pulvérisateurs, chargeuses, presses à balles et systèmes d'irrigation. Le catalogue public présente les caractéristiques techniques ; les tarifs sont réservés à l'espace client.",
  },
  {
    keys: ["location", "louer", "achat", "acheter", "différence", "difference"],
    answer:
      "Chaque machine est proposée à l'achat, à la location, ou les deux. L'achat convient aux besoins permanents ; la location est idéale pour les pics de campagne (moisson, semis) avec une durée modulable. La modalité est indiquée sur chaque fiche machine.",
  },
  {
    keys: ["prix", "tarif", "devis", "coût", "cout", "espace client", "connect", "compte"],
    answer:
      "Les tarifs, disponibilités en temps réel et devis sont visibles après connexion à votre espace client Center 3D. Cliquez sur « Se connecter » en haut de page pour y accéder.",
  },
  {
    keys: ["délai", "delai", "livraison", "livrer", "transport"],
    answer:
      "Les délais dépendent de la machine et de la ville : le matériel en stock au Maroc est généralement livré sous quelques jours ouvrés, tandis qu'un équipement importé demande un délai plus long. Nos équipes confirment la date exacte lors de la prise de commande.",
  },
  {
    keys: ["zone", "ville", "couvert", "région", "region", "maroc"],
    answer:
      "Nous intervenons dans tout le Maroc, avec des équipes basées à Rabat, Tanger, Fès et Agadir, et du matériel positionné également à Casablanca, Meknès, Marrakech, Oujda et Kénitra.",
  },
  {
    keys: ["international", "londres", "london", "siège", "siege", "société", "societe", "qui"],
    answer:
      "Center 3D est une société internationale dont le siège se situe à Londres, avec des opérations et des équipes actives au Maroc (Rabat, Tanger, Fès, Agadir). Nous importons et distribuons du matériel de plusieurs constructeurs internationaux.",
  },
  {
    keys: ["contact", "téléphone", "telephone", "email", "joindre", "appeler"],
    answer:
      "Vous pouvez nous écrire via le formulaire de la page Contact : un conseiller vous répond avec les informations techniques et commerciales demandées.",
  },
  {
    keys: ["sav", "entretien", "maintenance", "pièce", "piece", "réparation", "reparation"],
    answer:
      "Nos équipes assurent l'accompagnement technique, la mise en route des machines et le service après-vente, avec un suivi des pièces d'usure sur les principales marques que nous distribuons.",
  },
];

function reply(input: string): { text: string; quick?: string[] } {
  const q = input.toLowerCase().trim();

  if (GREETINGS.some((k) => q.includes(k))) {
    return { text: WELCOME, quick: QUICK };
  }

  if (q.includes("merci") || q.includes("remercie")) {
    return {
      text: "Avec plaisir ! Je reste à votre disposition si vous avez d'autres questions sur notre matériel ou l'espace client.",
    };
  }

  if (
    q.includes("au revoir") ||
    q.includes("revoir") ||
    q.includes("bye") ||
    q.includes("bonne journée") ||
    q.includes("bonne soirée")
  ) {
    return {
      text: "Au revoir et bonne journée ! N'hésitez pas à revenir si vous avez des questions.",
    };
  }

  if (
    q.includes("ça va") ||
    q.includes("ca va") ||
    q.includes("comment allez-vous") ||
    q.includes("comment vas-tu") ||
    q.includes("comment ça va")
  ) {
    return {
      text: "Je vais bien, merci. Je suis prêt à vous aider sur nos machines ou l'accès à l'espace client. Que puis-je faire pour vous ?",
      quick: QUICK,
    };
  }

  const hit = RULES.find((r) => r.keys.some((k) => q.includes(k)));
  if (hit) return { text: hit.answer };

  return { text: FALLBACK, quick: QUICK };
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: WELCOME, quick: QUICK },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "nearest" });
  }, [msgs, open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMsgs((m) => [...m, { from: "user", text: t }]);
    setInput("");
    const answer = reply(t);
    setTimeout(
      () => setMsgs((m) => [...m, { from: "bot", text: answer.text, quick: answer.quick }]),
      350,
    );
  };

  return (
    <div className="fixed bottom-5 right-5 z-60 flex flex-col items-end gap-3">
      {open && (
        <div className="animate-in fade-in slide-in-from-bottom-4 flex h-[520px] w-[min(92vw,384px)] flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-[0_30px_70px_-30px_oklch(0.28_0.012_255/0.6)] duration-300">
          <div className="flex items-center gap-3 bg-graphite px-4 py-3.5">
            <img src={picto.url} alt="" className="h-8 w-8 rounded-lg bg-background/95 p-1" />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-background">Assistant Center 3D</p>
              <p className="flex items-center gap-1.5 text-xs text-background/60">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-bright" /> En ligne
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="ml-auto rounded-full p-1.5 text-background/70 transition-colors hover:bg-background/10 hover:text-background"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-background px-4 py-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={cn("flex", m.from === "user" ? "justify-end" : "justify-start")}
              >
                <div
                  className={cn(
                    "flex max-w-[85%] flex-col gap-1.5",
                    m.from === "user" ? "items-end" : "items-start",
                  )}
                >
                  <p
                    className={cn(
                      "rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      m.from === "user"
                        ? "rounded-br-md bg-primary-deep text-primary-foreground"
                        : "rounded-bl-md border border-border bg-card text-graphite",
                    )}
                  >
                    {m.text}
                  </p>
                  {m.from === "bot" && m.quick && i === msgs.length - 1 && (
                    <div className="flex flex-wrap gap-2">
                      {m.quick.map((q) => (
                        <button
                          key={q}
                          onClick={() => send(q)}
                          className="rounded-full border border-primary/25 bg-secondary px-3 py-1.5 text-xs font-medium text-primary-deep transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <a
              href={ESPACE_CLIENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block pt-1 text-center text-xs font-medium text-primary underline-offset-4 hover:underline"
            >
              Voir les tarifs dans l'espace client →
            </a>
            <div ref={endRef} />
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-border bg-card p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question…"
              className="h-10 flex-1 rounded-full border border-input bg-background px-4 text-sm outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              aria-label="Envoyer"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary-deep text-primary-foreground transition-colors hover:bg-primary"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer l'assistant" : "Ouvrir l'assistant"}
        className="flex h-14 items-center gap-2 rounded-full bg-primary-deep px-4 text-primary-foreground shadow-[0_18px_38px_-16px_oklch(0.33_0.085_152/0.9)] transition-transform duration-200 hover:scale-105"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <>
            <MessageSquare className="h-6 w-6" />
            <span className="hidden text-sm font-semibold sm:inline-block">Besoin d'aide ?</span>
          </>
        )}
      </button>
    </div>
  );
}
