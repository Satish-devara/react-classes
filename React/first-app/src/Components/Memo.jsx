import React, { useMemo, useState } from 'react'

const Memo = () => {

   

    const [count, setCount] = useState(0);
    const handler = useMemo(() => {
        console.log('heavy calculation is starting....');
        let result = 0;
        for(let i = 0; i < 100000; i++){
            result++;
        }

        return result

    },[]);
    const [toggle,setToggle] = useState(false);


  return (
    <div style={{background: toggle ? 'black' : "white", color: toggle ? "white" : 'black'}}>
        <h1>{handler}</h1>
        <button className='bg-green-600 rounded-xl p-4' onClick={() => setCount(c => c+1)}>Count</button>
        <button className='bg-yellow-400 rounded-xl p-4' onClick={() => setToggle(!toggle)}>Toggle</button>
    </div>
  )
}

export default Memo