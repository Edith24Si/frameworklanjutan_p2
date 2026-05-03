import "./pertemuan-5/assets/tailwind.css";
import Sidebar from "./pertemuan-5/layouts/Sidebar";
import Header from "./pertemuan-5/layouts/Header";
import Dashboard from "./pertemuan-5/pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import Pelanggan from "./pertemuan-5/pages/Pelanggan";
import Kendaraan from "./pertemuan-5/pages/Kendaraan";
import Booking from "./pertemuan-5/pages/Booking";
import Inventory from "./pertemuan-5/pages/Inventory";
import Loyalty from "./pertemuan-5/pages/Loyalty";
import Feedback from "./pertemuan-5/pages/Feedback";
import NotFound from "./pertemuan-5/pages/NotFound";

function App() {
    return (
        <div className="min-h-screen flex" style={{ background: "#13161f" }}>
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
                    <Header />
                    <Routes>
                        <Route path="/"          element={<Dashboard />} />
                        <Route path="/pelanggan" element={<Pelanggan />} />
                        <Route path="/kendaraan" element={<Kendaraan />} />
                        <Route path="/booking"   element={<Booking />} />
                        <Route path="/inventory" element={<Inventory />} />
                        <Route path="/loyalty"   element={<Loyalty />} />
                        <Route path="/feedback"  element={<Feedback />} />
                        <Route path="/error/400" element={<NotFound errorCode="400" errorTitle="Bad Request"  errorDescription="Permintaan tidak bisa diproses oleh server." />} />
                        <Route path="/error/401" element={<NotFound errorCode="401" errorTitle="Unauthorized" errorDescription="Kamu harus login terlebih dahulu." />} />
                        <Route path="/error/403" element={<NotFound errorCode="403" errorTitle="Forbidden"    errorDescription="Kamu tidak punya izin untuk mengakses halaman ini." />} />
                        <Route path="*"          element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;