import React from 'react'
import { Box } from '@mui/material'
import './TabPanel.scss'

interface ITabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const TabPanel: React.FC<ITabPanelProps> = (props) => {

  const { children, value, index } = props

  return (
    <div hidden={value !== index}>
      {value === index && (
        <Box className="tab-panel">
          <div>
            {children}
          </div>
        </Box>
      )}
    </div>
  )
}

export default TabPanel