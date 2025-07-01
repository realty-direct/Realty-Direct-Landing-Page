'use client';

import Image from 'next/image';
import { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  quality?: number;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
  sizes,
  quality = 85,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Extract base filename without extension
  const baseSrc = src.replace(/\.(jpg|jpeg|png|webp|avif)$/i, '');
  
  // Check if WebP version exists (assuming same directory structure)
  const webpSrc = `${baseSrc}.webp`;

  // Since we're using static export, we'll use a picture element for modern format support
  return (
    <picture className={className}>
      {/* WebP source (good compression, good support) */}
      <source
        srcSet={webpSrc}
        type="image/webp"
      />
      
      {/* Fallback to original format */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={`
          transition-opacity duration-300 ease-in-out
          ${isLoading ? 'opacity-0' : 'opacity-100'}
          ${className}
        `}
        onLoad={() => setIsLoading(false)}
        unoptimized
      />
      
      {/* Loading skeleton */}
      {isLoading && fill && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-pulse" />
      )}
    </picture>
  );
};