import React from 'react'
import './index.scss'

import logo from '/logo.svg'
import ReqButton from '../requestButton/ReqButton'

export default function Menu() {
  return (
    <div className='menu-burguer'>
        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Careers</a></li>
            </ul>

            <ReqButton/>

            <img src={logo} alt="" />
        </nav>
    </div>
  )
}
