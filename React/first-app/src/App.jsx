import './App.css'
import React, { useState } from 'react';
import Page from './Components/Page';
import Count from './Components/Count';
import Toggle from './Components/Toggle';
import Stopwatch from './Components/Stopwatch';
import Clock from './Components/Clock';
import Welcome from './Components/Welcome';
import Greetings from './Components/Greetings';
import Quote from './Components/Quote';
import Array from './Components/Array';
function App() {

  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(e => e + 1);
  }

  return (
    <>
      <Count 
      count = {count}
      increaseCount = {increaseCount}
      />
      
    </>
  )
}

export default App
