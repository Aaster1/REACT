import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import * as boards from '../apis/boards'
import BoardList from '../components/BoardList'

//게시글 목록
const BoardListContainer = () => {

  const [boardList,setBoardList] = useState([])

  //게시글 목록 데이터
  const getBoardList = async ()=>{
    const response = await boards.boardList()
    const data = await response.data      //axios타입의 반환이기 때문에 data객체로 한 번 더 들어가야합니다.
    console.log(data)
    setBoardList(data)
  }

  useEffect(()=>{
    getBoardList();
  },[])

  return (
    <div>
      {/* <h1>게시글 목록</h1>
      <Link to="/boards/insert">글쓰기</Link> */}
      <BoardList boardList={boardList}></BoardList>

    </div>
  )
}

export default BoardListContainer