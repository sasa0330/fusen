import { createContext, useContext } from "react";

type Action =
  | {
      type: "ADD";
      payload: CardType;
    }
  | {
      type: "DELETE";
      payload: CardType;
    };

export const cardsReducer = (state: CardsType, action: Action) => {
  const { type, payload } = action;
  const copyState = state.slice();
  switch (type) {
    case "ADD":
      copyState.push({
        id: payload.id,
        text: payload.text,
      });
      return copyState;
    case "DELETE":
      return copyState;
    default:
      console.log("登録されていないアクションタイプ...");
      return state;
  }
};

export const CardsDispatchContext = createContext<React.Dispatch<Action>>(
  () => {}
);
export const useCardsDispatch = () => useContext(CardsDispatchContext);
