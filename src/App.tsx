import axios from 'axios'
import { FC, useEffect, useState } from 'react'

import Card from './components/Card'
import Controls from './components/Controls'
import Header from './components/Header'
import List from './components/List'
import MainContainer from './components/MainContainer'

import { ALL_COUNTRIES } from './config'

interface IFlag {
  alt: string
  png: string
  svg: string
}
interface ICountyName {
  common: string
  official: string
  nativeName: any
}
interface ICountry {
  capital: string[]
  flags: IFlag
  name: ICountyName
  population: number
  region: string
}

const App: FC = () => {
  const [countries, setCountries] = useState<ICountry[]>([])

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
  }, [])

  const handleCountryCard = () => {
    return 1 + 1
  }

  return (
    <>
      <Header />
      <MainContainer>
        <Controls />
        <List>
          {countries.map(cntry => {
            const info = [
              {
                title: 'Population',
                description: cntry.population.toLocaleString(),
              },
              {
                title: 'Region',
                description: cntry.region,
              },
              {
                title: 'Capital',
                description: cntry.capital[0],
              },
            ]
            return (
              <Card
                key={cntry.name.common}
                img={cntry.flags.png}
                name={cntry.name.common}
                info={info}
                onClick={handleCountryCard}
              />
            )
          })}
        </List>
      </MainContainer>
    </>
  )
}

export default App
