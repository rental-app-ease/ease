import { apiClient } from "./config"

export const apiGetProducts = () => {
  return apiClient.get("/adverts");
};

export const apiVendorsProduct= () => { 
  return apiClient.get("/users/me/adverts?limit=0");
};