import React from 'react'
import PropTypes from 'prop-types'

const Front_Card = ({card}) => {
  return (
    <div className='card2'>
      <span className='span-front-card-1'>{card.holder}</span>
      <span className='span-front-card-2'>{card.month}/{card.year}</span>
      <img src='../public/assets/images/card-logo.svg' className='icon-card'></img>
      <input value={card.number} type='text' readOnly className='input-front-card'></input>
      <img src='../public/assets/images/bg-card-front.png' alt='card'></img>
    </div>
  )
}

Front_Card.propTypes = {
  card: PropTypes.object
}

export default Front_Card