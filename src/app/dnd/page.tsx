"use client";

import { ReactElement, useCallback, useState } from "react";

import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const items = ["1", "2", "3", "4", "5", "6", "7", "8"];
const contents = items.map((item) => ({
  id: item,
  content: item,
}));

interface SortableItemProps {
  id: string;
  children: ReactElement;
}

function SortableItem({ id, children }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    // スタイル調整用
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    borderRadius: 4,
    width: "150px",
    height: "150px",
    border: "1px solid black",
    backgroundColor: "white",
  };
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

export default function Page(): JSX.Element {
  const [state, setState] =
    useState<{ id: string; content: string }[]>(contents);
  console.log(state);
  const handleDragEnd = useCallback(
    (event: any) => {
      const { active, over } = event;
      if (over === null) {
        return;
      }
      if (active.id !== over.id) {
        const oldIndex = state
          .map((item) => {
            return item.id;
          })
          .indexOf(active.id);
        const newIndex = state
          .map((item) => {
            return item.id;
          })
          .indexOf(over.id);
        const newState = arrayMove(state, oldIndex, newIndex);
        setState(newState);
      }
    },
    [state]
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <SortableContext items={state}>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {/* スタイル調整用 */}
          {state.map((item) => (
            <SortableItem key={item.id} id={item.id}>
              <div>{item.content}</div>
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
