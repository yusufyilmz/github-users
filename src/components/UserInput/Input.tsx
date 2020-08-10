import React from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: any) => void;
}

const Input = (props: InputProps): JSX.Element => {
  const { onChange, value, placeholder } = props;

  return (
    <input
      style={{
        width: "100%",
        padding: 15,
        display: "block",
        height: "calc(1.5em + .75rem + 2px)",
        fontSize: "1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#495057",
        backgroundColor: "#fff",
        backgroundClip: "padding-box",
        borderRadius: ".25rem",
        borderColor: "currentColor",
        transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
        borderStyle: "groove",
      }}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
