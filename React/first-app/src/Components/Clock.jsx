import React, { useEffect, useState,useRef,useContext } from 'react'
import ClockContext from './ClockContext'

const Clock = () => {
    
        
    const {formatTime,timer} = useContext(ClockContext);




  const TARGET = 5;
  const [reached, setReached] = useState(false);

  useEffect(() => {
    if (timer >= TARGET) setReached(true);
  }, [timer]);

  return (
    <>
      <h1>Time: {formatTime()}</h1>
      <div className='bg-red-400 border-2 p-1.5'>
        <p>Timer: {timer}</p>
        {reached && <p>Timer crossed {TARGET} secs</p>}
        {!reached && timer <= TARGET && <p>Keep waiting...</p>}
      </div>
    </>
  )
}

export default Clock