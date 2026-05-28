import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-[8px] font-semibold transition-all duration-150 ease-in-out cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#ff6b35] text-white hover:bg-[#f55a24] active:bg-[#e94a14] disabled:bg-[#cccccc] disabled:text-[#999]",
  secondary:
    "bg-[#f5f5f5] text-[#1a1a1a] border border-[#e0e0e0] hover:bg-[#efefef] active:bg-[#e0e0e0]",
  ghost: "bg-transparent text-[#1a1a1a] hover:bg-[#f5f5f5]",
  danger: "bg-[#dc3545] text-white hover:opacity-90",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-[13px]",
  md: "px-6 py-3 text-[14px]",
  lg: "px-8 py-[14px] text-[15px]",
};

export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
