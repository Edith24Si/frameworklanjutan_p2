export default function Forgot() {
    const inputClass = "w-full px-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none text-gray-200 placeholder-gray-600";
    return (
        <div>
            <h2 className="text-lg font-bold text-white mb-1">Lupa Password?</h2>
            <p className="text-xs mb-6" style={{ color:"#6b7280" }}>
                Masukkan email untuk mendapatkan link reset password.
            </p>
            <form className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color:"#9ca3af" }}>Email</label>
                    <input type="email" className={inputClass} style={{ background:"#1a1d27" }} placeholder="email@revdrive.com" />
                </div>
                <button type="submit" className="w-full py-2.5 rounded-xl font-bold text-sm text-white"
                    style={{ background:"linear-gradient(135deg,#f97316,#ea580c)" }}>
                    Kirim Link Reset
                </button>
            </form>
        </div>
    );
}