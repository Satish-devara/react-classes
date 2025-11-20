import React,{useContext} from 'react'
import ClockContext from './ClockContext'

export const Clock3 = () => {
     const {formatTime,timer} = useContext(ClockContext);
  return (
    <>
    <h1>Time:{formatTime()}</h1>
    <div className='bg-green-400 border-2 p-1.5'>
        {timer <= 15 ? <p>Timer : {timer}</p> : <p>Timer : 15</p> }
        {timer <= 15 ? <p></p> : <p>Timer crossed 15 secs</p> }
    </div>
    </>
  )
}
