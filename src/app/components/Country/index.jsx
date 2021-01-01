import React from 'react'
import { Link } from 'react-router-dom'
import { formatPopulation } from 'app/helpers'
import './country.css'

export const Country = ({ capital, flag, name, population, region }) => {
  return (
    <Link to={`country/${name}`}>
      <div className="country">
        <div className="country__flag" style={{ backgroundImage: `url(${flag})` }} />
        <div className="country__content">
          <h3>{name}</h3>
          <p><span>Population</span>: {formatPopulation(population)}</p>
          <p><span>Region</span>: {region}</p>
          <p><span>Capital</span>: {capital !== '' ? capital : 'N/A'}</p>
        </div>
      </div>
    </Link>
  )
}
