import { useState, useEffect } from "react";
import { LuPencil, LuTrash2, LuCircleAlert } from "react-icons/lu";
import { ImSpinner2 } from "react-icons/im";
import { usersAPI } from "../services/usersAPI";
import Table from "../components/Table";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // State untuk form edit
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({ username: "", password: "" });

    // Ambil data saat halaman pertama dibuka
    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            setLoading(true);
            setError("");
            const data = await usersAPI.fetchUsers();
            setUsers(data);
        } catch (err) {
            setError("Gagal memuat data user");
        } finally {
            setLoading(false);
        }
    };

    // Mulai mode edit untuk satu baris
    const handleEditClick = (user) => {
        setEditingId(user.id);
        setEditForm({ username: user.username, password: user.password });
    };

    const handleEditChange = (e) => {
        setEditForm({ ...editForm, [e.target.name]: e.target.value });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setEditForm({ username: "", password: "" });
    };

    // Simpan perubahan edit
    const handleSaveEdit = async (id) => {
        try {
            setLoading(true);
            setError("");
            await usersAPI.updateUser(id, editForm);
            setSuccess("Data user berhasil diperbarui!");
            setEditingId(null);
            loadUsers();
            setTimeout(() => setSuccess(""), 3000);
        } catch (err) {
            setError(`Gagal memperbarui: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    // Hapus user
    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus user ini?");
        if (!konfirmasi) return;

        try {
            setLoading(true);
            setError("");
            await usersAPI.deleteUser(id);
            setSuccess("User berhasil dihapus!");
            loadUsers();
            setTimeout(() => setSuccess(""), 3000);
        } catch (err) {
            setError(`Gagal menghapus: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-lg font-bold text-white mb-1">Kelola Data User</h2>
            <p className="text-xs mb-6" style={{ color: "#6b7280" }}>
                Lihat, ubah, atau hapus akun user dari sistem
            </p>

            {/* Pesan Error */}
            {error && (
                <div className="flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm text-red-400 border border-red-500/20"
                    style={{ background: "rgba(239,68,68,0.05)" }}>
                    <LuCircleAlert size={15} /> {error}
                </div>
            )}

            {/* Pesan Success */}
            {success && (
                <div className="flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm text-green-400 border border-green-500/20"
                    style={{ background: "rgba(34,197,94,0.05)" }}>
                    ✅ {success}
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div className="flex items-center gap-2 rounded-xl px-4 py-3 mb-4 text-sm text-orange-400 border border-orange-500/20"
                    style={{ background: "rgba(249,115,22,0.05)" }}>
                    <ImSpinner2 className="animate-spin" size={15} /> Memproses...
                </div>
            )}

            {/* Data Kosong */}
            {!loading && users.length === 0 && !error && (
                <div className="text-center py-10 text-sm" style={{ color: "#6b7280" }}>
                    Belum ada data user.
                </div>
            )}

            {/* Tabel User */}
            {users.length > 0 && (
                <Table headers={["No", "Username", "Password", "Aksi"]}>
                    {users.map((user, index) => (
                        <tr key={user.id}>
                            <td className="px-4 py-3">{index + 1}.</td>

                            <td className="px-4 py-3">
                                {editingId === user.id ? (
                                    <input
                                        type="text"
                                        name="username"
                                        value={editForm.username}
                                        onChange={handleEditChange}
                                        className="px-2 py-1 rounded-lg text-sm border border-white/10 outline-none"
                                        style={{ background: "#1a1d27", color: "#e5e7eb" }}
                                    />
                                ) : (
                                    user.username
                                )}
                            </td>

                            <td className="px-4 py-3">
                                {editingId === user.id ? (
                                    <input
                                        type="text"
                                        name="password"
                                        value={editForm.password}
                                        onChange={handleEditChange}
                                        className="px-2 py-1 rounded-lg text-sm border border-white/10 outline-none"
                                        style={{ background: "#1a1d27", color: "#e5e7eb" }}
                                    />
                                ) : (
                                    user.password
                                )}
                            </td>

                            <td className="px-4 py-3">
                                {editingId === user.id ? (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleSaveEdit(user.id)}
                                            disabled={loading}
                                            className="px-3 py-1 rounded-lg text-xs font-semibold text-white"
                                            style={{ background: "#16a34a" }}
                                        >
                                            Simpan
                                        </button>
                                        <button
                                            onClick={handleCancelEdit}
                                            className="px-3 py-1 rounded-lg text-xs font-semibold"
                                            style={{ background: "#374151", color: "#e5e7eb" }}
                                        >
                                            Batal
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleEditClick(user)}
                                            disabled={loading}
                                            className="p-2 rounded-lg"
                                            style={{ background: "rgba(249,115,22,0.1)", color: "#f97316" }}
                                            title="Edit"
                                        >
                                            <LuPencil size={14} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id)}
                                            disabled={loading}
                                            className="p-2 rounded-lg"
                                            style={{ background: "rgba(239,68,68,0.1)", color: "#ef4444" }}
                                            title="Hapus"
                                        >
                                            <LuTrash2 size={14} />
                                        </button>
                                    </div>
                                )}
                            </td>
                        </tr>
                    ))}
                </Table>
            )}
        </div>
    );
}