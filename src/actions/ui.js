import toast from "react-hot-toast";

export const apiRequestStart = () => ({
  type: "API_START",
  timestamp: Date.now()
});

export const apiRequestFinish = () => {
  return {
    type: "API_FINISH",
    timestamp: Date.now()
  };
};

export const apiError = (payload) => {
  toast.error(payload);
  return {
    type: "API_ERROR",
    payload
  };
};
