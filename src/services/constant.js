export const BASE_URL = "https://api.rawg.io/api/genres";
//export const BASE_URL =
//"https://www.api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=IzlINuMW4G";

const KEY = process.env.SECRET_KEY;

export const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${KEY}`,
};
