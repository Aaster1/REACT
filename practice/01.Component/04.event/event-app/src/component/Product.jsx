import React,{useState} from 'react'

const Product = () => {

  const [q,setQ] = useState(1)

  const price = 1000

  const chQ = (num)=>{
    if(q>0){
      if(num>0)
      setQ(q+num)
    else setQ(q+num)
    }else{
      if(num>0)
      setQ(q+num)
    }
  }

  const totalPrice = q*price

  return (
    <>
      <h2>상품 가격 계산</h2>
      <p>수량 : {q}</p>
      <p>가격 : {price}</p>
      <p>총 가격 : {totalPrice}</p>
      <button onClick={()=> chQ(1)}>『+』</button>
      <button onClick={()=> chQ(-1)}>『-』</button>

    </>
  )
}

export default Product