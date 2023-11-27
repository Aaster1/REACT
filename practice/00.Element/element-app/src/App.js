import logo from './logo.svg';
import React from 'react'
import ReactDOM from 'react-dom'
import './App.css';


//클래스형 컴포넌트
class App extends React.Component{


  /*
    <div>
      <h1>Hello Element</h1>
      <p>this is an Element</p>
    </div>
  */

    //React.craeteELement형식
  render(){

    const box = (
      <div className="boxs">
        !box!
      </div>
    )


    const link = (
      <a href="http://www.google.com" target="_blank" style={{color:'black',textDecoration:'none'}}>
        <h1>구글로 이동하기</h1>
        {box}
      </a>
    )

    
    return link
  }

}

export default App;
