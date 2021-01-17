export const apiRequestStart = () => ({
  type: "API_START",
  timestamp: Date.now()
});

export const apiRequestFinish = () => ({
  type: "API_FINISH",
  timestamp: Date.now()
});

export const apiError = (payload) => ({
  type: "API_ERROR",
  payload
});
