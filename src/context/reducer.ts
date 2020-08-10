import {
  ActionTypes,
  Action,
  GithubRepositoryResponse,
  GithubOrganizationResponse,
} from "./actions";

export enum GithubDataType {
  orgs = "orgs",
  repos = "repos",
}
export type State = {
  repository?: GithubRepositoryResponse[];
  organization?: GithubOrganizationResponse[];
  isLoading: boolean;
  error?: string;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case ActionTypes.request:
      return { ...state, isLoading: true };
    case ActionTypes.success:
      if (action.fetchType === GithubDataType.repos) {
        return { ...state, isLoading: false, repository: action.results };
      }
      if (action.fetchType === GithubDataType.orgs) {
        return { ...state, isLoading: false, organization: action.results };
      }
      return state;

    case ActionTypes.failure:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        repository: [],
        organization: [],
      };
    default:
      return state;
  }
}

export default reducer;
