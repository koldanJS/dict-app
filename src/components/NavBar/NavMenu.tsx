import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from '../../types'
import './NavMenu.scss'

interface INavMenuProps {
  clickHandler: (to:string) => void
  links: Link[]
}

const NavMenu: React.FC<INavMenuProps> = (props) => {

  const { clickHandler, links } = props

  return (
    <Box className="nav-menu" >
      {
        links.map((link) => (
          <Button
            key={link.label}
            onClick={() => clickHandler(link.to)}
          >
            {link.label}
          </Button>
        ))
      }
    </Box>
  )
}

export default NavMenu
