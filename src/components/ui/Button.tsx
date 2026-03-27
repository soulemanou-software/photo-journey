import React from "react";
import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types";

const buttonVariants = {
  variant: {
    primary: "bg-gradient-to-r from-[#8F9CD3] to-[#FFCAA4] text-white hover:opacity-90 transition-opacity",
    secondary: "bg-gradient-to-r from-[#AD54F0] to-[#D24DBC] text-white hover:opacity-90 transition-opacity",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors",
  },
  size: {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  },
};

export default function Button({
  className,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center rounded-full font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8F9CD3]",
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
