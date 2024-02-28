import React from 'react'
import './index.scss'

export default function ArtCard({cardPhoto, author, tittle, text}) {
  return (
    <div className='article__card'>
        <img src={cardPhoto} alt="" />
        <div className='article__card-info'>
            <span>{author}</span>
            <h4>{tittle}</h4>
            <p>{text}</p>
        </div>
    </div>
  )
}
