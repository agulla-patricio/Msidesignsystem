import { ReactNode } from "react";

type Variant = "default" | "primary" | "success" | "warning" | "error" | "info";

const variants: Record<Variant, string> = {
  default: "bg-[#f5f5f5] text-[#1a1a1a]",
  primary: "bg-[#1a1a1a] text-white",
  success: "bg-[#28a745] text-white",
  warning: "bg-[#ffc107] text-[#1a1a1a]",
  error: "bg-[#dc3545] text-white",
  info: "bg-[#17a2b8] text-white",
};

export function Badge({
  variant = "default",
  children,
}: {
  variant?: Variant;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center px-2 py-1 rounded-[4px] text-[12px] font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
