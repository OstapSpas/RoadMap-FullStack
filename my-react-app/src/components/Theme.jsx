import { useState } from "react";

export default function Theme() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <h2>Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle-switch</button>
    </>
  );
}