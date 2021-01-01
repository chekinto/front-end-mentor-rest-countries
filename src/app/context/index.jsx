import React, { useState, useEffect, createContext, useContext } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(false)
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
    setLoading(false)
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  if (loading) {
    return <h1>Loading</h1>
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
      theme,
      setTheme
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobal = () => {
  return useContext(AppContext)
}
