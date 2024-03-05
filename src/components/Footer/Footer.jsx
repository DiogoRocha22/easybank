import React from 'react'
import './index.scss'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/icon-facebook.svg'
import youtube from '../../assets/images/icon-youtube.svg'
import twitter from '../../assets/images/icon-twitter.svg'
import pinterest from '../../assets/images/icon-pinterest.svg'
import instagram from '../../assets/images/icon-instagram.svg'
import ReqButton from '../requestButton/ReqButton'


export default function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__left'>
            <img src={logo} alt="" />
            <div className='socials'>
                <img src={facebook} alt="" />
                <img src={youtube} alt="" />
                <img src={twitter} alt="" />
                <img src={pinterest} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>

        <nav className='footer__nav'>
            <ul className=''>
              <li>About Us</li>
              <li>Contact</li>
              <li>Blog</li>
            </ul>

            <ul>
              <li>Careers</li>
              <li>Support</li>
              <li>Privacy Policy</li>
            </ul>
        </nav>

        <div className='footer__end'>
          <ReqButton/>
          © Easybank. All Rights Reserved
        </div>
    </footer>


  )
}
