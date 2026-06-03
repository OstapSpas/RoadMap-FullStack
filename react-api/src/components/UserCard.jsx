export default function UserCard({user, onDeleteUser, onEditUser}){
    return (
        <div key={user.id}>

            <p>ID: {user.id}</p>
          <h2>Name: {user.name}</h2>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
        <button onClick={() => onEditUser(user.id)}>Edit User</button>
        <button onClick={() => onDeleteUser(user.id)}>Delete User</button>



        </div>

    );
}