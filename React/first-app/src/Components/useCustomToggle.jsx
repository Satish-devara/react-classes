import React, { useState } from 'react'

const useCustomToggle = () => {
    const [theme, setTheme] = useState(false);
    const changeTheme = () => {
        setTheme(p => !p);
    }
  return (
    {theme, changeTheme}
  )
}

export default useCustomToggle