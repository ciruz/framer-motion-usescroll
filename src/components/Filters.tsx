import clsx from 'clsx'
import React from 'react'

export default function Filters({
  activeFilters,
  setActiveFilters,
}: {
  activeFilters: string[]
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const filters = ['red', 'green', 'blue']

  const toggleFilter = (filter: string) => {
    setActiveFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((f) => f !== filter)
        : [...prevFilters, filter]
    )
  }

  return (
    <div className="py-4">
      <h3 className="font-bold mb-2">Filters ({activeFilters.length})</h3>
      <ul className="flex space-x-2">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              className={clsx(
                'px-2 py-1 rounded-md cursor-pointer duration-300 ease-in-out',
                activeFilters.includes(filter) ? 'bg-gray-400' : 'bg-gray-100'
              )}
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
