import React, { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Search from "../../logos/search.svg";
import Input from "./Input";
import Button from "../Base/Button";
import Spinner from "../Base/Spinner";

export interface InputBoxProps {
  isLoading: boolean;
  onClick: (name: string) => void;
}

const InputBox = ({ isLoading, onClick }: InputBoxProps): JSX.Element => {
  const [userName, setUserName] = useState("");

  return (
    <InputGroup style={{ padding: "0 1em" }} className="mb-3">
      <Input
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
        placeholder="UserName"
      />
      <InputGroup.Prepend>
        <Button onClick={() => onClick(userName)}>
          {isLoading ? <Spinner /> : <img src={Search} alt="Search Logo" />}
        </Button>
      </InputGroup.Prepend>
    </InputGroup>
  );
};

export default InputBox;
