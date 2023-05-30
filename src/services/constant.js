//export const BASE_URL = " https://api.boardgameatlas.com/api/search";
export const BASE_URL = "https://www.api.boardgameatlas.com/api/search";

const KEY = process.env.SECRET_KEY;

export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${KEY}`,
};
