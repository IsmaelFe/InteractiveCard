import React from 'react'
import PropTypes from 'prop-types';


const Back_Card = ({card}) => {

    return (
        <div className='card1'>
        <input value={card.cvc} type='text' className='input-back-card' readOnly></input>
        <img src='../../public/assets/images/bg-card-back.png' alt='card'></img>
        </div>
    )
}

Back_Card.propTypes = {
    card: PropTypes.object
}

export default Back_Card