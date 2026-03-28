import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { ImageProps } from "@/types";
import FallbackImage from "./FallbackImage";

const imageSizes = {
  avatar: "32px",
  thumbnail: "100px",
  small: "200px",
  medium: "400px",
  large: "800px",
  hero: "1200px",
};

export default function OptimizedImage({
  className,
  src,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  sizes,
  quality = 75,
  ...props
}: ImageProps) {
  // Auto-generate sizes based on common use cases
  const generateSizes = (w?: number, h?: number): string => {
    if (sizes) return sizes;
    
    if (w && h) {
      if (w <= 50) return "(max-width: 640px) 32px, 32px";
      if (w <= 150) return "(max-width: 640px) 100px, 100px";
      if (w <= 300) return "(max-width: 640px) 200px, (max-width: 1024px) 250px, 300px";
      if (w <= 500) return "(max-width: 640px) 350px, (max-width: 1024px) 450px, 500px";
    }
    
    return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
  };

  const imageClasses = cn(
    "object-cover",
    fill && "absolute inset-0",
    className
  );

  if (fill) {
    return (
      <FallbackImage
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={generateSizes(width, height)}
        quality={quality}
        className={imageClasses}
        {...props}
      />
    );
  }

  if (!width || !height) {
    console.warn("OptimizedImage: width and height are required when fill is false");
    return null;
  }

  return (
    <FallbackImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={generateSizes(width, height)}
      quality={quality}
      className={imageClasses}
      {...props}
    />
  );
}
