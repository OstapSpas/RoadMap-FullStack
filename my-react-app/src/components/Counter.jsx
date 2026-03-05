import { useState } from "react";

function Counter() {
    const [count,setCount] = useState(0);

    function getStatus(){
        let status = "";
        if(count > 0){
            return status = "Positive";
        }else if(count < 0){
           return status = "Negative"; 
        }else{
            return status = "Zero";
        }
        
    }

    return (
        <div>
            <h2>Count: {count} </h2>
            <p>{getStatus()}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <button onClick={() => setCount(0)}>Reset</button>

        </div>
        
    );
}



export default Counter;