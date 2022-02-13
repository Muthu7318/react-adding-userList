import React, { useState } from "react";
import AddUser from "./components/users/AddUser";
import UsersList from "./components/users/UsersList";

function App() {
  // const users = [];
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (singleUser) => {
    setUsersList((prevState) => {
      return [...prevState, singleUser];
    });
    console.log(usersList);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </div>
  );
}

export default App;
