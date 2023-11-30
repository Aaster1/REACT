import React, { useEffect, useState } from 'react'
import {Link, useParams,useNavigate} from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardUpdate from '../components/BoardUpdate'


//게시글 수정
const BoardUpdateContainer = () => {
  const {no} = useParams()

  const [upboard,setBoard] = useState({no:'none',title:'none',writer:'none',content:'none',regDate:'none',updDate:'none'})

  const navi = useNavigate()
  
  const getBoard = async ()=>{
    try {
      const response = await boards.selectBoard(no)
      const data = response.data
      setBoard(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getBoard()
  },[])

  const onUpdate = async (board)=>{
  
    try {
      const response = await boards.updateBoard(board)
  
      alert('수정완료')
      console.log(response.data)
      
      //리디렉션
      navi('/boards/'+board.no)
    } catch (error) {
      console.error(error)
    }
  
  }


  const onDelete = async (no)=>{
    const response = await boards.deleteBoard(no)
    const data = await response.data

    alert('삭제 완료')
    navi('/boards')
  }




  return (
    <div>
      <BoardUpdate upboard={upboard} onUpdate={onUpdate} onDelete={onDelete}></BoardUpdate>
    </div>
  )
}

export default BoardUpdateContainer