import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

const BoardInserForm = ({onInsert}) => {

  //state 설정
  const [title,setTitle] = useState('')
  const [writer,setWriter] = useState('')
  const [content,setContent] = useState('')

  const board = {title:title,writer:writer,content:content}

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
      <h1>게시글 등록</h1>
        <table>
          <tbody>
            <tr>
              <td>제목</td>
              <td>
                  <input type="text" className='input-title' value={title} onChange={handleChangeTitle}/>
              </td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>
                  <input type="text" className='input-writer' value={writer} onChange={handleChangewriter}/>
              </td>
            </tr>
            <tr>
              <td>내용</td>
              <td>
                  <textarea cols="40" rows="5" className='input-content' value={content} onChange={handleChangeContent}/>
              </td>
            </tr>
          </tbody>
        </table>

        <div>
          <button onClick={()=>onInsert(board)}>등록</button>
          <Link to="/boards">목록</Link>
        </div>
    </div>
  )
}

export default BoardInserForm