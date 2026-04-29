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
function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
       <h1>Welcome to React JS</h1>
       {/* <Login /> */}
       <Home />
       <About />
       <Contact />
        <Login /> 
    </div>
  )
 

}

export default App
