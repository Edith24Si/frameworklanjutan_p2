import { LuUsers, LuCar, LuCalendarCheck, LuDollarSign, LuWrench } from "react-icons/lu";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    const cards = [
        { id: "pelanggan", icon: LuUsers,         label: "Total Pelanggan", value: "128",      color: "#3b82f6" },
        { id: "kendaraan", icon: LuCar,           label: "Total Kendaraan", value: "95",       color: "#8b5cf6" },
        { id: "booking",   icon: LuCalendarCheck, label: "Booking Aktif",   value: "24",       color: "#f97316" },
        { id: "revenue",   icon: LuDollarSign,    label: "Total Revenue",   value: "Rp 18Jt",  color: "#22c55e" },
    ];

    return (
        <div>
            <PageHeader title="Dashboard" breadcrumb={["Dashboard"]} />

            {/* Grid Card */}
            <div className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map((card) => (
                    <div key={card.id}
                        className="flex items-center space-x-4 rounded-2xl shadow-md p-5 border"
                        style={{ background: "#1a1d27", borderColor: "#ffffff0d" }}>
                        <div className="rounded-xl p-3"
                            style={{ background: `${card.color}22` }}>
                            <card.icon className="text-2xl" style={{ color: card.color }} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-white">{card.value}</span>
                            <span className="text-xs" style={{ color: "#9ca3af" }}>{card.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Welcome Banner */}
            <div className="mx-5 rounded-2xl p-6 border"
                style={{ background: "linear-gradient(135deg, #1a1208, #1f1508)", borderColor: "rgba(249,115,22,0.2)" }}>
                <div className="flex items-center gap-2 mb-2">
                    <LuWrench size={16} style={{ color: "#f97316" }} />
                    <span className="text-xs font-semibold uppercase tracking-wider"
                        style={{ color: "#f97316" }}>RevDrive AutoSolution</span>
                </div>
                <h2 className="text-xl font-black text-white mb-1">Selamat Datang, Admin CRM! 🔧</h2>
                <p className="text-sm" style={{ color: "#9ca3af" }}>
                    Sistem CRM Bengkel berjalan normal. Kelola pelanggan, kendaraan, dan servis dengan mudah.
                </p>
            </div>
        </div>
    );
}