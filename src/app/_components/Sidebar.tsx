import { useCards } from "@/state/cardRerducer";
import React from "react";

export const Sidebar = ({ hundleAddCard }: { hundleAddCard: () => void }) => {
  const { cards } = useCards();
  return (
    <div className="h-1/5 w-full border p-2">
      <div
        className="h-[60px] w-[60px] cursor-pointer bg-yellow-200"
        onClick={() => cards && hundleAddCard()}
      ></div>
    </div>
  );
};
