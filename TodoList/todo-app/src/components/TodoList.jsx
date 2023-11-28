import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {

  const [todoList,setTodoList] = React.useState([])
  const [chToggle,setChToggle] = React.useState(false)

  React.useEffect(()=>{
    fetch('http://192.168.30.119:8080/todos')
    .then(res=>{
      return res.json()
    })
    .then(data=>{
      setTodoList(data)
    })
    .catch(err=>{
      console.error(err)
    })
  },[])  

  const updHandler = (no)=>{
    fetch('http://192.168.30.119:8080/todos',{
      method:'put',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        no:no
      })
    })
  }

  //이 친구는 TodoList컴포넌트로 가야합니다.
  const updHandlerAll = ()=>{
    fetch('http://192.168.30.119:8080/todos',{
      method:'put',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        no:-1
      })
    })
  }

  const delHandler = (no)=>{
    fetch('http://192.168.30.119:8080/todos/'+no,{
      method:'delete',
      headers:{
        'Content-Type' : 'application/json'
      }
    })
  }

  //이 친구는 TodoList컴포넌트로 가야합니다.
  const delHandlerAll = ()=>{
    fetch('http://192.168.30.119:8080/todos/-1',{
      method:'delete',
      headers:{
        'Content-Type' : 'application/json'
      }
    })
  }

  const inputHandler = (name)=>{
    fetch('http://192.168.30.119:8080/todos',{
      method:'post',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        name:name
      })
    })
  }

  return (
    <ul className='todoList'>
      {
        todoList.map((todo)=>(
          <TodoItem key={todo.no} todo={todo}></TodoItem>
        ))

      }
    </ul>
  )
}

export default TodoList