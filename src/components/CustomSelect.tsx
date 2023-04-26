import Select from 'react-select'
import styled from 'styled-components'

// const CustomSelect: ThemedStyledFunction<Select, any, {}, never> = styled(Select)

const CustomSelect = styled(Select).attrs({
  styles: {},
})

export default CustomSelect
