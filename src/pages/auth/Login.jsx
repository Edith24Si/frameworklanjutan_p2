import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuUser, LuLock, LuLogIn, LuCircleAlert } from "react-icons/lu";
import { ImSpinner2 } from "react-icons/im";
import axios from "axios";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [dataForm, setDataForm] = useState({ email: "", password: "" });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({ ...dataForm, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!dataForm.email || !dataForm.password) {
            setError("Username dan password wajib diisi!");
            return;
        }

        // Cek dulu dari localStorage (akun Register lokal)
        const regUsername = localStorage.getItem("reg_username");
        const regPassword = localStorage.getItem("reg_password");

        if (
            dataForm.email === regUsername &&
            dataForm.password === regPassword
        ) {
            // Login pakai akun lokal berhasil
            navigate("/");
            return;
        }

        // Kalau bukan akun lokal → coba login ke API
        setLoading(true);

        axios
            .post("https://dummyjson.com/user/login", {
                username: dataForm.email,
                password: dataForm.password,
            })
            .then((response) => {
                if (response.status !== 200) {
                    setError(response.data.message);
                    return;
                }
                navigate("/");
            })
            .catch((err) => {
                if (err.response) {
                    setError(err.response.data.message || "Username atau password salah!");
                } else {
                    setError(err.message || "Terjadi kesalahan, coba lagi.");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const inputClass = "w-full pl-10 pr-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none focus:border-orange-500/50 text-gray-200 placeholder-gray-600 transition-colors";
    const inputBg = { background: "#1a1d27" };

    return (
        <div>
            <h2 className="text-lg font-bold text-white mb-1">Selamat Datang Kembali</h2>
            <p className="text-xs mb-6" style={{ color: "#6b7280" }}>
                Masuk ke sistem CRM RevDrive AutoSolution
            </p>

            {error && (
                <div className="flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm text-red-400 border border-red-500/20"
                    style={{ background: "rgba(239,68,68,0.05)" }}>
                    <LuCircleAlert size={15} /> {error}
                </div>
            )}

            {loading && (
                <div className="flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm text-orange-400 border border-orange-500/20"
                    style={{ background: "rgba(249,115,22,0.05)" }}>
                    <ImSpinner2 className="animate-spin" size={15} /> Memverifikasi...
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#9ca3af" }}>Username</label>
                    <div className="relative">
                        <LuUser className="absolute left-3 top-1/2 -translate-y-1/2"
                            size={15} style={{ color: "#4b5563" }} />
                        <input type="text" name="email"
                            className={inputClass} style={inputBg}
                            placeholder="Masukkan username"
                            value={dataForm.email}
                            onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-semibold mb-1.5"
                        style={{ color: "#9ca3af" }}>Password</label>
                    <div className="relative">
                        <LuLock className="absolute left-3 top-1/2 -translate-y-1/2"
                            size={15} style={{ color: "#4b5563" }} />
                        <input type="password" name="password"
                            className={inputClass} style={inputBg}
                            placeholder="Masukkan password"
                            value={dataForm.password}
                            onChange={handleChange} />
                    </div>
                </div>

                <p className="text-[11px]" style={{ color: "#4b5563" }}>
                    Demo API: <span className="font-mono" style={{ color: "#f97316" }}>emilys</span> / <span className="font-mono" style={{ color: "#f97316" }}>emilyspass</span>
                </p>

                <button type="submit"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-sm text-white transition-all"
                    style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                    <LuLogIn size={15} /> Masuk
                </button>

                <p className="text-center text-xs" style={{ color: "#4b5563" }}>
                    Belum punya akun?{" "}
                    <span className="cursor-pointer font-semibold"
                        style={{ color: "#f97316" }}
                        onClick={() => navigate("/register")}>
                        Daftar di sini
                    </span>
                </p>
            </form>
        </div>
    );
}