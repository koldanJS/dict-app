import React from 'react'
import { NavLink } from 'react-router-dom'

interface Link {
  to: string
  label: string
}

const NavBar: React.FC = () => {

  const links: Link[] = [
    {to: '/', label: 'Home'},
    {to: '/result', label: 'Details'}
  ]

  return (
    <nav>
      <ul>
        {
          links.map(link => {
            return (
              <li key={link.label} >
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {link.label}
                </NavLink>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default NavBar