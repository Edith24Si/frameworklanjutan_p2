import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const pageMeta = {
    "/":          { title: "Dashboard",        breadcrumb: ["Dashboard"] },
    "/pelanggan": { title: "Data Pelanggan",   breadcrumb: ["Pelanggan"] },
    "/kendaraan": { title: "Data Kendaraan",   breadcrumb: ["Kendaraan"] },
    "/booking":   { title: "Booking & Jadwal", breadcrumb: ["Booking"] },
    "/inventory": { title: "Inventory",        breadcrumb: ["Inventory"] },
    "/loyalty":   { title: "Loyalty Program",  breadcrumb: ["Loyalty"] },
    "/feedback":  { title: "Feedback",         breadcrumb: ["Feedback"] },
    "/error/400": { title: "Error 400",        breadcrumb: ["Error", "400"] },
    "/error/401": { title: "Error 401",        breadcrumb: ["Error", "401"] },
    "/error/403": { title: "Error 403",        breadcrumb: ["Error", "403"] },
};

export default function MainLayout() {
    const location = useLocation();
    const meta = pageMeta[location.pathname] || { title: "RevDrive CRM", breadcrumb: [] };

    return (
        <div className="min-h-screen flex" style={{ background: "#13161f" }}>
            <div className="flex flex-row flex-1">
                <Sidebar />
                <div className="flex-1 overflow-y-auto flex flex-col">
                    <Header title={meta.title} breadcrumb={meta.breadcrumb} />
                    <main className="flex-1">
                        <Outlet />
                    </main>
                    <footer className="text-center text-xs py-3 border-t"
                        style={{ borderColor: "#ffffff0d", color: "#374151" }}>
                        © 2026 RevDrive AutoSolution CRM — All Rights Reserved
                    </footer>
                </div>
            </div>
        </div>
    );
}