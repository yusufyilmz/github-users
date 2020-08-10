import React, {
  useContext,
  createContext,
  useReducer,
  Dispatch,
  PropsWithChildren,
} from "react";
import reducer from "./reducer";
import {
  Action,
  GithubRepositoryResponse,
  GithubOrganizationResponse,
} from "./actions";

export type ContextDispatchInterface = { dispatch: Dispatch<Action> };
export type ContextStateInterface = {
  state: {
    repository?: GithubRepositoryResponse[];
    organization?: GithubOrganizationResponse[];
    isLoading: boolean;
    error?: string;
  };
};

export const GithubDataStateContext = createContext<ContextStateInterface>({
  state: {
    isLoading: false,
  },
});
export const GithubDataDispatchContext = createContext<
  ContextDispatchInterface
>({
  dispatch: () => null,
});

export const useGithubDataDispatchContext = (): ContextDispatchInterface => {
  const contextValue = useContext(GithubDataDispatchContext);

  return contextValue;
};

export const useGithubDataStateContext = (): ContextStateInterface => {
  const contextValue = useContext(GithubDataStateContext);

  return contextValue;
};

export const GithubDataProvider = (
  props: PropsWithChildren<unknown>
): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    organization: [],
    repository: [],
  });

  const { children } = props;
  return (
    <GithubDataDispatchContext.Provider value={{ dispatch }}>
      <GithubDataStateContext.Provider value={{ state }}>
        {children}
      </GithubDataStateContext.Provider>
    </GithubDataDispatchContext.Provider>
  );
};
