import PageHeader from "../components/PageHeader";
export default function Feedback() {
    return (
        <div className="p-6">
            <PageHeader title="Feedback & Rating" breadcrumb={["Feedback"]} />
            <div className="rounded-2xl p-10 border border-white/5 text-center" style={{ background:"#1a1d27" }}>
                <p className="text-5xl mb-3">💬</p>
                <p className="font-bold text-white text-lg">Feedback Pelanggan</p>
                <p className="text-sm mt-1" style={{ color:"#6b7280" }}>Ulasan dan rating dari pelanggan.</p>
            </div>
        </div>
    );
}