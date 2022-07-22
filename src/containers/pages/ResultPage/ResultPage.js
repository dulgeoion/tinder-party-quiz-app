import React, { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { mapTempersFromPeople } from "../../../data/tempers";
import { cardsAtom } from "../../../recoil/atoms/cards-atom";
import styles from "./ResultPage.module.scss";

const Column = ({ tempers, title }) => (
  <div className={styles.column}>
    <h3>{title}</h3>
    <ul>
      {Object.keys(tempers).map((item, index) => (
        <li key={index}>
          {item}
          <em> ({tempers[item].join(", ")})</em>
        </li>
      ))}
    </ul>
  </div>
);

export default function ResultPage() {
  const [cards] = useRecoilState(cardsAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (cards.likes.length === 0) navigate("/");
  }, [cards, navigate]);

  const { likes, dislikes: compromises } = useMemo(
    () => mapTempersFromPeople(cards.likes),
    [cards]
  );

  const { dislikes } = useMemo(
    () => mapTempersFromPeople(cards.dislikes),
    [cards]
  );

  return (
    <div className={styles.wrapper}>
      <span onClick={() => navigate("/")} className={styles.close} />
      <Column tempers={likes} title="Тобі імпонують якості:" />
      <Column tempers={compromises} title="Ти можеш змиритись з якостями:" />
      <Column tempers={dislikes} title="Ти не можеш змиритись з якостями:" />
    </div>
  );
}
