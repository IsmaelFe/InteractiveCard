import React, { useState } from 'react'
import Back_Card from './Back_Card'
import Form_card from './Form_card'
import Front_Card from './Front_Card'

const Main = () => {

    const initialState = {
        holder: 'JANE APPLESEED',
        number: '0000 0000 0000 0000',
        month: '00',
        year: '00',
        cvc: '000'
    }

    const [card, setCard] = useState(initialState);

    const newCard = (value) => {
        setCard({
            ...card,    
            holder: value
        })
    }

    return (
    <div className='container-main'>
        <div className='container-card'>
            <img src='../../public/assets/images/bg-main-mobile.png' alt='fondo'></img>
            <Back_Card card={card}/>
            <Front_Card card={card}/>
        </div> 
        <div className='container-form'>
            <Form_card setNew={newCard}/>
        </div>
    </div>
    )
}

export default Main