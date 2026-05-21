export default function Card({ children, className = "" }) {
  return (
    <div className={`border border-white/5 rounded-2xl p-6 bg-[#1a1d27] ${className}`}>
      {children}
    </div>
  );
}
