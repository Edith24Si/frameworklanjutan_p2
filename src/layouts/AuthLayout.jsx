import { Outlet } from "react-router-dom";
import { LuWrench } from "react-icons/lu";
export default function AuthLayout() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{ background: "#0a0c12" }}>

            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #f97316, transparent)" }} />

            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{
                    backgroundImage: "linear-gradient(#f97316 1px, transparent 1px), linear-gradient(90deg, #f97316 1px, transparent 1px)",
                    backgroundSize: "60px 60px"
                }} />
            <div className="relative w-full max-w-sm mx-4">
                <div className="text-center mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl"
                        style={{ background: "linear-gradient(135deg, #f97316, #ea580c)" }}>
                        <LuWrench size={26} className="text-white" />
                    </div>
                    <h1 className="text-2xl font-black text-white tracking-tight">RevDrive</h1>
                    <p className="text-xs font-medium tracking-widest uppercase"
                        style={{ color: "#f97316" }}>AutoSolution CRM</p>
                </div>
                <div className="rounded-2xl p-8 border border-white/5"
                    style={{ background: "#0f1117" }}>
                    <Outlet />
                </div>
                <p className="text-center text-xs mt-4" style={{ color: "#374151" }}>
                    © 2026 RevDrive AutoSolution. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}