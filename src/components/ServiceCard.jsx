import Card from "./Card";
import Badge from "./Badge";

export default function ServiceCard({ platNomor, pemilik, tipeMobil, statusServis, mekanik }) {
  const statusType = statusServis === "Selesai" ? "success" : statusServis === "Dikerjakan" ? "warning" : "primary";

  return (
    <Card>
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded border border-white/10 font-bold text-orange">
            {platNomor}
          </span>
          <h4 className="text-base font-bold text-white mt-2">{pemilik}</h4>
        </div>
        <Badge type={statusType}>{statusServis}</Badge>
      </div>
      <p className="text-xs text-teks-redup">Unit: <span className="text-white font-medium">{tipeMobil}</span></p>
      <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-xs">
        <span className="text-teks-redup">Mekanik:</span>
        <span className="font-semibold text-white">{mekanik}</span>
      </div>
    </Card>
  );
}