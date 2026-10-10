import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "orange" | "lime" | "cyan" | "silver" | "dark" | "outline" | "danger" | "warning";
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "orange",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    orange: "bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/30 shadow-[0_0_15px_rgba(255,85,0,0.15)]",
    lime: "bg-[#FF5500]/10 text-[#FF5500] border border-[#FF5500]/30 shadow-[0_0_15px_rgba(255,85,0,0.15)]", // Aliased to orange theme
    cyan: "bg-[#FF7700]/15 text-[#FFAA00] border border-[#FF7700]/30 shadow-[0_0_15px_rgba(255,119,0,0.12)]",
    silver: "bg-white/[0.08] text-slate-200 border border-white/15",
    dark: "bg-[#12151F] text-slate-300 border border-white/10",
    outline: "border border-white/15 text-slate-300",
    danger: "bg-red-500/10 text-red-400 border border-red-500/30",
    warning: "bg-amber-500/10 text-amber-400 border border-amber-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
