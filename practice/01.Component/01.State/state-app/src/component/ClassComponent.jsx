import React, { Component } from 'react'

export class ClassComponent extends Component {

  constructor(props){

    super(props)

    this.state = {
      name:'Aloha'
    }



    //컴포넌트에 함술들 바인딩해줘야합니다.

    this.handler = this.handler.bind(this)
  }

  handler(newName){
    
    this.setState({name:newName})
  }

  
  render(){
    const {name} = this.state
    return (
      <div>
        <h1>클래스 컴포넌트</h1>
        <h2>Hello! I'm {name}</h2>
        <button onClick={()=>this.handler('Joeun')}>Joeun</button>
        <button onClick={()=>this.handler('Aster')}>Aster</button>
      </div>
    )
  }
}

export default ClassComponent