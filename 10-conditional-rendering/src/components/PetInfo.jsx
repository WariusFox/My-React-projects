import React from "react";
import styles from "./PetInfo.module.css";

function PetInfo(props) {
  const { animal, age, hasPet } = props;
  const text = hasPet
    ? `My ${animal} is ${age} years old`
    : "I don't have an animal";

  return <h1 className={styles.title}>{text}</h1>;
}

export default PetInfo;
