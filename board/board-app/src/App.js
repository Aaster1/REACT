import './App.css';
import React, {useState,useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import BoardListContainer from './container/BoardListContainer';
import BoardReadContainer from './container/BoardReadContainer';
import BoardInsertContainer from './container/BoardInsertContainer';
import BoardUpdateContainer from './container/BoardUpdateContainer';

function App() {




  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/boards" element={<BoardListContainer />}></Route>
        <Route path="/boards/:no" element={<BoardReadContainer />}></Route>
        <Route path="/boards/insert" element={<BoardInsertContainer />}></Route>
        <Route path="/boards/update/:no" element={<BoardUpdateContainer />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
