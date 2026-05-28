import { ReactNode } from "react";
import { CheckCircle2, AlertTriangle, XCircle, Info, X } from "lucide-react";

type Variant = "success" | "warning" | "error" | "info";

const config: Record<Variant, { bg: string; text: string; icon: ReactNode }> = {
  success: {
    bg: "#28a745",
    text: "#ffffff",
    icon: <CheckCircle2 size={18} />,
  },
  warning: {
    bg: "#ffc107",
    text: "#1a1a1a",
    icon: <AlertTriangle size={18} />,
  },
  error: { bg: "#dc3545", text: "#ffffff", icon: <XCircle size={18} /> },
  info: { bg: "#17a2b8", text: "#ffffff", icon: <Info size={18} /> },
};

export function Toast({
  variant = "success",
  title,
  message,
}: {
  variant?: Variant;
  title: string;
  message?: string;
}) {
  const c = config[variant];
  return (
    <div
      className="flex items-start gap-3 rounded-[8px] px-5 py-4 shadow-[0_4px_12px_rgba(0,0,0,0.15)] min-w-[300px]"
      style={{ background: c.bg, color: c.text }}
    >
      <div className="mt-0.5">{c.icon}</div>
      <div className="flex-1">
        <div className="text-[14px] font-semibold">{title}</div>
        {message && (
          <div className="text-[13px] opacity-90 mt-0.5">{message}</div>
        )}
      </div>
      <button className="opacity-80 hover:opacity-100" style={{ color: c.text }}>
        <X size={16} />
      </button>
    </div>
  );
}
