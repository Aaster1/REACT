import React,{useState} from 'react'

const FunctionComponent = () => {
  const [name,setName] = useState('Aloha')
  const nameHandler = (newName)=>{
    setName(newName)
  }
  
  return (
    <div>
        <h1>함수형 컴포넌트</h1>
        <h2>Hello, I'm {name}</h2>
        <button onClick={()=>nameHandler('Aster')}>Aster</button>
        <button onClick={()=>nameHandler('Jhin')}>Jhin</button>
        <button onClick={()=>nameHandler('Sedin')}>Sedin</button>
    </div>
  )
}


export default FunctionComponent