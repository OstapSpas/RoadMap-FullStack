import { useState } from "react"

export default function Counter(){
    const [counter, setCount] = useState(0);

    


    return (
    
    <>
    <h2>count: {counter}</h2>
    <button onClick={() => setCount(prev => prev + 1)}>+</button>
    <button onClick={() => setCount(prev => prev + 1)}>-</button>
    <button onClick={() => setCount(0)}>Reset</button>
    </>)
}