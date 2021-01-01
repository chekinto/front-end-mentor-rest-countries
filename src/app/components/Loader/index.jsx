import React from 'react'
import './loader.css'

export const Loader = () => {
  return (
    <div className="loader__container">
      <div>
        <div className="loader">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
        <div className="loader__text">Loading...</div>
      </div>
    </div>
  )
}
