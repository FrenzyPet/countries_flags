import { FC } from 'react'
import styled from 'styled-components'
import { Container } from './Container'

const Wrapper = styled.div`
  padding: 1rem 0;

  @media (min-width: 767px) {
    padding: 2rem 0;
  }
`

interface Props {
  children: React.ReactNode
}

const MainContainer: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default MainContainer
