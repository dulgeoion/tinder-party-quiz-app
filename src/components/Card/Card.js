import React from "react";
import { Card as CardBase } from "react-swipeable-cards";
import { sanitizeDescription } from "../../data/people";
import TinderCard from "../TiderCard/TinderCard";
import styles from "./Card.module.scss";

export default function Card({
  onSwipeLeft,
  onSwipeRight,
  picture,
  name,
  age,
  advantage,
  disadvantage,
  data,
  onFinish,
  index,
  lastIndex,
}) {
  return (
    <TinderCard
      className={styles.swipe}
      id={data.id}
      key={data.id}
      onSwipe={(dir, ref) => {
        dir === "right" ? onSwipeRight(data) : onSwipeLeft(data);
        if (index === 0 && onFinish) onFinish();
      }}
    >
      <div className={styles.card}>
        <div
          style={{ backgroundImage: "url(" + picture + ")" }}
          className={styles.picture}
        />
        <div className={styles.content}>
          <h3>
            {name}, <span className={styles.age}>{age}</span>
          </h3>
          <ul>
            {advantage.map((item, index) => (
              <li key={index}>{sanitizeDescription(item)}</li>
            ))}
            {disadvantage.map((item, index) => (
              <li key={index}>{sanitizeDescription(item)}</li>
            ))}
          </ul>
        </div>
      </div>
    </TinderCard>
  );
}
