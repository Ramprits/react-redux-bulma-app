const initialState = {
  loading: false
};
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "API_START":
      return Object.assign({}, state, {
        pendingRequests: state.pendingRequests + 1,
        loading: true
      });

    case "API_FINISH":
      return Object.assign({}, state, {
        pendingRequests: state.pendingRequests - 1,
        loading: false
      });

    case "API_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
export default uiReducer;
