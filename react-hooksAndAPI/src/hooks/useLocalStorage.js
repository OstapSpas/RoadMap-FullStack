import { useState, useEffect,useRef } from "react";


export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = localStorage.getItem(key);
        if (saved !== null) {
            return JSON.parse(saved);   // є збережене → розпарсили
        }
        return initialValue;            // немає → стартове значення
    });

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
        
    },[key,value])

    return [value,setValue];


}