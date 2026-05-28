import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-16 border-b border-[#e0e0e0] last:border-0">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="mb-10">
          {eyebrow && (
            <div className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#ff6b35] mb-2">
              {eyebrow}
            </div>
          )}
          <h2 className="text-[32px] font-bold text-[#1a1a1a] leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-[15px] text-[#444] mt-3 max-w-[700px] leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
