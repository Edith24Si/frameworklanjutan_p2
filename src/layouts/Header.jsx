import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div className="flex justify-between items-center p-4 border-b"
            style={{ background: "#0f1117", borderColor: "#ffffff0d" }}>

            {/* Search Bar */}
            <div className="relative w-full max-w-lg">
                <input
                    className="border p-3 pr-10 w-full rounded-xl outline-none text-sm"
                    style={{ background: "#1a1d27", borderColor: "#ffffff0d", color: "#e5e7eb" }}
                    type="text"
                    placeholder="Search Here..."
                />
                <FaSearch className="absolute right-4 top-1/2 -translate-y-1/2"
                    style={{ color: "#4b5563" }} />
            </div>

            {/* Icons & Profile */}
            <div className="flex items-center space-x-3 ml-4">
                <div className="relative p-3 rounded-2xl cursor-pointer"
                    style={{ background: "rgba(249,115,22,0.1)" }}>
                    <FaBell style={{ color: "#f97316" }} />
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full px-1.5 py-0.5 text-[9px] font-bold text-white"
                        style={{ background: "#f97316" }}>5</span>
                </div>

                <div className="p-3 rounded-2xl cursor-pointer"
                    style={{ background: "rgba(59,130,246,0.1)" }}>
                    <FcAreaChart />
                </div>

                <div className="p-3 rounded-2xl cursor-pointer"
                    style={{ background: "rgba(239,68,68,0.1)" }}>
                    <SlSettings style={{ color: "#ef4444" }} />
                </div>

                <div className="flex items-center space-x-3 border-l pl-4"
                    style={{ borderColor: "#ffffff0d" }}>
                    <span className="text-sm" style={{ color: "#9ca3af" }}>
                        Hello, <b className="text-white">Admin RevDrive</b>
                    </span>
                    <img
                        src="https://avatar.iran.liara.run/public/28"
                        className="w-10 h-10 rounded-full border-2"
                        style={{ borderColor: "#f97316" }}
                    />
                </div>
            </div>
        </div>
    );
}