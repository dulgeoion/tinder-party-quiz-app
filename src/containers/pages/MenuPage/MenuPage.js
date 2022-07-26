import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/cross.png";
import isntagram from "../../../assets/instagram.png";
import { track } from "../../../utils/ga";
import MenuItem from "./components/MenuItem/MenuItem";
import styles from "./MenuPage.module.scss";

export default function MenuPage() {
  useEffect(() => {
    track("pageview", { page: "/" });
  }, []);

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
            onClick={() => {
              track("quiz_started_ordered");
              navigate("/ordered");
            }}
          ></MenuItem>
          <MenuItem
            text="Рандомний"
            onClick={() => {
              track("quiz_started_random");
              navigate("/random");
            }}
          ></MenuItem>
        </div>
      </div>

      <img
        onClick={() => {
          track("instagram_clicked", { page: "/" });
          window.location.href = "https://www.instagram.com/grace.uzh/";
        }}
        src={isntagram}
        className={styles.LogoInstagram}
        alt="Наш інстаграм"
      />
    </div>
  );
}
