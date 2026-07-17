import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 shadow-sm",
        variant === "secondary" &&
          "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
        variant === "outline" &&
          "border-2 border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900",
        variant === "ghost" &&
          "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
        size === "sm" && "px-3 py-1.5 text-sm gap-1.5",
        size === "md" && "px-5 py-2.5 text-sm gap-2",
        size === "lg" && "px-8 py-3.5 text-base gap-2.5",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href: string;
}

export function LinkButton({
  className,
  variant = "primary",
  size = "md",
  children,
  href,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 shadow-sm",
        variant === "secondary" &&
          "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300",
        variant === "outline" &&
          "border-2 border-gray-200 text-gray-700 hover:border-gray-400 hover:text-gray-900",
        variant === "ghost" &&
          "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
        size === "sm" && "px-3 py-1.5 text-sm gap-1.5",
        size === "md" && "px-5 py-2.5 text-sm gap-2",
        size === "lg" && "px-8 py-3.5 text-base gap-2.5",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
