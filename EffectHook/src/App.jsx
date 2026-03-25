import { useState } from 'react'
import { useEffect } from "react";

import './App.css'

import FirstEx from "./components/FirstEx"
import UserList from './components/UserList';
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <FirstEx />
      <UserList />

    </>
  )
}

export default App
  