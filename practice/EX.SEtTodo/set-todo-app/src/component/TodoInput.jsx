import React from 'react'
import $ from 'jquery'


const TodoInput = (props) => {

 

  return (

    <div className='input-container'>
      <span>
        추가할 일
      </span>
      <input type="text" className='input' id='input'/>
      <button onClick={props.postHandler}>추가</button>
    </div>
  )
}

export default TodoInput