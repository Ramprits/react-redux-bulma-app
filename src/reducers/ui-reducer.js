const initialState = {
  loading: false
};
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "API_START":
      return Object.assign({}, state, {
        loading: true,
        error: "",
        timestamp: Date.now()
      });

    case "API_FINISH":
      return Object.assign({}, state, {
        loading: false,
        error: "",
        timestamp: Date.now()
      });

    case "API_ERROR":
      return { ...state, error: action.payload, timestamp: Date.now() };
    default:
      return state;
  }
};
export default uiReducer;
