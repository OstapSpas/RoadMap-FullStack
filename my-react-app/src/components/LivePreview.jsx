import { useState } from "react";

export default function LiveInput() {
    const [text, setText] = useState("");


    function handleInput(e) {
        setText( e.target.value);
    }

    return (

        <>
            <h3>Live text: {text}</h3>

            <input 
                
             placeholder="New item..."
             value={text}
             onChange={handleInput}
            />

            <p>Text typed: {text}</p>
            <button onClick={() => setText("")}>Clear</button>
        </>
    )
}