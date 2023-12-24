import { Action, Card } from "@/type/card";
import React from "react";

export const Sidebar = ({
  cards,
  cardsDispatch,
}: {
  cards: Card[] | null;
  cardsDispatch: React.Dispatch<Action>;
}) => {
  return (
    <div className="p-2 h-[300px] w-fit border">
      <div
        className="w-[60px] h-[60px]"
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
