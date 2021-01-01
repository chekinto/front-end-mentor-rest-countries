import React, { useState } from 'react'
import { ReactComponent as ChevronDown } from 'app/assets/chevron-down.svg';
import { useGlobal } from 'app/context'
import options from 'app/data/options.json'
import './options.css'

export const Options = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [option, setOption] = useState('Filter by Region')
  const { fetchByRegion, fetchCountries } = useGlobal()

  const handleDropdown = (e, option) => {
    if (option === 'Filter by Region') {
      setOption(option)
      fetchCountries()
      setIsOpen(false)
    } else {
      setOption(option)
      fetchByRegion(option)
      setIsOpen(false)
    }
  }

  return (
    <>
      <div className="options__container">
        <div className="options" onClick={() => { setIsOpen(!isOpen) }}>
          <span>{option}</span>
          <ChevronDown width={12} height={12} />
        </div>

        {isOpen && (
          <ul className="options__dropdown">
            {options.map(({ option }) => (
              <li
                key={option.name}
                onClick={(e) => handleDropdown(e, option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )

}