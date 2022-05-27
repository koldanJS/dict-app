import React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

interface AlertProps {
  message: string
}

const AlertComponent: React.FC<AlertProps> = (props) => {

  const { message } = props

  return (
    <Stack sx={{ width: '100%', m: '10px 0' }} spacing={2}>
      <Alert severity="warning">{message}</Alert>
    </Stack>
  )
}

export default AlertComponent