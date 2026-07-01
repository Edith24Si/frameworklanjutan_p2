import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuWrench, LuUsers, LuCalendarCheck, LuPackage, LuChevronRight, LuChevronDown, LuStar } from "react-icons/lu";

export default function Landing() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

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

    const testimonials = [
        {
            name: "Budi Hartono",
            role: "Pemilik Bengkel Maju Jaya, Pekanbaru",
            text: "RevDrive benar-benar mengubah cara saya mengelola bengkel. Sekarang saya bisa pantau semua dari HP tanpa harus selalu di tempat.",
        },
        {
            name: "Sari Dewi",
            role: "Manajer Operasional Auto Prima, Medan",
            text: "Fitur booking online-nya luar biasa. Antrian lebih teratur dan pelanggan tidak perlu menunggu lama. Omzet naik 30% dalam 3 bulan.",
        },
        {
            name: "Rizky Pratama",
            role: "Pemilik bengkel RizkyMotor, Batam",
            text: "Inventory management-nya sangat membantu. Tidak ada lagi stok suku cadang yang tiba-tiba habis saat dibutuhkan pelanggan.",
        },
    ];

    const faqs = [
        {
            q: "Apakah RevDrive gratis untuk digunakan?",
            a: "RevDrive menyediakan paket gratis untuk bengkel dengan kapasitas terbatas. Untuk fitur lengkap dan kapasitas tidak terbatas, tersedia paket premium dengan harga terjangkau.",
        },
        {
            q: "Apakah data bengkel saya aman?",
            a: "Seluruh data disimpan dengan enkripsi tingkat tinggi di server yang aman. Kami tidak pernah membagikan data pelanggan kepada pihak ketiga.",
        },
        {
            q: "Bagaimana cara memulai menggunakan RevDrive?",
            a: "Cukup daftar akun, isi profil bengkel, dan langsung mulai gunakan semua fitur. Proses setup hanya butuh waktu kurang dari 5 menit.",
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

            {/* HOW IT WORKS SECTION */}
            <section className="px-8 py-16 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-3">Cara Kerja</h2>
                <p className="text-center mb-12" style={{ color: "#9ca3af" }}>
                    Mulai gunakan RevDrive dalam 3 langkah mudah
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { step: "01", title: "Daftar Akun", desc: "Buat akun bengkel kamu dalam hitungan menit. Tidak perlu kartu kredit." },
                        { step: "02", title: "Setup Bengkel", desc: "Masukkan data bengkel, tambahkan mekanik, dan atur jadwal operasional." },
                        { step: "03", title: "Mulai Kelola", desc: "Terima booking, kelola pelanggan, dan pantau inventory dari satu dashboard." },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 font-black text-2xl"
                                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)", color: "#fff" }}>
                                {item.step}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* STATS SECTION */}
            <section className="px-8 py-16 mx-8 rounded-3xl mb-8"
                style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    Dipercaya oleh Bengkel di Seluruh Indonesia
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[
                        { value: "500+", label: "Bengkel Aktif" },
                        { value: "12.000+", label: "Pelanggan Terdaftar" },
                        { value: "98%", label: "Tingkat Kepuasan" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-5xl font-black text-white mb-2">{stat.value}</p>
                            <p className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>{stat.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* TESTIMONIAL SECTION */}
            <section className="px-8 py-16 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-3">Kata Mereka</h2>
                <p className="text-center mb-12" style={{ color: "#9ca3af" }}>
                    Bergabung bersama ratusan bengkel yang sudah merasakan manfaatnya
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div key={i} className="p-6 rounded-2xl border"
                            style={{ background: "#1a1d27", borderColor: "#ffffff10" }}>
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, j) => (
                                    <LuStar key={j} size={14} style={{ color: "#f97316" }} fill="#f97316" />
                                ))}
                            </div>
                            <p className="text-sm leading-relaxed mb-4 italic" style={{ color: "#d1d5db" }}>
                                "{t.text}"
                            </p>
                            <div>
                                <p className="text-sm font-bold text-white">{t.name}</p>
                                <p className="text-xs mt-0.5" style={{ color: "#6b7280" }}>{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="px-8 py-16 max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-3">Pertanyaan Umum</h2>
                <p className="text-center mb-12" style={{ color: "#9ca3af" }}>
                    Ada pertanyaan? Kami punya jawabannya
                </p>
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div key={i} className="rounded-2xl border overflow-hidden"
                            style={{ background: "#1a1d27", borderColor: "#ffffff10" }}>
                            <button
                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-4 text-left"
                            >
                                <span className="text-sm font-semibold text-white">{faq.q}</span>
                                <LuChevronDown
                                    size={16}
                                    style={{
                                        color: "#f97316",
                                        transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.2s"
                                    }} />
                            </button>
                            {openFaq === i && (
                                <div className="px-6 pb-5">
                                    <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA BOTTOM SECTION */}
            <section className="px-8 py-20 mx-8 rounded-3xl mb-16 text-center"
                style={{ background: "#1a1d27", border: "1px solid #ffffff10" }}>
                <h2 className="text-4xl font-black text-white mb-4">
                    Siap Kelola Bengkel<br />
                    <span style={{ color: "#f97316" }}>Lebih Profesional?</span>
                </h2>
                <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#9ca3af" }}>
                    Bergabung sekarang dan rasakan kemudahan mengelola bengkel dengan teknologi digital terkini.
                </p>
                <button
                    onClick={() => navigate("/register")}
                    className="flex items-center gap-2 px-10 py-4 rounded-xl font-bold text-white mx-auto transition-all hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                    Daftar Sekarang — Gratis <LuChevronRight size={18} />
                </button>
            </section>

            {/* FOOTER */}
            <footer className="px-8 py-10 border-t" style={{ borderColor: "#ffffff10" }}>
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                            <LuWrench size={15} className="text-white" />
                        </div>
                        <span className="font-black text-lg text-white tracking-tight">
                            RevDrive<span style={{ color: "#f97316" }}>.</span>
                        </span>
                    </div>
                    <div className="flex gap-6 text-sm" style={{ color: "#6b7280" }}>
                        <span className="cursor-pointer hover:text-orange-400 transition">Fitur</span>
                        <span className="cursor-pointer hover:text-orange-400 transition">Tentang</span>
                        <span className="cursor-pointer hover:text-orange-400 transition">Kontak</span>
                    </div>
                    <p className="text-xs" style={{ color: "#4b5563" }}>
                        © 2026 RevDrive AutoSolution. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
}