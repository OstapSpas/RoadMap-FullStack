import { useEffect, useState } from "react";

export default function FirstEx(){



  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Компонент завантажився");
  }, []);

  useEffect(() => {
    console.log("Нове значення count:", count);
  }, [count]);


  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-1</button>

    </>
  )

}