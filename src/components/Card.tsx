import React, { useState } from "react";
import { Delete } from "./icons/Delete";
import { Action } from "@/type/card";

function Card({
  id,
  children,
  cardsDispatch,
}: {
  id: number;
  children: string;
  // DispatchをContextから受け取るとうまく動かないため propsで受け取る
  cardsDispatch: React.Dispatch<Action>;
}) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

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
        onClick={() => {
          cardsDispatch({
            type: "DELETE",
            payload: {
              id: Number(id),
            },
          });
        }}
      >
        <Delete />
      </button>
    </div>
  );
}

export default Card;
