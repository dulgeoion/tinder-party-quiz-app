import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cardsAtom } from "../../../recoil/atoms/cards-atom";
import styles from "./ResultPage.module.scss";

export default function ResultPage() {
  const [cards] = useRecoilState(cardsAtom);
  const navigate = useNavigate();

  const likes = cards.likes.reduce(
    (acc, card) => [...acc, ...card.advantage],
    []
  );

  const compromises = cards.likes.reduce(
    (acc, card) => [...acc, ...card.disadvantage],
    []
  );

  const dislikes = cards.dislikes.reduce(
    (acc, card) => [...acc, ...card.disadvantage],
    []
  );

  return (
    <div className={styles.wrapper}>
      <span onClick={() => navigate("/")} className={styles.close} />
      <div className={styles.column}>
        <h3>Тобі імпонують якості:</h3>
        <ul>
          {likes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Ти можеш змиритись з якостями:</h3>
        <ul>
          {compromises.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles.column}>
        <h3>Ти не можеш змиритись з якостями:</h3>
        <ul>
          {dislikes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
