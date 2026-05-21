export default function SelectField({ label, options = [], value, onChange, name }) {
  return (
    <div className="w-full flex flex-col gap-1.5">
      {label && <label className="text-xs font-semibold text-teks-redup">{label}</label>}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none text-teks bg-no-repeat focus:border-orange/50 transition-all"
        style={{ background: "#13161f" }}
      >
        {options.map((opt, i) => (
          <option key={i} value={opt.value} className="bg-[#1a1d27] text-white">
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}