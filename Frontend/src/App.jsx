import { useState } from 'react'
import { CreatTodo } from './components/CreatTodo'
import { Todos } from './components/Todos'

function App() {

  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos").then(async (res) => {
    const json = await res.json();
    setTodos(json)
    console.log(todos)
  })

  return (
    <div>
      <CreatTodo> </CreatTodo>
      <Todos todos={todos}></Todos>
    </div>
  )

}

export default App
