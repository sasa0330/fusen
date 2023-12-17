import { createContext, useContext } from "react";

export const CardsContext = createContext<CardsType | null>(null);
export const useCards = () => useContext(CardsContext);
