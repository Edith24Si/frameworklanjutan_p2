export default function Loading({ compact = false }) {
    return (
        <div className={`flex ${compact ? "items-center justify-center py-6" : "flex-col justify-center items-center min-h-screen"}`}
            style={{ background: compact ? "transparent" : "#0a0c12" }}>
            <div className={`rounded-full border-2 animate-spin ${compact ? "w-8 h-8 mb-0" : "w-10 h-10 mb-3"}`}
                style={{ borderColor: compact ? "#ffffff26" : "#ffffff0d", borderTopColor: "#f97316" }} />
            <p className={`text-sm font-medium ${compact ? "mt-3" : ""}`} style={{ color: "#f97316" }}>
                Loading RevDrive...
            </p>
        </div>
    );
}
