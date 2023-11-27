import React from 'react'

const Card = (p) => {
  return (
    <>
      <div className="card">
        <h3>{p.title}</h3>
        <h3>{p.content}</h3>
      </div>
    </>
  )
}

export default Card