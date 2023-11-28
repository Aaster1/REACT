import React,{useState,useEffect} from 'react'
import './TodoList.css'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'

const TodoList = () => {


  const [todoList,setTodoList] = useState([])
  const [change,setChange] = useState(false)


  const getList = async function(){
    await fetch('http://192.168.30.119:8080/todos')
      .then(res=>{
        return res.json()
      })
      .then(data=>{
        setTodoList(data)
    })
    .catch(err=>{
      console.error(err)
    })
    
  }

    useEffect(()=>{
      console.log('3')
      getList()
    },[change])


    const updHandler= async function(){
      const result = await fetch('http://192.168.30.119:8080/todos',{
        method:'put',
        headers:{
          'Content-Type' : 'application/json'
        },
        body:JSON.stringify({
          no:props.no,
          name:props.name,
          status : props.status==0?1:0
        })
    })
    setChange(true)
    setChange(false)
  }

  const delHandler= async function(){
    const result = await fetch('http://192.168.30.119:8080/todos/'+props.no,{
      method:'delete'
    })
    setChange(true)
    setChange(false)
  }

  const postHandler= async function(){

    const data = {
      method:'post',
      body: JSON.stringify({
        name : $('.input').val()
      }),
      headers:{
        'Content-Type' : 'application/json'
      }
    }
    await fetch('http://192.168.30.119:8080/todos',data).then(res=>{
      alert('SUCCESS')
    }).catch(err=>{

      alert('failed')
    })
    
    
    
    setChange(true)
    setChange(false)

  }

  const delAllHandler = async function(){
    
    const result = await fetch('http://192.168.30.119:8080/todos/-1',{
      method:'delete'
      
  })
  setChange(true)
    setChange(false)
  }
  const updAllHandler = async function(){

    const result = await fetch('http://192.168.30.119:8080/todos',{
      method:'put',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        no: -1
      })
    
    })
    setChange(true)
    setChange(false)
  }


  return (

      <div className="container">
        <TodoHeader></TodoHeader>
        <TodoInput postHandler={postHandler}></TodoInput>
        {
        todoList.map((todo)=>{
          return <TodoItem no={todo.no} name={todo.name} status={todo.status} updHandler={updHandler} delHandler={delHandler}></TodoItem>
        })
        }
        <TodoFooter delAllHandler={delAllHandler} updAllHandler={updAllHandler}></TodoFooter>
      </div>
  )
}

export default TodoList