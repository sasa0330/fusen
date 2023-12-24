import { useCardsDispatch } from "@/state/cardRerducer";
import React, { useState } from "react";
import { Delete } from "./icons/Delete";

function Card({ id, children }: { id: number; children: string }) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const cardsDispatch = useCardsDispatch();

  return (
    <div className="w-[200px] h-[200px] bg-yellow-200 p-2 mb-2">
      <div className="w-[168px] h-[139px] text-black text-xs">
        {isEdit ? (
          <textarea
            autoFocus={true}
            onBlur={(e) => {
              setIsEdit(false);
              cardsDispatch({
                type: "UPDATE",
                payload: {
                  id: id,
                  text: e.target.value,
                },
              });
            }}
          />
        ) : (
          <div onClick={() => setIsEdit(true)}>{children}</div>
        )}
      </div>
      <button
        onClick={() =>
          cardsDispatch({
            type: "DELETE",
            payload: {
              id: Number(id),
            },
          })
        }
      >
        <Delete />
      </button>
    </div>
  );
}

export default Card;
