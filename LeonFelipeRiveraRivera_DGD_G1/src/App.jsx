import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [todos, setTodos] = useState([]);

  const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
  })

  useEffect(() => {
    api.get('/').then(res => {
      setTodos(res.data);
    })
  })

  return (


    <div>
      <h1>TODOS LIST</h1>
      {todos.map(todo => {

        return <div className="card my-5" key={todo.id}>
          <img src="https://i.pinimg.com/originals/71/6d/60/716d609bcb461d893984f74648498124.png" style={{width: '3rem'}} className="card-img-top " alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Titulo: {todo.title}</h5>
              <p className="card-text">Terminado: {todo.completed ? 'si' : 'no'}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

      })}
    </div>
  )
}

export default App
