import { FC } from 'react'
import Header from './components/Header'
import Controls from './components/Controls'
import MainContainer from './components/MainContainer'

const App: FC = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Controls />
      </MainContainer>
    </>
  )
}

export default App
