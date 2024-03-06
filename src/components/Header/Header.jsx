import React from 'react'
import logo from '/logo.svg'
import hamburguer from '../../assets/images/icon-hamburger.svg'
import closeIcon from '../../assets/images/icon-close.svg'

import './index.scss'
import ReqButton from '../requestButton/ReqButton'

export default function Header({setDisplay, display}) {
  
  let icone = hamburguer 

  if(display == true){
    icone = closeIcon
  }
  
  return (
    <header className='header'>
        <img src={logo} alt="" />

        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Careers</a></li>
            </ul>
        </nav>

        <img onClick={() => {
          setDisplay(!display)
        }} className='burguer' src={icone} alt="" />

        <ReqButton/>
    </header>
  )
}
