import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '../components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='BlinkMacSystemFont p-4 bg-red-400  text-black rounded-xl'>Tailwind</h1>
      
      <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://granthcodes.com/uploads/about_04.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 t space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Himanshu Verma
      </div>
      <div class="text-slate-700 dark:text-slate-500">
     frontend dev  , Granthcodes.com
      </div>
    </figcaption>
  </div>
</figure> */}


<h1 className='BlinkMacSystemFont p-4 bg-red-400  text-black rounded-xl mb-4'>Tailwind</h1>


<Card username="himanshu" btnText='visit-me' pText='hello nameste cahlo kaam ki baat  par aata hai' />
<Card username="granth" btnText='click to more info' pText='my name is anjali '/>



    </>
  )
}

// class - className use , jsx img should be closed 

export default App
