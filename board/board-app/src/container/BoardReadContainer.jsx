import React, { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardRead from '../components/BoardRead'

//게시글 조회
const BoardReadContainer = () => {

  
  const {no} = useParams()

  const [board,setBoard] = useState({no:'none',title:'none',writer:'none',content:'none',regDate:'none',updDate:'none'})

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



  return (
    <div>
     <BoardRead board={board}></BoardRead>
    </div>
  )
}

export default BoardReadContainer