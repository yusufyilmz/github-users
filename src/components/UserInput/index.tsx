import React, { useContext } from "react";
import useGithubFetch from "../../hooks/useGithubFetch";
import InputBox from "./InputBox";
import { GithubDataStateContext } from "../../context";

const UserInput = (): JSX.Element => {
  const [onDemandGithubFetc] = useGithubFetch();
  const { state } = useContext(GithubDataStateContext);

  return (
    <InputBox
      isLoading={state.isLoading}
      onClick={(userName: string) => {
        onDemandGithubFetc(userName);
      }}
    />
  );
};

export default UserInput;
