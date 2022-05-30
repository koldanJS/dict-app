import React from 'react'
import { useDispatch } from 'react-redux'
import { Box, FormGroup, FormControlLabel, Switch } from '@mui/material'
import { toggleTheme } from '../../redux/actions/wordAction'
import './ToggleTheme.scss'

interface IToggleThemeProps {
  theme: string
}

const ToggleTheme: React.FC<IToggleThemeProps> = (props) => {

  const { theme } = props
  const dispatch = useDispatch()

  return (
    <Box className="toggle-theme" >
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