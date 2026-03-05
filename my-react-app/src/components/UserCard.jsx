function UserCard ({name, city, role}) {
    return (
        <div>
        <h2>{name}</h2>
        <p>City: {city}</p>
        <p>Role: {role}</p>
        </div>
    )
}

export default UserCard;