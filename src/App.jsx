import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./assets/tailwind.css";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Loading    from "./components/Loading";
import Pelanggan from './pages/Pelanggan';
import PelangganDetail from './pages/PelangganDetail';

const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Pelanggan  = React.lazy(() => import("./pages/Pelanggan"));
const Kendaraan  = React.lazy(() => import("./pages/Kendaraan"));
const Booking    = React.lazy(() => import("./pages/Booking"));
const Inventory  = React.lazy(() => import("./pages/Inventory"));
const Loyalty    = React.lazy(() => import("./pages/Loyalty"));
const Feedback   = React.lazy(() => import("./pages/Feedback"));
const NotFound   = React.lazy(() => import("./pages/NotFound"));
const Login      = React.lazy(() => import("./pages/auth/Login"));
const Register   = React.lazy(() => import("./pages/auth/Register"));
const Forgot     = React.lazy(() => import("./pages/auth/Forgot"));
const PelangganDetail = React.lazy(() => import("./pages/PelangganDetail"));

function App() {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>

                {/* Auth Layout — tanpa Sidebar */}
                <Route element={<AuthLayout />}>
                    <Route path="/login"    element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot"   element={<Forgot />} />
                </Route>

                {/* Main Layout — dengan Sidebar + Header */}
                <Route element={<MainLayout />}>
                    <Route path="/"          element={<Dashboard />} />
                    <Route path="/pelanggan" element={<Pelanggan />} />
                    <Route path="/kendaraan" element={<Kendaraan />} />
                    <Route path="/booking"   element={<Booking />} />
                    <Route path="/inventory" element={<Inventory />} />
                    <Route path="/loyalty"   element={<Loyalty />} />
                    <Route path="/feedback"  element={<Feedback />} />
                    <Route path="/error/400" element={<NotFound errorCode="400" errorTitle="Bad Request"  errorDescription="Permintaan tidak bisa diproses." />} />
                    <Route path="/error/401" element={<NotFound errorCode="401" errorTitle="Unauthorized" errorDescription="Kamu harus login terlebih dahulu." />} />
                    <Route path="/error/403" element={<NotFound errorCode="403" errorTitle="Forbidden"    errorDescription="Kamu tidak punya izin mengakses halaman ini." />} />
                    <Route path="*"          element={<NotFound />} />
                    <Route path="/pelanggan/:id" element={<PelangganDetail />} />

               
                </Route>

            </Routes>
        </Suspense>
    );
}

export default App;