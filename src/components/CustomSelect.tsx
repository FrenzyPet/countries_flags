import Select from 'react-select'
import styled from 'styled-components'

const CustomSelect = styled(Select).attrs({
  styles: {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: 'var(--color-ui-base)',
      color: 'var(--color-text)',
      border: 'none',
      borderRadius: 'var(--radius)',
      padding: '0.25rem',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (styles: any, state: any) => ({
      ...styles,
      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: state.isSelected ? 'var(--color-bg)' : 'var(--color-ui-base)',
    }),
    singleValue: (styles: any, state: any) => ({
      ...styles,
      color: 'var(--color-text)',
    }),
  },
})`
  width: 100%;
  font-family: var(--family);
  border: none;

  & > div[id] {
    background-color: var(--color-ui-base);
  }

  @media (min-width: 767px) {
    width: auto;
    min-width: 160px;
  }
`

export default CustomSelect
