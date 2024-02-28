import React from 'react'
import './index.scss'
import ArtCard from '../Articles_cards/ArtCard'
import currency from '../../assets/images/image-currency.jpg'
import restaurant from '../../assets/images/image-restaurant.jpg'
import plane from '../../assets/images/image-plane.jpg'
import confetti from '../../assets/images/image-confetti.jpg'



export default function Articles() {
  return (
    <div className='articles'>
        <h2>Latest Articles</h2>
        <article>
            <ArtCard 
            cardPhoto={currency} 
            author={" By Claire Robinson"}
            tittle={"Receive money in any currency with no fees"}
            text={`The world is getting smaller and we’re becoming more mobile. 
            So why should you be forced to only receive money in a single …`}
            />
            <ArtCard 
            cardPhoto={restaurant} 
            author={"By Wilson Hutton"}
            tittle={"Treat yourself without worrying about money"}
            text={`Our simple budgeting feature allows you to separate out your spending and set 
            realistic limits each month. That means you …`}
            />
            <ArtCard 
            cardPhoto={plane} 
            author={"By Wilson Hutton"}
            tittle={"Take your Easybank card wherever you go"}
            text={` We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
            while you’re abroad. We’ll even show you …`}
            />
            <ArtCard 
            cardPhoto={confetti} 
            author={"By Claire Robinson"}
            tittle={"Our invite-only Beta accounts are now live!"}
            text={` After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
            It’s easy to request an invite through the site..`}
            />
        </article>

        
  
 

  
  
 

  
  
    </div>
  )
}
