export default function Register() {
    const inputClass = "w-full px-4 py-2.5 rounded-xl text-sm border border-white/5 outline-none text-gray-200 placeholder-gray-600";
    const inputBg = { background:"#1a1d27" };
    return (
        <div>
            <h2 className="text-lg font-bold text-white mb-1">Buat Akun Baru</h2>
            <p className="text-xs mb-6" style={{ color:"#6b7280" }}>Daftarkan akun CRM RevDrive</p>
            <form className="space-y-4">
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color:"#9ca3af" }}>Email</label>
                    <input type="email" className={inputClass} style={inputBg} placeholder="email@revdrive.com" />
                </div>
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color:"#9ca3af" }}>Password</label>
                    <input type="password" className={inputClass} style={inputBg} placeholder="********" />
                </div>
                <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color:"#9ca3af" }}>Konfirmasi Password</label>
                    <input type="password" className={inputClass} style={inputBg} placeholder="********" />
                </div>
                <button type="submit" className="w-full py-2.5 rounded-xl font-bold text-sm text-white"
                    style={{ background:"linear-gradient(135deg,#f97316,#ea580c)" }}>Daftar</button>
            </form>
        </div>
    );
}