import { createContext, useContext } from "react";

export const CardsContext = createContext<CardType[] | null>(null);
export const useCards = () => useContext(CardsContext);
