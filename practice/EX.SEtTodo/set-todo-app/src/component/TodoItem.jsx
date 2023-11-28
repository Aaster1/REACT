import React from 'react'
import $ from 'jquery'

const TodoItem = (props) => {

  

  return (
    <div className='items'>
        <a onClick={props.updHandler} className={`update ${props.status==1?'active':''}`}>수정</a>
        <span>{props.name}</span>
        <button onClick={props.delHandler} className='delete'>삭제</button>
    </div>
  )
}

export default TodoItem