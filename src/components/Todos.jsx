import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodos } from "../redux/actions/todos"

function Todos() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos.todos)
  const loading = useSelector((state) => state.todos.loading)
  const error = useSelector((state) => state.todos.error)

  useEffect(() => {
    dispatch(getTodos())
  }, [])

  if (loading) return <p>Loading ...</p>

  if (error !== null) return <p>{error}</p>

  return (
    <ol>
      {todos.length > 0 &&
        todos.map((todo) => (
          <li
            style={{ color: todo.completed ? "green" : "#a9a9a9" }}
            key={todo.id}
          >
            {todo.title}
          </li>
        ))}
    </ol>
  )
}

export default Todos
