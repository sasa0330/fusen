"use client";

import Card from "@/components/Card";
import { Sidebar } from "./_components/Sidebar";
import React from "react";
import { useCards } from "@/state/cardRerducer";

export default function Home() {
  const { cards, cardsDispatch } = useCards();

  return (
    <main className="flex h-screen flex-col">
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

      <Sidebar
        hundleAddCard={() =>
          cardsDispatch({
            type: "ADD",
            payload: {
              id: cards.length + 1,
              text: "テキストテスト",
            },
          })
        }
      />
    </main>
  );
}
