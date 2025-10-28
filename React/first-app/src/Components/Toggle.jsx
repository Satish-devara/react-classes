import React, { useState } from 'react'

const Toggle = () => {
    const [isVisible, setIsVisible] = useState(true);

    return (
    <>
    
    <button className='text-3xl bg-amber-300 rounded-2xl w-25 h-max' onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'show' : 'hide'}
    </button>
    <div className='flex text-2xl justify-center align-middle text-center p-2'>
        {isVisible && 'show is clicked'}
    </div>
    </>
  )
}

export default Toggle