import React, { useState, useEffect, createContext, useContext } from 'react'
import { Loader } from 'app/components'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const theme = localStorage.getItem('theme')
  const [isDark, setIsDark] = useState(theme === 'dark' ? true : false)
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [region, setRegion] = useState('')
  const [name, setName] = useState('')
  const [query, setQuery] = useState('')
  const baseUrl = 'https://restcountries.eu/rest/v2'

  const fetchCountries = async () => {
    const fetchData = await fetch(`${baseUrl}/all`)
    const data = await fetchData.json()
    setCountries(data)
    setLoading(false)
  }

  const fetchByRegion = async (region) => {
    setRegion(region)
    const fetchRegion = await fetch(`${baseUrl}/region/${region}`)
    const regionData = await fetchRegion.json()
    setCountries(regionData)
  }

  const fetchByName = async (query) => {
    const fetchName = await fetch(`${baseUrl}/name/${query}`)
    const nameData = await fetchName.json()
    setCountries(nameData)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      localStorage.setItem('theme', 'light');
    }
  }, [isDark])



  if (loading) {
    return <Loader />
  }
  return (
    <AppContext.Provider value={{
      countries,
      setCountries,
      loading,
      setLoading,
      name,
      setName,
      query,
      setQuery,
      fetchCountries,
      fetchByRegion,
      fetchByName,
      isDark,
      setIsDark
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext(AppContext)
}
