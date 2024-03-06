import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Motivation from './components/Motivation/Motivation'
import Articles from './components/Articles/Articles'
import Footer from './components/Footer/Footer'
import Menu from './components/MobileMenu/Menu'

import phones from './assets/images/phones.png'

import { useState } from 'react'

function App() {

  const [display, setDisplay] = useState(false)

  return (
    <div className='app'>
      <Header display={display} setDisplay={setDisplay}/>
      {display && 
      <Menu/>}
      
      <div onClick={() => {
        setDisplay()
      }} className='content'>
        <Main/>
        <img id='phones' src={phones} alt="" />

        <Motivation/>
        <Articles/>

        <Footer/>
      </div>
    </div>
  )
}

export default App
