export default function Badge({ children, type = "primary" }) {
  const types = {
    primary: "bg-orange/10 text-orange border border-orange/20",
    secondary: "bg-white/5 text-teks-redup border border-white/10",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    danger: "bg-rose-500/10 text-rose-400 border border-rose-500/20",
    warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  };

  return (
    <span className={`${types[type]} px-2.5 py-0.5 rounded-lg text-xs font-bold tracking-wider uppercase`}>
      {children}
    </span>
  );
}