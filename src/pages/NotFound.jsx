import { useNavigate } from "react-router-dom";
import { LuWrench } from "react-icons/lu";

const errorImages = {
    "400": "https://img.freepik.com/free-vector/400-error-bad-request-concept-illustration_114360-1921.jpg",
    "401": "https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-1922.jpg",
    "403": "https://img.freepik.com/free-vector/403-error-forbidden-concept-illustration_114360-1935.jpg",
    "404": "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg",
};

export default function NotFound({
    errorCode = "404",
    errorTitle = "Halaman Tidak Ditemukan",
    errorDescription = "Halaman yang kamu cari tidak tersedia."
}) {
    const navigate = useNavigate();
    const image = errorImages[errorCode] || errorImages["404"];

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
            <img src={image} alt={`Error ${errorCode}`}
                className="w-64 h-auto object-contain rounded-2xl mb-6" />
            <h1 className="text-7xl font-black mb-3" style={{ color:"#f97316" }}>{errorCode}</h1>
            <div className="flex items-center gap-2 mb-2">
                <LuWrench size={18} style={{ color:"#f97316" }} />
                <p className="text-xl font-bold text-white">{errorTitle}</p>
            </div>
            <p className="text-sm mb-8 max-w-md" style={{ color:"#6b7280" }}>{errorDescription}</p>
            <button onClick={() => navigate("/")}
                className="px-8 py-3 rounded-2xl font-bold text-white shadow-lg hover:opacity-90 transition-all"
                style={{ background:"linear-gradient(135deg, #f97316, #ea580c)" }}>
                Kembali ke Dashboard
            </button>
        </div>
    );
}