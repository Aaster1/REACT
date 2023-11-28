import React from 'react'

const TodoFooter = (props) => {

  


  return (

    <div className='footer'>
      <button onClick={props.updAllHandler}>전체완료</button>
      <button onClick={props.delAllHandler}>전체삭제</button>
    </div>
  )
}

export default TodoFooter