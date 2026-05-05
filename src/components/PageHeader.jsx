export default function PageHeader({ title, breadcrumb, children }) {
    const breadcrumbArray = Array.isArray(breadcrumb) ? breadcrumb : [breadcrumb];

    return (
        <div className="flex items-center justify-between p-4 mb-4 border-b"
            style={{ borderColor: "#ffffff0d" }}>
            <div className="flex flex-col">
                <span className="text-2xl font-bold text-white">{title}</span>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs" style={{ color: "#6b7280" }}>Home</span>
                    {breadcrumbArray.map((crumb, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span style={{ color: "#6b7280" }}>/</span>
                            <span className="text-xs font-semibold"
                                style={{ color: i === breadcrumbArray.length - 1 ? "#f97316" : "#6b7280" }}>
                                {crumb}
                            </span>
                        </span>
                    ))}
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}