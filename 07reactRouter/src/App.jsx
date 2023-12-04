import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Home/>
        
    </>
  )
}

export default App
