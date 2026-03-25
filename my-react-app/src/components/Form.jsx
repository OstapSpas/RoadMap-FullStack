import { useState } from "react";

export default function Form() {

    const [text,setText] = useState("");
    const [items, setItems] = useState([]);

    function handlaSubmit(e){
        e.preventDefault();

        const trimmed = text.trim();
        if(!trimmed) return;

        setItems([...items,trimmed]);
        setText("")
    }

    return (
        <>
            <h2>Add Item</h2>

            <form  onSubmit={handlaSubmit}>
                <input 
                    placeholder="New item"
                    value={text}
                    onChange={(e) => setText(e.target.value)}

                
                />

                <button type="submit">Add</button>
            </form>

            <ul>
                {items.map ((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        
        </>
    )

}