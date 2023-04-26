import { FC, useState } from 'react'
import Search from './Search'

const Controls: FC = () => {
  const [search, setSearch] = useState<string>('')
  return (
    <div>
      <Search search={search} setSearch={setSearch} />
    </div>
  )
}

export default Controls
