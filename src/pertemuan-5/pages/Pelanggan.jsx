import PageHeader from "../components/PageHeader";
import { useState } from "react";

const pelangganData = Array.from({ length: 30 }, (_, i) => ({
    id: `CUST-${String(i + 1).padStart(3, "0")}`,
    nama: ["Budi Santoso","Rina Marlina","Denny Kurniawan","Sari Dewi","Agus Prayitno",
           "Melani Putri","Hendra Wijaya","Farah Nabila","Rizky Pratama","Nisa Aulia"][i % 10],
    email: `user${i + 1}@gmail.com`,
    noHp: `0812${String(10000000 + i).slice(0, 8)}`,
    loyalty: i % 3 === 0 ? "Gold" : i % 3 === 1 ? "Silver" : "Bronze",
}));

export default function Pelanggan() {
    const [data, setData] = useState(pelangganData);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ nama: "", email: "", noHp: "", loyalty: "Bronze" });

    const handleSave = (e) => {
        e.preventDefault();
        if (!form.nama || !form.email) return alert("Nama dan email wajib diisi!");
        const newItem = {
            id: `CUST-${String(data.length + 1).padStart(3, "0")}`,
            ...form
        };
        setData([newItem, ...data]);
        setShowForm(false);
        setForm({ nama: "", email: "", noHp: "", loyalty: "Bronze" });
    };

    const loyaltyStyle = {
        Gold:   "background: rgba(249,115,22,0.2); color: #f97316;",
        Silver: "background: rgba(99,102,241,0.2); color: #818cf8;",
        Bronze: "background: rgba(107,114,128,0.2); color: #9ca3af;",
    };

    return (
        <div className="p-6 space-y-5">
            <PageHeader
                title="Data Pelanggan"
                breadcrumb={["Pelanggan"]}>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all"
                    style={{ background: showForm ? "#ef4444" : "linear-gradient(135deg,#f97316,#ea580c)" }}>
                    {showForm ? "Batal" : "+ Tambah Pelanggan"}
                </button>
            </PageHeader>

            {/* Form */}
            {showForm && (
                <div className="rounded-2xl p-6 border border-white/5" style={{ background: "#1a1d27" }}>
                    <h3 className="font-bold text-white mb-4">Tambah Pelanggan Baru</h3>
                    <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { key: "nama",  label: "Nama Lengkap", placeholder: "Nama pelanggan" },
                            { key: "email", label: "Email",        placeholder: "email@gmail.com" },
                            { key: "noHp",  label: "No HP",        placeholder: "08xxxxxxxxxx" },
                        ].map(f => (
                            <div key={f.key}>
                                <label className="block text-xs font-semibold mb-1.5" style={{ color: "#9ca3af" }}>{f.label}</label>
                                <input type="text" placeholder={f.placeholder}
                                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none text-gray-200 placeholder-gray-600"
                                    style={{ background: "#13161f" }}
                                    value={form[f.key]}
                                    onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
                            </div>
                        ))}
                        <div>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color: "#9ca3af" }}>Loyalty</label>
                            <select className="w-full px-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none text-gray-200"
                                style={{ background: "#13161f" }}
                                value={form.loyalty}
                                onChange={e => setForm({ ...form, loyalty: e.target.value })}>
                                <option>Bronze</option>
                                <option>Silver</option>
                                <option>Gold</option>
                            </select>
                        </div>
                        <button type="submit"
                            className="md:col-span-2 py-2.5 rounded-xl font-bold text-white text-sm"
                            style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                            Simpan Pelanggan
                        </button>
                    </form>
                </div>
            )}

            {/* Tabel */}
            <div className="rounded-2xl border border-white/5 overflow-hidden" style={{ background: "#1a1d27" }}>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ background: "#13161f" }}>
                            <tr>
                                {["No","ID","Nama","Email","No HP","Loyalty"].map(h => (
                                    <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider" style={{ color: "#4b5563" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {data.map((d, i) => (
                                <tr key={d.id} className="hover:bg-white/2 transition-colors">
                                    <td className="px-4 py-3 text-sm" style={{ color: "#6b7280" }}>{i + 1}</td>
                                    <td className="px-4 py-3 text-xs font-mono font-bold" style={{ color: "#f97316" }}>{d.id}</td>
                                    <td className="px-4 py-3 text-sm font-semibold text-white">{d.nama}</td>
                                    <td className="px-4 py-3 text-sm" style={{ color: "#9ca3af" }}>{d.email}</td>
                                    <td className="px-4 py-3 text-sm" style={{ color: "#9ca3af" }}>{d.noHp}</td>
                                    <td className="px-4 py-3">
                                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold"
                                            style={{
                                                background: d.loyalty === "Gold" ? "rgba(249,115,22,0.2)" : d.loyalty === "Silver" ? "rgba(99,102,241,0.2)" : "rgba(107,114,128,0.2)",
                                                color: d.loyalty === "Gold" ? "#f97316" : d.loyalty === "Silver" ? "#818cf8" : "#9ca3af"
                                            }}>
                                            {d.loyalty}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}