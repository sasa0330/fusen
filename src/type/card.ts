export type Card = {
  id: number;
  text: string;
};

export type Action =
  | {
      type: "ADD";
      payload: Card;
    }
  | {
      type: "UPDATE";
      payload: Card;
    }
  | {
      type: "DELETE";
      payload: Omit<Card, "text">;
    };

export type CardDispatch = React.Dispatch<Action>;
