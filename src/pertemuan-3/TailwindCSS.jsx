import React from 'react';

export default function TailwindCSS() {
    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            {/* --- BAGIAN KREASI BARU & GRADASI LATAR BELAKANG --- */}
            {/* Gradasi yang diminta diterapkan di sini */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-16 rounded-3xl mb-16 shadow-inner relative overflow-hidden">
                {/* Efek dekoratif lingkaran latar belakang yang samar */}
                <div className="absolute top-0 left-0 w-60 h-60 bg-white/10 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/10 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
                
                <div className="relative z-10">
                    <h2 className="text-4xl font-extrabold text-center text-white mb-10">
                        ✨ Kreasi Komponen Gabungan ✨
                    </h2>
                    {/* Komponen kartu profil baru yang disesuaikan tema */}
                    <ModernProfileCardOnTheme />
                </div>
            </div>

            <hr className="border-gray-300 mb-10" />

            {/* --- BAGIAN KODE ORIGINAL --- */}
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                📦 Koleksi Komponen Dasar (Original)
            </h2>
            
            {/* Penataan grid untuk komponen-komponen asli */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                
                {/* Kolom 1 */}
                <div className="flex flex-col space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                        {/* Kode H1 (diperbaiki menjadi className) dan Button bawaanmu */}
                        <h1 className="border border-gray-300 p-2 rounded text-center m-4 w-full font-semibold text-gray-700">
                            Belajar Tailwind CSS 4
                        </h1>
                        <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-4 py-2 rounded w-full">
                            Click Me
                        </button>
                    </div>
                    <Spacing />
                </div>

                {/* Kolom 2 */}
                <div className="flex flex-col space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <Typography />
                        <div className="mt-6 border-t pt-4 flex justify-center">
                            <BorderRadius />
                        </div>
                    </div>
                </div>

                {/* Kolom 3 */}
                <div className="flex flex-col space-y-6">
                    <BackgroundColors />
                    <ShadowEffects />
                </div>

            </div>

            {/* Navbar originalmu saya taruh di bawah sebagai Footer/Bottom Bar */}
            <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-700">
                <FlexboxGrid />
            </div>
        </div>
    );
}

// ==========================================
// 🚀 KOMPONEN BARU YANG DISESUAIKAN TEMA
// ==========================================
function ModernProfileCardOnTheme() {
    return (
        /* Menggunakan Spacing, Radius besar, Shadow, dan Transisi */
        <div className="max-w-sm mx-auto bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden border border-gray-100">
            
            {/* Menggunakan gradasi tema baru yang serasi */}
            <div className="bg-gradient-to-r from-green-400 to-blue-500 p-8 flex justify-center items-center h-32 relative">
                
                {/* Avatar yang menonjol di tengah gradasi */}
                <div className="absolute -bottom-12 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-white">
                    <span className="text-4xl">🧑‍💻</span>
                </div>
            </div>
            
            {/* Konten teks kartu */}
            <div className="pt-16 pb-8 px-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800">Tailwind Master</h3>
                {/* Warna teks penanda hijau agar serasi */}
                <p className="text-green-600 font-medium text-sm mb-3">Front-End Developer</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                    Kartu ini menggabungkan semua materi menjadi satu kesatuan yang elegan, menggunakan tema gradasi baru: <span className="font-mono bg-gray-100 px-1 py-0.5 rounded text-gray-700">from-green-400 to-blue-500</span>!
                </p>
                
                {/* Flexbox untuk tombol aksi */}
                <div className="mt-6 flex justify-center space-x-3">
                    {/* Tombol Follow disesuaikan menjadi hijau */}
                    <button className="bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 hover:shadow-lg transition text-sm font-semibold">
                        Follow
                    </button>
                    {/* Tombol Message dengan border hijau saat hover */}
                    <button className="border-2 border-gray-200 text-gray-700 px-5 py-2 rounded-full hover:border-green-500 hover:text-green-500 transition text-sm font-semibold">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
}

// ==========================================
// 📦 KODE ORIGINAL (TIDAK ADA YANG DIHAPUS)
// ==========================================

function Spacing() {
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">Card Title</h2>
            <p className="mt-2 text-gray-600">Ini adalah contoh penggunaan padding dan margin di Tailwind.</p>
        </div>
    )
}

function Typography() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius() {
    return (
        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
            Klik Saya
        </button>
    )
}

function BackgroundColors() {
    return (
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function FlexboxGrid() {
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white items-center">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>
                <li><a href="#" className="hover:text-blue-300 transition">About</a></li>
                <li><a href="#" className="hover:text-blue-300 transition">Contact</a></li>
            </ul>
        </nav>
    )
}

function ShadowEffects() {
    return (
        <div className="bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition cursor-pointer border border-transparent hover:border-blue-100">
            <h3 className="text-xl font-semibold text-blue-600">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}