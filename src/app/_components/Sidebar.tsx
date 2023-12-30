import { useCards } from "@/state/useCards";
import React from "react";

export const Sidebar = ({}) => {
  const { cards, cardsDispatch } = useCards();
  return (
    <div className="h-1/5 w-full border p-2">
      <div
        className="h-[60px] w-[60px] cursor-pointer bg-yellow-200"
        onClick={() =>
          cards &&
          cardsDispatch({
            type: "ADD",
            payload: {
              id: cards.length + 1,
              text: "テキストテスト",
            },
          })
        }
      ></div>
    </div>
  );
};
