import React from "react";

import styles from "./Categories.module.scss";


export const Categories = ({ categoryId, onChangeCategory }) => {

  const arrayCategories = ["All", "Meat", "Vegeterian🌱", "Spicy", "BBQ", "Cheese"];
  // вывод кнопок категорий и поиск сопадений по индексу кнопок и индексу массива с присваиванием актив класса и все
  return (
    <div className={styles.categories}>
      <ul>
        {arrayCategories.map((item, index) => (
          <li
            key={item}
            onClick={() => onChangeCategory(index)}
            className={categoryId === index ? styles.active : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
