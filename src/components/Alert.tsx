import React from 'react'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'

const AlertComponent: React.FC = () => {
  return (
    <Stack sx={{ width: '100%', m: '10px 0' }} spacing={2}>
      <Alert severity="warning">Looks like you didn\'t enter anything...</Alert>
    </Stack>
  )
}

export default AlertComponent