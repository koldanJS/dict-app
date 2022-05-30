import React from 'react'
import './NotFound.scss'

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
    <div className="not-found-container">
      <h1 className="not-found-label">
        {label}
      </h1>
      <div className="not-found-image">
        <img src={notFound} alt="not-found" />
      </div>
      <h2 className="not-found-title">
        {title}
      </h2>
      <p className="not-found-status">
        {status}
      </p>
      <button
        className="not-found-link"
        onClick={clickHandler}
      >
        {returnTo}
      </button>
    </div>
  )
}

export default ErrorComponent