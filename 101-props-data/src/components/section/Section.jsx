import React from "react";
import Card from "../card/Card";
import Styles from "./Section.module.css";

const Section = () => {
  const data = [
    { id: 1, title: "Product 1", price: "10$" },
    { id: 2, title: "Product 2", price: "20$" },
    { id: 3, title: "Product 3", price: "30$" },
    { id: 4, title: "Product 3", price: "40$" },
    { id: 5, title: "Product 3", price: "35$" },
    { id: 6, title: "Product 3", price: "50$" },
  ];

  return (
    <div>
      <h2 className={Styles.title}>Products</h2>
      <div className={Styles.cardList}>
        {data.map(({ id, title, price }) => (
          <Card key={id} title={title} price={price} />
        ))}
      </div>
    </div>
  );
};

export default Section;
