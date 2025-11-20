import React from 'react'
import { useContext } from 'react'
import ThemeContext from './ThemeContext'
const Change = () => {

    const {theme, setTheme} = useContext(ThemeContext)
  return (
    <div className={theme === 'Dark' ? 'bg-black text-white ' : 'bg-white text-black'}>
        <h2 >Change theme : {theme}</h2>
        <button onClick={() => setTheme('Dark')} className='rounded-xl w-max h-max bg-amber-300'>Dark theme</button>
        <button onClick={() => setTheme('light')} className='rounded-xl w-max h-max bg-amber-300'>light them</button>
        
    </div>
  )
}

export default Change