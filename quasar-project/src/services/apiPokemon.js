import axios from "axios";

const apiPokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
  timeout: 1000,
});

export default apiPokemon;
