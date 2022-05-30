import React from 'react'
import { Menu as MenuIcon } from '@mui/icons-material'
import { Box, IconButton, Typography, Menu, MenuItem } from '@mui/material'
import { Link } from '../../types'
import './DropDownMenu.scss'

interface IDropDownMenuProps {
  anchorElNav: null | HTMLElement
  openNavMenuHandler: (event: React.MouseEvent<HTMLElement>) => void
  closeNavMenuHandler: () => void
  clickHandler: (to:string) => void
  links: Link[]
}

const DropDownMenu: React.FC<IDropDownMenuProps> = (props) => {

  const { anchorElNav, openNavMenuHandler, closeNavMenuHandler, clickHandler, links } = props

  return (
    <Box className="drop-down-menu" >
      <IconButton
        size="large"
        onClick={openNavMenuHandler}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        className="menu"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={Boolean(anchorElNav)}
        onClose={closeNavMenuHandler}
      >
        {
          links.map((link) => (
            <MenuItem key={link.label} onClick={() => clickHandler(link.to)}>
              <Typography textAlign="center">
                {link.label}
              </Typography>
            </MenuItem>
          ))
        }
      </Menu>
    </Box>
  )
}

export default DropDownMenu
