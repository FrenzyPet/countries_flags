import { FC, useState } from 'react'
import Search from './Search'
import CustomSelect from './CustomSelect'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (min-width: 767px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`

interface Option {
  value: string
  label: string
}

const options: Option[] = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'Europe', label: 'Europe' },
]

const Controls: FC = () => {
  const [search, setSearch] = useState<string>('')
  const [region, setRegion] = useState()

  const selectHandler = (value: any) => {
    setRegion(value)
  }

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect options={options} placeholder="filter region" isSearchable={false} isClearable value={region} onChange={selectHandler} />
    </Wrapper>
  )
}

export default Controls
