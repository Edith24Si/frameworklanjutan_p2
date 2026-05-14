import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function PelangganDetail() {
    const { id } = useParams(); // Mengambil ID dari URL
    const navigate = useNavigate();

    return (
        <div className="p-6 space-y-5 text-white">
            <PageHeader title={`Detail: ${id}`} breadcrumb={["Pelanggan", "Detail"]} />
            
            <div className="rounded-2xl p-8 border border-white/5" style={{ background: "#1a1d27" }}>
                <button onClick={() => navigate(-1)} className="text-sm text-gray-400 hover:text-orange-500 mb-6 transition-colors">
                    ← Kembali ke Daftar
                </button>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs text-gray-500 uppercase font-bold tracking-widest">ID Pelanggan</label>
                            <p className="text-xl font-mono text-orange-500 font-bold">{id}</p>
                        </div>
                        <div>
                            <label className="block text-xs text-gray-500 uppercase font-bold tracking-widest">Status Loyalty</label>
                            <span className="inline-block mt-1 px-3 py-1 rounded-full bg-orange-500/20 text-orange-500 text-xs font-bold">Verified Member</span>
                        </div>
                    </div>
                    
                    <div className="p-6 rounded-xl bg-[#13161f] border border-white/5">
                        <p className="text-sm text-gray-400 italic">
                            "Halaman ini membuktikan implementasi **Dynamic Route** dengan parameter ID `{id}` berhasil dijalankan."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}