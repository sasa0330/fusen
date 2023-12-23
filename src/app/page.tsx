"use client";

import Card from "@/components/Card";
import { Button } from "@/components/atoms/Button";
import { useCards } from "@/state/CardsContext";
import { useCardsDispatch } from "@/state/cardRerducer";
import { useState } from "react";

export default function Home() {
  const cards = useCards();
  const cardsDispatch = useCardsDispatch();

  const [deleteTarget, setDeleteTarget] = useState<number>(0);
  return (
    <main>
      <Button
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
      >
        追加
      </Button>

      <div>
        {cards &&
          cards.map((card) => (
            <div key={card.id}>
              <Card id={card.id}>{card.text}</Card>
            </div>
          ))}
      </div>
    </main>
  );
}
