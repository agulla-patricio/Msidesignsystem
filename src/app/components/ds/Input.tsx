import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export function Input({ label, error, hint, className = "", ...rest }: Props) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-[12px] font-medium text-[#444]">{label}</label>
      )}
      <input
        className={`bg-white rounded-[6px] px-3 py-2.5 text-[14px] border outline-none transition-all duration-150
          ${error
            ? "border-[#dc3545] bg-[#ffe0e0]"
            : "border-[#e0e0e0] hover:border-[#999] focus:border-[#ff6b35] focus:shadow-[0_0_0_3px_rgba(255,107,53,0.2)]"
          }
          disabled:bg-[#f5f5f5] disabled:text-[#999]
          ${className}`}
        {...rest}
      />
      {error ? (
        <span className="text-[12px] text-[#dc3545]">{error}</span>
      ) : hint ? (
        <span className="text-[12px] text-[#999]">{hint}</span>
      ) : null}
    </div>
  );
}
