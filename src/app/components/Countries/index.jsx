import React from 'react'
import { Country } from 'app/components'
import { useGlobal } from 'app/context'
import './countries.css'

export const Countries = () => {
  const { countries } = useGlobal();
  return (
    <div className="countries">
      {countries?.map(country => (
        <Country key={country.name} {...country} />
      ))}
    </div>
  )
}
