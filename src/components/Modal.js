import React from 'react'
import './Modal.css'
import Reset from './Reset'

export default function Modal({ winner, resetBoard }) {
    const color = winner
  return (
    <div className='modal'>
        <div className="message">
            <p>Congratulations</p>
            <p className="win"><span className={color}>{winner}</span> Wins</p>
            <Reset resetBoard={resetBoard} />
        </div>
    </div>
  )
}
