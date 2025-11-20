import React,{useContext} from 'react'
import ClockContext from './ClockContext'
const Clock2 = () => {
     const {formatTime,timer} = useContext(ClockContext);

  return (
   <>
    <h1>Time:{formatTime()}</h1>
    <div className='bg-yellow-400 border-2 p-1.5'>
        {timer <= 10 ? <p>Timer : {timer}</p> : <p>Timer : 10</p> }
        {timer <= 10 ? <p></p> : <p>Timer crossed 10 secs</p> }
    </div>
    </>
  )
}

export default Clock2