// Importing the `useState` hook from React
import { useState } from 'react'

// Importing styles from the 'App.css' file
import './App.css'

// Importing the 'AddTodo' and 'Todos' components from their respective files
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

// The main functional component 'App'
function App() {
  // No state is being used in this component, but you can add state using the `useState` hook if needed

  // Return the JSX representing the component
  return (
    <>
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-700 mt-12 mb-6">
        Learn about redux toolkit
      </h1>

      {/* Adding Todo form component */}
      <AddTodo />

      {/* Displaying Todos component */}
      <Todos />
    </>
  )
}

// Exporting the 'App' component as the default export
export default App
