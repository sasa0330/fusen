"use client";

import Card from "@/components/Card";
import { useCards } from "@/state/CardsContext";
import { useCardsDispatch } from "@/state/cardRerducer";
import { Sidebar } from "./_components/Sidebar";

export default function Home() {
  const cards = useCards();
  const cardsDispatch = useCardsDispatch();

  return (
    <main className="flex">
      <Sidebar cards={cards} cardsDispatch={cardsDispatch} />

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
