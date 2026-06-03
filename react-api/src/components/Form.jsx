import { useState } from "react";

export default function Form({ onAddUser }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");


    function handleSubmit(e) {
        e.preventDefault();

        if (name === "") {
            alert("Enter your name");
            return;

        } else if (age === "") {
            alert("Enter your age");
            return;
        } else if (city === "") {
            alert("Enter your city");
            return;
        }


        onAddUser(name, age, city);

        setName("");
        setAge("");
        setCity("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Enter Name</label>
            <input
                type="text"
                placeholder="Enter Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Enter Age</label>
            <input
                type="text"
                placeholder="Enter Age..."
                value={age}
                onChange={(e) => setAge(e.target.value)}
            />


            <label htmlFor="">Enter City</label>
            <input
                type="text"
                placeholder="Enter City..."
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <button type="submit">Add User</button>

        </form>
    );
}