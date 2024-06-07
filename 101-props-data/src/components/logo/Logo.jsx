import React from "react";
import styles from "./Logo.module.css";
import img from "../../assets/images/logo-png.png";

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img src={img} alt="Logo" className={styles.logoImage} />
      <span className={styles.logoText}>Стрелок</span>
    </div>
  );
};

export default Logo;
