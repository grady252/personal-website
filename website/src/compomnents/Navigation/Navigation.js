import React, { useState } from 'react'
import { useScroll } from '../../hooks/scrollHook';
import Constants from '../../constants/constants';

import './Navigation.css'

function Navigation() {

  let scroll = useScroll();

  const display = () => {
    let min = window.innerHeight / 5;
    if (window.location.href !== Constants.home)
      return 'navigation solid'
    if (scroll > min && scroll < 750)
      return 'navigation hidden';
    else if (scroll > 750)
      return 'navigation solid';
    else
      return 'navigation';
  }

  return (
    <div className={display()}>
      <a className={'navigationLink'} href='/'>Home</a>
      <a className={'navigationLink'} href = 'projects'>Projects</a>
      <a className={'navigationLink'}>About</a>
    </div>
  )
}

export default Navigation