import React from "react";
import { cn } from "@/lib/utils";
import { BadgeProps } from "@/types";

const badgeVariants = {
  variant: {
    default: "bg-white border border-gray-200 text-gray-700",
    soft: "bg-gray-100 text-gray-600",
    highlight: "bg-purple-500 text-white",
    gradient: "bg-gradient-to-r from-[#8F9CD3] to-[#FFCAA4] text-white",
  },
  size: {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
  },
};

export default function Badge({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium",
        badgeVariants.variant[variant],
        badgeVariants.size[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
