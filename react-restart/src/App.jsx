import { useState, useEffect } from 'react';
import './App.css'







function App() {

  const users = [
    {id: 1,nameUser: 'Ivan', age: 22, city: "Lviv"},
    {id: 2,nameUser: 'Petro', age: 26, city: "Kyiv"},
    {id: 3,nameUser: 'Oleh', age: 29, city: "Dnipro"},
    {id: 4,nameUser: 'Yaroslav', age: 42, city: "Lviv"},
  
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const [name,setName] = useState('');
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  
  function increment(){
    setCount(count + 5);
  }
  function decrement() {
    setCount(prev => prev - count);
  }

  function incrementLikes(){
    setLikeCount(likeCount + 1);
  }

  function handleLog(){
    console.log('Hello');
    
  }

  function handleAdd() {
    const value = text.trim();
    if (value === '') return;
    setItems(prev => [...prev, { id: Date.now(), text: value }]);
    setText('');
  }


  function handleDelete(idToRemove) {
    setItems(prev => prev.filter(item => item.id !== idToRemove));
  }

  return (
    <>

    <button 
    onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))} 
    style={{ background: theme === "dark" ? "#222" : "#fff", color: theme === "dark" ? "#fff" : "#000" , fontSize: theme === "dark" ? "22px" : "76px" }}>Theme</button>

    <p>{count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={() => setIsVisible(prev => !prev)}>Show</button>
    
    <br />

    <input type="text" 
    onChange={(e) => setName(e.target.value)}
    />
    <br />
    {name ? `Привіт ${name}` : "Введіть ім'я"}
    {/* <p>{name}</p> */}
    <br />
    {isVisible ? "Hide Text" :  "Show Text"}

    <br />
    <p>{likeCount}</p>
    <button 
    
    onClick={incrementLikes}>❤️</button>


    <input type="text" name="" id="" 
    onChange={(e) => (e.target.value)}
    />

    <ul>
      {users.map((user) => (
        <li key={user.id}>
            <strong>{user.nameUser}</strong> — {user.age} років, м. {user.city}
            <button onClick={handleLog}>Delete</button>
        </li>
      ))}
    </ul>


      <input type="text" name="" id=""
      value={text}
      onChange={(e) => setText(e.target.value)}
      />


        <button onClick={handleAdd}>Add</button>

        
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}
            <button onClick={() => handleDelete(item.id)}>X</button>
          </li>
          
        ))}
      </ul>

    </>
  )
}

export default App
