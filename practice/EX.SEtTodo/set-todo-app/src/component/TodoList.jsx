import React,{useState,useEffect} from 'react'

const TodoList = () => {


  const [todoList,setTodoList] = useState([])

  const getList = async function(){
    await fetch('http://192.168.30.119:8080/todos')
    .then(res=>{
      setTodoList(res)
    })
    .catch(err=>{
      console.error(err)
    })
    
  }

  getList()

  useEffect(()=>{
    getList()
  })


  const delHandler= async function(no){
    const result = await fetch('http://192.168.30.119:8080/todos',{
      method:'post',
      headers:{
        "Content-type" : "application/json"
      },
      body:JSON.stringify({
        no : no
      })
    })
    if(result>0){
      setTodoList(await fetch(''))
    }
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>오늘의 할일</td>
            <td>버튼</td>
          </tr>
        </thead>

        <tbody>
          {todoList.length>0 &&
            todoList.map((todo)=>{
              return <>
              <tr>
              <td>{todo.name}</td>
              <td onClick={()=>delHandler(todo.no)}><a href="javascript:;">삭제</a></td>
            </tr>
              </>
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default TodoList