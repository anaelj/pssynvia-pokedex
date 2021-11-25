import axios from "axios";

const api = axios.create({
  baseURL: "http://unpkg.com",
});

export const getPokemonList = async (): Promise<any[]> => {
  const res = await api.get("/pokemons@1.1.0/pokemons.json");
  return res.data.results;
};
