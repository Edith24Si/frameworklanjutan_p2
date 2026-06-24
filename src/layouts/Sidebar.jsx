import { NavLink } from "react-router-dom";
import {
    LuLayoutDashboard, LuUsers, LuCar, LuCalendarCheck,
    LuPackage, LuStar, LuMessageSquare, LuPlus, LuWrench,
    LuTriangleAlert, LuLock, LuUserX, LuComponent, LuUserCog
} from "react-icons/lu";

export default function Sidebar() {
    const menuItems = [
        { id: "dashboard", icon: LuLayoutDashboard, label: "Dashboard", to: "/" },
        { id: "pelanggan", icon: LuUsers, label: "Pelanggan", to: "/pelanggan" },
        { id: "kendaraan", icon: LuCar, label: "Kendaraan", to: "/kendaraan" },
        { id: "booking", icon: LuCalendarCheck, label: "Booking", to: "/booking" },
        { id: "inventory", icon: LuPackage, label: "Inventory", to: "/inventory" },
        { id: "loyalty", icon: LuStar, label: "Loyalty", to: "/loyalty" },
        { id: "feedback", icon: LuMessageSquare, label: "Feedback", to: "/feedback" },
        { id: "users", icon: LuUserCog, label: "Kelola User", to: "/users" },
        { id: "components", icon: LuComponent, label: "Components", to: "/components" }
    ];

    const errorMenus = [
        { id: "error400", icon: LuTriangleAlert, label: "Error 400", to: "/error/400" },
        { id: "error401", icon: LuUserX, label: "Error 401", to: "/error/401" },
        { id: "error403", icon: LuLock, label: "Error 403", to: "/error/403" },
        { id: "error404", icon: LuTriangleAlert, label: "Error 404", to: "/halaman-ngasal" },
    ];

    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-3 space-x-3 text-sm font-medium transition-all
        ${isActive ? "text-white font-bold shadow-lg" : "hover:text-white"}`;

    const menuStyle = (isActive) => ({
        background: isActive ? "linear-gradient(135deg, #f97316, #ea580c)" : "transparent",
        color: isActive ? "#ffffff" : "#9ca3af",
    });

    return (
        <div id="sidebar"
            className="flex min-h-screen w-64 flex-col p-5 shadow-xl border-r"
            style={{ background: "#0f1117", borderColor: "#ffffff0d" }}>

            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col mb-8">
                <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                        <LuWrench size={18} className="text-white" />
                    </div>
                    <span className="font-poppins font-black text-xl text-white tracking-tight">
                        RevDrive<b style={{ color: "#f97316" }}>.</b>
                    </span>
                </div>
                <span className="text-xs font-semibold tracking-widest uppercase ml-12"
                    style={{ color: "#f97316" }}>
                    AutoSolution CRM
                </span>
            </div>

            {/* Menu Utama */}
            <nav className="flex-1">
                <p className="text-[9px] font-bold uppercase tracking-widest mb-3 px-3"
                    style={{ color: "#4b5563" }}>Menu Utama</p>
                <ul className="space-y-1">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <NavLink
                                to={item.to}
                                end={item.to === "/"}
                                className={menuClass}
                                style={({ isActive }) => menuStyle(isActive)}>
                                <item.icon size={16} />
                                <span>{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Simulasi Error */}
                <div className="mt-6 pt-4 border-t" style={{ borderColor: "#ffffff0d" }}>
                    <p className="text-[9px] font-bold uppercase tracking-widest mb-3 px-3"
                        style={{ color: "#4b5563" }}>Simulasi Error</p>
                    <ul className="space-y-1">
                        {errorMenus.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.to}
                                    className={menuClass}
                                    style={({ isActive }) => menuStyle(isActive)}>
                                    <item.icon size={16} />
                                    <span>{item.label}</span>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Footer */}
            <div className="mt-auto">
                <div className="px-4 py-3 rounded-xl mb-4 border"
                    style={{ background: "rgba(249,115,22,0.08)", borderColor: "rgba(249,115,22,0.2)" }}>
                    <p className="text-xs mb-2" style={{ color: "#9ca3af" }}>
                        Kelola menu bengkel kamu!
                    </p>
                    <div className="flex justify-center items-center p-2 bg-white rounded-lg cursor-pointer gap-1">
                        <LuPlus size={12} style={{ color: "#374151" }} />
                        <span className="text-xs font-bold" style={{ color: "#374151" }}>Add Menus</span>
                    </div>
                </div>
                <span className="font-bold text-xs block" style={{ color: "#4b5563" }}>
                    RevDrive AutoSolution CRM
                </span>
                <p className="font-light text-xs" style={{ color: "#374151" }}>
                    © 2026 All Right Reserved
                </p>
            </div>
        </div>
    );
}