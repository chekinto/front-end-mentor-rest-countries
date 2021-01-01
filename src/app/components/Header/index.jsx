import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from 'app/context'
import { ReactComponent as MoonIcon } from 'app/assets/moon.svg';
import { ReactComponent as SunIcon } from 'app/assets/sun.svg';
import './header.css'

export const Header = () => {
  const { isDark, setIsDark } = useGlobal()
  const toggleIcon = isDark ? <MoonIcon className="header__toggler-icon" /> : <SunIcon className="header__toggler-icon" />

  return (
    <header>
      <div className="container header">
        <div className="header__inner">
          <Link className="header__logo" to="/">Where in the World?</Link>
          <div className="header__toggler" onClick={() => setIsDark(!isDark)}>
            {toggleIcon}
            <span className="header__toggler-text">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
          </div>
        </div>
      </div>
    </header>
  )
}
