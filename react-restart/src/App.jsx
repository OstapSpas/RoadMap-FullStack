import { useState, useEffect } from 'react';
import './App.css'



function Box(){
  
  useEffect(() => {
    console.log("Mount");
    
  },[])
  
  return (
    
    <>
    <p>Test</p>
    </>
  );
}


const MAX = 10;
const MIN = -10;


function App() {

  const [show, setShow] = useState(false);

  const [text, setText] = useState('');
  
  const sizes = ["S", "M", "L", "XL"];
  const [selected, setSelected] = useState(null);


  const [a, setA] = useState(false);
  const [b, setB] = useState(false);

  const [showBox, setShowBox] = useState(false);

  const [time,setTime] = useState("");
  const [theme,setTheme] =useState('light');

  useEffect(() => {
    document.body.style.background = theme === "dark" ? "#222" :"#fff"
  },[theme])


  // const sum = Number(a) + Number(b);

    useEffect(() => {
      setInterval(() => {
        setTime(new Date().toLocaleTimeString())
      }, 1000);
      // console.log(time);
      
    },[time]),

  useEffect(() => {
    console.log("Змінився A:");
    
  },[a]);

  useEffect(() => {
    console.log("Змінився B:");
    
  },[b])


    const [count, setCount] = useState(0);
    const user = {name: "Ostap"}

  useEffect(() => {
    console.log("Effect: ", );
    
  },[user])

    function Increment() {
      setCount(prev => Math.min(prev + 1,MAX))
    }

    function Decrement() {
      setCount(prev => Math.max(prev -1, MIN));
    }

  return (
    <>
    <p>Count: {count}</p>
    <button onClick={Increment} disabled= {count === MAX}>Increment</button>
    <button onClick={Decrement} disabled = {count === MIN}>Decrement</button>
    <button onClick={() => setCount(0)}>Reset</button>

    <br />
      <input type= {show ? 'text' : 'password'} placeholder='Password' />

      <button onClick={() => setShow(prev => !prev)}>{show ? "Приховати"  : "Показати"}</button>


      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{borderColor: text.length > 10 ? 'red' : 'gray', backgroundColor: text.length > 10 ? 'red' : 'white'} }
      />
      <p style={{color:text.length > 10 ?'red' : 'black'}}>{text.length} / 10</p>


      {sizes.map((size) => (
        <button 
        key={size}
        onClick={()=> setSelected(size) }
        style={{
          background:size === selected ? "black" : "white",
          color: size === selected ? "white" : "black",
        }}

>
          {size}
        </button>


        
      ))}


      <input 
      type="number"
       value={a}
       onChange={(e) => setA(e.target.value)}
       />


       <input 
       type="number"
       value={b}
       onChange={(e) => setB(e.target.value)}
       />

       {/* <p style={{color: sum > 100 ? 'green' : 'false'}}>Sum: {sum}</p> */}


      <button
      onClick={() => setShowBox(prev => !prev)}
      >{showBox ? "Сховати" : "Показати"}</button>

      {showBox && <Box />}

      <button onClick={() => setA(prev => !prev)}>Change A</button>
      <button onClick={() => setB(prev => !prev)}>Change B</button>

        <p>{time}</p>

        <button onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>Change Theme</button>
    </>
  )
}

export default App
