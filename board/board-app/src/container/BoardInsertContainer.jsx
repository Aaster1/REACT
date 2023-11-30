import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardInserForm from '../components/BoardInserForm'

//게시글 등록
const BoardInsertContainer = () => {

  //리디렉션 함수 생성
  const navi = useNavigate()

  const onInsert = async (board)=>{

    try {
      const response = await boards.insertBoard(board)

      alert('등록완료')
      console.log(response.data)
      
      //리디렉션
      navi('/boards')
    } catch (error) {
      console.error(error)
    }

  }
  
  return ( 
    <div>
      <BoardInserForm onInsert={onInsert}></BoardInserForm>      
    </div>
  )
}

export default BoardInsertContainer