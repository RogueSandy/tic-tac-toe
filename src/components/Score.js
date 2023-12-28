import React from 'react'
import './Score.css'

export default function Score({score, xPlaying}) {
  return (
    <div className='scoreboard'>
        <span className={`score x-score ${!xPlaying && "inactive" }`}>X - {score.xScore}</span>
        <span className={`score o-score ${xPlaying && "inactive" }`}> O - {score.oScore}</span>
    </div>
  )
}
