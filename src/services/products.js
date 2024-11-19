import { apiClient } from "./config"

export const apiGetProducts = () => {
  return apiClient.get("/items");
};

export const apiVendorsProduct= () => { 
  return apiClient.get("/users/me/items?limit=0");
};