import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

interface ITabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<ITabPanelProps> = (props) => {

  const { children, value, index } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
    >
      {value === index && (
        <Box sx={{ p: 3}}>
          <Typography component="div" >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  )
}

export default TabPanel