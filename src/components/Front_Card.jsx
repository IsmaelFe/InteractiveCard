import React from 'react'

const Front_Card = () => {
  return (
    <div className='card2'>
      <span className='span-front-card-1'>JANE APPLESEED</span>
      <span className='span-front-card-2'>00/00</span>
      <img src='../public/assets/images/card-logo.svg' className='icon-card'></img>
      <input type='text' readOnly className='input-front-card'></input>
      <img src='../public/assets/images/bg-card-front.png' alt='card'></img>
    </div>
  )
}

export default Front_Card