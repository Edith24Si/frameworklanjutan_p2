export default function Table({ headers, children }) {
  return (
    <div className="overflow-x-auto w-full rounded-xl border border-white/5">
      <table className="w-full text-left border-collapse">
        <thead style={{ background: "#0f1117" }} className="border-b border-white/5">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-teks-redup">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-sm text-teks">
          {children}
        </tbody>
      </table>
    </div>
  );
}