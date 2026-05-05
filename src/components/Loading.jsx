export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen"
            style={{ background: "#0a0c12" }}>
            <div className="w-10 h-10 rounded-full border-2 animate-spin mb-3"
                style={{ borderColor: "#ffffff0d", borderTopColor: "#f97316" }} />
            <p className="text-sm font-medium" style={{ color: "#f97316" }}>
                Loading RevDrive...
            </p>
        </div>
    );
}