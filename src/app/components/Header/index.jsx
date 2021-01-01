import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from 'app/context'
import { ReactComponent as MoonIcon } from 'app/assets/moon.svg';
import { ReactComponent as SunIcon } from 'app/assets/sun.svg';
import './header.css'

export const Header = () => {
  const { theme, setTheme } = useGlobal()
  return (
    <header>
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to="/">Where in the World?</Link>
          <div className="header__toggler" onClick={() => setTheme(!theme)}>
            {theme ? (
              <>
                <MoonIcon className="header__toggler-icon" />
                <span className="header__toggler-text">Dark Mode</span>
              </>
            ) : (
                <>
                  <SunIcon className="header__toggler-icon" />
                  <span className="header__toggler-text">Light Mode</span>
                </>
              )}
          </div>
        </div>
      </div>
    </header>
  )
}
