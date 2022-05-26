import React, { useState } from 'react'
import {
  Box,
  FormGroup,
  FormControlLabel,
  Switch
} from '@mui/material'

const ToggleTheme: React.FC = () => {

  const [theme, setTheme] = useState({name: 'White', isChecked: false})

  const toggleTheme = () => {
    if (theme.isChecked === false) {
      setTheme({name: 'Dark', isChecked: true})
    } else {
      setTheme({name: 'White', isChecked: false})
    }
  }

  return (
    <Box sx={{ flexGrow: 0, width: '100px' }}>
      <FormGroup>
        <FormControlLabel
          labelPlacement="start"
          control={
            <Switch
              checked={theme.isChecked}
              onChange={toggleTheme}
            />
          }
          label={theme.name}
        />
      </FormGroup>
    </Box>
  )
}

export default ToggleTheme