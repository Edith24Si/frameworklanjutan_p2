export default function Button({ children, type = "primary", onClick, className = "" }) {
  const types = {
    primary: "bg-orange hover:bg-orange-g text-white",
    secondary: "bg-white/10 hover:bg-white/20 text-teks border border-white/5",
    success: "bg-emerald-600 hover:bg-emerald-700 text-white",
    danger: "bg-rose-600 hover:bg-rose-700 text-white",
    warning: "bg-amber-500 hover:bg-amber-600 text-white",
  };

  return (
    <button 
      onClick={onClick}
      className={`${types[type]} px-4 py-2 rounded-xl text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}