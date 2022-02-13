import React from "react";
import Card from "../ui/Card";
import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((item) => (
          <li key={Math.ceil(Math.random() * 9999)}>
            {item.username} ({item.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}
export default UsersList;
