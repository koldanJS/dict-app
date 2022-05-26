import React from 'react'
import { Menu as MenuIcon } from '@mui/icons-material'
import {
  Box,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@mui/material'
import { Link } from '../../types'

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
    <Box sx={{ flexGrow: 1, width: '100px', display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        onClick={openNavMenuHandler}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
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
        sx={{
          display: { xs: 'block', md: 'none' }
        }}
      >
        {links.map((link) => (
          <MenuItem key={link.label} onClick={() => clickHandler(link.to)}>
            <Typography textAlign="center">{link.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
export default DropDownMenu
