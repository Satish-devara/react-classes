import React, { useEffect, useState,useRef } from 'react'

const Clock = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const [recordId, setRecordId] = useState(0);
    const [recordTimeArray, setRecordTimeArray] = useState([]);
    const intervalRefId = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if(isRunning){
             intervalRefId.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            },10)
        }

        return () => {
            clearInterval(intervalRefId.current);
        }
            

   },[isRunning])


    function start(){
        if(isRunning) return;
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
        
    }

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setElapsedTime(0);

        setRecordId(0);
        setRecordTimeArray([]);
    }

    function record(){
        const recordTime = lapsedTime();
        setRecordId(prev => prev + 1);

        const newArray = {
            id : recordId + 1,
            time : recordTime
        }

        setRecordTimeArray(prevArray => [...prevArray,newArray]);
    }


    function lapsedTime(){
        let mins = Math.floor(elapsedTime/(1000 * 60)%60);
        let secs = Math.floor(elapsedTime/1000 % 60);
        let millisecs = Math.floor((elapsedTime % 1000) /10);

        mins = String(mins).padStart(2, '0');
         secs = String(secs).padStart(2, '0');
         millisecs = String(millisecs).padStart(2, '0');
        

        return `${mins} : ${secs} : ${millisecs}`;
    }

        





  return (
    <div className='stopwatch'>
        <div className='display'>
            {lapsedTime()};
        </div>
        <div>
            <button className="start" onClick={start}>Start</button>
            <button className="stop" onClick={stop}> Stop</button>
            <button className="reset" onClick={reset}>Reset</button>
            <button className="record" onClick={record} disabled={!isRunning}>Record</button>
        </div>
        <div>
        <ul>
            {recordTimeArray.map(record => (
                <li key={record.id}>
                    {`${record.id} : TimeRecorded ${record.time}`}
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Clock