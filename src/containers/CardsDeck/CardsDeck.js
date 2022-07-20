import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";

export default function CardsDeck({
  cards,
  onLeftSwipe,
  onRightSwipe,
  onFinish,
}) {


  return (
    <>
      {cards.map((card, i) => (
        <Card
          data={card}
          key={card.id}
          picture={card.picture}
          age={card.age}
          name={card.name}
          advantage={card.advantage}
          disadvantage={card.disadvantage}
          onSwipeLeft={onLeftSwipe}
          onSwipeRight={onRightSwipe}
          onFinish={onFinish}
          index={i}
          lastIndex={cards.length - 1}
        />
      ))}
    </>
  );
}
