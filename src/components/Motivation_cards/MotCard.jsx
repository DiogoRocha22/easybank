import React from 'react'
import './index.scss'

export default function MotCard({icon, cardTittle, text}) {
  return (
    <div className='motivation-card'>
        <img src={icon} alt="" />
        <h3>{cardTittle}</h3>
        <p>{text}</p>
    </div>
  )
}
