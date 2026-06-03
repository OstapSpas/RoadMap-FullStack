import { useState } from 'react'


export default function ToggleTheme ({name, lastname, age,}) {

    const [isDarkTheme, setIsDarkTheme] = useState(false);

    return (
        <div className={`toggle-content ${isDarkTheme ? "toggle-theme-dark" : "toggle-theme-light"} `}>
            <h1>Name: {name}</h1>
            <h1>Last Name: {lastname}</h1>
            <p>Age: {age}</p>

            <div className="toggle-block">
                <p>Theme is: </p>
                <button className="toggle-btn"
                type='button'
                
                onClick={() => setIsDarkTheme(!isDarkTheme)}>

                Change Theme</button>
            </div>
        </div>
    );
}