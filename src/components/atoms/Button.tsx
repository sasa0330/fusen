import { ReactElement } from "react";

type Props = JSX.IntrinsicElements["button"] & BaseProps;
type BaseProps = {
  variable?: "primary" | "secondary";
};
export const Button = ({ variable = "primary", children, ...props }: Props) => {
  let variableClass = "btn-primary";
  switch (variable) {
    case "secondary":
      variableClass = "btn-secondary";
      break;
  }
  return (
    <button className={`btn ${variableClass}`} {...props}>
      {children}
    </button>
  );
};
