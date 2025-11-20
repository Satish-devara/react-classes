import React, { useEffect, useState,useRef,useContext } from 'react'
import ClockContext from './ClockContext'

const Clock = () => {
    
        
    const {formatTime,timer} = useContext(ClockContext);




  return (
    <>
    <h1>Time:{formatTime()}</h1>
    <div className='bg-red-400 border-2 p-1.5'>
        {timer <= 5 ? <p>Timer : {timer}</p> : <p>Timer : 5</p> }
        {timer <= 5 ? <p></p> : <p>Timer crossed 5 secs</p> }
    </div>
    </>
    
    
  )
}

export default Clock