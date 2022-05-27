import React from 'react'
import { Typography } from '@mui/material'
import './Error.css'

interface IErrorComponentProps {
  label: string
  title: string
  status: string
  returnTo: string
  clickHandler: () => void
  notFound: string
}

const ErrorComponent: React.FC<IErrorComponentProps> = (props) => {

  const { label, title, status, returnTo, clickHandler, notFound } = props

  return (
    <div className="error-container">
      <Typography
        variant="h1"
        component="h1"
        sx={{
          fontFamily: 'monospace',
          fontWeight: 700,
          color: 'inherit',
          letterSpacing: '.3rem',
          mb: '30px'
        }}
      >
        {label}
      </Typography>
      <div className="error-image">
        <img src={notFound} alt="not-found" />
      </div>
      <Typography
        variant="h4"
        component="h4"
        width="350px"
        sx={{
          color: 'inherit'
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        component="p"
        sx={{
          fontWeight: 700,
          color: 'inherit',
          m: '20px 0'
        }}
      >
        {status}
      </Typography>
      <Typography
        variant="body2"
        component="a"
        onClick={clickHandler}
        sx={{
          fontWeight: 700,
          textDecoration: 'underline',
          cursor: 'pointer',
          color: 'inherit'
        }}
      >
        {returnTo}
      </Typography>
    </div>
  )
}

export default ErrorComponent