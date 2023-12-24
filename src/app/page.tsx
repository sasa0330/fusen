"use client";

import Card from "@/components/Card";
import { useCards } from "@/state/CardsContext";
import { useCardsDispatch } from "@/state/cardRerducer";
import { Sidebar } from "./_components/Sidebar";
import React from "react";

export default function Home() {
  const cards = useCards();
  const cardsDispatch = useCardsDispatch();

  return (
    <main className="flex h-screen flex-col">
      <div className="flex h-4/5 w-full flex-wrap overflow-scroll">
        {cards &&
          cards.map((card) => (
            <React.Fragment key={card.id}>
              <Card id={card.id}>{card.text}</Card>
            </React.Fragment>
          ))}
      </div>
      <Sidebar cards={cards} cardsDispatch={cardsDispatch} />
    </main>
  );
}
