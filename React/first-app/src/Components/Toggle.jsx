import React, { useState } from 'react'
import useCustomToggle from './useCustomToggle';

const Toggle = () => {
     const {theme, changeTheme} = useCustomToggle();
     const themeColor = `${theme ? "bg-white text-black" : "bg-black text-white"} text-3xl  rounded-2xl w-25 h-max`; 

    return (
    <>
    
    <button className={`text-xl ${themeColor}`} onClick={() => changeTheme()}>
        {changeTheme ? 'dark' : 'light'}
    </button>
    </>
  )
}

export default Toggle