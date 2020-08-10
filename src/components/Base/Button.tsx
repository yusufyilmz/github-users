import React, { PropsWithChildren } from "react";

interface ButtonProps {
  onClick: (e: any) => void;
}

const Button = (props: PropsWithChildren<ButtonProps>): JSX.Element => {
  const { onClick, children } = props;
  return (
    <button
      type="button"
      style={{
        background: "none",
        border: "none",
        position: "absolute",
        right: 10,
        top: 2,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
