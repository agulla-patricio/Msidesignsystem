import { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Selecciona...",
}: {
  label?: string;
  options: { value: string; label: string }[];
  value?: string;
  onChange?: (v: string) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="flex flex-col gap-1.5" ref={ref}>
      {label && (
        <label className="text-[12px] font-medium text-[#444]">{label}</label>
      )}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className={`w-full flex items-center justify-between bg-white rounded-[6px] px-3 py-2.5 text-[14px] border transition-all
            ${open ? "border-[#ff6b35] shadow-[0_4px_12px_rgba(0,0,0,0.1)]" : "border-[#e0e0e0]"}`}
        >
          <span className={selected ? "text-[#1a1a1a]" : "text-[#999]"}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown
            size={16}
            className={`text-[#999] transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="absolute z-50 top-full mt-1 w-full bg-white border border-[#e0e0e0] rounded-[6px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden">
            {options.map((o) => (
              <button
                key={o.value}
                onClick={() => {
                  onChange?.(o.value);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-[14px] text-left hover:bg-[#f5f5f5] transition-colors
                  ${o.value === value ? "bg-[#f5f5f5] font-semibold" : ""}`}
              >
                <span>{o.label}</span>
                {o.value === value && (
                  <Check size={14} className="text-[#ff6b35]" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
