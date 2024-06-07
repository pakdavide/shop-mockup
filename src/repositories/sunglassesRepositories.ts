import { Sunglasses } from "../types/sunglassesType";

export const fetchList = async (): Promise<Sunglasses[]> => {  // add params for pagination
  return fetch("https://assets.fc-dev.instore.oakley.com/assets/products/products.json", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error?.data;
    });
};
