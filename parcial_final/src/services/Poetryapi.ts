import { DataType } from "../types";

const BASE_URL = "https://poetrydb.org/";

export const getApiContent = async <T>(type: DataType) => {
  const response = await fetch(`${BASE_URL}${type}/20`);
  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }
  const data = await response.json();
  return data as T[];
};

//miaw miaw miaw miaw :(