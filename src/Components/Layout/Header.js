import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import { HeaderCartButton } from "./HeaderCartButton";
import styles from "./Header.module.css";
export const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1> React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Table of food" />
      </div>
    </Fragment>
  );
};
