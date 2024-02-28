import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import phones from './assets/images/phones.png'
import Motivation from './components/Motivation/Motivation'
import Articles from './components/Articles/Articles'

function App() {

  return (
    <div className='app'>
      <Header/>
      <div className='content'>
        <Main/>
        <img id='phones' src={phones} alt="" />

        <Motivation/>
        <Articles/>

      </div>


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
