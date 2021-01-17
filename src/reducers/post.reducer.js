const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_POST":
      return { ...state };

    case "LOAD_POST_SUCCESS":
      return { ...state, post: payload?.data };

    case "LOAD_POST_FAIL":
      return { ...state, ...payload };

    default:
      return state;
  }
};
