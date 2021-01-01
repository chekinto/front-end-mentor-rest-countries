import React from 'react'
import { Countries, Input, Options } from 'app/components'
import { useGlobal } from 'app/context'
import './home.css'

export const Home = () => {
  const { query, setQuery } = useGlobal()
  return (
    <main>
      <div className="container">
        <div className="filter__wrapper">
          <Input placeholder="Search for a country..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <Options />
        </div>
        <Countries />
      </div>
    </main>
  )
}
