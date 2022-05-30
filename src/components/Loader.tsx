import React from 'react'
import { Box, CircularProgress } from '@mui/material'
import './Loader.scss'

interface ILoaderProps {
  loading: boolean
}

const Loader: React.FC<ILoaderProps> = (props) => {

  const { loading } = props

  return (
    loading
      ? <Box className="loader">
        <CircularProgress />
      </Box>
      : null
  )
}

export default Loader