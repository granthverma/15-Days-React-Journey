import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8) ;
  const [nummberAllowed , setNumberAllowed] =useState(false) ;

  const [charAllowed , setcharAllowed] = useState(false);

  const [password , Setpassword] = useState("")


  const passwordGenrator = () => {}

  return (
    <>
      <h1 className='text-4xl text-center text-white'>Password Generator</h1>
    </>
  )
}

export default App
