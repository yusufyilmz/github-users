import reducer from "./reducer";
import * as actions from "./actions";

const state = {
  isLoading: false,
  repository: [],
};
describe("Context - Reducer", () => {
  it("returns the initialState for request actions", () => {
    expect(reducer(state, actions.dataRequested())).toEqual({
      ...state,
      isLoading: true,
    });
  });
  it("should fetch data successffully", () => {
    const data = [{ id: 1, value: test }];
    expect(reducer(state, actions.fetchDataSuccess(data, "repos"))).toEqual({
      ...state,
      isLoading: false,
      repository: data,
    });
  });
  it("should get error successffully", () => {
    expect(reducer(state, actions.fetchDataError("error"))).toEqual({
      ...state,
      isLoading: false,
      error: "error",
      organization: [],
      repository: []
    });
  });
});
