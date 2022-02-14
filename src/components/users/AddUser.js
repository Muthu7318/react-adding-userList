import React, { useState, useRef } from "react";
import Card from "../ui/Card";
import styles from "./AddUser.module.css";
import Button from "../ui/Button";
import ErrorModel from "../ui/ErrorModel";
import Wrapper from "../helper/Wrapper";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUsername, setenteredUsername] = useState("");
  // const [enteredAge, setenteredAge] = useState("");
  const [error, setError] = useState();

  // ***************//handling using single state
  // const [userForm, setUserForm] = useState({
  //   username: "",
  //   age: "",
  // });

  // const usernameChangeHandler = (e) => {
  //   setenteredUsername(e.target.value);
  //   //***************//handling using single state
  //   // setUserForm((prevState) => {
  //   //   return { ...prevState, username: e.target.value };
  //   // });
  // };
  // const ageChangeHandler = (e) => {
  //   setenteredAge(e.target.value);
  //   //***************//handling using single state
  //   // setUserForm((prevState) => {
  //   //   return { ...prevState, age: e.target.value };
  //   // });
  // };
  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    const userInfo = {
      username: enteredName,
      age: enteredUserAge,
    };
    console.log(userInfo);
    // setenteredUsername("");
    // setenteredAge("");
    props.onAddUser(userInfo);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
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
            // onChange={usernameChangeHandler}
            // // value={userForm.username}
            // value={enteredUsername}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // onChange={ageChangeHandler}
            // // value={userForm.age}
            // value={enteredAge}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
