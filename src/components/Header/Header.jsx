import React from 'react'
import logo from '/logo.svg'
import './index.scss'
import ReqButton from '../requestButton/ReqButton'

export default function Header() {
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

        <ReqButton/>
    </header>
  )
}
