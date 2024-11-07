import { apiClient } from "./config";

export const apiSignin = async (payload) => {
    return await apiClient.post("/users/login", payload);
  };

  export const apiSignup = async (payload) => {
    return await apiClient.post("/users/register", payload);
  };