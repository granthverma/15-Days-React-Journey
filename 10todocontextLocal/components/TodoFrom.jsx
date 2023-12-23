// Import necessary dependencies from React and TodoContext
import React, { useState } from 'react';
import { useTodo } from '../context/TodoContext';

// Define the functional component TodoForm
function TodoForm() {
    // State to manage the input value for the new todo
    const [todo, setTodo] = useState("");

    // Destructure the addTodo function from the TodoContext
    const { addTodo } = useTodo();

    // Event handler for adding a new todo
    const add = (e) => {
        e.preventDefault();

        // If todo is empty, return early
        if (!todo) return;

        // Call addTodo function to add a new todo with default completion status as false
        addTodo({ todo, completed: false });

        // Reset the todo input value to an empty string
        setTodo("");
    };

    // JSX structure for the TodoForm component
    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

// Export the TodoForm component as the default export
export default TodoForm;
