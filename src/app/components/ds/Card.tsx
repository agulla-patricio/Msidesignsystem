import { ReactNode } from "react";

type Variant = "default" | "elevated" | "outlined" | "flat";

const variants: Record<Variant, string> = {
  default:
    "bg-white border border-[#e0e0e0] shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]",
  elevated:
    "bg-white border border-[#e0e0e0] shadow-[0_8px_24px_rgba(0,0,0,0.12)]",
  outlined: "bg-white border border-[#1a1a1a]",
  flat: "bg-[#f5f5f5] border-0",
};

export function Card({
  variant = "default",
  className = "",
  children,
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[8px] p-5 transition-shadow duration-150 ${variants[variant]} ${className}`}
    >
      {children}
    </div>
  );
}
