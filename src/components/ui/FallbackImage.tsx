import Image from 'next/image';
import { useState } from 'react';

// Data URL for a simple placeholder image
const PLACEHOLDER_DATA_URL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjRjBGMUZBIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwQzE3Mi4zODkgMTUwIDE1MCAxNzIuMzg5IDE1MCAyMDBDMTUwIDIyNy42MTEgMTcyLjM4OSAyNTAgMjAwIDI1MEMyMjcuNjExIDI1MCAyNTAgMjI3LjYxMSAyNTAgMjAwQzI1MCAxNzIuMzg5IDIyNy42MTEgMTUwIDIwMCAxNTBaIiBmaWxsPSIjOEU5Q0QzIi8+CjxwYXRoIGQ9Ik0yMDAgMTc1QzE4Ni4xOTMgMTc1IDE3NSAxODYuMTkzIDE3NSAyMDBDMTc1IDIxMy44MDcgMTg2LjE5MyAyMjUgMjAwIDIyNUMyMTMuODA3IDIyNSAyMjUgMjEzLjgwNyAyMjUgMjAwQzIyNSAxODYuMTkzIDIxMy44MDcgMTc1IDIwMCAxNzVaIiBmaWxsPSIjRjBGMUZBIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjgwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOEU5Q0QzIiBmb250LXNpemU9IjE2IiBmb250LWZhbWlseT0iQXJpYWwiPkltYWdlIE5vdCBBdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=';

interface FallbackImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
  fallbackSrc?: string;
}

export default function FallbackImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  quality = 75,
  fallbackSrc = PLACEHOLDER_DATA_URL,
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(fallbackSrc);
      console.warn(`Failed to load image: ${src}, using fallback`);
    }
  };

  const imageProps = {
    src: imgSrc,
    alt,
    className,
    sizes,
    priority,
    quality,
    onError: handleError,
  };

  if (fill) {
    return <Image {...imageProps} fill />;
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
    />
  );
}
