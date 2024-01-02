import { useState } from 'react'

import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
  <h1 className="text-4xl font-bold text-center text-blue-700 mt-12 mb-6">Learn about redux toolkit</h1>


      <AddTodo />
      <Todos />  
    </>
  )
}

export default App
