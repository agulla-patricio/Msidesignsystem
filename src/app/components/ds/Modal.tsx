import { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "./Button";

export function Modal({
  open,
  onClose,
  title,
  children,
  primaryLabel = "Confirmar",
  secondaryLabel = "Cancelar",
  onPrimary,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[12px] p-8 max-w-[500px] w-[90%] shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-[24px] font-bold text-[#1a1a1a]">{title}</h2>
          <button onClick={onClose} className="text-[#999] hover:text-[#1a1a1a]">
            <X size={20} />
          </button>
        </div>
        <div className="text-[14px] text-[#444] leading-[1.6] mb-6">
          {children}
        </div>
        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            {secondaryLabel}
          </Button>
          <Button variant="primary" onClick={onPrimary}>
            {primaryLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
