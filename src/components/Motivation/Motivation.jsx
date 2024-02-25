import React from 'react'
import './index.scss'
import MotCard from '../Motivation_cards/MotCard'
import online from '../../assets/images/icon-online.svg'


export default function Motivation() {
  return (
    <div className='motivation'>
        <div className='motivation__intro'>
            <h2>Why choose Easybank?</h2>
            <p>
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.
            </p>
        </div>

        <div className='motivation__cards'>
            <MotCard 
            icon= {online}
            cardTittle={"Online Banking"} 
            text={`Our modern web and mobile applications allow you to keep track of your finances
            wherever you are in the world.`}
            />
            <MotCard 
            icon= {online}
            cardTittle={"Simple Budgeting"} 
            text={`See exactly where your money goes each month. Receive notifications when you’re 
            close to hitting your limits.`}
            />
            <MotCard 
            icon= {online}
            cardTittle={"Fast Onboarding"} 
            text={`We don’t do branches. Open your account in minutes online and start taking control 
            of your finances right away.`}
            />
            <MotCard 
            icon= {online}
            cardTittle={"Open API"} 
            text={`Manage your savings, investments, pension, and much more from one account. Tracking 
            your money has never been easier.`}
            />

        </div>

    </div>
  )
}
