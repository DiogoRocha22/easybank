import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import phones from './assets/images/phones.png'
import bgPhones from './assets/images/bg-intro-desktop.svg'

function App() {

  return (
    <div className='app'>
      <Header/>
      <div className='content'>
        <Main/>
        <img id='phones' src={phones} alt="" />
        

        
  Request Invite



Why choose Easybank?

We leverage Open Banking to turn your bank account into your financial hub. Control 
your finances like never before.

Online Banking
Our modern web and mobile applications allow you to keep track of your finances 
wherever you are in the world.

Simple Budgeting
See exactly where your money goes each month. Receive notifications when you’re 
close to hitting your limits.


Fast Onboarding
  We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.

  Open API
  Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.

  

  Latest Articles

  By Claire Robinson
  Receive money in any currency with no fees
  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …

  By Wilson Hutton
  Treat yourself without worrying about money
  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …



      </div>





  

 

  By Wilson Hutton
  Take your Easybank card wherever you go
  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …

  By Claire Robinson
  Our invite-only Beta accounts are now live!
  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...

  

  About Us
  Contact
  Blog
  Careers
  Support
  Privacy Policy

  Request Invite

  © Easybank. All Rights Reserved
    </div>
  )
}

export default App
