import React from 'react'
import Todo from '../../components/Todo/Todo'

const todo = ['todo 1', 'todo 2', 'todo 3']

export default function TodosPage() {
  return (
    <div>
        <h2>Todo list</h2>
        {
            todo.map((element, index) => <Todo key={index} todo={element}/>)
        }
    </div>
  )
}
