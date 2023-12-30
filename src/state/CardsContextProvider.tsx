"use client";

import { createContext } from "react";
import { Action, Card } from "@/type/card";
import { useCards } from "./useCards";

export const CardsContext = createContext<Card[]>([]);
export const Context = createContext<React.Dispatch<Action>>(() => {});

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const { cards, cardsDispatch } = useCards();
  return (
    <CardsContext.Provider value={cards}>
      <Context.Provider value={cardsDispatch}>{children}</Context.Provider>
    </CardsContext.Provider>
  );
};
