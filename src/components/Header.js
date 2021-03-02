import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="main-header">
    
      <h2>Mama Mia</h2>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

    </header>
  )
}

export default Header
