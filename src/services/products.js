import { apiClient } from "./config"

export const apiGetProducts = () => {
  return apiClient.get("/items");
};

export const apiVendorsProduct= () => { 
  return apiClient.get("/users/me/items?limit=0");
};

export const apiSearchProducts = (filter) => { 
  return apiClient.get(`/category?filter=${filter}`);
};

export const filterProduct = (title) => { 
  return apiClient.get(`/items?filter={"title": "${title}"}`);
};