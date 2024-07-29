'use client'

import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

import useData from '@/hooks/useData'

import Filters from './Filters'
import Item from './Item'

export default function ItemList() {
  const items = useData()

  const [activeFilters, setActiveFilters] = useState<string[]>([])

  const filteredItems = items.filter(
    (item) => activeFilters.length === 0 || activeFilters.includes(item.name)
  )

  return (
    <section className="container mx-auto min-h-screen">
      <h2 className="font-bold py-4 text-lg">ItemList</h2>
      <Filters
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}
