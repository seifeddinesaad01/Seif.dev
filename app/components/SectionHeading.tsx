import React, { ReactNode } from 'react'

interface SectionHeadingProps {
  index?: string
  label: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}

// Mono "index — label" eyebrow, large display title, optional lede.
const SectionHeading = ({ index, label, title, description, align = 'left' }: SectionHeadingProps) => {
  const centered = align === 'center'
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className={`mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-dim ${centered ? 'justify-center' : ''}`}>
        {index && <span className="text-brand">{index}</span>}
        <span className="h-px w-8 bg-line-strong" />
        {label}
      </p>
      <h2 className="text-[clamp(2.25rem,5vw,4rem)] font-medium leading-[1.02] tracking-[-0.03em] text-fg">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 max-w-xl text-lg leading-relaxed text-dim ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
