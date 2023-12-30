import { useReducer } from "react";
import { getLocalStrage } from "@/lib/utils";
import { Card } from "@/type/card";
import { cardsReducer } from "./cardRerducer";

export const useCards = () => {
  const strageCards = getLocalStrage("cards");
  const defaultCards: Card[] = strageCards ? strageCards : [];
  const [cards, cardsDispatch] = useReducer(cardsReducer, defaultCards);

  return { cards, cardsDispatch };
};
