import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'
import TodoHeader from './TodoHeader'

const TodoContainer = () => {
  return (
    <div className="container">
      <TodoHeader></TodoHeader>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoFooter></TodoFooter>
    </div>
  )
}

export default TodoContainer