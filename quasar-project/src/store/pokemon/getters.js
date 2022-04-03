export function pokemonsGetter(state) {
  if (state.pokemonSelectedType && state.pokemonName) {
    return state.pokemons.filter(({ types, name }) => {
      const arrayTypes = types.map(({ type }) => type.name.toLowerCase());
      return arrayTypes.includes(state.pokemonSelectedType.toLowerCase()) &&
        name.toLowerCase().includes(state.pokemonName.toLowerCase())
        ? true
        : false;
    });
  }

  if (state.pokemonSelectedType) {
    return state.pokemons.filter(({ types }) => {
      const arrayTypes = types.map(({ type }) => type.name.toLowerCase());
      return arrayTypes.includes(state.pokemonSelectedType.toLowerCase())
        ? true
        : false;
    });
  }

  if (state.pokemonName) {
    return state.pokemons.filter(({ name }) =>
      name.toLowerCase().includes(state.pokemonName.toLowerCase())
    );
  } else {
    return state.pokemons;
  }
}
