import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import people from "../../../data/people";
import { cardsAtom } from "../../../recoil/atoms/cards-atom";
import { track } from "../../../utils/ga";
import { shuffle } from "../../../utils/random";
import CardsDeck from "../../CardsDeck/CardsDeck";
import styles from "./RandomPage.module.scss";

export default function RandomPage() {
  const deck = useMemo(() => shuffle(people).filter((_, i) => i < 20), []);
  const setCards = useSetRecoilState(cardsAtom);
  const navigate = useNavigate();

  const onFinish = useCallback(() => {
    track("quiz_finished_random");
    navigate("/result");
  }, [navigate]);

  const handleLike = useCallback(
    (card) =>
      setCards((state) => ({ ...state, likes: [...state.likes, card] })),
    [setCards]
  );

  const handleDislike = useCallback(
    (card) =>
      setCards((state) => ({ ...state, dislikes: [...state.dislikes, card] })),

    [setCards]
  );

  return (
    <div className={styles.center}>
      <CardsDeck
        cards={deck}
        onLeftSwipe={handleDislike}
        onRightSwipe={handleLike}
        onFinish={onFinish}
      />
    </div>
  );
}
