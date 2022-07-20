import { atom } from "recoil";
import people from "../../data/people";

export const cardsAtom = atom({
  key: "cardsState",
  default: {
    likes: [],
    dislikes: [],
    // likes: [...people.filter((_, i) => i < 5)],
    // dislikes: [...people.filter((_, i) => i > 4 && i < 10)],
  },
});
