import apiPokemon from "../../services/apiPokemon";

export async function getPokemons({ commit }) {
  try {
    const { data } = await apiPokemon.get("/pokemon");

    commit("UPDATE_POKEMONS", data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
}
