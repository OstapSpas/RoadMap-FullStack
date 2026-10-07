import { useState, useEffect, useRef } from 'react';
import './App.css'


function App() {


  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  
  const textRef = useRef(null);
  const clickRef = useRef(0);
  const clickSizeRef = useRef(null);


  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  function start() {
    if(intervalRef.current !== null) return;
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1)
    },1000)
  }

  function stop() {
    clearInterval(intervalRef.current);
    intervalRef.current= null;
  }

  function reset(){
    stop();
    setSeconds(0);
  }

  const bottomRef = useRef(null);
  const items = Array.from({length: 50}, (_,i) => i + 1);


  function scrollBottom() {
    bottomRef.current.scrollIntoView({behavior: 'smooth'});
  }

  function handleSize() {
  const w = clickSizeRef.current.offsetWidth;
  const h = clickSizeRef.current.offsetHeight;
  console.log(`Розмір: ${w} x ${h}`);
}

  function clickCount(){
    clickRef.current++;
    console.log(clickRef.current);
    
  }

  function handleClear() {
    setText("");
    textRef.current.focus();
  }


  function increment(){
    setCount(prev => prev + 1);
  }

  setInterval(() => {
    
  }, 1000);



  return (
    <>
      <input 
      type="text" 

      value={text}
      onChange={(e) => setText(e.target.value)}
      ref={textRef}
      />



    <button onClick={clickCount}>Count</button>

    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>


    <p>{text}</p>
    <button onClick={handleClear}>Clear</button>


    <div ref={clickSizeRef}>Element</div>
    <button onClick={handleSize}>Виміряти</button>


    <button onClick={scrollBottom}>Down</button>

      <ul>
        {items.map((n) => (
          <li key={n}>Пункт {n}</li>
        ))}
      </ul>
      <div ref={bottomRef}>⬇ Кінець списку</div>


    <button onClick={start}>Start</button>

    <button onClick={stop}>Stop</button>

    <button onClick={reset}>Reset</button>

    <p>Seconds: {seconds}</p>

    </>
  )
}

export default App
