import { useState } from "react";
import PageHeader from "../components/PageHeader";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Card from "../components/Card";
import CardWrapper from "../components/CardWrapper";

import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Table from "../components/Table";
import ServiceCard from "../components/ServiceCard";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import TextAreaField from "../components/TextAreaField";
import AlertBox from "../components/AlertBox";
import Loading from "../components/Loading";
import ModalBox from "../components/ModalBox";
import Spinner from "../components/Spinner";

export default function Components() {
  const [modalTerbuka, setModalTerbuka] = useState(false);

  // Data Dummy untuk Demo Table
  const tableHeaders = ["No", "Sparepart", "Stok", "Harga", "Status"];
  const sparepartsData = [
    { name: "Oli Shell Helix Ultra 1L", stock: 24, price: "Rp 165.000", status: "Aman" },
    { name: "Kampas Rem Depan Brembo", stock: 5, price: "Rp 450.000", status: "Menipis" },
    { name: "Filter Udara Sakura", stock: 0, price: "Rp 85.000", status: "Habis" },
  ];

  return (
    <div className="p-6">
      <PageHeader title="UI Kit Components" breadcrumb={["Playground"]} />
      
      <Container className="space-y-8">
        
        {/* SECTION 1: BASIC COMPONENTS */}
        <CardWrapper title="1. Basic Components" description="Komponen atomik sederhana (Button, Badge, Avatar)">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-teks-redup mb-2">Varian Button:</p>
              <div className="flex flex-wrap gap-3">
                <Button type="primary">Primary (Orange)</Button>
                <Button type="secondary">Secondary</Button>
                <Button type="success">Success</Button>
                <Button type="warning">Warning</Button>
                <Button type="danger">Danger</Button>
              </div>
            </div>
            
            <div>
              <p className="text-xs text-teks-redup mb-2">Varian Badge Status:</p>
              <div className="flex flex-wrap gap-3">
                <Badge type="primary">Booking</Badge>
                <Badge type="secondary">Antrean</Badge>
                <Badge type="success">Selesai</Badge>
                <Badge type="warning">Dikerjakan</Badge>
                <Badge type="danger">Batal</Badge>
              </div>
            </div>

            <div>
              <p className="text-xs text-teks-redup mb-2">Ukuran Avatar Pelanggan:</p>
              <div className="flex items-center gap-4">
                <Avatar name="Alex" size="sm" />
                <Avatar name="Budi Santoso" size="md" />
                <Avatar name="Ruslan" size="lg" />
              </div>
            </div>
          </div>
        </CardWrapper>

        {/* SECTION 2: DATA DISPLAY & LAYOUT */}
        <CardWrapper title="2. Data Display & Layout" description="Komponen penata letak dan penampil data (Grid, Card, Table, ServiceCard)">
          <div className="space-y-6">
            <div>
              <p className="text-xs text-teks-redup mb-3">Grid & ServiceCard Kendaraan Bengkel:</p>
              <Grid cols={3}>
                <ServiceCard platNomor="B 1234 ABC" pemilik="Fadhil Nugraha" tipeMobil="Honda Civic Turbo" statusServis="Dikerjakan" mekanik="Mas Agus" />
                <ServiceCard platNomor="D 9999 SS" pemilik="Rian Ardianto" tipeMobil="Toyota Avanza Veloz" statusServis="Selesai" mekanik="Mas Budi" />
                <ServiceCard platNomor="L 4321 XYZ" pemilik="Siti Aminah" tipeMobil="Mitsubishi Pajero" statusServis="Terjadwal" mekanik="Mas Eko" />
              </Grid>
            </div>

            <div>
              <p className="text-xs text-teks-redup mb-3">Table Manajemen Stok:</p>
              <Table headers={tableHeaders}>
                {sparepartsData.map((part, index) => (
                  <tr key={index} className="hover:bg-white/2 transition-colors">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3 font-semibold text-white">{part.name}</td>
                    <td className="px-4 py-3">{part.stock} pcs</td>
                    <td className="px-4 py-3 font-bold text-orange">{part.price}</td>
                    <td className="px-4 py-3">
                      <Badge type={part.status === "Aman" ? "success" : part.status === "Menipis" ? "warning" : "danger"}>
                        {part.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </Table>
            </div>

            <div>
              <p className="text-xs text-teks-redup mb-3">Preview Card:</p>
              <Card>
                <div className="space-y-2">
                  <h4 className="text-white font-bold">Ringkasan Layanan</h4>
                  <p className="text-sm text-teks-redup">
                    Contoh penggunaan `Card` untuk menampilkan informasi ringkas di dashboard atau modul overview.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </CardWrapper>

        {/* SECTION 3: FORM COMPONENTS */}
        <CardWrapper title="3. Form Components" description="Input field terstandarisasi untuk modul transaksi / booking">
          <div className="max-w-xl space-y-4">
            <InputField label="Nama Lengkap Pelanggan" placeholder="Masukkan nama pemilik kendaraan" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="Nomor Polisi" placeholder="Contoh: B 1234 EFG" />
              <SelectField 
                label="Kategori Servis" 
                options={[
                  { value: "ganti-oli", label: "Ganti Oli Rutin" },
                  { value: "tune-up", label: "Tune Up Mesin" },
                  { value: "heavy-repair", label: "Turun Mesin / Overhaul" }
                ]} 
              />
            </div>
            <TextAreaField label="Keluhan Utama / Catatan Mekanik" placeholder="Jelaskan kendala atau gejala kerusakan mobil di sini..." />
          </div>
        </CardWrapper>

        {/* SECTION 4: FEEDBACK COMPONENTS */}
        <CardWrapper title="4. Feedback Components" description="Respon sistem berupa Alert, Spinner, dan Dialog Modal">
          <div className="space-y-4">
            <div className="space-y-2">
              <AlertBox type="success" message="Sistem Berhasil Terhubung! Data sinkronisasi mekanik aman." />
              <AlertBox type="danger" message="Gagal Menyimpan! Batas kuota antrean booking hari ini sudah penuh." />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <p className="text-xs text-teks-redup mb-1">Status Memuat Data:</p>
                <Spinner size="md" />
              </div>
              <div>
                <p className="text-xs text-teks-redup mb-2">Interaksi Jendela Pop-up:</p>
                <Button type="primary" onClick={() => setModalTerbuka(true)}>Buka Dialog Modal</Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="rounded-2xl border border-white/5 p-4 bg-[#161b27]">
                <p className="text-xs text-teks-redup mb-3">Component Loading (compact)</p>
                <Loading compact />
              </div>
              <div className="rounded-2xl border border-white/5 p-4 bg-[#161b27]">
                <p className="text-xs text-teks-redup mb-3">Component Spinner</p>
                <Spinner size="md" />
              </div>
            </div>
          </div>
        </CardWrapper>

      </Container>

      {/* MODAL DIALOG DEMO */}
      <ModalBox isOpen={modalTerbuka} onClose={() => setModalTerbuka(false)} title="Konfirmasi Perbaikan Unit">
        <p>Apakah Anda yakin ingin memindahkan status unit **Honda Civic (B 1234 ABC)** ke status <b>Selesai Servis</b> dan menerbitkan struk tagihan?</p>
      </ModalBox>
    </div>
  );
}