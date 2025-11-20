import './App.css'
import React, { useState,createContext } from 'react';
import Page from './Components/Page';
import Count from './Components/Count';
import Toggle from './Components/Toggle';
import Stopwatch from './Components/Stopwatch';
import Clock from './Components/Clock';
import Welcome from './Components/Welcome';
import Greetings from './Components/Greetings';
import Quote from './Components/Quote';
import Array from './Components/Array';
import Button from './Components/Button';
import Refcount from './Components/Refcount';
import Change from './Components/Change';
import ThemeContext from './Components/ThemeContext';
import {ClockProvider} from './Components/ClockContext';
import Clock2 from './Components/Clock2';
import { Clock3 } from './Components/Clock3';
function App() {
  
  return (
    <>
    <ClockProvider>
     
     <Clock /> 
     <Clock2 /> 
     <Clock3 /> 
    </ClockProvider>
     
      
    </>
  )
}

export default App
