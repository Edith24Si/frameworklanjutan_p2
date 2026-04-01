import React from 'react';
import '../custom.css';

// --- CHILD COMPONENTS (Minimal 6) ---

// Child 1: Header
const Header = () => {
  return (
    <div className="header">
      <h1>Portofolio Profil</h1>
    </div>
  );
};

// Child 2: ProfilePicture
const ProfilePicture = () => {
  return (
    <div className="profile-pic-container">
      {/* Kamu bisa ganti src gambar ini nanti dengan fotomu sendiri */}
      <img
        src="/img/foto1.jpg"
        alt="Foto Profil Edith" 
        className="profile-pic"
      />
    </div>
  );
};

// Child 3: NamaLengkap
const NamaLengkap = ({ nama }) => {
  return <h2 className="nama-lengkap">{nama}</h2>;
};

// Child 4: InfoDetail (NIM, Tanggal Lahir, Alamat)
const InfoDetail = ( {nim, tanggalLahir, alamat , kampus, Prodi}) => {
  return (
    <div className="info-detail">
      <p><strong>NIM:</strong> {nim}</p>
      <p><strong>Tanggal Lahir:</strong> {tanggalLahir}</p>
      <p><strong>Alamat:</strong> {alamat}</p>
       <p><strong>kampus:</strong> {kampus}</p>
        <p><strong>Prodi:</strong> {Prodi}</p>
    </div>
  );
};

// Child 5: Deskripsi Singkat
const DeskripsiSingkat = () => {
  return (
    <div className="deskripsi">
      <h3>Tentang Saya</h3>
      <p>Halo! Saya adalah mahasiswi yang sedang belajar pemograman framework lanjutan 
        menggunakan React. Ini adalah tugas portofolio pertama saya.</p>
    </div>
  );
};

// Child 6: Footer
//  "KOMPONEN JAVASCRIPT" 
const Footer = () => {
  const currentYear = 2026; // <- Ini logika Javascript nya
  const namaPembuat = "EDITH HELENA";
  
  return (
    <div className="footer">
      {/* Menggunakan Javascript dengan kurung kurawal dan toLowerCase() */}
      <p>&copy; {currentYear} {namaPembuat.toLowerCase()}. All rights reserved.</p>
    </div>
  );
};

// --- PARENT COMPONENT ---

const BiodataDiri = () => {
  return (
    <div className="biodata-container">
      <Header />
      <div className="card">
        <ProfilePicture />
        <NamaLengkap nama="Edith Helena" />
        <InfoDetail 
          nim="2457301038" 
          tanggalLahir="20 April 2004" 
          alamat="Pekanbaru, Rumbai" 
          kampus="Politeknik Caltex Riau"
          Prodi="Sistem Informasi"
        />
        <DeskripsiSingkat />
      </div>
      <Footer />
    </div>
  );
};

export default BiodataDiri;