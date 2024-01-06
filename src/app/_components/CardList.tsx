import Card from "@/components/Card";
import { Action, Card } from "@/type/card";
import React, { Dispatch } from "react";

function CardList({
  cards,
  cardsDispatch,
}: {
  cards: Card[];
  cardsDispatch: Dispatch<Action>;
}) {
  return (
    <div className="h-4/5 overflow-scroll">
      <div className="flex w-full flex-wrap gap-2">
        {cards &&
          cards.map((card) => (
            <React.Fragment key={card.id}>
              <Card id={card.id} cardsDispatch={cardsDispatch}>
                {card.text}
              </Card>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default CardList;
