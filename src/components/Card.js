import React from 'react'
import './Card1.css'

export default function Card(props) {
  return (
    <div className='expense-item'>
        <span><h3 className='expense-item__description'>{props.title}</h3></span>
        <h4 className='expense-item__price'>{props.price}</h4>
    </div>
  )
}
