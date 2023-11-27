import React from 'react'
import Card from './Card'

const CardList = () => {

  //Card 컴포넌트에 전달할 데이터
  const cardData = [
    {title:'Card1',content:'Content Card 1'},
    {title:'Card2',content:'Content Card 2'},
    {title:'Card3',content:'Content Card 3'},
  ]

  return (
    <>
    <div><h1>CardList</h1></div>
    {/* <Card key={0} title={cardData[0].title} content={cardData[0].content}></Card>
    <Card key={1} title={cardData[1].title} content={cardData[1].content}></Card>
    <Card key={2} title={cardData[2].title} content={cardData[2].content}></Card> */}

      {
        cardData.map((card,index)=>(
          <Card key={index} title={card.title} content={card.content}></Card>
          )
        )
      }
    </>
  )
}

export default CardList