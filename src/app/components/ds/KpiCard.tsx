import { ReactNode } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export function KpiCard({
  icon,
  label,
  value,
  unit,
  trend,
  trendValue,
}: {
  icon?: ReactNode;
  label: string;
  value: string | number;
  unit?: string;
  trend?: "up" | "down";
  trendValue?: string;
}) {
  const trendColor = trend === "up" ? "#28a745" : "#dc3545";
  return (
    <div className="bg-white border border-[#e0e0e0] rounded-[8px] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow">
      <div className="flex items-center gap-2 text-[12px] text-[#999]">
        {icon}
        <span>{label}</span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-[32px] font-bold text-[#1a1a1a] leading-none">
          {value}
        </span>
        {unit && <span className="text-[12px] text-[#999]">{unit}</span>}
      </div>
      {trendValue && (
        <div
          className="mt-3 flex items-center gap-1 text-[12px] font-medium"
          style={{ color: trendColor }}
        >
          {trend === "up" ? <ArrowUp size={12} /> : <ArrowDown size={12} />}
          <span>{trendValue}</span>
        </div>
      )}
    </div>
  );
}
