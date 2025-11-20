
import {createContext, useContext, useEffect, useState } from "react";



const ClockContext = createContext();

export const ClockProvider = ({children}) => {
    const [time, setTime] = useState(new Date());
   const [timer, setTimer] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
            setTimer(t => t + 1);
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    },[])

    function formatTime(){
       let hours = String(time.getHours()).padStart(2, '0');
       let mins = String(time.getMinutes()).padStart(2,'0');
       let secs = String(time.getSeconds()).padStart(2,'0');

        return `${hours}: ${mins} : ${secs}`;
    }

    return(
        <ClockContext.Provider value={{formatTime,timer}}>
            {children}
        </ClockContext.Provider>
    )

 }

 export default ClockContext;