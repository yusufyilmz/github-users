import useOnDemandFetch from "./useOnDemandFetch";

const useFetch = (url: string, type: string, options?: RequestInit): void => {
  const [fetchFn] = useOnDemandFetch();

  fetchFn(url, type, options);
};

export default useFetch;
