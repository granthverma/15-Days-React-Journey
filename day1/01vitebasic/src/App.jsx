import { useState } from 'react'
import Zero from './Zero' //Zero is another component 



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<h1> Hello Nameste , its My first Vite  React App ✨ </h1>
<h2>  Chai☕️ aur React 💻 || By Hitesh Sir 👨🏻‍🏫 </h2>

<Zero/>  // called the compontent ,Other components and content can be added here 
    </>
    
     
        
    
  )
}

export default App
