import React from "react";
import { cn } from "@/lib/utils";
import { CardProps } from "@/types";

const cardVariants = {
  padding: {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  },
  rounded: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl",
    full: "rounded-full",
  },
  shadow: {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  },
};

export default function Card({
  className,
  padding = "md",
  rounded = "lg",
  shadow = "md",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-white",
        cardVariants.padding[padding],
        cardVariants.rounded[rounded],
        cardVariants.shadow[shadow],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
