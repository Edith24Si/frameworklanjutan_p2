import PageHeader from "../components/PageHeader";
export default function Kendaraan() {
    return (
        <div className="p-6">
            <PageHeader title="Data Kendaraan" breadcrumb={["Kendaraan"]}>
                <button className="px-4 py-2 rounded-xl text-sm font-bold text-white"
                    style={{ background:"linear-gradient(135deg,#f97316,#ea580c)" }}>
                    + Tambah Kendaraan
                </button>
            </PageHeader>
            <div className="rounded-2xl p-10 border border-white/5 text-center" style={{ background:"#1a1d27" }}>
                <p className="text-5xl mb-3">🚗</p>
                <p className="font-bold text-white text-lg">Data Kendaraan</p>
                <p className="text-sm mt-1" style={{ color:"#6b7280" }}>Daftar kendaraan pelanggan bengkel.</p>
            </div>
        </div>
    );
}