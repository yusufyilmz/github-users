import { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import useFetch from "./useOnDemandFetch";
import { GithubDataType } from "../context/reducer";

const getGithubUrl = (username: string, key: GithubDataType): string =>
  `https://api.github.com/users/${username}/${key.toString()}`;

const useGithubFetch = (): any => {
  const [fetchRequested, setFetchRequested] = useState(false);
  const [onDemandFetch] = useFetch();
  const history = useHistory();

  const onDemandGithubFetch = useCallback((userName: string) => {
    Promise.all([
      onDemandFetch(
        getGithubUrl(userName, GithubDataType.orgs),
        GithubDataType.orgs,
        {}
      ),
      onDemandFetch(
        getGithubUrl(userName, GithubDataType.repos),
        GithubDataType.repos,
        {}
      ),
    ]).then(() => {
      setFetchRequested(true);
    });
  }, []);

  useEffect(() => {
    if (fetchRequested) {
      history.push("/repos");
    }
  }, [fetchRequested, history]);

  return [onDemandGithubFetch];
};

export default useGithubFetch;
