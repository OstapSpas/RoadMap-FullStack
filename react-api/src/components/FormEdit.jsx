import { useState } from "react";


export default function FormEdit({odEditForm, userId, onClose}) {


    const [name, editName] = useState("");
    const [age, editAge] = useState("");
    const [city, editCity] = useState("");

    function handleEdit (e){
        e.preventDefault();
        // console.log("sadasd");
        
        odEditForm(userId,name,age,city);
        onClose();
        // console.log(name);
        
        editName("");
        editAge("");
        editCity("");
    }


    return (
        <div className="modal-overlay">
        <form onSubmit={handleEdit} className="edit-form modal">
            <label htmlFor="">Enter New Name</label>
            <input
                type="text"
                placeholder="Enter New Name"
                value={name}
                onChange={(e) => editName(e.target.value)}
            />


            <label htmlFor="">Enter New Age</label>
            <input
                type="text"
                placeholder="Enter New Age"
                value={age}
                onChange ={(e) => editAge(e.target.value)}
            />



            <label htmlFor="">Enter New City</label>
            <input
                type="text"
                placeholder="Enter New City"
                value={city}
                onChange={(e) => editCity(e.target.value)}
            />

            <button type="submit">Apply</button>
            <button type="submit">X</button>
        </form>
        </div>
    );
}