import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from './Container'
import { IoMoonOutline, IoMoonSharp } from 'react-icons/io5'

const HeaderElement = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--color-bg);
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

const Title = styled.a.attrs({
  href: '/',
})`
  color: var(--color-text);
  font-size: var(--fs-mid);
  font-weight: var(--fw-bold);
  text-decoration: none;
`

const ThemeSwitcher = styled.div`
  min-width: 90px;
  color: var(--color-text);
  font-size: var(--fs-small);
  font-weight: var(--fw-normal);
  cursor: pointer;
  text-transform: capitalize;
`

enum ThemeNames {
  LIGHT = 'light',
  DARK = 'dark',
}

const Header: FC = () => {
  const [theme, setTheme] = useState<ThemeNames>(ThemeNames.LIGHT)

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  const toogleTheme = (): void => {
    const currentTheme = theme === ThemeNames.LIGHT ? ThemeNames.DARK : ThemeNames.LIGHT
    setTheme(currentTheme)
  }

  return (
    <HeaderElement>
      <Container>
        <Wrapper>
          <Title>Where in the world?</Title>
          <ThemeSwitcher onClick={toogleTheme}>
            {theme === ThemeNames.LIGHT ? <IoMoonOutline size="14px" /> : <IoMoonSharp size="14px" />}
            <span style={{ marginLeft: '0.5rem' }}>{theme} theme</span>
          </ThemeSwitcher>
        </Wrapper>
      </Container>
    </HeaderElement>
  )
}

export default Header
