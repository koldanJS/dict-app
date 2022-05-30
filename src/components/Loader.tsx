import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

interface ILoaderProps {
  loading: boolean
}

const Loader: React.FC<ILoaderProps> = (props) => {

  const { loading } = props

  return (
    loading
      ? <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3
        }}
      >
        <CircularProgress />
      </Box>
      : null
  )
}

export default Loader