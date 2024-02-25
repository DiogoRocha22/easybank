import React from 'react'
import './index.scss'
import ReqButton from '../requestButton/ReqButton'
import bgPhones from '../../assets/images/bg-intro-desktop.svg'


export default function Main() {
  return (
    <div className='main'>
        <div className='main__info'>
            <h1>Next generation digital banking</h1>
            <p> 
                Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.
            </p>
            <ReqButton/>
        </div>

        <img id='phones-bg' src={bgPhones} alt="" />

    </div>
  )
}
