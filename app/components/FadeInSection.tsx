'use client'

import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface FadeInSectionProps {
  children: ReactNode
  delay?: number
  className?: string
}

const FadeInSection = ({ children, delay = 0, className }: FadeInSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection
