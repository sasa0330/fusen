import { createContext, useContext } from "react";

type Action =
  | {
      type: "ADD";
      payload: CardType;
    }
  | {
      type: "UPDATE";
      payload: CardType;
    }
  | {
      type: "DELETE";
      payload: Omit<CardType, "text">;
    };

export const cardsReducer = (state: CardsType, action: Action) => {
  const { type, payload } = action;
  const copyState = state.slice();
  switch (type) {
    case "ADD": {
      copyState.push({
        id: payload.id,
        text: payload.text,
      });
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
      return result;
    }
    case "DELETE": {
      const result = copyState.filter((card) => {
        if (card.id !== payload.id) {
          return card;
        }
      });

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
