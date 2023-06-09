import { FC, ReactNode } from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`

interface IListProps {
  children: ReactNode
}

const List: FC<IListProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default List
