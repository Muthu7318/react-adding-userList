import React, { useState } from "react";
import Card from "../ui/Card";
import styles from "./AddUser.module.css";
import Button from "../ui/Button";
import ErrorModel from "../ui/ErrorModel";
import Wrapper from "../helper/Wrapper";

function AddUser(props) {
  const [enteredUsername, setenteredUsername] = useState("");
  const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState();

  // ***************//handling using single state
  // const [userForm, setUserForm] = useState({
  //   username: "",
  //   age: "",
  // });

  const usernameChangeHandler = (e) => {
    setenteredUsername(e.target.value);
    //***************//handling using single state
    // setUserForm((prevState) => {
    //   return { ...prevState, username: e.target.value };
    // });
  };
  const ageChangeHandler = (e) => {
    setenteredAge(e.target.value);
    //***************//handling using single state
    // setUserForm((prevState) => {
    //   return { ...prevState, age: e.target.value };
    // });
  };
  const addUserHandler = (e) => {
    e.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    const userInfo = {
      username: enteredUsername,
      age: enteredAge,
    };
    console.log(userInfo);
    setenteredUsername("");
    setenteredAge("");
    props.onAddUser(userInfo);
    //***************//handling using single state
    // console.log(userForm);
    // setUserForm({ username: "", age: "" });
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModel>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            // value={userForm.username}
            value={enteredUsername}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            // value={userForm.age}
            value={enteredAge}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
