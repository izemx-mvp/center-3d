export function Glows({ tone = "light" }: { tone?: "light" | "dark" }) {
  const a = tone === "dark" ? "bg-primary-bright/20" : "bg-primary/10";
  const b = tone === "dark" ? "bg-gold/15" : "bg-gold/12";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute -left-24 top-10 h-72 w-72 animate-float-soft rounded-full blur-3xl ${a}`}
      />
      <div
        className={`absolute -right-16 bottom-0 h-80 w-80 animate-float-soft rounded-full blur-3xl [animation-delay:4s] ${b}`}
      />
    </div>
  );
}
