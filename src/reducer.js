const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
};

const counterReducer = (state = initialState, { type }) =>
  type === "reset" ? initialState : { ...state, [type]: state[type] + 1 };

export default counterReducer;
