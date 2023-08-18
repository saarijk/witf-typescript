import { Food } from "@/types/Food";

export const DB_KEY = "fridgeDb";

export const getDatabase = (): Food[] => {
  console.log(DB_KEY);
  const databaseJson = localStorage.getItem(DB_KEY);
  console.log(databaseJson);
  return databaseJson ? JSON.parse(databaseJson) : [];
};

export const updateDatabase = (updatedDatabase: Food[]): void => {
  localStorage.setItem(DB_KEY, JSON.stringify(updatedDatabase));
};
