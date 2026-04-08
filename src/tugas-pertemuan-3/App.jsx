import { useState, useEffect } from 'react';
import InputField from './components/InputField';

export default function App() {
  const [formData, setFormData] = useState({
    nama: '',
    ktp: '',
    jumlah: '',
    tujuan: '',
    kelas: ''
  });

  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [hasilBeli, setHasilBeli] = useState(null);

  const hargaTiket = {
    Bandung: { Ekonomi: 100000, Eksekutif: 250000 },
    Surabaya: { Ekonomi: 250000, Eksekutif: 600000 }
  };

  const validateForm = (data) => {
    let newErrors = {};

    if (!data.nama) newErrors.nama = "Nama wajib diisi.";
    else if (data.nama.length < 3) newErrors.nama = "Nama minimal 3 karakter.";
    else if (/\d/.test(data.nama)) newErrors.nama = "Nama tidak boleh mengandung angka.";

    if (!data.ktp) newErrors.ktp = "Nomor KTP wajib diisi.";
    else if (!/^\d+$/.test(data.ktp)) newErrors.ktp = "Nomor KTP hanya boleh berisi angka.";
    else if (data.ktp.length !== 16) newErrors.ktp = "Nomor KTP harus tepat 16 digit.";

    if (!data.jumlah) newErrors.jumlah = "Jumlah tiket wajib diisi.";
    else if (data.jumlah <= 0) newErrors.jumlah = "Jumlah tiket minimal 1.";
    else if (data.jumlah > 5) newErrors.jumlah = "Maksimal pembelian 5 tiket.";

    if (!data.tujuan) newErrors.tujuan = "Tujuan wajib dipilih.";
    if (!data.kelas) newErrors.kelas = "Kelas wajib dipilih.";

    setErrors(newErrors);

    const isValid = Object.keys(newErrors).length === 0 && data.nama !== '';
    setIsFormValid(isValid);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    
    setHasilBeli(null); 
    validateForm(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hargaSatuan = hargaTiket[formData.tujuan][formData.kelas];
    const totalHarga = hargaSatuan * parseInt(formData.jumlah);

    setHasilBeli({
      ...formData,
      totalHarga: totalHarga
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">🚄 Tiket Kereta Cepat</h2>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Nama Lengkap" type="text" name="nama"
            placeholder="Masukkan nama sesuai KTP"
            value={formData.nama} onChange={handleChange}
            errorMessage={errors.nama}
          />

          <InputField
            label="Nomor KTP" type="text" name="ktp"
            placeholder="Masukkan 16 digit NIK"
            value={formData.ktp} onChange={handleChange}
            errorMessage={errors.ktp}
          />

          <InputField
            label="Jumlah Tiket" type="number" name="jumlah"
            placeholder="Maksimal 5 tiket"
            value={formData.jumlah} onChange={handleChange}
            errorMessage={errors.jumlah}
          />

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Stasiun Tujuan</label>
            <select name="tujuan" value={formData.tujuan} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">-- Pilih Tujuan --</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
            </select>
            {errors.tujuan && <p className="mt-1 text-sm text-red-600 bg-red-100 p-2 rounded">⚠ {errors.tujuan}</p>}
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-1">Kelas Kereta</label>
            <select name="kelas" value={formData.kelas} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">-- Pilih Kelas --</option>
              <option value="Ekonomi">Ekonomi</option>
              <option value="Eksekutif">Eksekutif</option>
            </select>
            {errors.kelas && <p className="mt-1 text-sm text-red-600 bg-red-100 p-2 rounded">⚠ {errors.kelas}</p>}
          </div>

          {isFormValid && (
            <button type="submit" className="w-full bg-blue-600
             hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors">
              Pesan Tiket Sekarang
            </button>
          )}
        </form>

        {hasilBeli && (
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded">
            <h3 className="text-lg font-bold text-green-700 border-b pb-2 mb-2">✅ Pemesanan Berhasil!</h3>
            <p className="text-gray-700"><strong>Nama:</strong> {hasilBeli.nama} ({hasilBeli.ktp})</p>
            <p className="text-gray-700"><strong>Tujuan:</strong> {hasilBeli.tujuan} - Kelas {hasilBeli.kelas}</p>
            <p className="text-gray-700"><strong>Jumlah:</strong> {hasilBeli.jumlah} Tiket</p>
            <p className="text-xl font-bold text-blue-700 mt-3">
              Total Bayar: Rp {hasilBeli.totalHarga.toLocaleString('id-ID')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}