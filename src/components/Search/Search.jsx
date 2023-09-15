import React, { useRef, useState, useEffect } from "react";
import { fetchCards, filterName } from "../../redux/slices/cardsSlice";
import { useDispatch, useSelector } from "react-redux";

import styles from "./Search.module.scss";

const Search = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const filterForFetchByCategory = useSelector((state) => state.cards.filterByCategory);
  const filterForFetchByName = useSelector((state) => state.cards.filterByName);

  const onClickSearch = () => {
    setSearchValue("");
    inputRef.current.focus();
  };

  // const stade = (first) => {
  //   setSearchValue(first)
  // };

  useEffect(() => {
    dispatch(filterName(searchValue));
  }, [dispatch, searchValue]);

  useEffect(() => {
    dispatch(fetchCards({ filterForFetchByCategory, filterForFetchByName }));
  }, [dispatch, filterForFetchByName]);

  return (
    <div className={styles.search__container}>
      <input
        ref={inputRef}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)} // попробовать ивент передать
        className={styles.search}
        type="text"
        placeholder="Search..."
      />

      <svg
        className={styles.icon__search}
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#919191"
        stroke-width="0.00024000000000000003"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
            fill="#919191"
          ></path>{" "}
        </g>
      </svg>

      {searchValue && (
        <svg
          className={styles.icon__clear}
          onClick={onClickSearch}
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g id="Menu / Close_SM">
              {" "}
              <path
                id="Vector"
                d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                stroke="#717171"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
