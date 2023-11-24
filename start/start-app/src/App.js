import React from 'react'
import $ from 'jquery'
import Bpp from './Bpp'



function App(){
  const {useState,useEffect} = React
  const [get,set] = useState(false)

  const btnHand = ()=>{
    set(true)

    setTimeout(()=>{
      set(false)
    },2000)
  }

  const handler = ()=>{
    $('.h1').animate({marginLeft: -100+'%'},500)
  }

    return(
      <div>
        <button onClick={handler}>내가 사라져볼게, 얍!</button>
        <h1 className="h1">Hello,React!</h1>
        <p>
          JSX를 사용한 React 컴포넌트
        </p>
        <button onClick={btnHand}>이거시 Bpp버튼</button>
        {get&&(
          <Bpp />
        )}
      </div>
    )
}

export default App;