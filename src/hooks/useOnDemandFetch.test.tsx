import { renderHook, act } from "@testing-library/react-hooks";
import { enableFetchMocks } from "jest-fetch-mock";
import useOnDemandFetch from "./useOnDemandFetch";
// import { useAsyncDataStateContext, useAsyncDataDispatchContext, setCache } from './context';

import { useGithubDataDispatchContext } from "../context";
import { dataRequested, ActionTypes } from "../context/actions";

enableFetchMocks();

jest.mock("../context");
jest.mock("");

const mockFetch = fetch as jest.Mock;
const mockuseAsyncDataDispatchContext = useGithubDataDispatchContext as jest.Mock;
const mockDispatch = jest.fn();

describe("useOnDemandFetch", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  beforeAll(() => {
    mockuseAsyncDataDispatchContext.mockReturnValue({
      dispatch: mockDispatch,
    });

    // fetchMock.mockIf(/^https?:\/\/api.github.com\/users.*$/, (req: any) => {
    //   if (req.url.endsWith("/orgs")) {
    //     return {
    //       body: [
    //         {
    //           login: "facebook",
    //           id: 69631,
    //           node_id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
    //           url: "https://api.github.com/orgs/facebook",
    //           repos_url: "https://api.github.com/orgs/facebook/repos",
    //           events_url: "https://api.github.com/orgs/facebook/events",
    //           hooks_url: "https://api.github.com/orgs/facebook/hooks",
    //           issues_url: "https://api.github.com/orgs/facebook/issues",
    //           members_url:
    //             "https://api.github.com/orgs/facebook/members{/member}",
    //           public_members_url:
    //             "https://api.github.com/orgs/facebook/public_members{/member}",
    //           avatar_url: "https://avatars3.githubusercontent.com/u/69631?v=4",
    //           description:
    //             "We are working to build community through open source technology. NB: members must have two-factor auth.",
    //         },
    //       ],
    //     };
    //   }
    //   if (req.url.endsWith("/path2")) {
    //     return {
    //       body: "another response body",
    //       headers: {
    //         "X-Some-Response-Header": "Some header value",
    //       },
    //     };
    //   }
    //   return {
    //     status: 404,
    //     body: "Not Found",
    //   };
    // });
  });

  test("without cache", async () => {
    // mockFetch.mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(mockResponse),
    // });
    // window.fetch = () => Promise.resolve(mockResponse);

    const { result } = renderHook(() => useOnDemandFetch());
    const fetchFn = result.current[0];

    await act(async () => {
      await fetchFn("https://api.github.com/users/repos", "orgs");
    });

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith({ type: ActionTypes.request });
  });

  test("without cache 2", async () => {
    const articles = "Some content";

    const mockResponse = {
      articles,
    };

    fetchMock.mockResponseOnce(JSON.stringify([mockResponse]));

    const { result } = renderHook(() => useOnDemandFetch());
    const fetchFn = result.current[0];

    await act(async () => {
      await fetchFn("test-url", "repos");
    });

    expect(mockDispatch).toHaveBeenCalled();
    // expect(mockDispatch).toHaveBeenCalledWith({ type: ActionTypes.request });
    // expect(mockDispatch).toHaveBeenCalledWith({
    //   type: ActionTypes.success,
    //   results: mockResponse,
    // });
  });
});
