export default function Avatar({ name, size = "md" }) {
  const sizes = {
    sm: "w-8 h-8 text-xs",
    md: "w-10 h-10 text-sm",
    lg: "w-14 h-14 text-lg",
  };

  const initial = name ? name.charAt(0).toUpperCase() : "?";

  return (
    <div className={`${sizes[size]} rounded-full bg-gradient-to-br from-orange to-orange-g flex items-center justify-center font-bold text-white shadow-md border border-white/10`}>
      {initial}
    </div>
  );
}