'use client'

import { useState } from 'react'

interface SafeImageProps {
  src: string
  alt: string
  className?: string
}

export function SafeImage({ src, alt, className = "" }: SafeImageProps) {
  const [error, setError] = useState(false)

  const fallback = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop'

  return (
    <img
      src={error ? fallback : src}
      alt={alt}
      onError={() => setError(true)}
      className={className}
    />
  )
}
