import React, {useState} from 'react'
import {useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {

    const [input , setInput] = useState('')
    const dispatch = useDispatch ()


    const addTodoHandler = (e) => {
        e.preventDefault()
        if (input.trim().length > 0) {
          dispatch(addTodo(input));
          setInput("");
        }
    }


return (
    <form onSubmit={addTodoHandler}>
  <input 
    type="text"
    placeholder='Enter a Todo ..'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    className=' p-2  border border-gray-300 rounded-md  focus:outline-none focus:border-blue-500' 

  
  />
  <button 
  type='submit'
  className='bg-color bg-sky-500 p-3 text-white rounded-xl  font-bold  hover:bg-green-600 ml-4 '
    
  
  > Add Todo</button>


    </form>
)


    
}

export default AddTodo
