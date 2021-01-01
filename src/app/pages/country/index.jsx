import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { formatPopulation } from 'app/helpers'
import { ReactComponent as LeftArrow } from 'app/assets/arrow-left.svg'
import './country.css'

export const Country = (props) => {
  const [country, setCountry] = useState([])
  const { goBack } = useHistory()
  const name = useParams()

  console.table('country[0].languages :>> ', country[0]?.languages.map((l, i) => l.name));

  useEffect(() => {
    const fetchCountry = async () => {
      const fetchCountry = await fetch(`https://restcountries.eu/rest/v2/name/${name.country}`)
      const countryData = await fetchCountry.json()
      setCountry(countryData)
    }
    fetchCountry()
  }, [name.country])

  return (
    <main>
      <div className="country__page">
        <div className="container">
          <div>
            <button className="country__page-btn" onClick={() => goBack()}>
              <LeftArrow />
              <span>Back</span>
            </button>
          </div>

          <div className="country__page-content">
            <div className="country__page-flag">
              <img src={country[0]?.flag} alt="" />
            </div>

            <div className="country__page-info">
              <h2>{country[0]?.name}</h2>
              <div className="country__page-details">
                <div>
                  <p>
                    <strong>Native Name:</strong>{' '}
                    {country[0]?.nativeName}
                  </p>
                  <p>
                    <strong>Population:</strong>{' '}
                    {formatPopulation(country[0]?.population)}
                  </p>
                  <p>
                    <strong>Region:</strong>{' '}
                    {country[0]?.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong>{' '}
                    {country[0]?.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong>{' '}
                    {country[0]?.capital !== '' ? country[0]?.capital : 'N/A'}
                  </p>
                </div>

                <div>
                  <p>
                    <strong>Top Level Domain:</strong>{' '}
                    {country[0]?.topLevelDomain.map(domain => (
                      <span>{domain}</span>
                    ))}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{' '}
                    {country[0]?.currencies.map(currency =>
                      <span>{currency.name}</span>
                    )}
                  </p>
                  <p>
                    <strong>Languages:</strong>{' '}
                    {country[0]?.languages.map(language => (
                      <span>{language.name},</span>
                    ))}
                  </p>
                </div>
              </div>

              <div className="page__content-borders">
                <p><strong>Border Countries: </strong></p>
                <div>
                  {country[0]?.borders.map(border => (
                    <div className="border__countries">{border}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
