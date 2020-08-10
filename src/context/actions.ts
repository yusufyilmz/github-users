export enum ActionTypes {
  request,
  success,
  failure,
}

export interface GithubResponse {
  name: string;
}
export interface GithubRepositoryResponse extends GithubResponse {
  language: string;
  created_at: string;
  description: string;
  forks_count: number;
  full_name: string;
  id: number;
  name: string;
  open_issues_count: number;
  private: boolean;
  url: string;
  watchers_count: number;
}

export interface GithubOrganizationResponse extends GithubResponse {
  description: string;
  login: string;
  avatar_url: string;
  url: string;
  id: number;
}

export type Action =
  | { type: ActionTypes.request }
  | { type: ActionTypes.success; results: any; fetchType: string }
  | { type: ActionTypes.failure; error: string };

export function dataRequested(): Action {
  return {
    type: ActionTypes.request,
  };
}

export function fetchDataSuccess(data: any, type: string): Action {
  return {
    type: ActionTypes.success,
    results: data,
    fetchType: type,
  };
}

export function fetchDataError(error: string): Action {
  return {
    type: ActionTypes.failure,
    error,
  };
}
