import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { Sort } from "../../components/Sort/Sort";
import { Categories } from "../../components/Categories/Categories";
import { PizzaBlock } from "../../components/PizzaBlock";
import Variants from "../../components/Variants";

import { fetchCards } from "../../redux/slices/cardsSlice";
import { setCategoryId } from "../../redux/slices/filterSlice";
import { filterCategory } from "../../redux/slices/cardsSlice";

import styles from "./Home.module.scss";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation();
  console.log(location)
  
  const categoryId = useSelector((state) => state.filter.categoryId);
  const filterForFetchByCategory = useSelector((state) => state.cards.filterByCategory);
  const filterForFetchByName = useSelector((state) => state.cards.filterByName);

  const onChangeCategory = (index) => {
    dispatch(filterCategory(index));
    dispatch(setCategoryId(index)); // устанавливает стейт кнопки категорий
    // dispatch(filterName(id)); // устанавливает стейт категории  рабочий вариант с категори компоненто, проверить что-то одно наверное удалить
  };

  useEffect(() => {
    dispatch(fetchCards({ filterForFetchByCategory, filterForFetchByName }));
  }, [dispatch, filterForFetchByCategory]);

  const { arrCards, status, error } = useSelector((state) => state.cards);

  const skeletons = [...new Array(6)].map((_, index) => <Variants key={index} />);
  const cardsPizzas = arrCards.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.content__top}>
          <Categories categoryId={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className={styles.content__title}>Все пиццы</h2>
        <div className={styles.content__items}>
          {status === "loading" && skeletons}
          {status === "resolved" && cardsPizzas}
          {status === "rejected" && <h2>{error}</h2>}
        </div>
      </div>
    </>
  );
}

export default Home;
