import React, { useState, useEffect, useRef } from "react";

function UseStateDemo() {
  const [nama, setNama] = useState("");
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  return (
    <section className="p-4 border rounded mb-4 bg-white/5">
      <h2 className="text-xl font-semibold mb-2">A. useState — Contoh</h2>
      <p className="mb-2">What: Menyimpan state `nama` dan `count` pada komponen.</p>
      <p className="mb-2">Why: Agar UI bereaksi saat data berubah tanpa reload halaman.</p>
      <p className="mb-2">When: Saat input diubah atau tombol ditekan (state berubah).</p>
      <div className="flex gap-2 items-center">
        <input className="p-2 rounded" placeholder="Masukkan nama" value={nama} onChange={e=>setNama(e.target.value)} />
        <button className="px-3 py-2 bg-sky-500 rounded" onClick={()=>setCount(c=>c+1)}>Tambah ({count})</button>
      </div>
      <p className="mt-2">How: Perubahan state memicu re-render sehingga tampilan terupdate.</p>
      <p className="mt-2">Who: Pengguna yang memasukkan data pada form akan merasakan perubahan UI.</p>
    </section>
  );
}

function UseEffectDemo() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    // simulasi fetch
    const t = setTimeout(() => {
      if (mounted) {
        setData({ message: `Data contoh dipanggil ${count} kali` });
        setLoading(false);
      }
    }, 800);
    return () => { mounted = false; clearTimeout(t); };
  }, [count]); // dependency: dijalankan ketika `count` berubah

  return (
    <section className="p-4 border rounded mb-4 bg-white/5">
      <h2 className="text-xl font-semibold mb-2">B. useEffect — Contoh</h2>
      <p className="mb-1">What: Menjalankan efek samping (simulasi fetch) saat `count` berubah.</p>
      <p className="mb-1">Why: Untuk memisahkan logika side-effect dari render utama.</p>
      <p className="mb-1">When: Dipanggil setelah render ketika `count` berubah (dependency).</p>
      <p className="mb-1">Who: Komponen yang perlu memuat data eksternal atau menjalankan timer.</p>
      <div className="flex gap-2 items-center mt-2">
        <button className="px-3 py-2 bg-emerald-500 rounded" onClick={()=>setCount(c=>c+1)}>Reload Data ({count})</button>
        {loading ? <span>Memuat...</span> : <span>{data?.message}</span>}
      </div>
      <p className="mt-2">How: Dependency array memutuskan kapan effect dijalankan ulang.</p>
    </section>
  );
}

function UseRefDemo() {
  const inputRef = useRef(null);
  const prevRef = useRef("");
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prevRef.current = value;
  }, [value]);

  function fokuskan() {
    inputRef.current?.focus();
  }

  return (
    <section className="p-4 border rounded mb-4 bg-white/5">
      <h2 className="text-xl font-semibold mb-2">C. useRef — Contoh</h2>
      <p className="mb-1">What: Menyimpan referensi DOM (`inputRef`) dan nilai sebelumnya (`prevRef`).</p>
      <p className="mb-1">Why: Untuk mengakses elemen DOM langsung dan menyimpan nilai antar render tanpa re-render.</p>
      <div className="flex gap-2 items-center mt-2">
        <input ref={inputRef} value={value} onChange={e=>setValue(e.target.value)} className="p-2 rounded" placeholder="Ketik lalu lihat prev" />
        <button className="px-3 py-2 bg-yellow-500 rounded" onClick={fokuskan}>Fokuskan</button>
      </div>
      <p className="mt-2">When: useRef digunakan saat butuh akses DOM atau menyimpan mutable yang tidak perlu memicu render.</p>
      <p className="mt-1">Where: Di bagian form atau elemen yang perlu di-fokus/diukur.</p>
      <p className="mt-1">Who: Developer dan pengguna yang memakai input akan merasakan manfaatnya (fokus otomatis).</p>
      <p className="mt-1">How: Menggunakan `ref.current` untuk berinteraksi langsung dengan elemen.</p>
      <p className="mt-1">Nilai sebelumnya: {prevRef.current}</p>
    </section>
  );
}

export default function HookDemo() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pertemuan 12 — React Hooks (useState, useEffect, useRef)</h1>
      <p className="mb-4">Contoh implementasi sesuai modul. Di bawah ini terdapat contoh singkat dan jawaban 5W+1H untuk tiap hook (Bahasa Indonesia).</p>
      <UseStateDemo />
      <UseEffectDemo />
      <UseRefDemo />
      <section className="p-4 border rounded mt-4 bg-white/3">
        <h2 className="text-lg font-semibold mb-2">Yang Dikumpulkan (catatan)</h2>
        <ol className="list-decimal list-inside">
          <li>3 gambar PNG (boleh sementara: gunakan screenshot dari halaman ini).</li>
          <li>Screenshot implementasi `useState`, `useEffect`, dan `useRef`.</li>
          <li>Jawaban 5W+1H untuk setiap hook sudah tercantum di atas.</li>
          <li>Setiap PNG menjelaskan penggunaan hook pada project CRM (contoh: form pelanggan, fetch data, fokus input).</li>
        </ol>
        <div className="mt-4 grid grid-cols-3 gap-4">
          <figure className="text-center">
            <img src="/img/placeholder-usestate.svg" alt="placeholder usestate" className="w-full border rounded" />
            <figcaption className="text-sm mt-2">useState — Form Pelanggan (placeholder)</figcaption>
          </figure>
          <figure className="text-center">
            <img src="/img/placeholder-useeffect.svg" alt="placeholder useeffect" className="w-full border rounded" />
            <figcaption className="text-sm mt-2">useEffect — Fetch Data (placeholder)</figcaption>
          </figure>
          <figure className="text-center">
            <img src="/img/placeholder-useref.svg" alt="placeholder useref" className="w-full border rounded" />
            <figcaption className="text-sm mt-2">useRef — Fokus Input (placeholder)</figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
