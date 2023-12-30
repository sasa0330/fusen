import React, { useState } from "react";
import { Delete } from "./icons/Delete";
import { useCards } from "@/state/useCards";

function Card({ id, children }: { id: number; children: string }) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { cardsDispatch } = useCards();

  return (
    <div className="h-[200px] w-[200px] bg-yellow-200 p-2">
      <div>{id}</div>
      <div className="h-[139px] w-[168px] text-xs text-black">
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
