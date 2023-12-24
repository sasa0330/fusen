import { createContext, useContext } from "react";

export const CardsContext = createContext<Card[] | null>(null);
export const useCards = () => useContext(CardsContext);
