import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppProvider } from 'app/context'
import { Country, Home } from './pages'
import { Header } from './components'
import './index.css'

export const App = () => {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country/:country">
            <Country />
          </Route>
        </Switch>
      </Router>
    </AppProvider>
  )
}
