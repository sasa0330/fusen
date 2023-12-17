"use client";

import { useCards } from "@/state/CardsContext";
import { useCardsDispatch } from "@/state/cardRerducer";

export default function Home() {
  const cards = useCards();
  const cardsDispatch = useCardsDispatch();

  return (
    <main>
      <button
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
      </button>
      <button onClick={() => console.log("削除")}>削除</button>
      <div>
        {cards &&
          cards.map((card) => (
            <div key={card.id}>
              <div>{card.id}</div>
              <div>{card.text}</div>
            </div>
          ))}
      </div>
    </main>
  );
}
