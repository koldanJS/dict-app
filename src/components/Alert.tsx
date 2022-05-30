import React from 'react'
import { Stack, Alert } from '@mui/material'
import './Alert.scss'

interface AlertProps {
  message: string
}

const AlertComponent: React.FC<AlertProps> = (props) => {

  const { message } = props

  return (
    <Stack className="alert" spacing={2}>
      <Alert severity="warning">{message}</Alert>
    </Stack>
  )
}

export default AlertComponent