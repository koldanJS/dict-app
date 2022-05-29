import React from 'react'
import { Box, Button } from '@mui/material'
import { Link } from '../../types'

interface INavMenuProps {
  clickHandler: (to:string) => void
  links: Link[]
}

const NavMenu: React.FC<INavMenuProps> = (props) => {

  const { clickHandler, links } = props

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' }
      }}
    >
      {
        links.map((link) => (
          <Button
            key={link.label}
            onClick={() => clickHandler(link.to)}
            sx={{
              my: 2,
              color: 'white',
              display: 'block'
            }}
          >
            {link.label}
          </Button>
        ))
      }
    </Box>
  )
}

export default NavMenu
