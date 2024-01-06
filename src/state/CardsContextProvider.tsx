"use client";

import { createContext, useEffect } from "react";
import { useCards } from "./cardRerducer";
import { Card } from "@/type/card";

export const CardsContext = createContext<Card[]>([]);

export const CardsProvider = ({ children }: { children: React.ReactNode }) => {
  const { cards } = useCards();

  return (
    <CardsContext.Provider value={cards}>{children}</CardsContext.Provider>
  );
};
