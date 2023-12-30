import { setLocalStrage } from "@/lib/utils";
import { Action, Card } from "@/type/card";
import { createContext, useContext } from "react";

export const cardsReducer = (state: Card[], action: Action) => {
  const { type, payload } = action;
  const copyState = state.slice();
  switch (type) {
    case "ADD": {
      copyState.push({
        id: payload.id,
        text: payload.text,
      });
      setLocalStrage("cards", copyState);
      return copyState;
    }
    case "UPDATE": {
      const result = copyState.map((card) => {
        if (card.id === payload.id) {
          return {
            id: payload.id,
            text: payload.text,
          };
        } else {
          return card;
        }
      });
      setLocalStrage("cards", result);
      return result;
    }
    case "DELETE": {
      const result = copyState.filter((card) => {
        if (card.id !== payload.id) {
          return card;
        }
      });

      // idが歯抜けになるので 連番で振り直す
      result.forEach((r, i) => {
        r.id = i;
      });
      setLocalStrage("cards", result);
      return result;
    }
    default:
      console.log("登録されていないアクションタイプ...");
      return state;
  }
};

export const CardsDispatchContext = createContext<React.Dispatch<Action>>(
  () => {}
);
export const useCardsDispatch = () => useContext(CardsDispatchContext);
