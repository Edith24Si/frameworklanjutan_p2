import { HiCheck, HiExclamationCircle, HiExclamation, HiInformationCircle } from "react-icons/hi";

export default function AlertBox({ type = "info", message }) {
  // Pengaturan warna dan ikon berdasarkan tipe alert
  const styles = {
    success: {
      bg: "rgba(34, 197, 94, 0.1)",
      border: "rgba(34, 197, 94, 0.2)",
      text: "#22c55e",
      icon: HiCheck,
    },
    danger: {
      bg: "rgba(239, 68, 68, 0.1)",
      border: "rgba(239, 68, 68, 0.2)",
      text: "#ef4444",
      icon: HiExclamationCircle,
    },
    warning: {
      bg: "rgba(234, 179, 8, 0.1)",
      border: "rgba(234, 179, 8, 0.2)",
      text: "#eab308",
      icon: HiExclamation,
    },
    info: {
      bg: "rgba(59, 130, 246, 0.1)",
      border: "rgba(59, 130, 246, 0.2)",
      text: "#3b82f6",
      icon: HiInformationCircle,
    },
  };

  const currentStyle = styles[type] || styles.info;
  const IconComponent = currentStyle.icon;

  return (
    <div
      className="flex items-start gap-3 p-4 rounded-xl border text-sm w-full transition-all"
      style={{
        backgroundColor: currentStyle.bg,
        borderColor: currentStyle.border,
        color: currentStyle.text,
      }}
    >
      <IconComponent className="mt-0.5 flex-shrink-0" size={18} />
      <span className="font-medium text-white">{message}</span>
    </div>
  );
}