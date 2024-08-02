'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import clsx from 'clsx'

export default function Item({ data }: { data: { id: number; name: string } }) {
  const ref = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.1, 1])

  // trying to trigger a recalculation for useScroll
  useEffect(() => {
    // window.scrollBy({ top: 100 })
    window.scrollBy({ top: 1 })
    window.scrollBy({ top: -1 })
  })

  return (
    <motion.article
      key={data.id}
      ref={ref}
      className={clsx('p-4 h-72', 'flex items-center justify-center', {
        'bg-green-300': data.name === 'green',
        'bg-blue-300': data.name === 'blue',
        'bg-red-300': data.name === 'red',
      })}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <h3>{data.id}</h3>
    </motion.article>
  )
}
