import React from 'react'
import { useGlobal } from 'app/context'
import './input.css'

export const Input = ({ placeholder, type = "text", value, onChange }) => {
  const { fetchByName, setQuery } = useGlobal()

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchByName(value)
    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </form>
  )
}
