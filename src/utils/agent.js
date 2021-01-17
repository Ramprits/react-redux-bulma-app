import axios from "axios";
import store from "../store";

axios.interceptors.request.use((config) => {
  debugger;
  const token = store.getState();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
