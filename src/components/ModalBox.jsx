import { LuX } from "react-icons/lu";
import Button from "./Button";

export default function ModalBox({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      {/* Content */}
      <div className="relative w-full max-w-md border border-white/5 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in-95 duration-150" style={{ background: "#1a1d27" }}>
        <div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-teks-redup hover:text-white transition-colors">
            <LuX size={20} />
          </button>
        </div>
        <div className="text-sm text-teks mb-6">{children}</div>
        <div className="flex justify-end gap-3">
          <Button type="secondary" onClick={onClose}>Batal</Button>
          <Button type="primary" onClick={onClose}>Konfirmasi</Button>
        </div>
      </div>
    </div>
  );
}