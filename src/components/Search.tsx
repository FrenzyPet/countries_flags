import { FC } from 'react'
import { IoSearch } from 'react-icons/io5'
import styled from 'styled-components'

const InputWrapper = styled.label`
  display: flex;
  align-items: center;
  background-color: var(--color-ui-base);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  padding: 1rem 1rem;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`

const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'search country...',
})`
  margin-left: 1rem;
  outline: none;
  border: none;
  color: var(--color-text);
  background-color: var(--color-ui-base);
`

interface SearchProps {
  search: string
  setSearch: (searchValue: string) => void
}

const Search: FC<SearchProps> = ({ search, setSearch }) => {
  return (
    <InputWrapper>
      <IoSearch />
      <Input onChange={evt => setSearch(evt.target.value)} value={search} />
    </InputWrapper>
  )
}

export default Search
