import './App.scss'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import phones from './assets/images/phones.png'
import Motivation from './components/Motivation/Motivation'
import Articles from './components/Articles/Articles'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className='app'>
      <Header/>
      <div className='content'>
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
