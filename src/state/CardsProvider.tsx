"use client";

import { useReducer } from "react";
import { CardsContext } from "./CardsContext";
import { CardsDispatchContext, cardsReducer } from "./cardRerducer";
import { getLocalStrage } from "@/lib/utils";

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const strageCards = getLocalStrage("cards");
  const defaultCards: CardType[] = strageCards ? strageCards : [];
  const [cards, cardsDispach] = useReducer(cardsReducer, defaultCards);
  return (
    <CardsContext.Provider value={cards}>
      <CardsDispatchContext.Provider value={cardsDispach}>
        {children}
      </CardsDispatchContext.Provider>
    </CardsContext.Provider>
  );
};
