import { useCallback } from "react";
import { useGithubDataDispatchContext } from "../context";
import {
  dataRequested,
  fetchDataSuccess,
  fetchDataError,
} from "../context/actions";

type OnDemandFetch = (
  url: string,
  type: string,
  options?: RequestInit
) => Promise<void>;

const useOnDemandFetch = (): [OnDemandFetch] => {
  const { dispatch } = useGithubDataDispatchContext();

  const onDemandFetch = useCallback(
    (url: string, type: string, options?: RequestInit): Promise<void> => {
      const fetchData = async () => {
        try {
          dispatch(dataRequested());
          const res = await fetch(url, options);
          const json = await res.json();
          if (res.status !== 200) {
            dispatch(fetchDataError(json));
          } else {
            dispatch(fetchDataSuccess(json, type));
          }
        } catch (e) {
          dispatch(fetchDataError(e));
        }
      };
      fetchData();

      return Promise.resolve();
    },
    []
  );

  return [onDemandFetch];
};


export default useOnDemandFetch;
