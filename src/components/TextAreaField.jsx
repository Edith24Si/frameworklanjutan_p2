export default function TextAreaField({ label, placeholder, value, onChange, name, rows = 3 }) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && <label className="text-xs font-semibold text-teks-redup">{label}</label>}
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
        className="w-full px-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none text-teks placeholder-gray-600 focus:border-orange/50 transition-all resize-none"
        style={{ background: "#13161f" }}
      />
    </div>
  );
}