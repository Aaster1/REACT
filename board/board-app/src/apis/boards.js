import axios from 'axios'

export const boardList = ()=>axios.get("/boards")

export const selectBoard = (no) => axios.get("/boards/"+no)

export const insertBoard = (board) => axios.post("/boards",{title:board.title,writer:board.writer, content:board.content})

export const updateBoard = (board) => axios.put("/boards",{no:board.no,title:board.title,writer:board.writer,writer:board.content})

export const deleteBoard = (no) => axios.delete("/boards/"+no)