import apiPokemon from "../../services/apiPokemon";

export async function getPokemons({ commit }) {
  try {
    commit("UPDATE_LOADING", true);
    const { data } = await apiPokemon.get("/pokemon");

    const newArray = [];
    const types = [];

    for (let i = 0; i < data.results.length; i++) {
      try {
        let index = i + 1;
        const { data } = await apiPokemon.get(`/pokemon/${index}`);

        newArray.push(data);

        data.types.forEach(({ type }) => {
          if (!types.includes(type.name.toLowerCase())) {
            types.push(type.name.toLowerCase());
          }
        });
      } catch (error) {
        console.log(error);
      }
    }

    commit("UPDATE_POKEMONS", newArray);
    commit("UPDATE_POKEMONS_TYPES", types);
  } catch (error) {
    console.log(error);
  } finally {
    commit("UPDATE_LOADING", false);
  }
}
