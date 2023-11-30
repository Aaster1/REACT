import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const BoardUpdate = ({upboard,onUpdate,onDelete}) => {

  //state 설정
  const [uptitle,setTitle] = useState('')
  const [upwriter,setWriter] = useState('')
  const [upcontent,setContent] = useState('')

  const getRead = ()=>{
    setTitle(upboard.title)
    setWriter(upboard.writer)
    setContent(upboard.content)
  }

  useEffect(()=>{
    getRead()
  },[upboard])

  const board = {no:upboard.no,title:uptitle,writer:upwriter,content:upcontent}
    
  const handleChangeTitle = (e)=>{
    setTitle(e.target.value)
  }
  const handleChangewriter = (e)=>{
    setWriter(e.target.value)
  }
  const handleChangeContent = (e)=>{
    setContent(e.target.value)
  }

  return (
    <div>
        <h1>게시글 수정</h1>
        <h3>번호{upboard.no}</h3>
        <hr />
        <table border={1}>
          <tbody>
            <tr>
              <td>번호</td>
              <td>
                <input type="text" value={upboard.no} readOnly/>
              </td>
            </tr>
            <tr>
              <td>제목</td>
              <td>
                <input type="text" value={uptitle} onChange={handleChangeTitle}/>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                <input type="text" value={upwriter} onChange={handleChangewriter} />
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                <textarea cols="40" rows="5" value={upcontent} onChange={handleChangeContent} ></textarea>
              </td>
            </tr>
          </tbody>
        </table>

        <hr />
        <Link to="/boards">목록</Link>
        <hr />
        <button onClick={()=>onUpdate(board)}>수정</button>
        <button onClick={()=>onDelete(upboard.no)}>삭제</button>
    </div>
  )
}

export default BoardUpdate