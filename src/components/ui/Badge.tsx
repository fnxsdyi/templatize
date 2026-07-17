"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "sale" | "new" | "category";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "bg-gray-100 text-gray-700",
        variant === "sale" && "bg-red-100 text-red-700",
        variant === "new" && "bg-green-100 text-green-700",
        variant === "category" && "bg-indigo-50 text-indigo-700",
        className
      )}
    >
      {children}
    </span>
  );
}
