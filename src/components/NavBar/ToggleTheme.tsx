import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, FormGroup, FormControlLabel, Switch } from '@mui/material'
import { toggleTheme } from '../../redux/actions/wordAction'

interface IToggleThemeProps {
  theme: string
}

const ToggleTheme: React.FC<IToggleThemeProps> = (props) => {

  const { theme } = props
  const dispatch = useDispatch()

  return (
    <Box sx={{ flexGrow: 0, width: '100px' }}>
      <FormGroup>
        <FormControlLabel
          labelPlacement="start"
          control={
            <Switch
              checked={theme === 'Dark'}
              onChange={() => dispatch(toggleTheme())}
            />
          }
          label={theme}
        />
      </FormGroup>
    </Box>
  )
}

export default ToggleTheme