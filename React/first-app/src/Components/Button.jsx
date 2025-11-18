import React, { useState,useRef, useEffect } from 'react'

const Button = () => {
    const [status, setStatus] = useState(true);
    const [message, setMessage] = useState('')
    const [count, setCount] = useState(0);

    const clickButton = () => {
        setTimeout(() => {
            setStatus(false);
            setMessage('Button clicked')
        },5000)
    }


    const ref = useRef(0);

    const handler = () => {
        setCount( count + 1);
    };

    useEffect(() => {
        ref.current = count;
    },[count])



  return (
    <div>
        {/* <h1 className='bg-red-400'>Click the below button</h1>
        {status ?  <button onClick={() => clickButton()} disabled={!status} className='rounded-xl bg-green-400 w-max h-max'>Click me</button> : <p className='bg-yellow-400'>{message}</p>} */}
        <h1>current value : {count}</h1>
        <h2>previous value : {ref.current}</h2>
        <button className='bg-yellow-500' onClick={handler}>
            btn
        </button>
    </div>
  )
}

export default Button