import React from 'react'
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.img} alt='No_phot' />
            <p> {props.pargraph} </p>
            <p><span>{props.name}</span></p>
            <p>{props.director}</p>
        </div>
    )
}

export default Card