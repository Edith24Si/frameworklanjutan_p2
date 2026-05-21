export default function CardWrapper({ children, title, description }) {
  return (
    <div className="border border-white/5 rounded-2xl p-6 mb-6" style={{ background: "#1a1d27" }}>
      {(title || description) && (
        <div className="mb-4 border-b border-white/5 pb-3">
          {title && <h3 className="text-base font-bold text-white">{title}</h3>}
          {description && <p className="text-xs text-gray-400 mt-0.5">{description}</p>}
        </div>
      )}
      {children}
    </div>
  );
}