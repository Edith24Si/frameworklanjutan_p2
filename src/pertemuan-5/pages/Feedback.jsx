import PageHeader from "../components/PageHeader";

export default function Feedback() {
    return (
        <div className="p-6">
            <PageHeader title="Feedback & Rating" breadcrumb={["Feedback"]} />
            <div className="rounded-2xl p-6 border border-white/5 text-center" style={{ background: "#1a1d27" }}>
                <p className="text-4xl mb-3">💬</p>
                <p className="font-bold text-white">Feedback Pelanggan</p>
                <p className="text-sm mt-1" style={{ color: "#6b7280" }}>Halaman ini menampilkan ulasan dan rating pelanggan.</p>
            </div>
        </div>
    );
}