import { useEffect, useState } from "react";

import { useInterval } from "./hooks/useInterval";


function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [delay, setDelay] = useState(1000);

  useEffect(() => {
    console.log('Start interval, delay: ', delay);
    

    const id = setInterval(() => {
      setSeconds(prev => prev + 1);
      console.log('Tick-Tack Fast');
      
    },delay)

    return (() => {
      console.log('Timer is STOP delay = ', delay);
      clearInterval(id)
    })
  },[delay])
  


  return (
    <>

      <p>Seconds: {seconds}</p>
      <p>Delay: {delay}</p>
      <button onClick={() => setDelay(500)}>Fast</button>
      <button onClick={() => setDelay(2000)}>Slow</button>
      <button onClick={() => setDelay(1000)}>Normal</button>
    </>
  );



}

function WindowWidth() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize(){
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  },[])

  return (
    <p>Size window: {width} px</p>
  );
}


function Seconds() {
  const [seconds, setSeconds] = useState(0);

  useInterval(() => {
    setSeconds(prev => prev + 1);
  },1000)

  return (
    <p>Seconds times: {seconds}</p>
  );
}

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTime(new Date().toLocaleTimeString())
  },1000)

  return (
    <p>time: {time}</p>
  );
}


export default function App() {
  const [show, setShow] = useState(true);

  const [pos, setPos] = useState({x:0, y:0});

  useEffect(() => {
    function handleMove(e){
      setPos({x:e.clientX, y: e.clientY});
    }

    window.addEventListener("mousemove", handleMove);


    return () => window.removeEventListener('mousemove', handleMove);
  },[]);


  
  return (
    <>

      <button onClick={() => setShow(prev => !prev)}>
        {show ? "Сховати таймер" : "Показати таймер"}
      </button>

      {show && <Timer />}   {/* ← монтування/розмонтування Timer */}



      <WindowWidth />

      <p>X: {pos.x} Y:{pos.y}</p>

      <Seconds />
      <Clock />

    </>
  );
}