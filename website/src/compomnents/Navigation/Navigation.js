import React, { useState } from 'react'
import {Nav, Navbar, Container} from 'react-bootstrap'
import './Navigation.css'

function Navigation() {

  const [top, setTop] = useState(true);
  const changeColor = () => {
    if (window.scrollY >= 10)
      setTop(false);
    else
      setTop(true);
  }

  window.addEventListener('scroll', changeColor);

  return (
    <div className={top ? 'navigation navigationTop' : 'navigation'}>
      <a className={top ? 'navigationLink navigationLinkTop' : 'navigationLink'}>Home</a>
      <a className={top ? 'navigationLink navigationLinkTop' : 'navigationLink'}>Projects</a>
      <a className={top ? 'navigationLink navigationLinkTop' : 'navigationLink'}>About</a>
    </div>
  )
}

export default Navigation