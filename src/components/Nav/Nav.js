import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <nav className="nav">
      <span className="nav__text">Work in progress</span>
      <div className="nav__menu container">
        <div className="nav__logo">Cupcake</div>
        <div className="nav__links">
          <a href="#.com">Clothes</a>
          <a href="#.com">Jewelery</a>
        </div>
      </div>
      <span className="nav__text2">
        <span>⏱️Everything 50% off until {new Date((new Date()).getTime() + (60 * 60 * 24 * 1000)).toLocaleDateString('en-US', { day: 'numeric', month: 'numeric' })}</span>
        <span className="nav__text2_sub">The more you buy, the more you save!</span>
      </span>
    </nav>
  )
}

export default Nav