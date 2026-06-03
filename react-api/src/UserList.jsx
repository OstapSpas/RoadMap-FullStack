import { useState } from "react";
// import userList from "./data/users";

import UserCard from "./components/UserCard";
import { userList } from "./data/users";
import Form from "./components/Form";

import FormEdit from "./components/FormEdit";
export default function UserList() {
  const [users, setUsers] = useState(userList);


  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
const [editingUserId, setEditingUserId] = useState(null);

  let totalUsers = users.length;

  console.log(totalUsers);

  // console.log(newUser);

  function addUserById(id, name, age, city) {
    const newUser = {
      id: Date.now(),
      name: name,
      age: age,
      city: city,
    };
    setUsers([...users, newUser]);
  }

  function deleteUserById(id) {
    const deleteUser = users.filter((user) => user.id !== id);

    setUsers(deleteUser);
  }

  function editUsers(id, editName, editAge, editCity) {
    const updateUser = users.map((user) => {
      if (user.id === id) {
        return {
          ...user,
          name: editName,
          age: editAge,
          city: editCity,
        };
      }

      return user;
    });

    setUsers(updateUser);
  }


  function openEditModal(id){
    setEditingUserId(id);
    setIsEditModalOpen(true);
  }

  function closeEditModal(){
    setEditingUserId(null);
    setIsEditModalOpen(false)
  }

  return (
    <div>
      <Form onAddUser={addUserById} />

      {/* <button onClick={() => addUserById(6, "Peter", 28, "lviv")}>Add new User</button> */}

      <p>User Length: {totalUsers}</p>
        {users.map((user) => (
        <UserCard
            key={user.id}
            user={user}
            onEditUser={openEditModal}
            onDeleteUser={deleteUserById}
        />
        ))}

        {isEditModalOpen && (
        <FormEdit
            userId={editingUserId}
            odEditForm={editUsers}
            onClose={closeEditModal}
        />
        )}


    </div>
  );
}
