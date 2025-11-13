import React, { useState } from 'react'

const Welcome = ({ name, section , course }) => {
  const [on, setOn] = useState(false);

  return (
    <div>
      <button className='rounded-2xl w-10 h-6 border-2' onClick={() => setOn(!on)}>{on ? 'off' : 'on'}</button>
      {
      on &&  <div className='h1 text-4xl text-red-600 text-shadow-sky-50 font-serif'>Hi I am {name} from {section} in {course}</div>
    }
    </div>





  )
}

export default Welcome