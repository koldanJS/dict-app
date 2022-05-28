import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Container } from '@mui/material'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Link } from '../../types'
import AppLogo from './AppLogo'
import DropDownMenu from './DropDownMenu'
import NavMenu from './NavMenu'
import ToggleTheme from './ToggleTheme'

const ResponsiveAppBar: React.FC = () => {

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const navigate = useNavigate()

  const wordState = useTypedSelector(state => state.wordState)

  const links: Link[] = [
    {to: '/', label: 'Home'},
    {to: `/result/${wordState.word}`, label: 'Details'}
  ]

  const openNavMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const closeNavMenuHandler = () => {
    setAnchorElNav(null)
  }


  const clickHandler = (to: string) => {
    closeNavMenuHandler()
    navigate(to)
  }

  return (
    <AppBar position="fixed">
      <Container>
        <Toolbar disableGutters>
          <DropDownMenu
            anchorElNav={anchorElNav}
            openNavMenuHandler={openNavMenuHandler}
            closeNavMenuHandler={closeNavMenuHandler}
            clickHandler={clickHandler}
            links={links}
          />
          <AppLogo />
          <NavMenu
            clickHandler={clickHandler}
            links={links}
          />
          <ToggleTheme />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default ResponsiveAppBar
