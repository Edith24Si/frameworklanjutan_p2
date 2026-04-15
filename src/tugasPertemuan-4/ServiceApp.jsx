import React, { useState } from 'react';
import servicesData from './service.json';

const ServiceApp = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterKategori, setFilterKategori] = useState('');
  const [filterLevel, setFilterLevel] = useState('');
  const [viewMode, setViewMode] = useState('guest');

  // Ambil daftar kategori unik untuk filter
  const categories = ['', ...new Set(servicesData.courses.map(item => item.kategori))];
  const levels = ['', ...new Set(servicesData.courses.map(item => item.durasi.level))];

  const filteredServices = servicesData.courses.filter((item) => {
    const matchSearch = item.nama.toLowerCase().includes(searchTerm.toLowerCase());
    const matchKategori = filterKategori === '' || item.kategori === filterKategori;
    const matchLevel = filterLevel === '' || item.durasi.level === filterLevel;
    return matchSearch && matchKategori && matchLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-slate-900">
      
      {/* HEADER & NAV */}
      <div className="max-w-5xl mx-auto mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tight italic">
          EDU<span className="text-indigo-600">COURSE</span>
        </h1>
        <div className="flex bg-gray-200 p-1 rounded-xl">
          <button 
            onClick={() => setViewMode('guest')} 
            className={`px-5 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${viewMode === 'guest' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500'}`}
          >
            Guest
          </button>
          <button 
            onClick={() => setViewMode('admin')} 
            className={`px-5 md:px-6 py-2 rounded-lg text-xs md:text-sm font-bold transition-all ${viewMode === 'admin' ? 'bg-white text-indigo-600 shadow-sm' : 'text-gray-500'}`}
          >
            Admin
          </button>
        </div>
      </div>

      {/* SEARCH & FILTERS */}
      <div className="max-w-5xl mx-auto mb-8 space-y-4">
        <input
          type="text"
          placeholder="🔍 Cari kursus yang kamu inginkan..."
          className="w-full px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <div className="flex flex-col sm:flex-row gap-3">
          <select
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setFilterKategori(e.target.value)}
            value={filterKategori}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat === '' ? '📂 Semua Kategori' : cat}
              </option>
            ))}
          </select>
          
          <select
            className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setFilterLevel(e.target.value)}
            value={filterLevel}
          >
            {levels.map((level, idx) => (
              <option key={idx} value={level}>
                {level === '' ? '⭐ Semua Level' : level}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="max-w-5xl mx-auto">
        {filteredServices.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl">
            <p className="text-gray-500">Tidak ada kursus yang ditemukan</p>
          </div>
        ) : (
          viewMode === 'guest' ? (
            /* --- GUEST VIEW: CARD HORIZONTAL --- */
            <div className="space-y-4">
              {filteredServices.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row">
                    
                    {/* GAMBAR KIRI */}
                    <div className="w-full sm:w-32 md:w-36 h-48 sm:h-auto bg-gray-100">
                      <img 
                        src={item.gambar} 
                        alt={item.nama} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* INFO TENGAH */}
                    <div className="flex-1 p-4 md:p-5">
                      <div className="mb-2">
                        <span className="text-xs font-bold text-indigo-600 uppercase tracking-wide bg-indigo-50 px-2 py-1 rounded-full">
                          {item.kategori}
                        </span>
                      </div>
                      
                      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                        {item.nama}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 mb-1">
                        <span>⏱️ {item.durasi.total_jam} Jam</span>
                        <span>•</span>
                        <span>📊 {item.durasi.level}</span>
                        <span>•</span>
                        <span>⭐ {item.rating}</span>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                        <span>👤 {item.mentor.nama}</span>
                        <span>•</span>
                        <span className="text-gray-400">{item.mentor.spesialis}</span>
                      </div>
                    </div>

                    {/* HARGA KANAN */}
                    <div className="sm:w-36 p-4 flex flex-row sm:flex-col justify-between items-center sm:justify-center border-t sm:border-t-0 sm:border-l border-gray-100 bg-gray-50/50">
                      <div className="text-center sm:mb-3">
                        <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">PRICE</p>
                        <p className="text-lg md:text-xl font-black text-indigo-600">
                          Rp {item.harga.toLocaleString()}
                        </p>
                      </div>
                      <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-indigo-700 transition-all shadow-sm">
                        Daftar →
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* --- ADMIN VIEW: TABEL TANPA GAMBAR --- */
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[700px]">
                  <thead>
                    <tr className="bg-slate-800 text-white">
                      <th className="p-4 text-xs font-bold uppercase tracking-wider">Nama Kursus</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider">Kategori</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider">Mentor</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider">Spesialis</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider">Level</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider">Jam</th>
                      <th className="p-4 text-xs font-bold uppercase tracking-wider text-right">Harga</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filteredServices.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                        <td className="p-4 font-semibold text-slate-700 text-sm">{item.nama}</td>
                        <td className="p-4 text-sm text-gray-500">
                          <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                            {item.kategori}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-600">
                          <div>
                            <p className="font-medium">{item.mentor.nama}</p>
                            <p className="text-xs text-gray-400">{item.mentor.role}</p>
                          </div>
                        </td>
                        <td className="p-4 text-xs text-gray-400">{item.mentor.spesialis}</td>
                        <td className="p-4 text-xs">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium
                            ${item.durasi.level === 'Beginner' ? 'bg-green-100 text-green-700' : 
                              item.durasi.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-red-100 text-red-700'}`}
                          >
                            {item.durasi.level}
                          </span>
                        </td>
                        <td className="p-4 text-sm text-gray-500">{item.durasi.total_jam} jam</td>
                        <td className="p-4 text-right font-black text-indigo-600 text-sm">
                          Rp {item.harga.toLocaleString()}
                        </td>
                       </tr>
                    ))}
                  </tbody>
                 </table>
              </div>
              
              {/* Ringkasan Admin */}
              <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500 flex justify-between">
                <span>Total Kursus: {filteredServices.length}</span>
                <span>Rating Tertinggi: ⭐ {Math.max(...filteredServices.map(s => s.rating))}</span>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ServiceApp;