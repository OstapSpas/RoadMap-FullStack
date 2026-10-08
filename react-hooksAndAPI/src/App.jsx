import { useEffect, useState } from "react";
import { useInput } from "./hooks/useInput";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { usePrevious } from "./hooks/usePrevious";



function useCounter(initial = 0) {
  // const [count, setCou nt] = useState(initial);

  const { count, increment, decrement, reset } = useCounter(0);
  const prevCount = usePrevious(count);

  function increment() {
    setCount(prev => prev + 1);
  }
  function decrement() {
    setCount(prev => prev - 1);
  }
  function reset() {
    setCount(initial);  
  }

  return { count, increment, decrement, reset };
}


function useToggle(initial = false) {
  const [value, setToggle] = useState(initial);

  function toggle(){
    setToggle(prev => !prev);
  }

  return [value, toggle]
}





export default function App() {
  const { count, increment, decrement, reset } = useCounter(0);

  const [isDark, toggleDark] = useToggle(false);
  const [isOpen, toggleOpen] = useToggle(false);

  const name = useInput("");


    const [todos, setTodos] = useLocalStorage("todos", []);  
  const [text, setText] = useState("");


  function addTodo() {
    const value = text.trim();
    if (value === "") return;
    setTodos(prev => [...prev, { id: Date.now(), text: value }]);
    setText("");
  }

  function removeTodo(id) {
    setTodos(prev => prev.filter(t => t.id !== id));
  }


  function usePrevious(value){
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    },[value])
  }

  return (
    <>




    <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>



    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>

      <input type="text" {...name}/>

      <p>{count}</p>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>


      <button onClick={toggleDark}>{isDark ? "🌙" : "☀️"}</button>
      <button onClick={toggleOpen}>{isOpen ? "Hide" :"Show"}</button>

      {isOpen && <p>Content</p>}
    </>
  );
}