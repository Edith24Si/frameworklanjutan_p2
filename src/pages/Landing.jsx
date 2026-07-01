import { useNavigate } from "react-router-dom";
import { LuWrench, LuUsers, LuCalendarCheck, LuPackage, LuChevronRight } from "react-icons/lu";

export default function Landing() {
    const navigate = useNavigate();

    const features = [
        {
            icon: LuUsers,
            title: "Manajemen Pelanggan",
            desc: "Kelola data pelanggan bengkel secara terpusat. Simpan riwayat servis dan informasi kendaraan dalam satu sistem.",
        },
        {
            icon: LuCalendarCheck,
            title: "Booking & Jadwal Servis",
            desc: "Terima reservasi online dari pelanggan dan atur jadwal servis tanpa bentrok secara otomatis.",
        },
        {
            icon: LuPackage,
            title: "Manajemen Inventory",
            desc: "Pantau stok suku cadang secara real-time. Dapatkan notifikasi otomatis saat stok hampir habis.",
        },
    ];

    return (
        <div className="min-h-screen" style={{ background: "#0f1117", color: "#f9fafb" }}>

            {/* NAVBAR */}
            <nav className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "#ffffff10" }}>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                        <LuWrench size={18} className="text-white" />
                    </div>
                    <span className="font-black text-xl text-white tracking-tight">
                        RevDrive<span style={{ color: "#f97316" }}>.</span>
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    <span className="text-sm cursor-pointer hover:text-orange-400 transition" style={{ color: "#9ca3af" }}>Fitur</span>
                    <span className="text-sm cursor-pointer hover:text-orange-400 transition" style={{ color: "#9ca3af" }}>Tentang</span>
                    <button
                        onClick={() => navigate("/login")}
                        className="text-sm font-semibold px-5 py-2 rounded-xl border transition hover:border-orange-500"
                        style={{ borderColor: "#ffffff20", color: "#f9fafb" }}>
                        Masuk
                    </button>
                </div>
            </nav>

            {/* HERO SECTION */}
            <section className="flex flex-col items-center text-center px-8 py-24 max-w-4xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
                    style={{ background: "rgba(249,115,22,0.1)", color: "#f97316" }}>
                    Sistem CRM Bengkel Otomotif
                </span>
                <h1 className="text-5xl font-black text-white leading-tight mb-6">
                    Kelola Bengkel Lebih<br />
                    <span style={{ color: "#f97316" }}>Cerdas & Efisien</span>
                </h1>
                <p className="text-lg mb-10 max-w-xl" style={{ color: "#9ca3af" }}>
                    RevDrive AutoSolution membantu pemilik bengkel mengelola pelanggan, jadwal servis, dan inventory dalam satu platform digital yang terintegrasi.
                </p>
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate("/register")}
                        className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                        Mulai Sekarang <LuChevronRight size={18} />
                    </button>
                    <button
                        onClick={() => navigate("/login")}
                        className="px-8 py-3 rounded-xl font-bold transition border hover:border-orange-500"
                        style={{ borderColor: "#ffffff20", color: "#f9fafb" }}>
                        Masuk
                    </button>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="px-8 py-16 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-3">Fitur Unggulan</h2>
                <p className="text-center mb-12" style={{ color: "#9ca3af" }}>
                    Semua yang kamu butuhkan untuk mengelola bengkel dalam satu sistem
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <div key={i}
                            className="p-6 rounded-2xl border transition hover:border-orange-500/40"
                            style={{ background: "#1a1d27", borderColor: "#ffffff10" }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                                style={{ background: "rgba(249,115,22,0.1)" }}>
                                <f.icon size={22} style={{ color: "#f97316" }} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
}