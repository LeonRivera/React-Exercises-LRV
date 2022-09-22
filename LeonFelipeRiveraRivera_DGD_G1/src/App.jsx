import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [todos, setTodos] = useState([]);

  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
  })

  //useEffect works for tell React that your component needs to do
  //something after render
  useEffect(() => {
    api.get('/').then(res => {
      setTodos(res.data);
    })
  })

  return (

    <div>
      <h1>TODOS:</h1>
      {todos.map(todo => {
        return <div className="card" key={todo.id} >
          <div className="card-header">
            {todo.id}
          </div>
          <div className="card-body">
            <h5 className="card-title">{todo.title}</h5>
            <p className="card-text">{todo.completed ? 'completed' : 'not completed'}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      })}
    </div>
  )
}

export default App
