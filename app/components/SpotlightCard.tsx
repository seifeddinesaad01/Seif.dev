'use client'

import React, { ReactNode, useRef } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
}

// Card with a soft brand glow that follows the cursor.
const SpotlightCard = ({ children, className = '' }: SpotlightCardProps) => {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--x', `${e.clientX - rect.left}px`)
    el.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`spotlight rounded-3xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong ${className}`}
    >
      {children}
    </div>
  )
}

export default SpotlightCard
