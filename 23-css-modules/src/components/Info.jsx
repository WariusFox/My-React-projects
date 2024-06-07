import React from "react";
import styles from "./info.module.css";

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info component</h1>
      <button>Click me in the Info component</button>
    </div>
  );
}

export default Info;
