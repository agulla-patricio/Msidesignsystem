import { ReactNode } from "react";

export function Table({
  columns,
  rows,
}: {
  columns: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-hidden rounded-[8px] border border-[#e0e0e0]">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#f5f5f5] border-b border-[#e0e0e0]">
            {columns.map((c) => (
              <th
                key={c}
                className="text-left text-[12px] font-semibold text-[#1a1a1a] px-4 py-3"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b border-[#e0e0e0] last:border-0 hover:bg-[#f9f9f9] transition-colors cursor-pointer"
            >
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="text-[14px] text-[#1a1a1a] px-4 py-3.5"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
