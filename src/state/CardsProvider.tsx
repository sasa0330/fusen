"use client";

import { useReducer } from "react";
import { CardsContext } from "./CardsContext";
import { CardsDispatchContext, cardsReducer } from "./cardRerducer";

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const strageCards = window.localStorage.getItem("cards");
  const defaultCards: CardType[] = strageCards ? JSON.parse(strageCards) : [];
  const [cards, cardsDispach] = useReducer(cardsReducer, defaultCards);
  return (
    <CardsContext.Provider value={cards}>
      <CardsDispatchContext.Provider value={cardsDispach}>
        {children}
      </CardsDispatchContext.Provider>
    </CardsContext.Provider>
  );
};
