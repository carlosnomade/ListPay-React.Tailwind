import { useState } from 'react'

import BackCover from './assets/Cover.svg'

import Todo from './components/Todo'
import FormItens from './components/FormItens'



function App() {

  const [todos, setTodos] = useState([])


  const addTodo = (text, amountValue, amount, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      amountValue,
      amount,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
  
    const filteredTodos = newTodos.filter((todo) => todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  return (
    <>
      <img src={BackCover} alt="background" className="" />
      <div className='flex items-center justify-center'>

        <div className='flex items-center justify-center flex-col -mt-28 w-7/10'>


          <h1 className='w-full mb-9 text-3xl'>Lista de Compras</h1>

          <FormItens addTodo={addTodo} />

          {todos.map((todo) => (


            <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
          ))}

        </div>
      </div>

    </>
  )
}

export default App
