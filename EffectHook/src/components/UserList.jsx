import { useEffect, useState } from "react";

export default function UserList() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading ] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");



    async function fetchUsers() {
        try{
            setLoading(true);
            setError("");


            const res = await fetch("https://jsonplaceholder.typicode.com/users");

            if(!res.ok){
                throw new Error("Don't loading users");
                
            }

            const data = await res.json();
            setUsers(data);

        }catch(err){
              setError(err.message);
            
        }finally{
            setLoading(false)
        }

    }



    useEffect(() => {
        fetchUsers();
    }, []);
    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
    );




    if(loading){
        return <h2>loading ...</h2>
    }
    if (error) {
    return <h2>Error: {error}</h2>;
    }



  return (
    <>
      <h2>Список користувачів</h2>

      <input
        type="text"
        placeholder="Пошук по імені"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>

      <button onClick={fetchUsers}>Update Data</button>
    </>
  );
}