import React from "react";
import styles from "./PetInfo.module.css";

function PetInfo(props) {
  console.log(props);
  return (
    <h1 className={styles.title}>
      My {props.animal} is {props.age} years old
    </h1>
  );
}

export default PetInfo;
