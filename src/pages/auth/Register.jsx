import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuUser, LuLock, LuUserPlus, LuCircleAlert } from "react-icons/lu";
import { usersAPI } from "../../services/usersAPI";

export default function Register() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        username: "",
        password: "",
        konfirmasi: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!form.username || !form.password || !form.konfirmasi) {
            setError("Semua field wajib diisi!");
            return;
        }

        if (form.password !== form.konfirmasi) {
            setError("Password dan konfirmasi password tidak sama!");
            return;
        }

        if (form.password.length < 6) {
            setError("Password minimal 6 karakter!");
            return;
        }

        try {
            setLoading(true);

            // Simpan ke Supabase
            await usersAPI.registerUser({
                username: form.username,
                password: form.password,
            });

            setSuccess(true);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
        } catch (err) {
            setError(
                err.response?.data?.message || "Gagal mendaftar, coba lagi."
            );
        } finally {
            setLoading(false);
        }
    };

    const inputClass = "w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none focus:border-orange-500/50 text-gray-200 placeholder-gray-600 transition-colors";
    const inputBg = { background: "#1a1d27" };

    return (
        <div>
            <h2 className="text-lg font-bold text-white mb-1">Buat Akun Baru</h2>
            <p className="text-xs mb-6" style={{ color: "#6b7280" }}>
                Daftarkan akun CRM RevDrive AutoSolution
            </p>

            {/* Error */}
            {error && (
                <div className="flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm text-red-400 border border-red-500/20"
                    style={{ background: "rgba(239,68,68,0.05)" }}>
                    <LuCircleAlert size={15} /> {error}
                </div>
            )}

            {/* Success */}
            {success && (
                <div className="flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm text-green-400 border border-green-500/20"
                    style={{ background: "rgba(34,197,94,0.05)" }}>
                    ✅ Registrasi berhasil! Mengarahkan ke halaman login...
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Username */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#9ca3af" }}>Username</label>
                    <div className="relative">
                        <LuUser className="absolute left-3 top-1/2 -translate-y-1/2"
                            size={15} style={{ color: "#4b5563" }} />
                        <input
                            type="text"
                            name="username"
                            className={inputClass}
                            style={inputBg}
                            placeholder="Masukkan username"
                            value={form.username}
                            onChange={handleChange} />
                    </div>
                </div>

                {/* Password */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#9ca3af" }}>Password</label>
                    <div className="relative">
                        <LuLock className="absolute left-3 top-1/2 -translate-y-1/2"
                            size={15} style={{ color: "#4b5563" }} />
                        <input
                            type="password"
                            name="password"
                            className={inputClass}
                            style={inputBg}
                            placeholder="Minimal 6 karakter"
                            value={form.password}
                            onChange={handleChange} />
                    </div>
                </div>

                {/* Konfirmasi Password */}
                <div>
                    <label className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#9ca3af" }}>Konfirmasi Password</label>
                    <div className="relative">
                        <LuLock className="absolute left-3 top-1/2 -translate-y-1/2"
                            size={15} style={{ color: "#4b5563" }} />
                        <input
                            type="password"
                            name="konfirmasi"
                            className={inputClass}
                            style={inputBg}
                            placeholder="Ulangi password"
                            value={form.konfirmasi}
                            onChange={handleChange} />
                    </div>
                </div>

                <button type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-white disabled:opacity-50"
                    style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                    <LuUserPlus size={15} /> {loading ? "Mendaftarkan..." : "Daftar"}
                </button>

                <p className="text-center text-xs" style={{ color: "#4b5563" }}>
                    Sudah punya akun?{" "}
                    <span className="cursor-pointer font-semibold"
                        style={{ color: "#f97316" }}
                        onClick={() => navigate("/login")}>
                        Login di sini
                    </span>
                </p>
            </form>
        </div>
    );
}