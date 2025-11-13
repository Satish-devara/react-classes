import React, { useState } from 'react'

const Count = ({count, increaseCount}) => {
    
  return (
    <>
    <div>{count}</div>
    <button onClick={() => increaseCount()} className='bg-green-500 rounded-2xl m-2'>increment</button>
    
    </>
    
  )
}

export default Count