import { createRoot } from "react-dom/client";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";

createRoot(document.getElementById("root")).render(
    <div id="app-container"
        className="min-h-screen flex"
        style={{ background: "#13161f" }}>

        <div id="layout-wrapper" className="flex flex-row flex-1">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div id="main-content" className="flex-1 overflow-y-auto">
                <Header />
                <Dashboard />
            </div>

        </div>
    </div>
);