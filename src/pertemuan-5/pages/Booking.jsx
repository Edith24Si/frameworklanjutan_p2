import PageHeader from "../components/PageHeader";
import { useState } from "react";

const bookingData = Array.from({ length: 30 }, (_, i) => ({
    id: `ORD-${String(i + 1).padStart(3, "0")}`,
    pelanggan: ["Budi Santoso","Rina Marlina","Denny Kurniawan","Sari Dewi","Agus Prayitno"][i % 5],
    layanan: ["Ganti Oli","Tune Up","Ganti Ban","Servis AC","Ganti Aki"][i % 5],
    status: i % 3 === 0 ? "Selesai" : i % 3 === 1 ? "Dikerjakan" : "Terjadwal",
    totalBiaya: (Math.floor(Math.random() * 50) + 10) * 10000,
    tanggal: `2026-04-${String((i % 28) + 1).padStart(2, "0")}`,
}));

export default function Booking() {
    const [data, setData] = useState(bookingData);
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ pelanggan: "", layanan: "", status: "Terjadwal", totalBiaya: "", tanggal: "" });

    const handleSave = (e) => {
        e.preventDefault();
        if (!form.pelanggan) return alert("Nama pelanggan wajib diisi!");
        setData([{
            id: `ORD-${String(data.length + 1).padStart(3, "0")}`,
            ...form,
            totalBiaya: parseInt(form.totalBiaya) || 0
        }, ...data]);
        setShowForm(false);
        setForm({ pelanggan: "", layanan: "", status: "Terjadwal", totalBiaya: "", tanggal: "" });
    };

    const statusStyle = (s) => ({
        background: s === "Selesai" ? "rgba(34,197,94,0.2)" : s === "Dikerjakan" ? "rgba(249,115,22,0.2)" : "rgba(59,130,246,0.2)",
        color: s === "Selesai" ? "#22c55e" : s === "Dikerjakan" ? "#f97316" : "#60a5fa",
    });

    return (
        <div className="p-6 space-y-5">
            <PageHeader title="Booking & Jadwal" breadcrumb={["Booking"]}>
                <button onClick={() => setShowForm(!showForm)}
                    className="px-4 py-2 rounded-xl text-sm font-bold text-white"
                    style={{ background: showForm ? "#ef4444" : "linear-gradient(135deg,#f97316,#ea580c)" }}>
                    {showForm ? "Batal" : "+ Tambah Booking"}
                </button>
            </PageHeader>

            {showForm && (
                <div className="rounded-2xl p-6 border border-white/5" style={{ background: "#1a1d27" }}>
                    <h3 className="font-bold text-white mb-4">Tambah Booking Baru</h3>
                    <form onSubmit={handleSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { key: "pelanggan", label: "Nama Pelanggan", placeholder: "Nama pelanggan" },
                            { key: "layanan",   label: "Layanan",        placeholder: "Ganti Oli, Tune Up..." },
                            { key: "totalBiaya",label: "Total Biaya",    placeholder: "150000" },
                            { key: "tanggal",   label: "Tanggal",        placeholder: "", type: "date" },
                        ].map(f => (
                            <div key={f.key}>
                                <label className="block text-xs font-semibold mb-1.5" style={{ color: "#9ca3af" }}>{f.label}</label>
                                <input type={f.type || "text"} placeholder={f.placeholder}
                                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none text-gray-200 placeholder-gray-600"
                                    style={{ background: "#13161f" }}
                                    value={form[f.key]}
                                    onChange={e => setForm({ ...form, [f.key]: e.target.value })} />
                            </div>
                        ))}
                        <div>
                            <label className="block text-xs font-semibold mb-1.5" style={{ color: "#9ca3af" }}>Status</label>
                            <select className="w-full px-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none text-gray-200"
                                style={{ background: "#13161f" }}
                                value={form.status}
                                onChange={e => setForm({ ...form, status: e.target.value })}>
                                <option>Terjadwal</option>
                                <option>Dikerjakan</option>
                                <option>Selesai</option>
                            </select>
                        </div>
                        <button type="submit"
                            className="md:col-span-2 py-2.5 rounded-xl font-bold text-white text-sm"
                            style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}>
                            Simpan Booking
                        </button>
                    </form>
                </div>
            )}

            <div className="rounded-2xl border border-white/5 overflow-hidden" style={{ background: "#1a1d27" }}>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead style={{ background: "#13161f" }}>
                            <tr>
                                {["No","ID","Pelanggan","Layanan","Status","Total Biaya","Tanggal"].map(h => (
                                    <th key={h} className="px-4 py-3 text-left text-[10px] font-bold uppercase tracking-wider" style={{ color: "#4b5563" }}>{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {data.map((d, i) => (
                                <tr key={d.id} className="hover:bg-white/2 transition-colors">
                                    <td className="px-4 py-3 text-sm" style={{ color: "#6b7280" }}>{i + 1}</td>
                                    <td className="px-4 py-3 text-xs font-mono font-bold" style={{ color: "#f97316" }}>{d.id}</td>
                                    <td className="px-4 py-3 text-sm font-semibold text-white">{d.pelanggan}</td>
                                    <td className="px-4 py-3 text-sm" style={{ color: "#9ca3af" }}>{d.layanan}</td>
                                    <td className="px-4 py-3">
                                        <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold" style={statusStyle(d.status)}>
                                            {d.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm font-bold" style={{ color: "#e5e7eb" }}>
                                        Rp {d.totalBiaya.toLocaleString("id-ID")}
                                    </td>
                                    <td className="px-4 py-3 text-xs" style={{ color: "#6b7280" }}>{d.tanggal}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}