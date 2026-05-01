import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import Login from './Login'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Navbar from './Components/Navbar'

function App() {
  //let userInput="rishi"
  return (
    // <>
    //    <h1>Welcome to React JS</h1>
    //    {/* <Login /> */}
    //    <Home name={userInput} age={23}/>
    //    {/* <About />
    //    <Contact />
    //     <Login />  */}
    // </>
    <div>
      <Navbar/>
    </div>
  )
 

}

export default App
