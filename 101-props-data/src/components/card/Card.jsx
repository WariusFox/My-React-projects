import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const { title, price } = props;

  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>Price {price}</p>
    </div>
  );
};

export default Card;
