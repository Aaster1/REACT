import React from 'react';                        //React 라이브러리 import
import ReactDOM from 'react-dom/client';          //ReactDOM 클라이언트 라이브러리 import
import './index.css';                             //애플리케이션 전반의 초기화 css 파일 import = 전역 공통
import App from './App';                          //App 컴포넌트 import
import reportWebVitals from './reportWebVitals';  //웹 성능 추적을 위한 repotWebVitals 함수 import


//root요소 = 최상위 엘리먼트 생성
//ReactDOM.createRoot() 메소드를 호출하여, React 의 루트 요소를 생성합니다.
// - id가 'root'인 React 루트 요소를 렌더링할 실제 DOM요소를 지정합니다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrinctMode = 엄격모드 지정입니다.
  //App 컴포넌트를 렌더링할 때만큼은 오류가 없어야만 실행될 수 있도록 지정합니다.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();