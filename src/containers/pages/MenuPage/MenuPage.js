import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/cross.png";
import MenuItem from "./components/MenuItem/MenuItem";
import styles from "./MenuPage.module.scss";

export default function MenuPage() {
  const navigate = useNavigate();
  return (
    <div className={styles.MenuPage}>
      <div className={styles.LogoSection}>
        <span className={styles.Logo}>
          <img src={logo} />
        </span>
        <h1>Знайди ідеальну людину</h1>
      </div>
      <div className={styles.MenuSection}>
        <h3>Обери режим гри:</h3>
        <div className={styles.MenuItemsSection}>
          <MenuItem
            text="Лінійний"
            onClick={() => navigate("/ordered")}
          ></MenuItem>
          <MenuItem
            text="Рандомний"
            onClick={() => navigate("/random")}
          ></MenuItem>
        </div>
      </div>
    </div>
  );
}
