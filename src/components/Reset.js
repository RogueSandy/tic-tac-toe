import React from 'react'
import './Reset.css'

export default function Reset({ resetBoard }) {
  return (
    <button className='reset-btn' onClick={resetBoard}>Reset</button>
  )
}
